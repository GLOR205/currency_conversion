// 🌍 Change this to your deployed Render backend URL
const API_BASE_URL = "https://currency-conversion-6686.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("amount");
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const resultDisplay = document.getElementById("result");
    const swapBtn = document.getElementById("swapBtn");
    const convertBtn = document.getElementById("convertBtn");

    // Fetch currency list from backend
    fetch(`${API_BASE_URL}/api/currencies`)
        .then(res => res.json())
        .then(data => {
            if (data && data.supported_codes) {
                data.supported_codes.forEach(([code, name]) => {
                    const optionFrom = document.createElement("option");
                    optionFrom.value = code;
                    optionFrom.textContent = `${code} - ${name}`;
                    fromCurrency.appendChild(optionFrom);

                    const optionTo = document.createElement("option");
                    optionTo.value = code;
                    optionTo.textContent = `${code} - ${name}`;
                    toCurrency.appendChild(optionTo);
                });

                // Default selections
                fromCurrency.value = "USD";
                toCurrency.value = "EUR";
            }
        })
        .catch(err => {
            console.error("Error fetching currencies:", err);
            resultDisplay.textContent = "⚠ Unable to load currency list.";
        });

    // Convert button click
    convertBtn.addEventListener("click", () => {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (!amount || amount <= 0) {
            resultDisplay.textContent = "⚠ Please enter a valid amount.";
            return;
        }

        fetch(`${API_BASE_URL}/api/convert`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount, from, to })
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.conversion_result !== undefined) {
                    resultDisplay.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
                } else {
                    resultDisplay.textContent = "⚠ Conversion failed.";
                }
            })
            .catch(err => {
                console.error("Error converting currency:", err);
                resultDisplay.textContent = "⚠ Conversion failed.";
            });
    });

    // Swap button click
    swapBtn.addEventListener("click", () => {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
    });
});

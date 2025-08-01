document.addEventListener("DOMContentLoaded", () => {
    const API_BASE_URL = "https://currency-conversion-6686.onrender.com"; // Render backend URL

    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const amount = document.getElementById("amount");
    const result = document.getElementById("result");
    const swapBtn = document.getElementById("swap");

    // Fetch currencies
    fetch(`${API_BASE_URL}/api/currencies`)
        .then(res => res.json())
        .then(data => {
            // Clear "Loading..." text
            fromCurrency.innerHTML = "";
            toCurrency.innerHTML = "";

            Object.keys(data).forEach(code => {
                const option1 = document.createElement("option");
                option1.value = code;
                option1.textContent = `${code} - ${data[code]}`;

                const option2 = option1.cloneNode(true);

                fromCurrency.appendChild(option1);
                toCurrency.appendChild(option2);
            });

            // Default selection
            fromCurrency.value = "USD";
            toCurrency.value = "EUR";
        });

    // Convert currency on changes
    amount.addEventListener("input", convertCurrency);
    fromCurrency.addEventListener("change", convertCurrency);
    toCurrency.addEventListener("change", convertCurrency);

    // Swap currencies
    swapBtn.addEventListener("click", () => {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
        convertCurrency();
    });

    function convertCurrency() {
        const amt = parseFloat(amount.value);
        if (isNaN(amt) || amt <= 0) return;

        fetch(`${API_BASE_URL}/api/convert`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount: amt,
                from: fromCurrency.value,
                to: toCurrency.value
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    result.textContent = `${amt} ${fromCurrency.value} = ${data.result} ${toCurrency.value}`;
                }
            });
    }
});

// ✅ Change this to your Render backend URL
const API_BASE_URL = "https://currency-conversion-6686.onrender.com";

document.addEventListener("DOMContentLoaded", async () => {
    const fromCurrency = document.getElementById("from-currency");
    const toCurrency = document.getElementById("to-currency");
    const amountInput = document.getElementById("amount");
    const resultDiv = document.getElementById("result");
    const swapBtn = document.getElementById("swap");

    // Load supported currencies
    try {
        const res = await fetch(`${API_BASE_URL}/api/currencies`);
        if (!res.ok) throw new Error(`Failed to load currencies: ${res.status}`);
        
        const currencies = await res.json();

        // Fill both dropdowns
        for (let code in currencies) {
            const option1 = document.createElement("option");
            option1.value = code;
            option1.textContent = `${code} - ${currencies[code]}`;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = code;
            option2.textContent = `${code} - ${currencies[code]}`;
            toCurrency.appendChild(option2);
        }

        // Default values
        fromCurrency.value = "USD";
        toCurrency.value = "EUR";

    } catch (err) {
        console.error(err);
        resultDiv.textContent = "❌ Failed to load currencies. Please try again later.";
    }

    // Convert function
    async function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = "Please enter a valid amount.";
            return;
        }

        try {
            const res = await fetch(`${API_BASE_URL}/api/convert`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount,
                    from: fromCurrency.value,
                    to: toCurrency.value
                })
            });

            if (!res.ok) throw new Error(`Conversion failed: ${res.status}`);

            const data = await res.json();
            resultDiv.textContent = `${amount} ${fromCurrency.value} = ${data.result} ${toCurrency.value}`;
        } catch (err) {
            console.error(err);
            resultDiv.textContent = "❌ Conversion failed. Please try again.";
        }
    }

    // Event listeners
    amountInput.addEventListener("input", () => {
        if (amountInput.value.trim() !== "") convertCurrency();
    });

    fromCurrency.addEventListener("change", convertCurrency);
    toCurrency.addEventListener("change", convertCurrency);

    // Swap currencies
    swapBtn.addEventListener("click", () => {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
        convertCurrency();
    });
});

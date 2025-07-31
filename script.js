const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const button = document.getElementById("convert");

const currencies = ["USD", "EUR", "GBP", "KES", "UGX", "TZS", "RWF"];

// Fill dropdowns
currencies.forEach(currency => {
  let option1 = document.createElement("option");
  option1.value = option1.textContent = currency;
  fromCurrency.appendChild(option1);

  let option2 = document.createElement("option");
  option2.value = option2.textContent = currency;
  toCurrency.appendChild(option2);
});

fromCurrency.value = "USD";
toCurrency.value = "RWF";

const apiKey = "c8eabe45795bd50a855fbf24";

const getExchangeRate = async () => {
  const base = fromCurrency.value;
  const target = toCurrency.value;
  const amt = amount.value;

  if (!amt || amt <= 0) {
    result.textContent = "⚠️ Please enter a valid amount.";
    return;
  }

  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.result !== "success") {
      result.textContent = "❌ Failed to get exchange rate.";
      return;
    }

    const rate = data.conversion_rates[target];
    const converted = (rate * amt).toFixed(2);

    result.textContent = `${amt} ${base} = ${converted} ${target}`;
  } catch (err) {
    result.textContent = "❌ Error fetching data.";
  }
};

button.addEventListener("click", getExchangeRate);
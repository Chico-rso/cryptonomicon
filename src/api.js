const API_KEY = "e25e7ecea7cad5e56abf8a869298c3fc99dddca767e2bd5746787d88027e8562";

// todo: refactor to use URLSearchParams
export function loadTickers(tickerName)
{
	const response = fetch(`https://min-api.cryptocompare.com/data/price?fsym=USD${tickerName}&tsyms=USD&api_key=${API_KEY}`)
	.then(response => response.json())
}


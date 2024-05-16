const exchangeRates = {
	IDR: 1, // 1 USD = 14000 IDR
	USD: 1, // 1 USD = 1 USD
	JPY: 1, // 1 USD = 110 JPY
	KRW: 1, // 1 USD = 1200 KRW
};

const currencyLocales = {
	IDR: "id-ID",
	USD: "en-US",
	JPY: "ja-JP",
	KRW: "ko-KR",
};

function convertCurrency(amount, targetCurrency) {
	if (!exchangeRates[targetCurrency]) {
		throw new Error(`Unsupported currency: ${targetCurrency}`);
	}

	const convertedAmount = amount * exchangeRates[targetCurrency];

	const locale = currencyLocales[targetCurrency];

	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: targetCurrency,
	}).format(convertedAmount);
}

module.exports = convertCurrency;

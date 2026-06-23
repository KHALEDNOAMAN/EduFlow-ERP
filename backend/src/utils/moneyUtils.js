const toKurus = (amount) => Math.round(parseFloat(amount) * 100);
const fromKurus = (kurus) => (parseInt(kurus) / 100).toFixed(2);
const formatCurrency = (amount, currency = 'TRY') => `${currency === 'TRY' ? 'â‚º' : '$'}${parseFloat(amount).toLocaleString('tr-TR', { minimumFractionDigits: 2 })}`;
module.exports = { toKurus, fromKurus, formatCurrency };

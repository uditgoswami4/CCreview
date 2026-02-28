const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema({
    cardNumber: { type: String, required: true },
    cardHolder: { type: String, required: true },
    expirationDate: { type: Date, required: true },
    securityCode: { type: String, required: true },
    billingAddress: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CreditCard', creditCardSchema);
// Credit Card Comparison Endpoints

const express = require('express');
const router = express.Router();

// Example data - In real scenarios, fetch this from a database
const creditCards = [
    { id: 1, name: 'Card A', benefits: ['cashback', 'travel miles'], fee: 99 },
    { id: 2, name: 'Card B', benefits: ['0% APR', 'no annual fee'], fee: 0 },
    { id: 3, name: 'Card C', benefits: ['reward points', 'travel insurance'], fee: 49 }
];

// Endpoint to compare credit cards
router.get('/compare', (req, res) => {
    res.json(creditCards);
});

module.exports = router;
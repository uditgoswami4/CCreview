const mongoose = require('mongoose');

// Define the Favorite schema
const favoriteSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    itemId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create the Favorite model
const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
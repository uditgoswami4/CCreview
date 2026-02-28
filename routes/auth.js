const express = require('express');
const router = express.Router();

// Example authentication route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Handle login logic here
    res.send('Login successful');
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Handle registration logic here
    res.send('Registration successful');
});

module.exports = router;
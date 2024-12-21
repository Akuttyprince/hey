const express = require('express');
const router = express.Router();

// Dummy login function for now
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Dummy authentication check
    if (username === 'admin' && password === 'password') {
        const token = "dummy-jwt-token"; // In real use, replace with actual JWT generation
        return res.status(200).json({ message: 'Login successful', token });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;

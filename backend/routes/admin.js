const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Route to create an admin
router.post('/add', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding admin', error });
  }
});

module.exports = router;

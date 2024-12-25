const express = require('express');
const router = express.Router();
const Staff = require('../models/Staff');

// Route to create an HOD
router.post('/add', async (req, res) => {
  const { name, email, password, department } = req.body;

  try {
    const newStaff = new Staff({ name, email, password, department });
    await newStaff.save();
    res.status(201).json({ message: 'staff added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding staff', error });
  }
});

module.exports = router;

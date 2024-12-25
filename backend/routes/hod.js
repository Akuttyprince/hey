const express = require('express');
const router = express.Router();
const HOD = require('../models/HOD');

// Route to create an HOD
router.post('/add', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newHOD = new HOD({ name, email, password });
    await newHOD.save();
    res.status(201).json({ message: 'HOD added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding HOD', error });
  }
});

module.exports = router;

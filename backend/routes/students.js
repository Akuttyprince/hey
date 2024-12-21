const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // If you have a Student model

// POST route to add a student
router.post('/addStudent', (req, res) => {
  const { name, rollNo, dob } = req.body;

  const newStudent = new Student({
    name,
    rollNo,
    dob,
  });

  newStudent.save()
    .then(() => res.status(200).send('Student added successfully'))
    .catch(err => res.status(400).send('Error: ' + err));
});

module.exports = router;

  

// POST route for staff to add students

app.post('/api/staff/addStudent', (req, res) => {
    const { studentName, rollNo, dob } = req.body;
  
    // Logic to save student details into the database
    const newStudent = new Student({ studentName, rollNo, dob });
    newStudent.save()
      .then(() => res.status(200).send('Student added successfully'))
      .catch(err => res.status(400).send('Error: ' + err));
  });
  
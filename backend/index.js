const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const hodRoutes = require('./routes/hod');
const studentRoutes = require('./routes/students');

// Initialize the Express app helo
const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

app.use('/api/HOD', authRoutes);
// MongoDB connection
mongoose.connect('mongodb+srv://yuva:Yuva%402006@yuva.jkx9v.mongodb.net/?retryWrites=true&w=majority&appName=YUVA')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Use routes

// Route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
  });
  
  // Route for /api/HOD
  app.get('/api/HOD', (req, res) => {
    res.send('HOD route is working!');
  });
  
  // Route for login (POST request)
  
  
  app.use(express.json());

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


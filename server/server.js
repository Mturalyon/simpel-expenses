const express = require('express');
const cors = require('cors'); // CORS Sharing between 3000 and 5000
const app = express(); 
const port = 5000; // Using localhost 5000 as port


app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

let data = []; // Setting empty array as default

// GET Request retrieving data through path /api/data
app.get('/api/data', (req, res) => {
  res.json(data); // Send back the stored data as JSON
});

// Post request adding data
app.post('/api/data', (req, res) => {
  const newData = req.body; // Get data from request body
  const newId =  Math.floor(Math.random() * 1e8) // Math random id with 8 digits
  const dataWithId = { ...newData, id: newId} // Adding id to our data by default
  data.push(dataWithId); // Pushing data with the added id
  res.status(201).json(dataWithId); // Send back added data as a response
});

// Server Start, command: node server.js
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
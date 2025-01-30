const express = require('express');
const cors = require('cors'); // For enabling Cross-Origin Resource Sharing
const app = express();
const port = 5000; // API will run on this port

// Use middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // To parse JSON request bodies

let data = [];

// API route to get data
app.get('/api/data', (req, res) => {
  res.json(data); // Send back the stored data as JSON
});

// API route to add data
app.post('/api/data', (req, res) => {
  const newData = req.body; // Get data from request body
  newData.id = data.length + 1;
  data.push(newData); // Store data (you can replace this with a real database)
  res.status(201).json(newData); // Send back the added data
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
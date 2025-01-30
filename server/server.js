const express = require('express');
const cors = require('cors'); // For enabling Cross-Origin Resource Sharing
const app = express();
const port = 5000; // API will run on this port

// Use middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // To parse JSON request bodies

// Sample API route
app.get('/api', (req, res) => {
  res.json({ message: 'Testing mc testesen' });
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
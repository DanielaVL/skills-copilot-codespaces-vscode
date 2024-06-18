// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments data
const comments = require('./comments.json');

// Set up the server to serve static files
app.use(express.static('public'));

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
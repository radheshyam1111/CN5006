const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
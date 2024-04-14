const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Health Check Endpoint
app.get('/healthcheck', (req, res) => {
  res.status(200).send('Server is healthy');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

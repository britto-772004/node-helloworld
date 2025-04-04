const express = require('express');
const app = express();
const port = 3006; // You can change the port if needed

// Display Hello World on the browser
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Hello World');
});

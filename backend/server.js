// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Use port 8080 for deployment

// This is the crucial part:
// It tells Express to serve any static files (HTML, CSS, JS) from the 'build' directory.
// This 'build' directory is created when you run 'npm run build' in your 'frontend' folder.
app.use(express.static(path.join(__dirname, 'build')));

// This is a "catchall" handler.
// For any request that doesn't match a static file, it sends back the main index.html file.
// This is necessary for a single-page application (SPA) like React to handle client-side routing.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
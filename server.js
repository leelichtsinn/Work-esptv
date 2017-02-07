const express = require('express');
const path = require('path');
const app = express();

// Use public folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Send any route to index.html where the app is mounted
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => console.log('App running on localhost:3000'));

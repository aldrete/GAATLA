// app.js
const express = require('express');
// const gameRoutes = require('./routes/gameRoutes');

const app = express();
const port = 3000;

// Use middleware to parse JSON requests
app.use(express.json());

// Use the game routes
// app.use('/api/game', gameRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

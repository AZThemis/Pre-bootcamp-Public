const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8999;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend's URL
}));
app.use(express.json());

// Database connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection error: ', err));

// Routes
const playerRoutes = require('./routes/player.routes');
app.use('/api/players', playerRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

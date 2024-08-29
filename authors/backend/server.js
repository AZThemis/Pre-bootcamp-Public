const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


const port = process.env.PORT || 8999

require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use routes
const authorRoutes = require('./routes/author.routes');
authorRoutes(app);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 8999; // Set to port 8999 as specified

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Database connection error: ", err));

// Import and use routes
const authorRoutes = require('./routes/author.routes');
authorRoutes(app);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

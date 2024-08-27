
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;

require('./config/mongoose.config');

// Update the CORS configuration
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this to match your frontend's URL
    credentials: true // This will allow cookies to be sent along with requests
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/person.routes')(app);
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

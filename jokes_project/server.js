
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/jokes.routes')(app);

const port = 9999;
app.listen(port, () => console.log(`Listening on port ${port}...`));

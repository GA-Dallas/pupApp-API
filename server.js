const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3000;

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());


app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});
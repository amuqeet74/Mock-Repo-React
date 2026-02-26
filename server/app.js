const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const router = require('./router');

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;

const express = require('express');
const sequelize = require('./sequelize');

const app = express();

const port = 3000;

app.listen(port, () => { console.log(`Running on http://localhost:${port}`)});
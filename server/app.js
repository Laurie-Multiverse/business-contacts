const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const {sequelize, Contact} = require('./db');
const seed = require('./seed');

seed();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/contacts', async (req, res, next) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch(error) {
    console.log(error);
    res.json(error);
  }
})

module.exports = app;

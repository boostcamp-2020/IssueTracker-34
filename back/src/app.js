const express = require('express');
const passport = require("passport");

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'

require('dotenv').config({ path: envFile });
require('./sequelizeModels/index');

const indexRouter = require('./routes/index');
const port = process.env.PORT || 3000;
const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

module.exports = app;

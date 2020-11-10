const express = require('express');
const passport = require('passport');
const cors = require('cors');

require('dotenv').config();
require('./sequelizeModels/index');

const indexRouter = require('./routes/index');
const port = process.env.PORT || 3000;
const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

module.exports = app;

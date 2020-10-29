const express = require('express');

require('dotenv').config();

const indexRouter = require('./routes/index');
const port = process.env.PORT || 3000; 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


app.listen(port, () => { console.log(`server is running on ${port}`); }); 

module.exports = app;

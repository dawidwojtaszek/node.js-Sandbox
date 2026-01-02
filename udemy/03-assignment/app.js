const express = require('express');
const port = 3000;
const homeRouter = require('./routes/home.js')
const usersRouter = require('./routes/user.js')
const app = express();

//app.use((req, res, next) => {
//  console.log('dddd')
//  res.end();
//})

app.use('/admin', usersRouter)
app.use('/', homeRouter)
app.listen(port);

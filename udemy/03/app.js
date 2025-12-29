const express = require('express');

const app = express();

//app.use((req, res, next) => {
//  console.log('middleware');
//  next();
//});
//app.use((req, res, next) => {
//  res.send('<h1>hello express</h1>')
//  console.log('second middleware')
//})

app.use('/users', (req, res, next) => {
  res.send('<h1>Users:</h1>')
})
app.use('/', (req, res, next) => {
  res.send('<h1>home</h1>')
})
app.listen(3000);


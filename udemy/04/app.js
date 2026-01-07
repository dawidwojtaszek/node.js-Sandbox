const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const rootPath = require('./utilities/path.js')
const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminData.routes);
app.use(shopRoutes)
app.use((req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', '404.html'))
})
app.listen(3000);


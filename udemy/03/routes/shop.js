const express = require('express')
const router = express.Router();
const rootPath = require('../utilities/path.js')
const path = require('path');

router.get('/', (req, res, next) => {
  //  res.send('<h1>home</h1>')
  res.sendFile(path.join(rootPath, 'views', 'shop.html'))
})
module.exports = router;

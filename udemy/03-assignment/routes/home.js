const express = require('express');
const rootPath = require('../utilities/path.js')
const path = require('path')
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', 'home.html'))
})

module.exports = router;

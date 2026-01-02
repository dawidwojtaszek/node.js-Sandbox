const express = require('express')
const router = express.Router();
const path = require('path');
const rootPath = require('../utilities/path.js')

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', 'users.html'))
})

module.exports = router;


const express = require('express')
const router = express.Router();
const path = require('path');
const rootPath = require('../utilities/path.js')

router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})
router.get('/add-product', (req, res, next) => {
  //  res.send('<form method="POST" action="/admin/add-product"><input type="text" name="product"/> <input type="submit" value="add" /> </form>')
  res.sendFile(path.join(rootPath, 'views', 'add-product.html'))
})

module.exports = router;

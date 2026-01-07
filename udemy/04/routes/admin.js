const express = require('express')
const router = express.Router();
const path = require('path');
const rootPath = require('../utilities/path.js')

const products = [];

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.product })
  console.log(products)
  res.redirect('/')
})
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', 'add-product.html'))
})

//module.exports = router;
exports.routes = router;
exports.products = products

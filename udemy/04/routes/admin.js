const express = require('express')
const router = express.Router();

const products = [];

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.product })
  res.redirect('/')
})
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { title: 'Add product' })
})

//module.exports = router;
exports.routes = router;
exports.products = products

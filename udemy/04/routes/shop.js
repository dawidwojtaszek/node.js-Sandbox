const express = require('express')
const router = express.Router();
const data = require('../routes/admin.js')
router.get('/', (req, res, next) => {
  //console.log(data.products)
  res.render('shop', { title: 'Shop', products: data.products })

})
module.exports = router;

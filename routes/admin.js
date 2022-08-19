let path = require('path');

let express = require('express');
let router = express.Router();

let productsControllers = require('../controllers/products');


router.get('/add-product', productsControllers.getAddProducts);
router.post('/add-product', productsControllers.postAddProducts);

module.exports = router;
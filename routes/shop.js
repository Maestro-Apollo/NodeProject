let path = require('path');

let express = require('express');
let router = express.Router();

let shopController = require('../controllers/products');

router.get('/', shopController.getShop);


module.exports = router;
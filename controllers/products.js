let Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', activePage: 'add-product' })
};

exports.postAddProducts = (req, res, next) => {
    let product = new Product(req.body.fname, req.body.lname);
    product.save();
    res.redirect('/');
};

exports.getShop = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', { prods: products, pageTitle: 'Shop', activePage: 'Shop' });
    })
};
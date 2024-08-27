
const { Product } = require('../models/product.model');

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => response.json(product))
    .catch(err => response.json(err));
};

module.exports.getAllProducts = (request, response) => {
    Product.find({})
    .then(products => response.json(products))
    .catch(err => response.json(err));
};

module.exports.getProductById = (request, response) => {
    Product.findById(request.params.id)
    .then(product => response.json(product))
    .catch(err => response.json(err));
};
module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err));
};

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json(err));
};
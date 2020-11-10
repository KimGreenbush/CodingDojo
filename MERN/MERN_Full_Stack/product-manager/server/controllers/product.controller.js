const Product = require("./server/model/product.model");

module.exports.index = (req, res) => {
    res.json({ message: "This is the Index page" });
}
module.exports.createProduct = (req, res) => {
    const { } = req.body;
    Product.create({})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    stockIn: [{ quantity: Number, date: { type: Date, default: Date.now } }],
    stockOut: [{ quantity: Number, date: { type: Date, default: Date.now } }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Mostrar todos los productos
router.get('/products', productController.showProducts);

// Mostrar formulario para agregar un nuevo producto
router.get('/products/add', productController.showAddProductForm);

// Agregar un nuevo producto
router.post('/products/add', productController.addProduct);

// Mostrar formulario para editar un producto
router.get('/products/:id/edit', productController.showEditProductForm);

// Editar un producto
router.post('/products/:id/edit', productController.editProduct);

// Eliminar un producto
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;

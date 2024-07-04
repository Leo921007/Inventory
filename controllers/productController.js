const Product = require('../models/Product');

// Mostrar todos los productos
exports.showProducts = async (req, res) => {
  try {
    const products = await Product.find().lean();
    res.render('home', { products });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los productos');
  }
};

// Mostrar formulario para agregar un nuevo producto
exports.showAddProductForm = (req, res) => {
  res.render('createProduct');
};

// Agregar un nuevo producto
exports.addProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    const newProduct = new Product({
      name,
      description,
      price,
      quantity
    });
    await newProduct.save();
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al agregar el producto');
  }
};

// Mostrar formulario para editar un producto
exports.showEditProductForm = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }
    res.render('editProduct', { product });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener el producto');
  }
};

// Editar un producto
exports.editProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, description, price, quantity } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, {
      name,
      description,
      price,
      quantity
    }, { new: true });
    if (!updatedProduct) {
      return res.status(404).send('Producto no encontrado');
    }
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar el producto');
  }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).send('Producto no encontrado');
    }
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al eliminar el producto');
  }
};

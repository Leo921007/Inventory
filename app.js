// app.js

const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const morgan = require('morgan');
const path = require('path');

const productRoutes = require('./routes/productRoutes');

const app = express();

const PORT = process.env.PORT || 3000;
app.set('port', PORT);
app.set('views', path.join(__dirname, 'views'));
app.engine('.handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.handlebars'
}));
app.set('view engine', '.handlebars');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.use(require('./routes/productRoutes'))

//Ruta de inicio
app.get('/', (req, res) => {
    res.render('index');
});

mongoose.connect('mongodb://127.0.0.1/inventory', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

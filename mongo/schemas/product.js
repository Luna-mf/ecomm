var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    slug: String,
    precoUnitario: Number,
    quantidadeEmEstoque: Number,
    categoria: String
});

mongoose.model('products', productSchema);
module.exports = mongoose.model('products');
var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    nome: String,
    status: String
});

mongoose.model('categories', categorySchema);
module.exports = mongoose.model('categories');
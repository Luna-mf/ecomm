use("ecomm");

const product = db.products.findOne({ nome: "Galaxy Tab S8" });

console.log("product has stock - ", product.quantidadeEmEstoque);

if (product.quantidadeEmEstoque >= 2) {
    db.products.updateOne({ _id: product._id }, { $inc: { quantidadeEmEstoque: -2 } });
} else {
    console.log("Produto não tem estoque o suficiente");
}

// Usando apenas um comando no mongoDB:
// var product = db.products.updateOne({nome:"Galaxy Tab S8", quantidadeEmEstoque: {$gte: 2}},
//                                    {$inc: {quantidadeEmEstoque: -2}});

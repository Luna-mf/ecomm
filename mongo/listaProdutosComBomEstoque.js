use("ecomm");
var products = db.products.find({"quantidadeEmEstoque":{$gte: 3}}, {nome: 1, quantidadeEmEstoque: 1});

console.log(products);
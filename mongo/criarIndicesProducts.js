use("ecomm");

console.log("Creating index");
db.products.createIndex({"categoria": 1});
db.products.createIndex({"quantidadeEmEstoque": 1});
console.log("Finished");
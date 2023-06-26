use("ecomm");
db.products.updateMany({ categoria: "LIVROS" }, { $set: { quantidadeEmEstoque: 0 } });
console.log("Finished");

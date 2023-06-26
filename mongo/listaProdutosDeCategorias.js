use("ecomm");
var products = db.products.find(
    {$or: 
    [
        {"categoria":"LIVROS"},
        {"categoria":"CELULARES"}
    ]});

console.log(products);
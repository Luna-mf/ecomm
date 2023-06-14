use("ecomm");
const products = db.products.find(
    {
        $and:
    [
        { precoUnitario: { $gte: 1000 } },
        { precoUnitario: { $lte: 2000 } },
    ],
    },
    {
        nome: 1,
        precoUnitario: 1,
    },
);

console.log(products);

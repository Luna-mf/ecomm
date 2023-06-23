use("ecomm");
const products = db.products.find(
    {
        $or:
    [
        { categoria: "LIVROS" },
        { categoria: "CELULARES" },
    ],
    },
);

console.log(products);

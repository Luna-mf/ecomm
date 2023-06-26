use("ecomm");

const data = db.orders.aggregate([
    {
        $match: { "account.nome": "Gwen Stacy" },
    },
    {
        $unwind: "$itens",
    },
    {
        $group: {
            _id: null,
            totalQuantity: { $sum: "$itens.quantidade" },
            totalValor: { $sum: { $multiply: ["$itens.precoUnitario", "$itens.quantidade"] } },
            desconto: { $sum: "$itens.desconto" },
            count: { $sum: 1 },
        },
    },
]).toArray();

console.log(`A conta teve um total de ${data[0].count} pedidos, comprou um total de ${
    data[0].totalQuantity} itens, que somados dão um total de ${data[0].totalValor
} reais, o total de desconto é igual a ${data[0].desconto}`);

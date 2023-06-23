db.orders.insertMany([{
    account: {
        account_id: new ObjectId("647e266d4f76cf22b74d20c7"),
        nome: "Bival",
    },
    dataPedido: new Date(),
    enderecoEntrega: {
        bairro: "B",
        rua: "R",
        numero: "1",
        cep: "88888888",
        cidade: "Terezinha",
        uf: "MG",
    },
    itens: [{
        productId: new ObjectId("6478f3c3dbabd0e8882a5fb8"),
        quantidade: 1,
        precoUnitario: 3523.00,
    }],
},
{
    account: {
        account_id: new ObjectId("647e26be4f76cf22b74d20cc"),
        nome: "Gwen Stacy",
    },
    dataPedido: new Date(),
    enderecoEntrega: {
        bairro: "T",
        rua: "FA",
        numero: "46",
        cep: "66666666",
        cidade: "São T",
        uf: "PR",
    },
    itens: [{
        productId: new ObjectId("6478f3c3dbabd0e8882a5fb8"),
        quantidade: 2,
        precoUnitario: 3523.00,
    }],
},
]);

// Inserção inválida
db.orders.insertMany([
    {
        account: {
            account_id: new ObjectId("647e26be4f76cf22b74d20cc"),
            nome: "Gwen Stacy",
        },
        dataPedido: new Date(),
        enderecoEntrega: {
            bairro: "T",
            rua: "FA",
            numero: "46",
            cep: "66666666",
            cidade: "São T",
            uf: "PR",
        },
        itens: [{
            productId: new ObjectId("6478f3c3dbabd0e8882a5fb8"),
            quantidade: -1,
            precoUnitario: 3523.01,
        }],
    },
]);

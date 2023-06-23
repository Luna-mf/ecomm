use("ecomm");

db.createCollection("orders", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "account",
                "dataPedido",
                "enderecoEntrega",
                "itens",
            ],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "objectId",
                },
                account: {
                    bsonType: "object",
                    required: [
                        "account_id",
                        "nome",
                    ],
                    additionalProperties: false,
                    properties: {
                        account_id: {
                            bsonType: "objectId",
                        },
                        nome: {
                            bsonType: "string",
                        },
                    },
                },
                dataPedido: {
                    bsonType: "date",
                },
                enderecoEntrega: {
                    bsonType: "object",
                    required: [
                        "bairro",
                        "rua",
                        "numero",
                        "cep",
                        "cidade",
                        "uf",
                    ],
                    additionalProperties: false,
                    properties: {
                        bairro: {
                            bsonType: "string",
                            minLength: 1,
                        },
                        rua: {
                            bsonType: "string",
                            minLength: 1,
                        },
                        numero: {
                            bsonType: "string",
                            minLength: 1,
                        },
                        complemento: {
                            bsonType: [
                                "string",
                                "null",
                            ],
                        },
                        cep: {
                            bsonType: "string",
                            minLength: 8,
                            maxLength: 8,
                        },
                        cidade: {
                            bsonType: "string",
                            minLength: 5,
                        },
                        uf: {
                            bsonType: "string",
                            minLength: 2,
                            maxLength: 2,
                        },
                    },
                },
                itens: {
                    bsonType: [
                        "array",
                    ],
                    minItems: 1,
                    uniqueItems: true,
                    additionalProperties: false,
                    items: {
                        bsonType: "object",
                        required: [
                            "productId",
                            "quantidade",
                            "precoUnitario",
                        ],
                        additionalProperties: false,
                        properties: {
                            productId: {
                                bsonType: "objectId",
                            },
                            quantidade: {
                                bsonType: "int",
                                minimum: 1,
                            },
                            precoUnitario: {
                                bsonType: "double",
                                minimum: 0,
                            },
                            desconto: {
                                bsonType: "double",
                                minimum: 0.01,
                            },
                        },
                    },
                },
            },
        },
    },
});

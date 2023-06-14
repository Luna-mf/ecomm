db.use("ecomm");

db.createCollection("accounts", {
    validator: {
        $jsonSchema:
        {
            bsonType: "object",
            required: [
                "_id",
                "nome",
                "email",
                "senha",
                "data_criacao",
                "cpf",
                "telefone",
                "endereco"],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "objectId",
                },
                nome: {
                    bsonType: "string",
                    minLength: 5,
                },
                email: {
                    bsonType: "string",
                    minLength: 5,
                },
                senha: {
                    bsonType: "string",
                    minLength: 5,
                },
                data_criacao: {
                    bsonType: "date",
                },
                cpf: {
                    bsonType: "string",
                    minLength: 11,
                    maxLength: 11,
                },
                telefone: {
                    bsonType: "string",
                    minLength: 10,
                },
                endereco: {
                    bsonType: "object",
                    required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
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
                            bsonType: ["string", "null"],
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
            },
        },
    },
});

/* db.createCollection("accounts",{
   validator:{
         $jsonSchema
                bsonType:"object",
                    required:["Numero_da_Conta", "Tipo", "CPF"],
                    properties:{
                       Numero_Conta:{
                             bsonType: "string",
                             description: "informe corretamente o numero da conta"
                         },
                         Tipo:{
                             bsonType: "string",
                             enum:["Conta corrente", "Conta poupança", "Conta salário"],
                              description: "informe corretamente o tipo da conta"
                         },
                         CPF:{
                             bsonType: "string",
                                 description: "informe corretamente o cpf do cliente na conta"
                         }
                    }
           }
     }

}); */

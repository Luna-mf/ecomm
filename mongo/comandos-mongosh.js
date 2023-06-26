//Comando para gerar um validation na collection de categories:
db.runCommand( { collMod: "categories",
     validator:{
          $jsonSchema: {
            bsonType: "object",
            required: [ "nome", "status"],
            properties: {
               nome: {
                  bsonType: "string",
                  description: "Nome da categoria"
               },
               status: {
                  enum: [ "ATIVA", "INATIVA"],
                  description: "Selecione entre ATIVA e INATIVA"
               }
            }
          },
          additionalProperties: false
      }
});


db.runCommand( { collMod: "categories",
     validator:{
         $jsonSchema: {
         bsonType: "object",
         "additionalProperties": false,
         required: ["nome", "status"],
         properties: {
            "nome": {
               bsonType: "string",
               description: "Nome da categoria"
            },
            "status": {
               enum: [ "ATIVA", "INATIVA"],
               description: "Selecione entre ATIVA e INATIVA"
            }
         }
      }
   }
})


/*
{
  $jsonSchema: {
    bsonType: 'object',
    additionalProperties: false,
    required: [
      '_id',
      'nome',
      'status'
    ],
    properties: {
      _id: {
        bsonType: 'objectId'
      },
      nome: {
        bsonType: 'string',
        description: 'Nome da categoria'
      },
      status: {
        'enum': [
          'ATIVA',
          'INATIVA'
        ],
        description: 'Selecione entre ATIVA e INATIVA'
      }
    }
  }
}

*/
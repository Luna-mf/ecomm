db.runCommand( { collMod: "accounts",
     validator:{
        $jsonSchema: {
          bsonType: 'object',
          required: [
            '_id',
            'nome',
            'email',
            'senha',
            'data_criacao',
            'cpf',
            'telefone',
            'endereco'
          ],
          additionalProperties: false,
          properties: {
            _id: {
              bsonType: 'objectId'
            },
            nome: {
              bsonType: 'string',
              minLength: 5
            },
            email: {
                bsonType: 'string',
                pattern: '^\\S+@\\S+\\.\\S+$',
                minLength: 5
              },
            senha: {
              bsonType: 'string',
              minLength: 5
            },
            data_criacao: {
              bsonType: 'date'
            },
            cpf: {
              bsonType: 'string',
              pattern: '^[0-9]+$',
              minLength: 11,
              maxLength: 11
            },
            telefone: {
              bsonType: 'string',
              pattern: '^[0-9]+$',
              minLength: 10
            },
            endereco: {
              bsonType: 'object',
              required: [
                'bairro',
                'rua',
                'numero',
                'cep',
                'cidade',
                'uf'
              ],
              properties: {
                bairro: {
                  bsonType: 'string',
                  minLength: 1
                },
                rua: {
                  bsonType: 'string',
                  minLength: 1
                },
                numero: {
                  bsonType: 'string',
                  pattern: '^(\\d+|S\\/N)$',
                  minLength: 1
                },
                complemento: {
                  bsonType: [
                    'string',
                    'null'
                  ]
                },
                cep: {
                  bsonType: 'string',
                  pattern: '^[0-9]+$',
                  minLength: 8,
                  maxLength: 8
                },
                cidade: {
                  bsonType: 'string',
                  minLength: 5
                },
                uf: {
                  bsonType: 'string',
                  pattern: '^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$',
                  minLength: 2,
                  maxLength: 2
                }
              }
            }
          }
        }
      }
});
//import IsProductCollectionWithData from '../mongo/mongo-connection.js'
var db = require('../mongo/db');
var mongo = require('../mongo/mongo-connection');

mongo.InsertProducts();
console.log('Iniciando ecomm');
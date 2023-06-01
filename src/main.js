//import IsProductCollectionWithData from '../mongo/mongo-connection.js'
var db = require('../mongo/db');
var mongo = require('../mongo/mongo-connection');

mongo.VerifyProductsCollection();
mongo.VerifyCategoriesCollection();
console.log('Iniciando ecomm');
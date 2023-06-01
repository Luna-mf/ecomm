var mongoose = require('mongoose');
var product = require('./schemas/product');
var category = require('./schemas/category');
var insereProducts = require('./insereProdutos');
var insereCategories = require('./insereCategorias');
 

async function PrintProducts(){
    var listProducts = await product.find({nome: /^/});
    console.log(JSON.stringify(listProducts));
}

async function VerifyProductsCollection()
{
    var data = await GetData({}, product);
    if(data.length == 0)
    {
        console.log("Necessário inserir dados de produto");
        insereProducts.AddProductsToMongo();
    }
    else
    {
        console.log("Dados de produto encontrados");
    }
}

async function VerifyCategoriesCollection()
{
    var data = await GetData({}, category);
    if(data.length == 0)
    {
        console.log("Necessário inserir dados de produtos");
        insereCategories.AddCategoriesToMongo();
    }
    else
    {
        console.log("Dados de categoria encontrados");
    }
}

async function GetData(filter, model)
{
    var data = await model.find(filter);
    return data;
}

module.exports = {PrintProducts, VerifyProductsCollection, VerifyCategoriesCollection};

/*async function IsProductCollectionWithData()
{
    console.log("inicio do programa");
    const dburl = 'mongodb://admin:secret@localhost:27017/ecomm';
    
    await mongoose.connect('mongodb://admin:secret@localhost:27017/ecomm', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await mongoose.connect(dburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: 'admin'
    }).then(() => {
        console.log("Conexão estabelecida com sucesso");
    }).catch((error) => {
        console.error('Erro ao conectar: ', error);
    });

    // let productSchema = new mongoose.Schema({
    //     nome: String,
    //     descricao: String,
    //     slug: String,
    //     precoUnitario: Number,
    //     quantidadeEmEstoque: Number,
    //     categoria: String
    // });

    //console.log("Esquema gerado - " + productSchema);
    
    //const products = await mongoose.model('products', productSchema);
    //console.log("Model gerado - " + products);

    // var produtoTest = new products({
    //     nome: "Produto de teste",
    //     descricao: "Lorem ipsum",
    //     categoria: "Teste",
    //     precoUnitario: 23.50,
    //     quantidadeEmEstoque: 2,
    //     slug: "home/"
    // });

    // await produtoTest.save();

    const docs = await products.find({nome: /^/});
    console.log(JSON.stringify(docs, null, 4));

    if(docs.length > 0)
    {
        return true;
    }

    return false;
}*/
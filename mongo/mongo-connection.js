var mongoose = require('mongoose');
var product = require('./schemas/product');
var insereProducts = require('./insereProdutos');
 

async function PrintProducts(){
    var listProducts = await product.find({nome: /^/});
    console.log(JSON.stringify(listProducts));
}

async function InsertProducts()
{
    var data = await GetData({}, product);
    if(data.length == 0)
    {
        console.log("Necessário inserir data");
        insereProducts.AddProductsToMongo();
    }
    else
    {
        console.log("Dados encontrados");
        insereProducts.AddProductsToMongo();
    }
}

async function InsertCategories()
{

}

async function GetData(filter, model)
{
    var data = await model.find(filter);
    return data;
}

module.exports = {PrintProducts, InsertProducts};

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
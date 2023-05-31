console.log("Olá mundo!");
//var arrayProducts = [];
const readline = require('readline');
const fs = require('fs');

async function readFileByLine(file)
{
    const fileStream = fs.createReadStream(file);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    
    var i = 1;
    var arrayProducts = [];
    for await (const line of rl) {
        
        if(i == 1){
            i++;
            continue;
        }
        
        var arrayLine = line.split(',');
        var product = {
            nome: arrayLine[0],
            descricao: arrayLine[1],
            slug: arrayLine[2],
            precoUnitario: parseFloat(arrayLine[3]),
            quantidadeEmEstoque: parseInt(arrayLine[4]),
            categoria: arrayLine[5]
        };
        //console.log(product);
        arrayProducts.push(product);

        //console.log(line);
    }
    return arrayProducts;
}


async function AddProductsToMongo()
{
    var lista = await readFileByLine("./ecomm-produtos.csv");
    //console.log(lista);

    use("ecomm");
    var insert = db.products.insertMany(lista);
}
AddProductsToMongo();




const readline = require('readline');
const fs = require('fs');
var mongoose = require('mongoose');
var category = require('./schemas/category');

async function readFileByLine(file)
{
    const fileStream = fs.createReadStream(file);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    
    var i = 1;
    var arrayCategories = [];
    for await (const line of rl) {
        
        if(i == 1){
            i++;
            continue;
        }
        
        var arrayLine = line.split(',');
        var category = {
            nome: arrayLine[0],
            status: arrayLine[1]
        };
        arrayCategories.push(category);
    }
    return arrayCategories;
}


async function AddCategoriesToMongo()
{
    var lista = await readFileByLine("./mongo/ecomm-categorias.csv");
    await category.insertMany(lista);
}

module.exports = {AddCategoriesToMongo};
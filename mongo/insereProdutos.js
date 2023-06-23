console.log("Olá mundo!");
const arrayProducts = [];
const readline = require("readline");
const fs = require("fs");

async function readFileByLine(file) {
    const fileStream = fs.createReadStream(file);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    let i = 1;
    // eslint-disable-next-line no-restricted-syntax
    for await (const line of rl) {
        if (i === 1) {
            i++;
            continue;
        }

        const arrayLine = line.split(",");
        const product = {
            nome: arrayLine[0],
            descricao: arrayLine[1],
            slug: arrayLine[2],
            precoUnitario: parseFloat(arrayLine[3]),
            quantidadeEmEstoque: parseInt(arrayLine[4], 10),
            categoria: arrayLine[5],
        };
        // console.log(product);
        arrayProducts.push(product);

        // console.log(line);
    }
    return arrayProducts;
}

async function AddProductsToMongo() {
    const lista = await readFileByLine("./ecomm-produtos.csv");
    // console.log(lista);

    use("ecomm");
    const insert = db.products.insertMany(lista);
    console.log(insert);
}
AddProductsToMongo();

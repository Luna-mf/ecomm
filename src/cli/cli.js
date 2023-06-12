import CategoryService from "./CategoryService.js";

const args = process.argv;

async function processarComando(argumentos){
    //utilizar switch / case
    /*Exemplo:
            const expr = 'Papayas';
        switch (expr) {
        case 'Oranges':
            console.log('Oranges are $0.59 a pound.');
            break;
        case 'Mangoes':
        case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            // Expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
        }
    */
    switch (argumentos[2]) {
        case '--listarCategorias':
            await CategoryService.findCategories();
            break;
        case '--recuperarCategoriaPorId':
            let idCategory = argumentos[3];
            await CategoryService.findCategoryById(idCategory);
            break;
        case '--algumaCoisa2':
            console.log('Oranges are $0.59 a pound.');
            break;
        default:
            console.log(`Sorry, we are out of ${argumentos[2]}.`);
        }
}

processarComando(args);
import CategoryService from "./CategoryService.js";

const args = process.argv;

async function processarComando(argumentos) {
    // utilizar switch / case
    /* Exemplo:
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
    case "--listarCategorias":
        await CategoryService.findCategories();
        break;
    case "--recuperarCategoriaPorId": {
        const idCategory = argumentos[3];
        await CategoryService.findCategoryById(idCategory);
        break;
    }
    case "--inserirCategoria": {
        const fileName = argumentos[3];
        const file = await CategoryService.readJsonAsync(fileName);
        CategoryService.createCategory(file);
        break;
    }
    case "--atualizarCategoria": {
        const categoryId = argumentos[3];
        const fileCategoryToUpdate = argumentos[4];
        const categoryToUpdate = await CategoryService.readJsonAsync(fileCategoryToUpdate);
        CategoryService.updateCategory(categoryToUpdate, categoryId);
        break;
    }
    case "--excluirCategoria": {
        const categoryIdToDelete = argumentos[3];
        CategoryService.deleteCategory(categoryIdToDelete);
        break;
    }
    default:
        console.log(`Sorry, we are out of ${argumentos[2]}.`);
    }
}

processarComando(args);

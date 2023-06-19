import CategoryService from "./CategoryService.js";

const args = process.argv;

async function processarComando(argumentos) {
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

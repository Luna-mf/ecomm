export default class CategoryService{

    static async findCategories(){
        let response = await fetch("http://localhost:3000/categories");
        await processResponse(response);
        // const jsonData = await response.json();
        // console.log('response status: ', response.status);
        // console.log(jsonData);
    }

    static async findCategoryById(idCategory){
        let response = await fetch(`http://localhost:3000/categories/${idCategory}`);
        await processResponse(response);
        // const jsonData = await response.json();
        // console.log('response status: ', response.status);
        // console.log(jsonData);
    }
}

async function processResponse(response){
        if(response.status == 200){
            const jsonData = await response.json();
            console.log('response status: ', response.status);
            console.log(jsonData);
        }
        else if(response.status == 404){
            console.log("Erro 404, valor ou url incorreta, verifique a chamada e tente novamente!");
        }
        else{
            console.log("Erro indefinido, verifique a chamada e tente novamente!");
        }
}
import fs from 'fs';

const host = 'http://localhost:3000';


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

    /*
    ler e salvar dados em um arquivo:
    static async createCategory(categoryToCreate){
        const encoding = 'utf-8';
        const path = './src/cli/db.json';
        let texto = await fs.promises.readFile(path, encoding);
        let listCategories = JSON.parse(texto);

        //console.log(listCategories);

        const ids = listCategories.categories.map((item) => item.id);
        //console.log(ids);
        var max = ids.reduce(function(a, b) {
            return Math.max(a, b);
          }, -Infinity);

        // const maxId = listCategories.reduce(function(prev, current) { 
        //     return prev.id > current.id ? prev : current; 
        // });

        categoryToCreate.id = max+1;

        listCategories.categories.push(categoryToCreate);

        texto = JSON.stringify(listCategories);
        //console.log(texto);
        fs.writeFile(path, texto, err => {
            if (err) {
              console.error("Erro aqui!", err);
            }
          });
          console.log("response status: 201")
          console.log(categoryToCreate);
    }*/

    static async createCategory(categoryToCreate){
        //console.log(categoryToCreate);
        //var form = new FormData(categoryToCreate);
        const response = await fetch(`${host}/categories`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(categoryToCreate)
        });
        await processResponse(response);
    }

    static async updateCategory(categoryToUpdate, id){
        //var form = new FormData(categoryToCreate);
        const response = await fetch(`${host}/categories/${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(categoryToUpdate)
        });
        
        await processResponse(response);
    }

    static async deleteCategory(id){
        //var form = new FormData(categoryToCreate);
        const response = await fetch(`${host}/categories/${id}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        await processResponse(response);
    }

    static async readJsonAsync(path){
        try {
            const encoding = 'utf-8';
            const texto = await fs.promises.readFile(path, encoding);
            let jsonObject = JSON.parse(texto);
            return jsonObject;
        } catch (erro)
        {
            console.log("Deu erro aqui!")
        }
    }
}

async function processResponse(response){
        if(response.status == 200 || response.status == 201){
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


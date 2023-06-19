import categories from "../models/Category.js";

function ValidateCategory(body) {
    if (body.nome == null || body.nome.length < 3) {
        throw new Error("Invalid argument: nome");
    }
}

class CategoryController {
    static listarCategorias = async (req, res) => {
        const categoriesFinded = await categories.find();
        res.status(200).json(categoriesFinded);
    };

    static cadastrarCategoria = async (req, res) => {
        try {
            ValidateCategory(req.body);
        } catch (error) {
            res.status(400).send({ errorMessage: error.message });
            return;
        }

        const livro = new categories(req.body);

        await livro.save();
        res.status(201).send(livro.toJSON());
    };

    static listarPorId = async (req, res) => {
        const id = req.params.id;
        const categorieFinded = await categories.find({ _id: id });
        res.status(200).json(categorieFinded);
    };
}

export default CategoryController;

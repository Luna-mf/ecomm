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
        /* livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        }); */
    };

    /* static listarLivroPorId = (req, res) => {
        const { id } = req.params;

        livros.findById(id)
            .populate("autor", "nome")
            .exec((err, livros) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} -
                     Id do livro não localizado.` });
                } else {
                    res.status(200).send(livros);
                }
            });
    };

    static cadastrarLivro = (req, res) => {
        const livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    };

    static atualizarLivro = (req, res) => {
        const { id } = req.params;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro atualizado com sucesso" });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static excluirLivro = (req, res) => {
        const { id } = req.params;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro removido com sucesso" });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static listarLivroPorEditora = (req, res) => {
        const { editora } = req.query;

        livros.find({ editora }, {}, (err, livros) => {
            res.status(200).send(livros);
        });
    }; */
}
export default CategoryController;

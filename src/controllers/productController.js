import mongoose from "mongoose";
import products from "../models/Product.js";
import category from "../models/Category.js";

async function IsValidCategoryId(idCategory) {
    const categoryFunded = await category.find({ _id: idCategory });
    return !(categoryFunded == null || categoryFunded.length === 0);
}

async function ValidateProduct(body) {
    if (body.nome == null || body.nome.length < 3) {
        throw new Error("Invalid argument: nome");
    }
    if (body.precoUnitario <= 0) {
        throw new Error("Invalid argument: preço unitário deve ser maior que zero");
    }
    if (body.quantidadeEmEstoque <= 0 || body.quantidadeEmEstoque >= 10000) {
        throw new Error("Invalid argument: quanitdade em estoque deve estar entre 1 e 9999");
    }

    const id = new mongoose.Types.ObjectId(body.categoria.id);
    const isValidCategory = await IsValidCategoryId(id);

    if (!isValidCategory) {
        throw new Error("Invalid argument: Id da categoria não encontrado");
    }

    /*
    Validações que ainda precisam ser feitas:
        - Nome do produto
        - slug
    */
}

class ProductController {
    static listProducts = async (req, res) => {
        const productsFinded = await products.find();
        res.status(200).json(productsFinded).end();
    };

    static createProduct = async (req, res) => {
        try {
            await ValidateProduct(req.body);
        } catch (error) {
            res.status(400).send({ errorMessage: error.message }).end();
            return;
        }

        const product = new products(req.body);

        await product.save();
        res.status(201).send(product.toJSON()).end();
    };

    static listById = async (req, res) => {
        const id = req.params.id;
        const productFinded = await products.find({ _id: id });
        res.status(200).json(productFinded).end();
    };

    static updateById = async (req, res) => {
        const id = req.params.id;
        await products.updateOne({ _id: id }, body);
        res.status(204).end();
    };

    static deleteById = async (req, res) => {
        const id = req.params.id;
        await products.deleteOne({ _id: id });
        res.status(204).end();
    };
}

export default ProductController;

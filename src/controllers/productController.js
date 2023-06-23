import mongoose from "mongoose";
import products from "../models/Product.js";
import category from "../models/Category.js";

async function IsValidCategoryId(idCategory) {
    const categoryFunded = await category.find({ _id: idCategory });
    return !(categoryFunded == null || categoryFunded.length === 0);
}

function validateWithRegex(expression, text) {
    const capturas = [...text.matchAll(expression)];
    return (capturas != null && capturas.length > 0);
}

async function ValidateProduct(body) {
    const id = new mongoose.Types.ObjectId(body.categoria.id);
    const isValidCategory = await IsValidCategoryId(id);

    if (!isValidCategory) {
        throw new Error("Invalid argument: Id da categoria não encontrado");
    } else if (body.nome == null || body.nome.length < 3) {
        throw new Error("Invalid argument: nome");
    } else if (body.precoUnitario <= 0) {
        throw new Error("Invalid argument: preço unitário deve ser maior que zero");
    } else if (body.quantidadeEmEstoque <= 0 || body.quantidadeEmEstoque >= 10000) {
        throw new Error("Invalid argument: quanitdade em estoque deve estar entre 1 e 9999");
    } else if (!validateWithRegex(/^[^0-9]/gm, body.nome)) {
        throw new Error("Invalid argument: nome inválido, o nome não pode começar com um número!");
    } else if (!validateWithRegex(/^[A-Za-z0-9- ]+$/gm, body.slug)) {
        throw new Error("Invalid argument: slug só pode conter letras maiúsculas e minúsculas,"
        + "números e hífens");
    }
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
        try {
            const productFinded = await products.find({ _id: id });
            res.status(200).json(productFinded).end();
        } catch (error) {
            res.status(400).send({ errorMessage: error.message }).end();
        }
    };

    static updateById = async (req, res) => {
        const id = req.params.id;

        try {
            await products.updateOne({ _id: id }, req.body);
            res.status(204).end();
        } catch (error) {
            res.status(400).send({ errorMessage: error.message }).end();
        }
    };

    static deleteById = async (req, res) => {
        const id = req.params.id;

        try {
            await products.deleteOne({ _id: id });
            res.status(204).end();
        } catch (error) {
            res.status(400).send({ errorMessage: error.message }).end();
        }
    };
}

export default ProductController;

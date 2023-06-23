import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        descricao: { type: String },
        slug: { type: String },
        precoUnitario: { type: Number },
        quantidadeEmEstoque: { type: Number },
        categoria: {
            id: String,
        },
    },
    {
        versionKey: false,
    },
);

const products = mongoose.model("products", productSchema);

export default products;

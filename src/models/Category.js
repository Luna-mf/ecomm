import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        nome: { type: String, required: true },
        status: { type: String },
    },
    {
        versionKey: false,
    },
);

const categories = mongoose.model("categories", categorySchema);

export default categories;

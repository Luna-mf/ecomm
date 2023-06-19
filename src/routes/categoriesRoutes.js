import express from "express";
import LivroController from "../controllers/categoriesController.js";

const base = "/api";

const router = express.Router();

router
    .get(`${base}/categories`, LivroController.listarCategorias)
    .post(`${base}/categories`, LivroController.cadastrarCategoria);

export default router;

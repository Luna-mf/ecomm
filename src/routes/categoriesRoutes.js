import express from "express";
import CategoryController from "../controllers/categoriesController.js";

const base = "/api";

const router = express.Router();

router
    .get(`${base}/categories`, CategoryController.listarCategorias)
    .get(`${base}/categories/:id`, CategoryController.listarPorId)
    .post(`${base}/categories`, CategoryController.cadastrarCategoria);

export default router;

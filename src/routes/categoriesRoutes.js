import express from "express";
import CategoryController from "../controllers/categoriesController.js";

const base = "/api";

const router = express.Router();

router
    .get(`${base}/categories`, CategoryController.listarCategorias)
    .get(`${base}/categories/:id`, CategoryController.listarPorId)
    .put(`${base}/admin/categories/active/:id`, CategoryController.activeCategoryById)
    .put(`${base}/admin/categories/:id`, CategoryController.updateById)
    .delete(`${base}/admin/categories/:id`, CategoryController.deleteById)
    .post(`${base}/admin/categories`, CategoryController.cadastrarCategoria);

export default router;

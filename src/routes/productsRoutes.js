import express from "express";
import ProductController from "../controllers/productController.js";

const base = "/api";

const router = express.Router();

router
    .get(`${base}/products`, ProductController.listProducts)
    .get(`${base}/products/:id`, ProductController.listById)
    .put(`${base}/admin/products/:id`, ProductController.updateById)
    .delete(`${base}/admin/products/:id`, ProductController.deleteById)
    .post(`${base}/admin/products`, ProductController.createProduct);

export default router;

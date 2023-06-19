import express from "express";
import categories from "./categoriesRoutes.js";
// import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "Sprint 4" });
    });

    app.use(
        express.json(),
        categories,
    );
};

export default routes;

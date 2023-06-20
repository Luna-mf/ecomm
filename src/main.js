import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

console.log("Iniciando ecomm");

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});

console.log("Após conexão com o mongo");

const app = express();
app.use(express.json());
routes(app);

export default app;

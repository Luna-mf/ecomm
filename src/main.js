import express from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import YAML from "yaml";
import routes from "./routes/index.js";
import db from "./config/dbConnect.js";

console.log("Iniciando ecomm");

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});

console.log("Após conexão com o mongo");

const app = express();
app.use(express.json());

const file = fs.readFileSync("./swagger/ecomm.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes(app);

export default app;

import mongoose from "mongoose";
import request from "supertest";
import {
    describe, expect, it, jest,
} from "@jest/globals";
import app from "../../main.js";

let server;
beforeEach(() => {
    const port = 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

afterAll((done) => {
    server.close();
    done();
});

describe("GET em /api/categories/", () => {
    it("Deve retornar uma lista de categorias", async () => {
        const resposta = await request(app)
            .get("/api/categories/")
            .set("Accept", "application/json")
            .expect("content-type", /json/)
            .expect(200);

        // expect(resposta.body[0].nome).toEqual("teste");
    });
});

let idResposta;

describe("POST em /api/admin/categories", () => {
    it("Deve adicionar uma nova categoria", async () => {
        const resposta = await request(app)
            .post("/api/admin/categories")
            .send({
                nome: "TESTE2",
                status: "ATIVA",
            })
            .expect(201)
            .timeout(10000);
        idResposta = resposta.body._id;
    });
    it.skip("Deve nao adicionar nada ao passar o body vazio", async () => {
        await request(app)
            .post("/editoras")
            .send({})
            .expect(400);
    });
});

describe("GET em /api/categories/id", () => {
    it("Deve retornar recurso selecionado", async () => {
        await request(app)
            .get(`/api/categories/${idResposta}`)
            .expect(200);
    });
});

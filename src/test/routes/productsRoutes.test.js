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

describe("GET em /api/products/", () => {
    it("Deve retornar uma lista de categorias", async () => {
        const resposta = await request(app)
            .get("/api/products/")
            .set("Accept", "application/json")
            .expect("content-type", /json/)
            .expect(200);

        // expect(resposta.status).toEqual(200);
    });
});

let idResposta;

describe("POST em /api/admin/products/", () => {
    it("Deve adicionar uma nova categoria", async () => {
        const resposta = await request(app)
            .post("/api/admin/products/")
            .send({
                nome: "TesteIntegração",
                descricao: "Teste",
                slug: "teste-int",
                precoUnitario: 5.5,
                quantidadeEmEstoque: 500,
                categoria: {
                    id: "6491bb95dd592112fff2f9e7",
                },
            })
            .expect(201);
        idResposta = resposta.body._id;
    });
    it.skip("Deve nao adicionar nada ao passar o body vazio", async () => {
        await request(app)
            .post("/editoras")
            .send({})
            .expect(400);
    });
});

describe("GET em /api/products/id", () => {
    it("Deve retornar recurso selecionado", async () => {
        await request(app)
            .get(`/api/products/${idResposta}`)
            .expect(200);
    });
});

describe("PUT em /api/admin/products/update/id", () => {
    it("Deve retornar recurso selecionado", async () => {
        await request(app)
            .put(`/api/admin/products/${idResposta}`)
            .send({
                nome: "TesteIntegração-put",
                descricao: "Teste-put",
                slug: "teste-int",
                precoUnitario: 5.5,
                quantidadeEmEstoque: 500,
                categoria: {
                    id: "6491bb95dd592112fff2f9e7",
                },
            })
            .expect(204);
    });
});

describe("DeLETE em /api/admin/products/remove/id", () => {
    it("Deve retornar recurso selecionado", async () => {
        await request(app)
            .del(`/api/admin/products/${idResposta}`)
            .expect(204);
    });
});

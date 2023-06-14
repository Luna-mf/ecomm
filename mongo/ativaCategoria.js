use("ecomm");
const update = db.categories.updateOne({ nome: "ESPORTE" }, { $set: { status: "ATIVA" } });
console.log(update);

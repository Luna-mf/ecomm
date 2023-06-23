import mongoose from "mongoose";

// const debug = 'localhost';
// const prod = "mongo-ecomm";

console.log("aqui");
mongoose.connect(`mongodb://admin:secret@${process.env.MONGO_HOST || "localhost"}:27017/ecomm?authSource=admin`);

const db = mongoose.connection;

export default db;

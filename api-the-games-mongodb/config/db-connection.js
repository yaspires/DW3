// Importando o mongoose
import mongoose from "mongoose";

// Usuario e senha do banco de dados
const dbUser = "yasmin11pb";
const dbPassword = "ExFu8ibo0PMnho46";
const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@db-yas.3ht2y.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=db-yas`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};

connect();
export default mongoose;

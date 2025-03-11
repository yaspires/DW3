import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// função para listar os jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// função para cadastrar jogos
const createGame = async (req, res) => {
  try {
    const { title, platform, year, price } = req.body;
    await gameService.Create(title, platform, year, price);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// função para deletar jogos
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204);
    }else{
      res.sendStatus(400)
    }
  } catch {
    console.log(error);
    res.status(500).json({ eeror: "Erro interno do servidor" });
  }
};

export default { getAllGames, createGame, deleteGame };

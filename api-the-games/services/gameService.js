import Game from "../models/Games.js";

class gameService {
  // Game.find().then(games => {
  // //sucesso
  // }).catch(error => {
  // // falha
  // })

  // async / await
  // função para criar os jogos
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  // função criar jogos
  async Create(title, platform, year, price) {
    try {
      const newGame = new Game({
        title,
        platform,
        year,
        price,
      });
      // metodo do mongoose para cadastrar
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  // função para deletar jogos
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluido.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();

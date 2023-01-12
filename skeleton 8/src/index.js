// testing git repo

const View = require('./ttt-view.js') // require appropriate file
const Game = require('../ttt_node/game.js') // require appropriate file
const Board = require('../ttt_node/board.js')
document.addEventListener("DOMContentLoaded", () => {
  const game = new Game()
  console.log(game)

  const el = document.querySelector(".ttt")
  console.log(el);
  const view = new View(game, el);
});

window.Board = Board

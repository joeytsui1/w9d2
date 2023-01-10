class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard()
  }

  setupBoard() {
    let ul = document.createElement('ul')
    let grid = []
    for (let i = 0; i < 3; i++) {
      grid.push([]);
      for (let j = 0; j < 3; j++) {
        grid[i].push(null);
        ul.innerText = grid[i][j]
      }
      this.el.appendChild(ul)
    }
  

  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;

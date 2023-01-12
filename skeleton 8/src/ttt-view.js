class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard()
  }

  setupBoard() {
    let ul = document.createElement('ul')
    for (let i = 0; i < 3; i++) {
      let li = document.createElement('li')
      ul.appendChild(li)
    }
    // this.el.appendChild(ul)
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;

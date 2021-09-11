import DrawActions from './drawActions.js'

class Main extends DrawActions {
  constructor() {
    super()
  }

  init(config) {
    const root = document.getElementById(config.root.elem)
    root.appendChild(this.drawField(config.root.width, config.root.height))
  }
}

export default Main

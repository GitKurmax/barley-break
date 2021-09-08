import drawActions from "./drawActions.js"

class Main  extends drawActions{
    constructor(){
        super()
    }

    init(config){
        const root = document.getElementById(config.root.elem)
        root.appendChild(
            this.drawField(
                config.root.width, 
                config.root.height))
    }
}

export default Main
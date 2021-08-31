class Main {
    constructor(){}

    init(){
        document.body.appendChild(this.drawField())
    }

    drawField() {
        const field = document.createElement('div')

        field.style.width = '800px'
        field.style.height = '800px'
        field.style.border = '1px solid black'
        field.style.display = 'flex'
        field.style.flexWrap = 'wrap' 

        this.drawItems(field)
        
        return field
    }

    drawItems(root) {
        for( let i = 1; i < 16; i++){
            const item = document.createElement('div')

            item.style.width = '200px'
            item.style.height = '200px'
            item.style.boxSizing = 'border-box'
            item.style.border = '1px solid black'
            item.style.display = 'flex'
            item.style.justifyContent = 'center'
            item.style.alignItems = 'center'
            item.style.fontSize = '300%'
            item.innerText = i
            root.appendChild(item)
        }
    }
}

export default Main
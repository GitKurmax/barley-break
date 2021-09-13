import ItemActions from './itemActions.js'

class Item extends ItemActions {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
    
  }
  create(item, itemsObj) {
    const domElem = document.createElement('div')
    domElem.classList.add('item')

    domElem.style.width = this.width + 'px'
    domElem.style.height = this.height + 'px'

    if (!isNaN(item._number)) {
      domElem.innerText = item._number
    } else {
      domElem.classList.add('empty')
    }

    if(this._isNaighbor) this.addCickAction(domElem)
    if(this._number === 'empty') this.addCickToEmpty(domElem, itemsObj)
    return domElem
  }

  _generateMatrixPosition(index) {
    if(index < 16) {
      this._matrixPosition = {x: index - 11, y: 4 }
    } 
    if(index < 12) {
      this._matrixPosition = {x:  index - 7, y: 3}
    }
    if(index < 8) {   
      this._matrixPosition = {x: index - 3, y: 2 }
    }
    if(index < 4) {
      this._matrixPosition = {x: index + 1 , y: 1}
    }
  }

  _addNumber(number) {
    this._number = number
  }
}

export default Item

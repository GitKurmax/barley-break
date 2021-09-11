import ItemActions from './itemActions.js'

class Item extends ItemActions {
  constructor() {
    super()
    
  }
  create(width, height, number, numbers) {
    const item = document.createElement('div')
    item.classList.add('item')

    item.style.width = width + 'px'
    item.style.height = height + 'px'

    if (!isNaN(number._number)) {
      item.innerText = number._number
    } else {
      item.classList.add('empty')
    }

    if(this._isNaighbor) this.addCickAction(item)
    if(this._number === 'empty') this.addCickToEmpty(item, numbers)
    return item
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

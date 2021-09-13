import Item from './item.js'
import EmptyItem from './emptyItem.js'

class DrawActions {
  _numbersSet = new Set()
  _numbers
  _emptyItem

  drawField(width, height) {
    const field = document.createElement('div')
    field.classList.add('field')
    field.style.width = width + 'px'
    field.style.height = height + 'px'

    this._generateRandomNumber()
    this._generateItems(width / 4, height / 4)
    this._drawItems(field)

    return field
  }

  _drawItems(root, width, height) {
    root.innerHTML = ''
    this._emptyItem.findNeigbors(this._numbers)
    this._numbers.forEach((item, index) => {
      const domElem = item.create(item, this)
      root.appendChild(domElem)
    })
  }

  _generateRandomNumber() {
    while (this._numbersSet.size < 15) {
      const randomNumber = Math.floor(Math.random() * 15) + 1
      this._numbersSet.add(randomNumber)
    }
  }

  _generateItems(width, height) {
    const itemsArr = [...this._numbersSet, 'empty']
    this._emptyItem = new EmptyItem(width, height)
    const itemObjArr = itemsArr.map((number, index) => {
      const elem = isNaN(number) ?  this._emptyItem : new Item(width, height)

      elem._generateMatrixPosition(index)
      elem._addNumber(number)
      return elem
    })

    this._numbers = itemObjArr
  }
}

export default DrawActions

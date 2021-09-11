import Item from './item.js'
import EmptyItem from './emptyItem.js'

class DrawActions {
  _numbersSet = new Set()
  _numbers
  _emptyItem = new EmptyItem()

  drawField(width, height) {
    const field = document.createElement('div')
    field.classList.add('field')
    field.style.width = width + 'px'
    field.style.height = height + 'px'

    this._numbers = this._generateRandomNumber()
    this._drawItems(field, width / 4, height / 4)

    return field
  }

  _drawItems(root, width, height) {
    root.innerHTML = ''
    this._emptyItem.findNeigbors(this._numbers)
    this._numbers.forEach((item, index) => {
      const domElem = item.create(width, height, item, this)
      root.appendChild(domElem)
    })
  }

  _generateRandomNumber() {
    while (this._numbersSet.size < 15) {
      const randomNumber = Math.floor(Math.random() * 15) + 1
      this._numbersSet.add(randomNumber)
    }

    const itemsArr = [...this._numbersSet, 'empty']
    const itemObjArr = itemsArr.map((number, index) => {
      const elem = isNaN(number) ? this._emptyItem : new Item()

      elem._generateMatrixPosition(index)
      elem._addNumber(number)
      return elem
    })

    return itemObjArr
  }
}

export default DrawActions

import Item from './item.js'
import EmptyItem from './emptyItem.js'

class drawActions {
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
    this._numbers.forEach((number) => {
      const item = isNaN(number)
        ? this._emptyItem.create(width, height, number)
        : new Item().create(width, height, number)

      root.appendChild(item)
    })
  }

  _generateRandomNumber() {
    while (this._numbersSet.size < 15) {
      const randomNumber = Math.floor(Math.random() * 15) + 1
      this._numbersSet.add(randomNumber)
    }

    return [...this._numbersSet, 'empty']
  }
}

export default drawActions

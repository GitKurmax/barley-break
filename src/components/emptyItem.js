import Item from './item.js'

class EmptyItem extends Item {
  constructor() {
    super()
  }

  findNeigbors(numbers) {
    numbers.forEach((item) => (item._isNaighbor = false))
    if (this._matrixPosition.x === 1) {
      if (this._matrixPosition.y === 1) {
        numbers[1]._isNaighbor = true
        numbers[4]._isNaighbor = true
      }
      if (this._matrixPosition.y === 2) {
        numbers[0]._isNaighbor = true
        numbers[5]._isNaighbor = true
        numbers[8]._isNaighbor = true
      }
      if (this._matrixPosition.y === 3) {
        numbers[4]._isNaighbor = true
        numbers[9]._isNaighbor = true
        numbers[12]._isNaighbor = true
      }
      if (this._matrixPosition.y === 4) {
        numbers[8]._isNaighbor = true
        numbers[13]._isNaighbor = true
      }
    }

    if (this._matrixPosition.x === 2) {
      if (this._matrixPosition.y === 1) {
        numbers[0]._isNaighbor = true
        numbers[2]._isNaighbor = true
        numbers[5]._isNaighbor = true
      }
      if (this._matrixPosition.y === 2) {
        numbers[1]._isNaighbor = true
        numbers[4]._isNaighbor = true
        numbers[6]._isNaighbor = true
        numbers[9]._isNaighbor = true
      }
      if (this._matrixPosition.y === 3) {
        numbers[5]._isNaighbor = true
        numbers[8]._isNaighbor = true
        numbers[10]._isNaighbor = true
        numbers[13]._isNaighbor = true
      }
      if (this._matrixPosition.y === 4) {
        numbers[9]._isNaighbor = true
        numbers[12]._isNaighbor = true
        numbers[14]._isNaighbor = true
      }
    }

    if (this._matrixPosition.x === 3) {
      if (this._matrixPosition.y === 1) {
        numbers[1]._isNaighbor = true
        numbers[3]._isNaighbor = true
        numbers[6]._isNaighbor = true
      }
      if (this._matrixPosition.y === 2) {
        numbers[2]._isNaighbor = true
        numbers[5]._isNaighbor = true
        numbers[7]._isNaighbor = true
        numbers[10]._isNaighbor = true
      }
      if (this._matrixPosition.y === 3) {
        numbers[6]._isNaighbor = true
        numbers[9]._isNaighbor = true
        numbers[11]._isNaighbor = true
        numbers[14]._isNaighbor = true
      }
      if (this._matrixPosition.y === 4) {
        numbers[10]._isNaighbor = true
        numbers[13]._isNaighbor = true
        numbers[15]._isNaighbor = true
      }
    }

    if (this._matrixPosition.x === 4) {
      if (this._matrixPosition.y === 1) {
        numbers[2]._isNaighbor = true
        numbers[7]._isNaighbor = true
      }
      if (this._matrixPosition.y === 2) {
        numbers[3]._isNaighbor = true
        numbers[6]._isNaighbor = true
        numbers[11]._isNaighbor = true
      }
      if (this._matrixPosition.y === 3) {
        numbers[7]._isNaighbor = true
        numbers[10]._isNaighbor = true
        numbers[15]._isNaighbor = true
      }
      if (this._matrixPosition.y === 4) {
        numbers[11]._isNaighbor = true
        numbers[14]._isNaighbor = true
      }
    }
  }
}

export default EmptyItem

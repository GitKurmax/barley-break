import Item from './item.js'

class EmptyItem extends Item {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }

  findNeigbors(itemsObj) {
    itemsObj.forEach((item) => (item._isNaighbor = false))
    const emptyIndex = itemsObj.findIndex(item => item._number === 'empty')
    let indexes

    if (this._matrixPosition.y === 1) {
      if (this._matrixPosition.x === 1) {
        indexes = [emptyIndex + 1, emptyIndex + 4]
      }
      if (this._matrixPosition.x === 2 || this._matrixPosition.x === 3) {
        indexes = [emptyIndex - 1, emptyIndex + 1, emptyIndex + 4]
      }
     
      if (this._matrixPosition.x === 4) {
        indexes = [emptyIndex - 1, emptyIndex + 4]
      }
    }

    if (this._matrixPosition.y === 2 || this._matrixPosition.y === 3) {
      if (this._matrixPosition.x === 1) {
        indexes = [emptyIndex + 1, emptyIndex - 4, emptyIndex + 4]
      }
      if (this._matrixPosition.x === 2 || this._matrixPosition.x === 3) {
        indexes = [emptyIndex + 1, emptyIndex - 1, emptyIndex + 4, emptyIndex - 4]
      }
      
      if (this._matrixPosition.x === 4) {
        indexes = [emptyIndex - 1, emptyIndex - 4, emptyIndex + 4]
      }
    }

    if (this._matrixPosition.y === 4) {
      if (this._matrixPosition.x === 1) {
        indexes = [emptyIndex + 1, emptyIndex - 4]
      }
      if (this._matrixPosition.x === 2 || this._matrixPosition.x === 3) {
        indexes = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 4]
      }
      
      if (this._matrixPosition.x === 4) {
        indexes = [emptyIndex - 1, emptyIndex - 4]
      }
    }

    indexes.forEach(i => itemsObj[i]._isNaighbor = true)
  }
}

export default EmptyItem

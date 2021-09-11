class ItemActions {
  addCickAction(item) {
    item.addEventListener('click', function (e) {
      if (this.classList.contains('empty')) return

      if (this.classList.contains('clicked')) {
        this.classList.remove('clicked')
      } else {
        const clicked = document.querySelector('.clicked')

        if (clicked) clicked.classList.remove('clicked')

        this.classList.add('clicked')
      }
    })
  }

  addCickToEmpty(empty, numbers) {
    empty.addEventListener('click', () => {
      const clicked = document.querySelector('.clicked')
      if (clicked) {
        numbers._numbers = this._swap(numbers._numbers, clicked)
        this._redrawItems(numbers)
      }
    })
  }

  _swap(numbers, clicked) {
    const clickedIndex = numbers.findIndex((elem) => {
      return elem._number === +clicked.innerText
    })

    const emptyIndex = numbers.findIndex((elem, index) => {
      return elem._number === 'empty'
    })

    const newNumbers = [...numbers]
    const clickedMatrixPosition = numbers[clickedIndex]._matrixPosition
    const emptyMatrixPosition = numbers[emptyIndex]._matrixPosition

    newNumbers[emptyIndex] = numbers[clickedIndex]
    newNumbers[clickedIndex] = numbers[emptyIndex]
    newNumbers[emptyIndex]._matrixPosition = emptyMatrixPosition
    newNumbers[clickedIndex]._matrixPosition = clickedMatrixPosition
    newNumbers[clickedIndex].findNeigbors(newNumbers)
   
    return [...newNumbers]
  }

  _redrawItems(numbers) {
    const field = document.querySelector('.field')
    field.innerHTML = ''

    const isDone = this._checkIsDone(numbers)
    if (isDone) {
      numbers._numbers.forEach(item => item._isNaighbor = false)
    }
    numbers._numbers.forEach((item, index) => {
      const domElem = item.create(150, 150, item, numbers)
      if (isDone && item._number !== 'empty') {
        domElem.classList.add('done')
      }
      field.appendChild(domElem)
    })
  }

  _checkIsDone(numbers){
    const isDone = numbers._numbers.every((item, index, array) => {
      if (index < 15) {
        return item._number === index + 1
      } else {
        return array[array.length - 1]._number === 'empty'
      }
    })
    return isDone
  }
}

export default ItemActions

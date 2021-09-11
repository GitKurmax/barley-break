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
        const clickedIndex = numbers._numbers.findIndex((elem) => {
          return elem._number === +clicked.innerText
        })

        const emptyIndex = numbers._numbers.findIndex((elem, index) => {
          return elem._number === 'empty'
        })

        const newNumbers = [...numbers._numbers]
        const clickedMatrixPosition =
          numbers._numbers[clickedIndex]._matrixPosition
        const emptyMatrixPosition = numbers._numbers[emptyIndex]._matrixPosition

        newNumbers[emptyIndex] = numbers._numbers[clickedIndex]
        newNumbers[clickedIndex] = numbers._numbers[emptyIndex]
        newNumbers[emptyIndex]._matrixPosition = emptyMatrixPosition
        newNumbers[clickedIndex]._matrixPosition = clickedMatrixPosition
        numbers._numbers = [...newNumbers]

        const field = document.querySelector('.field')
        field.innerHTML = ''
        newNumbers[clickedIndex].findNeigbors(numbers._numbers)
        numbers._numbers.forEach((item, index) => {
          const domElem = item.create(150, 150, item, numbers)

          field.appendChild(domElem)
        })

        const isDone = numbers._numbers.every((item, index, array) => {
          if (index < 15) {
            return item._number === index + 1
          } else {
            return array[array.length - 1]._number === 'empty'
          }
        })

        if (isDone) alert('You won!!!!')
      }
    })
  }
}

export default ItemActions

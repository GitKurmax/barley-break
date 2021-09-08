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
}

export default ItemActions

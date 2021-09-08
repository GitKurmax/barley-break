import ItemActions from './itemActions.js'

class Item extends ItemActions {
  constructor() {
    super()
  }
  create(width, height, number) {
    const item = document.createElement('div')
    item.classList.add('item')

    item.style.width = width + 'px'
    item.style.height = height + 'px'

    if (!isNaN(number)) {
      item.innerText = number
    } else {
      item.classList.add('empty')
    }

    this.addCickAction(item)
    return item
  }
}

export default Item

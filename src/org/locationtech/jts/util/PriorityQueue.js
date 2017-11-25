import ArrayList from '../../../../java/util/ArrayList'

export default class PriorityQueue {
  constructor () {
    this._size = null
    this._items = null
    this._size = 0
    this._items = new ArrayList()
    this._items.add(null)
  }
  poll () {
    if (this.isEmpty()) return null
    const minItem = this._items.get(1)
    this._items.set(1, this._items.get(this._size))
    this._size -= 1
    this.reorder(1)
    return minItem
  }
  size () {
    return this._size
  }
  reorder (hole) {
    let child = null
    const tmp = this._items.get(hole)
    for (; hole * 2 <= this._size; hole = child) {
      child = hole * 2
      if (child !== this._size && this._items.get(child + 1).compareTo(this._items.get(child)) < 0) child++
      if (this._items.get(child).compareTo(tmp) < 0) this._items.set(hole, this._items.get(child)); else break
    }
    this._items.set(hole, tmp)
  }
  clear () {
    this._size = 0
    this._items.clear()
  }
  isEmpty () {
    return this._size === 0
  }
  add (x) {
    this._items.add(null)
    this._size += 1
    let hole = this._size
    this._items.set(0, x)
    for (; x.compareTo(this._items.get(Math.trunc(hole / 2))) < 0; hole /= 2) {
      this._items.set(hole, this._items.get(Math.trunc(hole / 2)))
    }
    this._items.set(hole, x)
  }
  interfaces_ () {
    return []
  }
  getClass () {
    return PriorityQueue
  }
}

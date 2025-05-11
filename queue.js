class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  // Implementar aqui
  enqueue(item) {
    this.elements.push(item)
  }

  peek() {
    return this.elements[0]
  }

  dequeue() {
    return this.elements.shift()
  }

  size() {
    return this.elements.length
  }
  
}

module.exports = Queue
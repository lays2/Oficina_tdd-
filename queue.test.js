const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    // Seu código aqui
    const queue = new Queue()

    expect(queue.size()).toBe(0)
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.size()).toBe(2)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
   // Seu código aqui
    const queue = new Queue()
    queue.enqueue(5)
    
    expect(queue.size()).toBe(1)
    expect(queue.peek()).toBe(5)
  })

  it('Deve escolher o primeiro item da fila', () => {
    // Seu código aqui
    const queue = new Queue()
    queue.enqueue(10)
    queue.enqueue(20)

    expect(queue.peek()).toBe(10)
  })

  it('Deve remover o primeiro item da fila', () => {
    // Seu código aqui
    const queue = new Queue()
    queue.enqueue('a')
    queue.enqueue('b')

    const removed = queue.dequeue()

    expect(removed).toBe('a')
    expect(queue.size()).toBe(1)
    expect(queue.peek()).toBe('b')
  })
})
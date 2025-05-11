const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    //Seu código aqui
    const calculadora = new Calculadora()

    expect(calculadora.soma(1, 2)).toBe(3)
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    //Seu código aqui
    const calculadora = new Calculadora()

    expect(calculadora.subtracao(5, 2)).toBe(3)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    //Seu código aqui
    const calculadora = new Calculadora()

    expect(calculadora.multiplicacao(2, 3)).toBe(6)
    
  })

  it('Deverá retornar a divisao entre dois números', () => {
    //Seu código aqui
    const calculadora = new Calculadora()


    expect(calculadora.divisao(6, 2)).toBe(3)

  })
})
const soma = require('./soma')

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    //seu código aqui
    const resultado = soma(1, 2)
    expect(resultado).toBe(3)
  })
})
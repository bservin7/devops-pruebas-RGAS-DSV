// test/operaciones.test.js
const { expect } = require('chai');
const { suma } = require('../src/operaciones');

describe('Pruebas de suma', () => {
  it('suma(2, 3) debe ser 5', () => {
    expect(suma(2, 3)).to.equal(5);
  });

  it('suma(-1, 1) debe ser 0', () => {
    expect(suma(-1, 1)).to.equal(0);
  });

  it('suma(0, 0) debe ser 0', () => {
    expect(suma(0, 0)).to.equal(0);
  });
});

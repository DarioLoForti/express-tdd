// Bonus
// Creiamo una classe Model la quale dovrà superare i seguenti test:
const { test, expect } = require("@jest/globals");
const Model  = require('../model');

// Model dovrebbe essere una classe (crea un'istanza della classe Model)
test('Model dovrebbe essere una classe', () => {
    const model = new Model('Dario');
    expect(model).toBeInstanceOf(Model);
  });


// L'istanza di model dovrebbe richiedere il parametro obbligatorio del costruttore da usare in fase di creazione dell'istanza
test('L\'istanza di model dovrebbe richiedere il parametro obbligatorio del costruttore da usare in fase di creazione dell\'istanza', () => {
    expect(() => new Model()).toThrow();
  });


// L'istanza di model dovrebbe avere il metodo read
// L'istanza di model dovrebbe avere il metodo add
// read dovrebbe ritornare un array
// add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista
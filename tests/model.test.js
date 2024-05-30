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
test('L\'istanza di model dovrebbe avere il metodo read', () => {
    const model = new Model('Dario');
    expect(model.read).toBeDefined();
  });


// L'istanza di model dovrebbe avere il metodo add
test('L\'istanza di model dovrebbe avere il metodo add', () => {
    const model = new Model('Dario');
    expect(model.add).toBeDefined();
  });
// read dovrebbe ritornare un array
test('read dovrebbe ritornare un array', () => {
    const model = new Model('Dario');
    expect(model.read()).toBeInstanceOf(Array);
  });
// add dovrebbe aggiungere un elemento all’array dei dati e ritornare tutta la lista
// Eseguiamo i seguenti test:
const createSlug = require('../createSlug.js');
// createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {
  const result = createSlug.createSlug('Hello World', []);
  expect(typeof result).toBe('string');
});
// createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    const slug = createSlug.createSlug('Hello World', []);
    expect(slug).toBe('hello-world');
  });
// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    const slug = createSlug.createSlug('Hello World', []);
    expect(slug).toBe('hello-world');
  });
// createSlug dovrebbe incrementare di 1 lo slug quando esiste già
// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
// createSlug dovrebbe lanciare un errore se manca l'array dei post
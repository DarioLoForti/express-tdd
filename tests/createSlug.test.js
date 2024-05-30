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
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    const posts = ['hello-world'];
    const slug = createSlug.createSlug('Hello World', posts);
    expect(slug).toBe('hello-world-1');
  });


// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
    expect(() => createSlug.createSlug('', [])).toThrow('Titolo non valido');
    expect(() => createSlug.createSlug(54, [])).toThrow('Titolo non valido');
    expect(() => createSlug.createSlug(undefined, [])).toThrow('Titolo non valido');
  });


// createSlug dovrebbe lanciare un errore se manca l'array dei post
test('createSlug dovrebbe lanciare un errore se manca l\'array dei post', () => {
    expect(() => createSlug.createSlug('Hello World')).toThrow('Array dei post mancante');
  });

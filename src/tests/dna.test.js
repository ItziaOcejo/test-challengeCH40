const validarDNA = require('../dna');

// Prueba para validar una cadena de ADN válida en mayúsculas
test('Cadena de DNA válida en mayúsculas', () => {
  expect(validarDNA("CTAGGGTA")).toBe(true);
});

// Prueba para validar una cadena de ADN inválida en minúsculas
test('Cadena de DNA inválida en minúsculas', () => {
  expect(validarDNA("ctagggta")).toBe(false);
});

// Prueba para validar una cadena de ADN con carácter no válido
test('Cadena de DNA con carácter no válido', () => {
  expect(validarDNA("CTAGGXTA")).toBe(false);
});

// Prueba para validar una cadena de ADN vacía
test('Cadena de DNA vacía', () => {
  expect(validarDNA("")).toBe('');
});

// Prueba para validar una entrada no válida (no es una cadena)
test('Entrada no válida (no es una cadena)', () => {
  expect(validarDNA(123)).toBe('');
});

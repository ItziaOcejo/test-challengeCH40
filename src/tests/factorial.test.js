const factorial = require('../factorial');

// Prueba para calcular el factorial de un número positivo
test('Factorial de un número positivo', () => {
  expect(factorial(5)).toBe(120); // 5! es 120
});

// Prueba para calcular el factorial de 0
test('Factorial de 0', () => {
  expect(factorial(0)).toBe(1); // 0! es 1
});

// Prueba para manejar números negativos
test('Manejo de números negativos', () => {
  expect(() => {
    factorial(-5);
  }).toThrow('El factorial solo se puede calcular para números enteros no negativos.');
});

// Prueba para manejar entradas no enteras
test('Manejo de entradas no enteras', () => {
  expect(() => {
    factorial(5.5);
  }).toThrow('El factorial solo se puede calcular para números enteros no negativos.');
});

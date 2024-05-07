function factorial(n) {
    // Verifica si n es un número entero no negativo
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
      throw new Error('El factorial solo se puede calcular para números enteros no negativos.');
    }
  
    // Caso base: factorial de 0 es 1
    if (n === 0) {
      return 1;
    }
  
    // Caso recursivo: factorial de n es n * factorial(n - 1)
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Devuelve 120 (5!)
  console.log(factorial(0)); // Devuelve 1 (0! es por convención 1)
  
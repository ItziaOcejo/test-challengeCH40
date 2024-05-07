/** 
 * Crear una función para validar cadenas de DNA como estructura de ADN canónica (por ejemplo, "CTAGGGTA").
   - Permitir sólo bases de ADN canónicas `('C', 'T', 'A', 'G')`.
   - La función debe distinguir entre mayúsculas y minúsculas. Sólo se aceptan bases en mayúsculas.
   - Devuelve una cadena vacía para entradas vacías o no válidas.
   - Devuelve verdadero si la cadena es una secuencia de ADN válida.
   */

   function validarDNA(cadena) {
    if (typeof cadena !== 'string' || cadena.length === 0) {
      return '';
    }
  
    // Expresión regular para verificar si la cadena contiene solo bases de DNA canónicas en mayúsculas
    const regex = /^[CTAG]+$/;
  
    // Verifica si la cadena cumple con la expresión regular
    if (regex.test(cadena)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ejemplo de uso:
  console.log(validarADN("CTAGGGTA")); // Devuelve true
  console.log(validarADN("ctagggta")); // Devuelve false (bases en minúsculas)
  console.log(validarADN("CTAGGXTA")); // Devuelve false (carácter no válido 'X')
  console.log(validarADN("")); // Devuelve ''
  console.log(validarADN(123)); // Devuelve ''
  
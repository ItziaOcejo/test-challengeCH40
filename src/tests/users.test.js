// You already have the methods imported
import { default as expect } from "expect";
import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

const { getUser } = require("./users");

describe("getUser function", () => {
  // Caso de prueba cuando se proporciona un ID existente
  it("should return the correct user when a valid ID is provided", () => {
    const userId = 3; // ID existente en el conjunto de datos de usuarios
    const expectedUser = { id: 3, name: "John", email: "john@example.com" }; // Usuario esperado con el ID proporcionado

    // Llama a la función getUser con el ID proporcionado
    const result = getUser(userId);

    expect(result).toEqual(expectedUser);
  });

  // Caso de prueba cuando se proporciona un ID que no existe
  it("should return undefined when an invalid ID is provided", () => {
    const userId = 999; // ID que no existe en el conjunto de datos de usuarios

    // Llama a la función getUser con el ID proporcionado
    const result = getUser(userId);

    // Verifica si el resultado es undefined, lo que indica que el usuario no fue encontrado
    expect(result).toBeUndefined();
  });
});
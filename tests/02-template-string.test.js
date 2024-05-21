import { getSaludo } from "../src/base-pruebas/02-template-string.js";

describe("this is  proof of the container <templete-string> ", () => {
  test("Evaluaremos una funcion ", () => {
    const nombre = "juan";
    const message = getSaludo(nombre);
    expect(message).toBe(`Hola ${nombre}`);
  });
});

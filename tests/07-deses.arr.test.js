import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";

describe("Esta prueba va sobre arrys donde una funcion retorna un array ", () => {
  test("funcion que retorna un array", () => {
    const [letters, numbers] = retornaArreglo();
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);
  });
});

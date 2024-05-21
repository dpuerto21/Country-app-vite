import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe("Esta es una prueba de la funcion getuser", () => {
  test("Esta prueba me muestra el usuario en un objeto", () => {
    const message = getUser();
    const message1 = getUser();
    expect(message1).toStrictEqual(message);
  });

  test("Esta prueba es un getuserUsuario  objeto, por lo tanto retorna un objeto", () => {
    const name = "Angel";
    const message = getUsuarioActivo(name);
    const message1 = {
      uid: "ABC567",
      username: name,
    };
    expect(message).toEqual(message1);
  });
});

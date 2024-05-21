describe("search the hero for id", () => {
  test("find hero for id", () => {
    const id = 1;
    heroesById = getHeroeById(id);
    console.log(heroesById);
    // expect(heroesById).toBe({
    //   id: 3,
    //   name: "Superman",
    //   owner: "DC",
    // });
  });
});

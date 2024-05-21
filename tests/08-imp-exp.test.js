import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import heroes from "../src/data/heroes";

describe("search the hero for id", () => {
  test("find hero for id", () => {
    const id = 3;
    const hero = getHeroeById(id);
    // console.log(hero);
    expect(hero).toEqual({
      id: 3,
      name: "Superman",
      owner: "DC",
    });
  });

  test("find hero for id", () => {
    const id = 200;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test("filter for owner", () => {
    const DC = "DC";
    const Marvel = "Marvel";
    const dc = getHeroesByOwner(DC);
    const marvel = getHeroesByOwner(Marvel);
    expect(dc).toEqual(heroes.filter((hero) => hero.owner === DC));
    expect(marvel).toEqual(heroes.filter((hero) => hero.owner === Marvel));
  });
});

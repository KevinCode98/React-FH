import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp.js";
import heroes from "../../src/data/heroes.js";

describe("Pruebas en 08-imp-exp", () => {
    test("getHeroeById debe de retornar un heroe por ID", () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: "Batman",
            owner: "DC"
        });
    });

    test("getHeroeById debe de retornar undefine si no existe", () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test("getHeroesByOwner debe de retonar un arreglo  coon los heroes de DC", () => {
        const owner = "DC";
        const heroesTest = getHeroesByOwner(owner);

        expect(heroesTest.length).toBe(3);
        expect(heroesTest).toEqual(heroes.filter((h) => h.owner === owner));
    });

    test("getHeroesByOwner debe de retonar un arreglo  coon los heroes de Marvel", () => {
        const owner = "Marvel";
        const heroesTest = getHeroesByOwner(owner);

        expect(heroesTest.length).toBe(2);
        expect(heroesTest).toEqual(heroes.filter((h) => h.owner === owner));
    });
});
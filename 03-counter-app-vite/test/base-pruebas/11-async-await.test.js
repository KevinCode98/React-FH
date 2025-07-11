import { getImagen } from "../../src/base-pruebas/11-async-await.js";

describe("Prueba en  11-async-await", () => {
    test("getImagen debe de retonar una URL de la imagen", async () => {
        const url = await getImagen();

        expect(url).toEqual(expect.any(String));
    });
});
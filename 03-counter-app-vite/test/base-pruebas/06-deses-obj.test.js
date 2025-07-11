import { usContext } from "../../src/base-pruebas/06-deses-obj.js";

describe("Prueba en  06-deses-obj", () => {
    test("usContext debe retornar un objeto", () => {
        const obj = {
            nombreClave: "Kevin",
            anios: 25,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };


        const testObj = usContext({ clave: "Kevin", edad: 25 });
        expect(testObj).toEqual(obj);
    });
});
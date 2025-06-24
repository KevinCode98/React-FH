const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 10001,
        lat: 14.130948,
        lng: -90.567222,
    }
};
console.log(persona);
console.log("-------------------------");

const persona2 = { ...persona };
persona2.nombre = "Tony2";

console.log(persona);
console.log(persona2);

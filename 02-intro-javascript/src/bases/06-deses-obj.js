// Desestructuración
// Asigngación Destructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman"
};

const { nombre, edad, clave } = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ nombre, clave, rango = "Capitan" }) => {
    // console.log(`${ nombre } => ${ clave } - Rango: ${ rango }`);

    return {
        nombreClave: `${ nombre }-${ clave }`,
        anios: edad,
        latlng: {
            lat: 14.130948,
            lng: -90.567222,
        }
    };
};

const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);
console.log(nombreClave);
console.log(anios);
console.log("lat =>", lat, "- lng =>", lng);

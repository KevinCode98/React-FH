// Funciones en JS
const saludar = function (nombre) {
    return `Hola ${ nombre }`;
};

const saludar2 = (nombre) => {
    return `Hola ${ nombre }`;
};

const saludar3 = (nombre) => `Hola ${ nombre }`;

const saludar4 = () => `Hola Mundo!`;

console.log(saludar("Kevin"));
console.log(saludar2("Max"));
console.log(saludar3("Yadi"));
console.log(saludar4());

const getUser = () => ({
    uid: "ABC123",
    username: "El_Papi1502"
});

console.log(getUser());


// Tarea
// 1. Transformen a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = (nombre) => ({
    uid: "ABC567",
    username: nombre
});

console.log(getUsuarioActivo("Kevin"));


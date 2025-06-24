const nombre = "Kevin";
const apellido = "Carrillo";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `
${ nombre }
${ apellido }
${ 1 + 1 }
 `;

console.log(nombreCompleto);

function getSaludo() {
    return "Hola Mundo";
}


console.log(`Este es un texto: ${ getSaludo() }`);

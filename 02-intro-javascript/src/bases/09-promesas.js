import { getHeroesById } from "./bases/08-import-export.js";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroesById(3);
//         if (heroe !== undefined) resolve(heroe);
//         else reject("Heroe no encontrado");
//
//     }, 2000);
// });
//
// promesa.then((heroe) => {
//     console.log(heroe);
// }).catch((error) => {
//     console.log(error);
// });


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const {name, owner} = getHeroesById(id);
            if (name) resolve(`${name} => ${owner}`);
            else reject("Heroe no encontrado");
        }, 2000);
    });
};

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn);
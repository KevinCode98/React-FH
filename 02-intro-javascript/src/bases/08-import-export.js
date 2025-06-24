import heroes from "./data/heroes.js";

export const getHeroesById = (id) => heroes.find((hero) => hero.id === id);
export const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

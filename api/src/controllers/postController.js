const { Pokemon } = require("../db");
const createPokemon = async (
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  img
) => {
  if (!name) throw Error("Info Missing");
  const pokemon = {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    img,
  };
  const pokeCreated = await Pokemon.create(pokemon);
  return pokeCreated;
};

module.exports = createPokemon;

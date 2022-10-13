const fetch = require("node-fetch");
const { Pokemon } = require("../db");

const getAll = async () => {
  const pokemones = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=40"
  ).then((response) => response.json());

  const results = pokemones.results;

  const data = results.map(async (poke) => {
    const pokemon = await fetch(poke.url).then((response) => response.json());
    const pokemons = {
      id: pokemon.id,
      name: pokemon.name,
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      speed: pokemon.stats[5].base_stat,
      height: pokemon.height,
      weight: pokemon.weight,
      img: pokemon.sprites.front_default,
      type: pokemon.types.map((e) => e.type.name),
    };
    return pokemons;
  });
  const allPokemons = await Promise.all(data);
  return allPokemons;
};

const getOne = async (id) => {
  if (!id) throw Error("Info missing");
  try {
    const pokeDb = await Pokemon.findByPk(id);
    if (id === pokeDb.id) return pokeDb;
  } catch (error) {
    const pokeapi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
      (response) => response.json()
    );
    if (pokeapi.id === parseInt(id)) {
      const poke = {
        id: pokeapi.id,
        name: pokeapi.name,
        hp: pokeapi.stats[0].base_stat,
        attack: pokeapi.stats[1].base_stat,
        defense: pokeapi.stats[2].base_stat,
        speed: pokeapi.stats[5].base_stat,
        height: pokeapi.height,
        weight: pokeapi.weight,
        img: pokeapi.sprites.front_default,
        type: pokeapi.types.map((e) => e.type.name),
      };
      return poke;
    }
  }
};

const getByNameApi = async (name) => {
  if (!name) throw Error("Info missing");
  const pokemones = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  ).then((response) => response.json());
  if (pokemones.name !== name) {
    throw Error("Pokemon does not exist");
  } else {
    const pokeName = {
      id: pokemones.id,
      name: pokemones.name,
      hp: pokemones.stats[0].base_stat,
      attack: pokemones.stats[1].base_stat,
      defense: pokemones.stats[2].base_stat,
      speed: pokemones.stats[5].base_stat,
      height: pokemones.height,
      weight: pokemones.weight,
      img: pokemones.sprites.front_default,
      type: pokemones.types.map((e) => e.type.name),
    };
    return pokeName;
  }
};

const getByNameDb = async (name) => {
  if (!name) throw Error("Info missing");
  const findName = await Pokemon.findOne({ where: { name } });
  console.log(findName);
  if (findName) return findName;
};

const getType = async () => {
  const pokeType = await fetch(`https://pokeapi.co/api/v2/type`)
    .then((response) => response.json())
    .then((data) => data.results);

  const types = pokeType.map((pokemon) => {
    const newType = {
      name: pokemon.name,
    };
    return newType;
  });
  return types;
};

module.exports = {
  getAll,
  getOne,
  getByNameApi,
  getType,
  getByNameDb,
};

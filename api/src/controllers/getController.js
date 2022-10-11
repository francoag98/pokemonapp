const fetch = require("node-fetch");
const { Pokemon, Type } = require("../db");

const getAll = async () => {
  const pokemones = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=40"
  ).then((response) => response.json());

  const results = pokemones.results;
  let pokemonesApi = [];

  for (let i = 0; i < results.length; i++) {
    if (!results[i]) return pokemonesApi;
    if (results[i].url) {
      const pokemoon = await fetch(results[i].url).then((response) => {
        return response.json();
      });
      pokemonesApi.push({
        id: pokemoon.id,
        name: pokemoon.name,
        hp: pokemoon.stats[0].base_stat,
        attack: pokemoon.stats[1].base_stat,
        defense: pokemoon.stats[2].base_stat,
        speed: pokemoon.stats[5].base_stat,
        height: pokemoon.height,
        weight: pokemoon.weight,
        img: pokemoon.sprites.front_default,
        type: pokemoon.types.map((e) => e.type.name),
      });
    }
  }
  return pokemonesApi;
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
    if (pokeapi.id === parseInt(id)) return pokeapi;
  }
};

const getByName = async (name) => {
  if (!name) throw Error("Info missing");
  const pokemones = await getAll();
  console.log("1", pokemones);
  if (pokemones) {
    const pokemonsName = pokemones.filter((pokemon) => pokemon.name === name);
    console.log("2", pokemonsName);
    if (!pokemonsName) throw Error("Pokemon does not exist");
    return pokemonsName;
  }
  const nameDb = await Pokemon.findOne({ where: { name } });
  if (!nameDb) throw Error("Pokemon does not exist");
  return nameDb;
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
  getByName,
  getType,
};

const routers = require("express").Router();
const {
  getAll,
  getOne,
  getByName,
  getType,
} = require("../controllers/getController");
const { Type } = require("../db");

routers.get("/", async (req, res) => {
  try {
    const pokemons = await getAll();
    if (!pokemons) throw Error("Pokemon does not exist");
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
routers.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const pokemon = await getByName(name);
      res.status(200).send(pokemon);
    } else {
      const pokemons = await getAll();
      res.status(200).send(pokemons);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

routers.get("/type", async (req, res) => {
  try {
    const types = await getType();
    if (!types) throw Error("Pokemon that type does not exist");
    const createType = await Type.bulkCreate(types);
    res.status(200).send(createType);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

routers.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await getOne(id);
    res.status(200).send(pokemon);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = routers;

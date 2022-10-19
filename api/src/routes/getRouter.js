const routers = require("express").Router();

const {
  getAll,
  getOne,
  getType,
  getByNameApi,
  getByNameDb,
} = require("../controllers/getController");
const { Type } = require("../db");

routers.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const pokeDb = await getByNameDb(name);
      if (pokeDb) return res.status(200).send(pokeDb);
      const pokemon = await getByNameApi(name);
      if (pokemon) return res.status(200).send(pokemon);
    }
    const pokemones = await getAll();
    return res.status(200).send(pokemones);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

routers.get("/type", async (req, res) => {
  try {
    await getType();
    const allTypes = await Type.findAll();
    return res.status(200).send(allTypes);
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

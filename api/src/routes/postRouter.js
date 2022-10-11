const routers = require("express").Router();
const createPokemon = require("../controllers/postController");
const { Type } = require("../db");

routers.post("/", async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, img, type } =
    req.body;
  try {
    const pokemon = await createPokemon(
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img
    );
    let findType = await Type.findAll({ where: { name: type } });
    pokemon.addType(findType);
    res.status(200).send("Pokemon was created successfull");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = routers;

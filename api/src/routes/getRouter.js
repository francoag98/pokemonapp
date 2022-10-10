const routers = require("express").Router();
const { getAll, getOne, getByName, getType } = require("../controllers/getController");

routers.get("/", async (req, res) => {
  try {
    const pokemons = await getAll();
    if (!pokemons) throw Error("Pokemon does not exist");
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
routers.get("/?name", async (req, res) => {
  const { name } = req.query;
  try {
    const pokemon = await getByName(name);
    console.log(pokemon);
    res.status(200).send(pokemon);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

routers.get("/type", async (req,res)=>{
  const {type} = req.body
  try {
    const pokemon = await getType(type);
    if(!pokemon) throw Error("Pokemon that type does not exist");
    res.status(200).json(pokemon)

  } catch (error) {
    res.status(400).send({message: error.message})
  }
})

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

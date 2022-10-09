const routers = require("express").Router();
const {getAll} = require("../controllers/getController")

routers.get("/",async (req,res)=>{
    try {
        const pokemons = await getAll()
        if(!pokemons) throw Error("Pokemon does not exist")
        console.log(pokemons);
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})


module.exports = routers
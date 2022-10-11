const { Router } = require("express");
// Importar todos los routers;
const getPokemons = require("./getRouter");
const postPokemons = require("./postRouter");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", getPokemons);
router.use("/pokemons", postPokemons);

module.exports = router;

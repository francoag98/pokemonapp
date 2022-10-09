const { Router } = require('express');
// Importar todos los routers;
const getPokemons = require("./getRouter")
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", getPokemons)

module.exports = router;

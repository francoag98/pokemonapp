const fetch = require("node-fetch")

const getAll= async ()=>{
    const pokemones = await fetch("https://pokeapi.co/api/v2/pokemon?limit=40")
    .then( async response=> await response.json())

    const results = pokemones.results
    let pokemonesApi = [];
    results.forEach(async pokemon =>{
        if(!pokemon) throw Error("pokemons dont exist");
        if(pokemon.url){
            const pokemoon = await fetch(pokemon.url)
            .then( response=>  response.json())
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
                type: pokemoon.types.map(e => e.type.name)
            })
        }
    })
    return pokemonesApi
    console.log(pokemonesApi);
}


module.exports = {
    getAll
}
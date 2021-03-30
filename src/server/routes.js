import express from "express";
import pokemonServices from "./controller"


const router = express.Router();

/*************************** UI ***********************************/
router.get('/home', pokemonServices.sendHome);

router.get('/pokemons', pokemonServices.sendPokemons);

router.get('/pokemon/:id', pokemonServices.sendPokemon)

/*************************** API ***********************************/

// Pokemon por URL
router.get("/api/pokemon/:id", pokemonServices.getPokemon);

// 50 Pokemones
router.get('/api/pokemons', pokemonServices.getPokemons)

// Pokemon ramdom
router.get('/api/pokemon', pokemonServices.pokemonRamdom)

module.exports = router;
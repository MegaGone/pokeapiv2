import express from "express";
import pokemonServices from "./controller"

const router = express.Router();

/*************************** API ***********************************/

// Pokemon ramdom
router.get('/api/pokemon', pokemonServices.pokemonRamdom)

// Pokemon por URL
router.get("/api/pokemon/:id", pokemonServices.getPokemon);

// 50 Pokemones
router.get('/api/pokemons', pokemonServices.getPokemons)

router.get('/prueba', pokemonServices.prueba)

module.exports = router;
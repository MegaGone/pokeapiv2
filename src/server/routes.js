import express from "express";
import pokemonServices from "./controller"

const router = express.Router();

// Pokemon por URL
router.get("/api/pokemon/:id", pokemonServices.getPokemon);

// Prueba
router.get('/api/pokemons', pokemonServices.getPokemons)



module.exports = router;

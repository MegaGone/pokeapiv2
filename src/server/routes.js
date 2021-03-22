import express from "express";
import pokemonServices from "./controller"

const router = express.Router();

// Prueba
router.get('/try', pokemonServices.prueba)

// Pagina de inicio

router.get("/", pokemonServices.homePage)

router.get("/api", pokemonServices.homePage)

router.get("/api/pokemon", pokemonServices.homePage)

// Pokemon por URL
router.get("/api/pokemon/:id", pokemonServices.getPokemon);

// 50 pokemones
router.get('/api/pokemons', pokemonServices.getPokemons)

module.exports = router;

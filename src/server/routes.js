import express from "express";
import path from "path";
import fetch from "node-fetch";
const controller = require("./controller");

const router = express.Router();

// Client
router.get("/home", (req, res) => {
  res.sendFile(
    path.resolve(
      "C:/Users/mofrc/OneDrive/Escritorio/Udemy/node-proyects/try" +
        "/dist/index.html"
    )
  );
});

router.get("/pokemon", (req, res) => {
  res.sendFile(
    path.resolve(
      "C:/Users/mofrc/OneDrive/Escritorio/Udemy/node-proyects/try" +
        "/dist/search.html"
    )
  );
});

router.get("/pokemon/:id", (req, res) => {
  res.sendFile(
    path.resolve(
      "C:/Users/mofrc/OneDrive/Escritorio/Udemy/node-proyects/try" +
        "/dist/pokemon.html"
    )
  );
});

router.get("/prueba", controller.prueba);

// API

// Pokemon estatico
router.get("/api/pokemon", (req, res) => {
  fetch("https://pokeapi.co/api/v2/pokemon/5")
    .then((data) => data.json())
    .then((json) => {
      let newData = {
        id: json.id,
        name: json.name,
        image: json.sprites.front_default,
      };

      res.json(newData);
    });
});

// Pokemon por URL
router.get("/api/pokemon/:poke", (req, res) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.poke}`)
    .then((rawData) => rawData.json())
    .then((data) => {
      let newData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      };

      res.json({data: newData});
    });
});

// Prueba
router.get('/api/pokemons', controller.getPokemons)


module.exports = router;

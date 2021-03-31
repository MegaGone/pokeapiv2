import fetch from "node-fetch";
import path from "path";

const getPokemons = async (req, res) => {
  // Coleccion para los pokemones
  let urls = [];

  // Para que se ejecute 5 veces
  for (let i = 1; i <= 50; i++) {
    // Obtener numeros aletorios para el fetch

    let x = Math.random(); // Obtengo numero alazar entre 0 y 1
    x = x * 500; // Valor maximo por el que quiero que se multiplique
    x = Math.floor(x); // Redondeo inferiormente para quedarme nada mas con la parte entera.

    // Validacion si x es 0

    if (x <= 0) {
      x = 1;
    }

    let url = `https://pokeapi.co/api/v2/pokemon/${x}`; // Fetch para cada pokemon (distinto)
    urls.push(url); // Agrego al array
  }

  // Por cada pokemon debo de hacer un fetch
  await Promise.all(
    urls.map((url) => fetch(url).then((response) => response.json()))
  ).then((pokemons) => {
    // Respuesta de todas las promesas

    let mapData = [];

    pokemons.forEach((pokemon) => {
      mapData.push({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        type: pokemon.types[0].type.name,
        ability: pokemon.abilities[0].ability.name,
      });
    });

    res.json({ data: mapData });
  });
};

const getPokemon = (req, res) => {
  if (req.params.id <= 0) {
    throw new Error("ERROR");
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
    .then((rawData) => rawData.json())
    .then((data) => {
      let newData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        type: data.types[0].type.name,
        ability: data.abilities[0].ability.name,
      };

      res.json({ data: newData });
    });
};

const pokemonRamdom = (req, res) => {
  let x = Math.random();
  x = x * 500;
  x = Math.floor(x);

  if (x <= 0) {
    x = 1;
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
    .then((rawData) => rawData.json())
    .then((data) => {
      let newData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        type: data.types[0].type.name,
        ability: data.abilities[0].ability.name,
      };

      res.json({ data: newData });
    });
};

// Client

const sendHome = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../public/index.html"));
};

const sendPokemons = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../public/pokemons.html"));
};

const sendPokemon = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../public/pokemon.html"));
};

// module ES6
export default {
  getPokemons,
  getPokemon,
  pokemonRamdom,
  sendHome,
  sendPokemons,
  sendPokemon,
};

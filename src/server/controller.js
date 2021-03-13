import fetch from "node-fetch";

const getPokemons = function (req, res) {
  // Coleccion para los pokemones
  let urls = [];

  // Para que se ejecute 5 veces
  for (let i = 0; i <= 50; i++) {
    // Obtener numeros aletorios para el fetch

    let x = Math.random(); // Obtengo numero alazar entre 0 y 1
    x = x * 500; // Valor maximo por el que quiero que se multiplique
    x = Math.floor(x); // Redondeo inferiormente para quedarme nada mas con la parte entera.

    let url = `https://pokeapi.co/api/v2/pokemon/${x}`; // Fetch para cada pokemon (distinto)
    urls.push(url); // Agrego al array
  }

  // Por cada pokemon debo de hacer un fetch
  Promise.all(
    urls.map((url) => fetch(url).then((response) => response.json()))
  ).then((pokemons) => {
    // Respuesta de todas las promesas

    let mapData = [];

    pokemons.forEach((pokemon) => {
      mapData.push({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
      });
    });

    res.render('pokemons', { mapData })
  });
};

const getPokemon = (req, res) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
    .then((rawData) => rawData.json())
    .then((data) => {
      let newData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      };

      res.render("pokemon", {
        title: newData.name,
        imagen: newData.image,
        id: newData.id,
      });
    });
};

const homePage = (req, res) => {
  let id = Math.random();
  id = id * 500;
  id = Math.floor(id);

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((rawData) => rawData.json())
    .then((data) => {
      let newData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      };

      res.render("home", {
        title: newData.name,
        imagen: newData.image,
        id: newData.id,
      });
    });
};

// module ES6
export default {
  getPokemons,
  getPokemon,
  homePage
};

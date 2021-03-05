import fetch from "node-fetch";

exports.prueba = function (req, res) {
  res.send("Hello world");
};

exports.getPokemons = function (req, res) {
  let getPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((rawData) => rawData.json())
      .then((data) => {
        res.send(data);
      });
  };

  let pokemons = () => {
    let firstPokemon = Math.random(Math.round() * 150);
    let secondPokemon = Math.round(Math.random() * 150);
    let thirdPokemon = Math.round(Math.random() * 150);
    let fourthPokemon = Math.round(Math.random() * 150);
    let fifthPokemon = Math.round(Math.random() * 150);

    getPokemon(firstPokemon);
    getPokemon(secondPokemon);
    getPokemon(thirdPokemon);
    getPokemon(fourthPokemon);
    getPokemon(fifthPokemon);
  };

  pokemons();
};

exports.pruebaPokemons = function (req, res) {

  // Coleccion para los pokemones
  let pokemones = [];

  // Para que se ejecute 5 veces
  for (let i = 0; i <= 5; i++) {
    let number = Math.random(Math.round() * 150);
    pokemones.push( number );
  }

  res.send(pokemones);
};

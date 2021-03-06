import fetch from "node-fetch";

exports.prueba = function (req, res) {
  res.send("Hello world");
};

exports.getPokemons = function (req, res) {
  // Coleccion para los pokemones
  let pokemones = [];

  // Para que se ejecute 5 veces
  for (let i = 0; i <= 5; i++) {
    // Obtener numeros aletorios para el fetch
    let x = Math.random(); // Obtengo numero alazar entre 0 y 1
    x = x * 150; // Valor maximo por el que quiero que se multiplique
    x = Math.floor(x); // Redondeo inferiormente para quedarme nada mas con la parte entera.

    let url = `https://pokeapi.co/api/v2/pokemon/${x}`; // Fetch para cada pokemon (distinto)
    pokemones.push(url); // Agrego al array
  }

  // Por cada pokemon debo de hacer un fetch
  Promise.all(
    pokemones.map((url) =>
      fetch(url)
      .then((response) => response.json())
      

    )).then((pokemons) => { // Respuesta de todas las promesas
    res.json({ data: pokemons });
  });

  // Solo queda mapear la data
};
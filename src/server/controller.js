import fetch from "node-fetch";

const getPokemons = async (req, res) => {
  // Coleccion para los pokemones
  let urls = [];

  // Para que se ejecute 5 veces
  for (let i = 0; i <= 50; i++) {
    // Obtener numeros aletorios para el fetch

    let x = Math.random(); // Obtengo numero alazar entre 0 y 1
    x = x * 500; // Valor maximo por el que quiero que se multiplique
    x = Math.floor(x); // Redondeo inferiormente para quedarme nada mas con la parte entera.

    if(x === 0){
      x = 1
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
      });
    });

    let pageCount = 5;

    let paginate = (page = 1) =>
      mapData.slice(pageCount * (page - 1), pageCount * page);

    let sendPokemons = paginate(1);

    res.render("pokemons", { sendPokemons });

    //res.render("pokemons", { mapData });
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

const prueba = async (req, res) => {
  let urls = [];

  for (let i = 0; i <= 50; i++) {
    let x = Math.random();
    x = x * 500;
    x = Math.floor(x);

    let url = `https://pokeapi.co/api/v2/pokemon/${x}`;
    urls.push(url);
  }

  await Promise.all(
    urls.map((url) => fetch(url).then((response) => response.json()))
  ).then((pokemons) => {
    let mapData = [];

    pokemons.forEach((pokemon) => {
      mapData.push({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
      });
    });
    //res.render('pokemons', { mapData })

    // Paginacion
    let oldCount = 5;

    let paginate = (page = 1) =>
      mapData.slice(oldCount * (page - 1), oldCount * page);

    let newData = paginate(1);

    // New pagination
    const pageCount = Math.ceil(mapData.length / 10); // 50/10 = 5 por pagina
    let pages = 10; // Cuantas paginas
    let page = parseInt(req.query.p); // Convierto la pagina a entero

    if (!page) {
      page = 1;
    }

    if (page > pageCount) {
      page = pageCount;
    }

    res.render("try", {
      newData,
      page: page,
      pages: pages,
    });
  });
};

// module ES6
export default {
  getPokemons,
  getPokemon,
  homePage,
  prueba,
};

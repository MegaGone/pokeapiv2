if (window.location.href.indexOf("home") > -1) {
  // console.log('home works');

  fetch("http://localhost:2021/api/pokemon")
    .then((raw) => raw.json())
    .then((res) => {
      // console.log(res);

      let pokemon = document.getElementById("pokemon");

      if (pokemon) {
        let name = pokemon.getElementsByTagName("h3")[0];
        let image = pokemon.getElementsByTagName("img")[0];
        let id = pokemon.getElementsByTagName("small")[0];
        let type = pokemon.getElementsByTagName("h5")[0];
        let ability = pokemon.getElementsByTagName("h6")[0];

        name.textContent = res.data.name;
        image.setAttribute("src", res.data.image);
        id.textContent = res.data.id;
        type.textContent = res.data.type;
        ability.textContent = res.data.ability;
      }
    });
}

if (window.location.href.indexOf("pokemons") > -1) {
  // OLD
  /*

  fetch("http://localhost:2021/api/pokemons")
    .then((raw) => raw.json())
    .then((res) => {
      // console.log(res.data)

      const pokemons = res.data;
      console.log(pokemons);

      const porPagina = 5;

      let paginas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      function paginate(page) {
        console.warn(`Pagina ${page}`);

        // tengo que enviarle 5 desde 1 al 5, 6 al 7...
        let limite = page * porPagina; // Hasta que indice quiero que llegue. Ejemplo 1 * 5 = 5, 2 * 5 = 10, 5 en 5;
        let from = porPagina * (page - 1); // 5 * (2 - 1) = 5

        let arr = console.log(pokemons.slice(from, limite)); // slice para que tenga un inicio y un fin

        return arr;
      }

      // let limite = pagina * porPagina;
      // let desde = porPagina * (pagina - 1);

      paginas.forEach((pagina) => {
        paginate(pagina);
      });

      // console.log(paginas);
      // console.log({total});
      // console.log({porPagina});
    });
    */

  // NEW

  fetch("http://localhost:2021/api/pokemons")
    .then((raw) => raw.json())
    .then((res) => {
      // console.log(res);

      var page = 1; // Inicializo las paginas
      const perPage = 5; // Cuantos quiero por pagina
      const pokemons = res.data; // Obtengo la data

      var pagination;
      var pageCount = Math.ceil(pokemons.length / perPage); // Obtengo las paginas (10)

      // Aca no e utilizado las constantes
      function paginate(array, porPagina, pageNumber) {
        let from = porPagina * (pageNumber - 1);
        let limit = pageNumber * porPagina;

        return array.slice(from, limit);
      }

      function show(totalPokemons) {
        var pagination = paginate(pokemons, perPage, page);
        console.log(`nextPage ${page + 1}`, pagination);

        pagination.forEach((page) => {
          console.log(page);
        });
      }
      show(pokemons);

      // PreviousPage
      let buttonNext = document.getElementById("bnext");

      if (buttonNext < 1) {
        buttonNext.style.display = "none";
      } else {
        buttonNext.addEventListener("click", () => {
          page++;
          // console.log(page);
          show(pagination);
        });
      }

      // NextPage
      let buttonPrev = document.getElementById("bprev");
      buttonPrev.addEventListener("click", () => {
        page--;
        // console.log(page);
        show(pagination);
      });

      // console.log(pageCount);
    });
}

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
  // Para que no aparezca
  let prev = document.getElementById("bprev");
  prev.style.display = "none";

  // Para que se inicialize en la pagina 1
  const pageHeader = document.getElementById("pageid");
  // pageHeader.innerHTML = "Page 1";

  fetch("http://localhost:2021/api/pokemons")
    .then((raw) => raw.json())
    .then((res) => {
      // console.log(res);

      var page = 1; // Inicializo las paginas
      const perPage = 5; // Cuantos quiero por pagina
      const pokemons = res.data; // Obtengo la data

      // Inicializo el UI
      var UI = "";

      var pagination;
      var pageCount = Math.ceil(pokemons.length / perPage); // Obtengo las paginas (10)

      // Aca no e utilizado las constantes
      function paginate(array, porPagina, pageNumber) {
        let from = porPagina * (pageNumber - 1);
        let limit = pageNumber * porPagina;

        return array.slice(from, limit);
      }

      // PreviousPage
      const buttonNext = document.getElementById("bnext");

      buttonNext.addEventListener("click", () => {
        page++;
        // console.log(page);
        show(pagination);
      });

      // NextPage
      const buttonPrev = document.getElementById("bprev");
      buttonPrev.addEventListener("click", () => {
        page--;
        // console.log(page);
        show(pagination);
      });

      function show(totalPokemons) {
        var pagination = paginate(pokemons, perPage, page);
        console.warn(`Page ${page}`);
        // console.log(`nextPage ${page + 1}`, pagination);

        pageHeader.innerHTML = `Page ${page}`;

        // Aca tengo que almacenar en un array lo que me traiga la pagina

        UI = '<div class="row mt-3">'; // Inicializo y no += porque si no sobrescribo

        pagination.forEach((pokemon) => {
          UI += 
          `

          <div class="col-6 text-center">

            <div class="card mb-3">
             
              <div class="row g-0">

                <div class="col-md-4">
                  <img src="${pokemon.image}" alt="${pokemon.name}" width="150" height="150">
                </div>

                <div class="col-md-8">

                  <div class="card-body">

                    <h3 class="card-title text-capitalize">${pokemon.name}</h3>

                    <p class="card-text">
                      <h5 class="text-capitalize">${pokemon.ability}</h5>
                      <h6 class="text-capitalize">${pokemon.type}</h6>
                    </p>

                    <p class="card-text"><small class="text-muted">${pokemon.id}</small></p>
                  </div>

                </div>

              </div>

            </div>

          </div>
          `
        });

        UI += "</div>";

        // previous button
        if (page < 2) {
          buttonPrev.style.display = "none";
        } else {
          buttonPrev.style.display = "block";
        }

        // In the page 10, next button display none
        if (page < pageCount) {
          buttonNext.style.display = "block";
        } else {
          buttonNext.style.display = "none";
        }

        // Para pintarlo en el UI
        let content = document.getElementById("pokemonsContainer");
        content.innerHTML = ""; // Borro para no sobreescribir
        content.innerHTML = UI; // Aca le pongo la nueva data a pintar
      }
      show(pokemons);

      // console.log(pageCount);
    });
}

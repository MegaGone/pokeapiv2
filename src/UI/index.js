console.log("hello world");

/*************  HOME PAGE *************/ 

// pokemon and slot in the UI
function getPokemon(pokemon, num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
    res.json().then((pokemon) => {
      printPokemon(pokemon, num) // Print pokemon in the HTML
    });
  });
}

// Get random pokemon data 
function getPokemons() {
  let firstPokemon = Math.round(Math.random() * 150);
  let secondPokemon = Math.round(Math.random() * 150);
  let thirdPokemon = Math.round(Math.random() * 150);
  let fourthPokemon = Math.round(Math.random() * 150);
  let fifthPokemon = Math.round(Math.random() * 150);

  getPokemon(firstPokemon, 1);
  getPokemon(secondPokemon, 2);
  getPokemon(thirdPokemon, 3);
  getPokemon(fourthPokemon, 4);
  getPokemon(fifthPokemon, 5);
}

getPokemons();

// Get pokemon list
let lists = document.getElementById("lists");


// data in HTML
function printPokemon(pokemon, num){
    let item = lists.querySelector(`#pokemon-${num}`);

    // Set the image with img of the API raw
    let image = item.getElementsByTagName('img')[0]
    image.setAttribute('src', pokemon.sprites.front_default)

    let name = item.getElementsByTagName('h5')[0]
    name.textContent = pokemon.name;
}

/*************  SEARCH PAGE *************/ 
function getPokemons(){
    return fetch('https://pokeapi.co/api/v2/pokemon')
    .then(oldata => oldata.json)
    .then(data => console.log(data));
}

console.log("hello world");
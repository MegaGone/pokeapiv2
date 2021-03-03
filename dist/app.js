/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI/index.js":
/*!*************************!*\
  !*** ./src/UI/index.js ***!
  \*************************/
/***/ (() => {

eval("console.log(\"hello world\");\n/*************  HOME PAGE *************/\n// pokemon and slot in the UI\n\nfunction getPokemon(pokemon, num) {\n  fetch(\"https://pokeapi.co/api/v2/pokemon/\".concat(pokemon)).then(function (res) {\n    res.json().then(function (pokemon) {\n      printPokemon(pokemon, num); // Print pokemon in the HTML\n    });\n  });\n} // Get random pokemon data \n\n\nfunction getPokemons() {\n  var firstPokemon = Math.round(Math.random() * 150);\n  var secondPokemon = Math.round(Math.random() * 150);\n  var thirdPokemon = Math.round(Math.random() * 150);\n  var fourthPokemon = Math.round(Math.random() * 150);\n  var fifthPokemon = Math.round(Math.random() * 150);\n  getPokemon(firstPokemon, 1);\n  getPokemon(secondPokemon, 2);\n  getPokemon(thirdPokemon, 3);\n  getPokemon(fourthPokemon, 4);\n  getPokemon(fifthPokemon, 5);\n}\n\ngetPokemons(); // Get pokemon list\n\nvar lists = document.getElementById(\"lists\"); // data in HTML\n\nfunction printPokemon(pokemon, num) {\n  var item = lists.querySelector(\"#pokemon-\".concat(num)); // Set the image with img of the API raw\n\n  var image = item.getElementsByTagName('img')[0];\n  image.setAttribute('src', pokemon.sprites.front_default);\n  var name = item.getElementsByTagName('h5')[0];\n  name.textContent = pokemon.name;\n}\n/*************  SEARCH PAGE *************/\n\n//# sourceURL=webpack://try/./src/UI/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/UI/index.js"]();
/******/ 	
/******/ })()
;
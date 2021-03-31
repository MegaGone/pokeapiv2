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

eval("if (window.location.href.indexOf(\"home\") > -1) {\n  // console.log('home works');\n  fetch(\"http://localhost:2021/api/pokemon\").then(function (raw) {\n    return raw.json();\n  }).then(function (res) {\n    // console.log(res);\n    var pokemon = document.getElementById(\"pokemon\");\n\n    if (pokemon) {\n      var name = pokemon.getElementsByTagName(\"h3\")[0];\n      var image = pokemon.getElementsByTagName(\"img\")[0];\n      var id = pokemon.getElementsByTagName(\"small\")[0];\n      var type = pokemon.getElementsByTagName(\"h5\")[0];\n      var ability = pokemon.getElementsByTagName(\"h6\")[0];\n      name.textContent = res.data.name;\n      image.setAttribute(\"src\", res.data.image);\n      id.textContent = res.data.id;\n      type.textContent = res.data.type;\n      ability.textContent = res.data.ability;\n    }\n  });\n}\n\nif (window.location.href.indexOf(\"pokemons\") > -1) {\n  // Para que no aparezca\n  var prev = document.getElementById(\"bprev\");\n  prev.style.display = \"none\"; // Para que se inicialize en la pagina 1\n\n  var pageHeader = document.getElementById(\"pageid\"); // pageHeader.innerHTML = \"Page 1\";\n\n  fetch(\"http://localhost:2021/api/pokemons\").then(function (raw) {\n    return raw.json();\n  }).then(function (res) {\n    // console.log(res);\n    var page = 1; // Inicializo las paginas\n\n    var perPage = 5; // Cuantos quiero por pagina\n\n    var pokemons = res.data; // Obtengo la data\n    // Inicializo el UI\n\n    var UI = \"\";\n    var pagination;\n    var pageCount = Math.ceil(pokemons.length / perPage); // Obtengo las paginas (10)\n    // Aca no e utilizado las constantes\n\n    function paginate(array, porPagina, pageNumber) {\n      var from = porPagina * (pageNumber - 1);\n      var limit = pageNumber * porPagina;\n      return array.slice(from, limit);\n    } // PreviousPage\n\n\n    var buttonNext = document.getElementById(\"bnext\");\n    buttonNext.addEventListener(\"click\", function () {\n      page++; // console.log(page);\n\n      show(pagination);\n    }); // NextPage\n\n    var buttonPrev = document.getElementById(\"bprev\");\n    buttonPrev.addEventListener(\"click\", function () {\n      page--; // console.log(page);\n\n      show(pagination);\n    });\n\n    function show(totalPokemons) {\n      var pagination = paginate(pokemons, perPage, page);\n      console.warn(\"Page \".concat(page)); // console.log(`nextPage ${page + 1}`, pagination);\n\n      pageHeader.innerHTML = \"Page \".concat(page); // Aca tengo que almacenar en un array lo que me traiga la pagina\n\n      UI = '<div class=\"row mt-3\">'; // Inicializo y no += porque si no sobrescribo\n\n      pagination.forEach(function (pokemon) {\n        UI += \"\\n\\n          <div class=\\\"col-6 text-center\\\">\\n\\n            <div class=\\\"card mb-3\\\">\\n             \\n              <div class=\\\"row g-0\\\">\\n\\n                <div class=\\\"col-md-4\\\">\\n                  <img src=\\\"\".concat(pokemon.image, \"\\\" alt=\\\"\").concat(pokemon.name, \"\\\" width=\\\"150\\\" height=\\\"150\\\">\\n                </div>\\n\\n                <div class=\\\"col-md-8\\\">\\n\\n                  <div class=\\\"card-body\\\">\\n\\n                    <h3 class=\\\"card-title text-capitalize\\\">\").concat(pokemon.name, \"</h3>\\n\\n                    <p class=\\\"card-text\\\">\\n                      <h5 class=\\\"text-capitalize\\\">\").concat(pokemon.ability, \"</h5>\\n                      <h6 class=\\\"text-capitalize\\\">\").concat(pokemon.type, \"</h6>\\n                    </p>\\n\\n                    <p class=\\\"card-text\\\"><small class=\\\"text-muted\\\">\").concat(pokemon.id, \"</small></p>\\n                  </div>\\n\\n                </div>\\n\\n              </div>\\n\\n            </div>\\n\\n          </div>\\n          \");\n      });\n      UI += \"</div>\"; // previous button\n\n      if (page < 2) {\n        buttonPrev.style.display = \"none\";\n      } else {\n        buttonPrev.style.display = \"block\";\n      } // In the page 10, next button display none\n\n\n      if (page < pageCount) {\n        buttonNext.style.display = \"block\";\n      } else {\n        buttonNext.style.display = \"none\";\n      } // Para pintarlo en el UI\n\n\n      var content = document.getElementById(\"pokemonsContainer\");\n      content.innerHTML = \"\"; // Borro para no sobreescribir\n\n      content.innerHTML = UI; // Aca le pongo la nueva data a pintar\n    }\n\n    show(pokemons); // console.log(pageCount);\n  });\n}\n\n//# sourceURL=webpack://try/./src/UI/index.js?");

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
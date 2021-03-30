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

eval("if (window.location.href.indexOf(\"home\") > -1) {\n  // console.log('home works');\n  fetch(\"http://localhost:2021/api/pokemon\").then(function (raw) {\n    return raw.json();\n  }).then(function (res) {\n    // console.log(res);\n    var pokemon = document.getElementById(\"pokemon\");\n\n    if (pokemon) {\n      var name = pokemon.getElementsByTagName(\"h3\")[0];\n      var image = pokemon.getElementsByTagName(\"img\")[0];\n      var id = pokemon.getElementsByTagName(\"small\")[0];\n      var type = pokemon.getElementsByTagName(\"h5\")[0];\n      var ability = pokemon.getElementsByTagName(\"h6\")[0];\n      name.textContent = res.data.name;\n      image.setAttribute(\"src\", res.data.image);\n      id.textContent = res.data.id;\n      type.textContent = res.data.type;\n      ability.textContent = res.data.ability;\n    }\n  });\n}\n\nif (window.location.href.indexOf(\"pokemons\") > -1) {\n  // OLD\n\n  /*\r\n    fetch(\"http://localhost:2021/api/pokemons\")\r\n    .then((raw) => raw.json())\r\n    .then((res) => {\r\n      // console.log(res.data)\r\n        const pokemons = res.data;\r\n      console.log(pokemons);\r\n        const porPagina = 5;\r\n        let paginas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\r\n        function paginate(page) {\r\n        console.warn(`Pagina ${page}`);\r\n          // tengo que enviarle 5 desde 1 al 5, 6 al 7...\r\n        let limite = page * porPagina; // Hasta que indice quiero que llegue. Ejemplo 1 * 5 = 5, 2 * 5 = 10, 5 en 5;\r\n        let from = porPagina * (page - 1); // 5 * (2 - 1) = 5\r\n          let arr = console.log(pokemons.slice(from, limite)); // slice para que tenga un inicio y un fin\r\n          return arr;\r\n      }\r\n        // let limite = pagina * porPagina;\r\n      // let desde = porPagina * (pagina - 1);\r\n        paginas.forEach((pagina) => {\r\n        paginate(pagina);\r\n      });\r\n        // console.log(paginas);\r\n      // console.log({total});\r\n      // console.log({porPagina});\r\n    });\r\n    */\n  // NEW\n  fetch(\"http://localhost:2021/api/pokemons\").then(function (raw) {\n    return raw.json();\n  }).then(function (res) {\n    // console.log(res);\n    var page = 1; // Inicializo las paginas\n\n    var perPage = 5; // Cuantos quiero por pagina\n\n    var pokemons = res.data; // Obtengo la data\n\n    var pagination;\n    var pageCount = Math.ceil(pokemons.length / perPage); // Obtengo las paginas (10)\n    // Aca no e utilizado las constantes\n\n    function paginate(array, porPagina, pageNumber) {\n      var from = porPagina * (pageNumber - 1);\n      var limit = pageNumber * porPagina;\n      return array.slice(from, limit);\n    }\n\n    function show(totalPokemons) {\n      var pagination = paginate(pokemons, perPage, page);\n      console.log(\"nextPage \".concat(page + 1), pagination);\n      pagination.forEach(function (page) {\n        console.log(page);\n      });\n    }\n\n    show(pokemons); // PreviousPage\n\n    var buttonNext = document.getElementById(\"bnext\");\n\n    if (buttonNext < 1) {\n      buttonNext.style.display = \"none\";\n    } else {\n      buttonNext.addEventListener(\"click\", function () {\n        page++; // console.log(page);\n\n        show(pagination);\n      });\n    } // NextPage\n\n\n    var buttonPrev = document.getElementById(\"bprev\");\n    buttonPrev.addEventListener(\"click\", function () {\n      page--; // console.log(page);\n\n      show(pagination);\n    }); // console.log(pageCount);\n  });\n}\n\n//# sourceURL=webpack://try/./src/UI/index.js?");

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
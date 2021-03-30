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

eval("if (window.location.href.indexOf(\"pokemons\") > -1) {\n  fetch(\"http://localhost:2021/api/pokemons\").then(function (rawData) {\n    return rawData.json();\n  }).then(function (data) {\n    return console.log({\n      data: data\n    });\n  });\n}\n\nif (window.location.href.indexOf(\"pokemon\") > -1) {\n  fetch(\"http://localhost:2021/api/pokemon\").then(function (rawData) {\n    return rawData.json();\n  }).then(function (data) {\n    var pokemon = document.getElementById(\"pokemon\"); // Get\n\n    if (pokemon) {\n      var image = pokemon.getElementsByTagName(\"img\")[0];\n      var name = pokemon.getElementsByTagName(\"h3\")[0];\n      var type = pokemon.getElementsByTagName(\"h5\")[0];\n      var ability = pokemon.getElementsByTagName(\"h6\")[0];\n      var ID = pokemon.getElementsByTagName(\"small\")[0]; // Set\n\n      image.setAttribute(\"src\", data.data.image);\n      name.textContent = data.data.name;\n      type.textContent = data.data.type;\n      ability.textContent = data.data.ability;\n      ID.textContent = data.data.id;\n    }\n  });\n}\n\nif (window.location.href.indexOf(\"search\") > -1) {\n  console.log(\"search works\"); // Escondo el UI\n\n  var pokemon = document.getElementById(\"pokemon\");\n  pokemon.style.display = \"none\";\n  var button = document.getElementById(\"boton\");\n  button.addEventListener(\"click\", function () {\n    // Obtengo el valor\n    var value = document.getElementById(\"buscador\").value;\n\n    if (value.length === 0) {\n      alert(\"Enter a value\");\n    } else {\n      // console.log({value});\n      // fetch\n      fetch(\"http://localhost:2021/api/pokemon/\".concat(value)).then(function (raw) {\n        return raw.json();\n      }).then(function (res) {\n        console.log({\n          res: res\n        });\n        var pokemon = document.getElementById(\"pokemon\");\n\n        if (pokemon) {\n          var image = pokemon.getElementsByTagName(\"img\")[0];\n          var name = pokemon.getElementsByTagName(\"h3\")[0];\n          var type = pokemon.getElementsByTagName(\"h5\")[0];\n          var ability = pokemon.getElementsByTagName(\"h6\")[0];\n          var ID = pokemon.getElementsByTagName(\"small\")[0];\n          image.setAttribute(\"src\", res.data.image);\n          name.textContent = res.data.name;\n          type.textContent = res.data.type;\n          ability.textContent = res.data.ability;\n          ID.textContent = res.data.id;\n          pokemon.style.display = \"block\";\n        }\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack://try/./src/UI/index.js?");

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
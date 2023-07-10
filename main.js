/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n\n\n(0,_pages_about_js__WEBPACK_IMPORTED_MODULE_0__.renderAboutPage)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAboutPage: () => (/* binding */ renderAboutPage)\n/* harmony export */ });\nfunction renderAboutPage() {\n\n    const restaurantName = 'PAH ZAZ';\n    const paraOneText = 'Welcome to PAH ZAZ, the ultimate experience of the italian cuisine! We are dedicated to serving mouthwatering pizzas that will delight your taste buds and leave you craving for more.';\n    const paraTwoText = `At PAH ZAZ, we believe that pizza is not just a food; it's an art form, and we strive to create culinary masterpieces that will satisfy even the most discerning connoisseurs.`;\n    const footerText = `&#169; PAH ZAZ, 2023`;\n\n    const mainContent = document.querySelector('#content');\n\n    const header = createElementWithAttributes('header', {}, mainContent);\n    const heading = createElementWithAttributes('h1', {}, header);\n    heading.textContent = restaurantName;\n\n    const nav = createElementWithAttributes('nav', {}, mainContent);\n    const buttonAbout = createElementWithAttributes('button', { class: 'about' }, nav);\n    buttonAbout.textContent = 'About';\n    const buttonMenu = createElementWithAttributes('button', { class: 'menu' }, nav);\n    buttonMenu.textContent = 'Menu';\n    const buttonContact = createElementWithAttributes('button', { class: 'contact' }, nav);\n    buttonContact.textContent = 'About';\n\n    const main = createElementWithAttributes('main', {}, mainContent);\n    const paraOne = createElementWithAttributes('p', { class: 'one' }, main);\n    paraOne.textContent = paraOneText;\n    const paraTwo = createElementWithAttributes('p', { class: 'two' }, main);\n    paraTwo.textContent = paraTwoText;\n\n    const footer = createElementWithAttributes('footer', {}, mainContent);\n    footer.textContent = footerText;\n}\n\nfunction createElementWithAttributes(tagName, attributes = {}, parentElement) {\n    const element = document.createElement(tagName);\n  \n    Object.entries(attributes).forEach(([key, value]) => {\n      element.setAttribute(key, value);\n    });\n  \n    if (parentElement) {\n      parentElement.appendChild(element);\n    }\n  \n    return element;\n  }\n\n\n/* h1 PAH ZAZ\n\n<nav>\n<button class=\"about\">About</button>\n<button class=\"menu\">Menu</button>\n<button class=\"contact\">Contact</button>\n</nav>\n<main>\n<p>Welcome to PAH ZAZ, the ultimate experience of the italian cuisine! We are dedicated to serving mouthwatering pizzas that will delight your taste buds and leave you craving for more. </p>\n<p>At PAH ZAZ, we believe that pizza is not just a food; it's an art form, and we strive to create culinary masterpieces that will satisfy even the most discerning connoisseurs.</p>\n</main>\n<footer>&#169; PAH ZAZ, 2023</footer> */\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
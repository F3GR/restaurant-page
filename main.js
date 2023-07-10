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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact.js */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/utils.js */ \"./src/pages/utils.js\");\n\n\n\n\n\n(0,_pages_about_js__WEBPACK_IMPORTED_MODULE_0__.renderFrame)();\n(0,_pages_about_js__WEBPACK_IMPORTED_MODULE_0__.renderAboutPage)();\n\nconst buttonAbout = document.querySelector('button.about');\nconst buttonMenu = document.querySelector('button.menu');\nconst buttonContact = document.querySelector('button.contact');\nbuttonAbout.addEventListener('click', function() {\n    if (!(0,_pages_utils_js__WEBPACK_IMPORTED_MODULE_3__.checkIfCurrent)(buttonAbout)) {\n        (0,_pages_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeCurrentStatus)(buttonMenu);\n        (0,_pages_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeCurrentStatus)(buttonContact);\n        (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_0__.renderAboutPage)();\n    }\n});\nbuttonMenu.addEventListener('click', function() {\n    if (!(0,_pages_utils_js__WEBPACK_IMPORTED_MODULE_3__.checkIfCurrent)(buttonMenu)) {\n        (0,_pages_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeCurrentStatus)(buttonAbout);\n        (0,_pages_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeCurrentStatus)(buttonContact);\n        (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage)();\n    }\n});\nbuttonContact.addEventListener('click', function() {\n    if (!(0,_pages_utils_js__WEBPACK_IMPORTED_MODULE_3__.checkIfCurrent)(buttonContact)) {\n        (0,_pages_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeCurrentStatus)(buttonAbout);\n        (0,_pages_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeCurrentStatus)(buttonMenu);\n        (0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_2__.renderContactPage)();\n    }\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAboutPage: () => (/* binding */ renderAboutPage),\n/* harmony export */   renderFrame: () => (/* binding */ renderFrame)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/pages/utils.js\");\n\n\nfunction renderFrame() {\n    const restaurantName = 'PAH ZAZ';\n    const footerText = `&#169; PAH ZAZ, 2023`;\n\n    const mainContent = document.querySelector('#content');\n\n    const header = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('header', {}, mainContent);\n    const heading = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('h1', {}, header);\n    heading.textContent = restaurantName;\n\n    const nav = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('nav', {}, mainContent);\n    const buttonAbout = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('button', { class: 'about' }, nav);\n    buttonAbout.textContent = 'About';\n    const buttonMenu = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('button', { class: 'menu' }, nav);\n    buttonMenu.textContent = 'Menu';\n    const buttonContact = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('button', { class: 'contact' }, nav);\n    buttonContact.textContent = 'Contact';\n\n    const main = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('main', {}, mainContent);\n    const footer = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('footer', {}, mainContent);\n    footer.textContent = footerText;\n}\n\n\nfunction renderAboutPage() {\n    const paraOneText = 'Welcome to PAH ZAZ, the ultimate experience of the italian cuisine! We are dedicated to serving mouthwatering pizzas that will delight your taste buds and leave you craving for more.';\n    const paraTwoText = `At PAH ZAZ, we believe that pizza is not just a food; it's an art form, and we strive to create culinary masterpieces that will satisfy even the most discerning connoisseurs.`;\n\n    const selectedMain = document.querySelector('main');\n    selectedMain.innerHTML = \"\";\n    \n    const selectedButton = document.querySelector('button.about');\n    selectedButton.setAttribute('data-value', 'current');\n\n    const paraOne = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('p', { class: 'one' }, selectedMain);\n    paraOne.textContent = paraOneText;\n    const paraTwo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('p', { class: 'two' }, selectedMain);\n    paraTwo.textContent = paraTwoText;\n\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('img', { class: 'restaurant-photo', src: '../originals/pah-zaz.jpeg', alt: `Restaurant's photo` }, selectedMain);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderContactPage: () => (/* binding */ renderContactPage)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/pages/utils.js\");\n\n\n\nfunction renderContactPage() {\n\n    const contactText = {\n        phone: `+1 123-456-7890`,\n        email: `info@pahzazrestaurant.com`,\n        location: `123 Main Street, City, State, Zip Code`,\n    }\n\n    const hoursText = {\n        working:`Monday to Friday: 11:00 AM - 10:00 PM`,\n        weekend: `Saturday and Sunday: 12:00 PM - 11:00 PM`\n    }\n\n    const selectedMain = document.querySelector('main');\n    selectedMain.innerHTML = \"\";\n\n    const contactInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('div', {class: `contact-info`}, selectedMain);\n\n    const listContacts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('ul', {}, contactInfo);\n    listContacts.textContent = 'Contact Us:';\n\n    for (let contact in contactText) {\n        const newListElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('li', {class: `${contact}` }, listContacts);\n        newListElement.textContent = contactText[contact];\n    }\n\n    const listHours = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('ul', {}, contactInfo);\n    listHours.textContent = 'Opening hours:';\n\n    for (let contact in hoursText) {\n        const newListElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('li', {class: `${contact}` }, listHours);\n        newListElement.textContent = hoursText[contact];\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenuPage: () => (/* binding */ renderMenuPage)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/pages/utils.js\");\n\n\nfunction renderMenuPage() {\n    \n    const pizzaMenu = [\n        {\n            name: 'Neapolitan Pizza',\n            imageURL: '../originals/Neapolitan-pizza.jpeg',\n            description: 'Enjoy the authentic flavors of Naples with our Neapolitan Pizza. Made with the finest ingredients, including fresh mozzarella, San Marzano tomatoes, and fragrant basil, this classic pizza is cooked in a wood-fired oven for that perfect charred crust.',\n            pricePara: 'From',\n            price: '$12.99',\n        },\n        {\n            name: 'Pizza Fritta',\n            imageURL: '../originals/Pizza-Fritta.jpeg',\n            description: 'Experience the thin and crispy perfection of our Pizza Tonda Romana. This round Roman-style pizza is known for its delicate crust and generous toppings. Choose from an array of traditional or gourmet toppings, such as mushrooms, Italian sausage, and truffle oil.',\n            pricePara: 'From just',\n            price: '$10.99',\n        },\n        {\n            name: 'Pizza alla Pala',\n            imageURL: '../originals/Pizza-alla-Pala.jpeg',\n            description: `Treat yourself to the unique and delicious Pizza alla Pala. This Roman-style pizza features a rectangular shape with a thick, airy crust. Topped with a variety of flavorful ingredients like prosciutto, arugula, and cherry tomatoes, it's a delight for your taste buds.`,\n            pricePara: `From`,\n            price: '$13.99',\n        },\n        {\n            name: 'Pizza Tonda Romana',\n            imageURL: '../originals/Pizza-Tonda-Romana.jpeg',\n            description: 'Experience the thin and crispy perfection of our Pizza Tonda Romana. This round Roman-style pizza is known for its delicate crust and generous toppings. Choose from an array of traditional or gourmet toppings, such as mushrooms, Italian sausage, and truffle oil',\n            pricePara: 'From',\n            price: '$13.99',\n        }\n    ]\n\n    const selectedMain = document.querySelector('main');\n    selectedMain.innerHTML = \"\";\n\n    const selectedButton = document.querySelector('button.menu');\n    selectedButton.setAttribute('data-value', 'current');\n\n    for (let i = 0; i < pizzaMenu.length; i++) {\n        const menuBlock = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('div', {class: 'menu-block'}, selectedMain);\n\n        const name = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('p', { class: 'name' }, menuBlock);\n        name.textContent = pizzaMenu[i].name;\n\n        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('img', { src: pizzaMenu[i].imageURL, alt: `${pizzaMenu[i].name} + image` }, menuBlock);\n\n        const description = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('p', { class: 'description' }, menuBlock);\n        description.textContent = pizzaMenu[i].description;\n\n        const price = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElementWithAttributes)('p', { class: 'price' }, menuBlock);\n        price.textContent = pizzaMenu[i].pricePara + \" \" + pizzaMenu[i].price;\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/utils.js":
/*!****************************!*\
  !*** ./src/pages/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkIfCurrent: () => (/* binding */ checkIfCurrent),\n/* harmony export */   createElementWithAttributes: () => (/* binding */ createElementWithAttributes),\n/* harmony export */   removeCurrentStatus: () => (/* binding */ removeCurrentStatus)\n/* harmony export */ });\nfunction createElementWithAttributes(tagName, attributes = {}, parentElement) {\n    const element = document.createElement(tagName);\n  \n    Object.entries(attributes).forEach(([key, value]) => {\n      element.setAttribute(key, value);\n    });\n  \n    if (parentElement) {\n      parentElement.appendChild(element);\n    }\n  \n    return element;\n}\n\nfunction checkIfCurrent(element) {\n  if (element.getAttribute('data-value') === 'current') {\n    return true;\n  }\n  return false;\n}\n\nfunction removeCurrentStatus(element) {\n  element.removeAttribute('data-value');\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/utils.js?");

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
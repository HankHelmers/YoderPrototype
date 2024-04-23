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

/***/ "./source/controller.js":
/*!******************************!*\
  !*** ./source/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _source_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../source/data.js */ \"./source/data.js\");\n/* harmony import */ var _source_data_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_source_data_js__WEBPACK_IMPORTED_MODULE_0__);\n/*\r\n\r\n* interacts with the model\r\n* recieves & updates view\r\n\r\n*/\r\n\r\n\r\n\r\nfunction populatePageInfo() {\r\n    console.log(\"populatePageInfo\" + (0,_source_data_js__WEBPACK_IMPORTED_MODULE_0__.getQuestionTxt)());\r\n    \r\n\r\n    document.getElementById(\"questionNumber\").innerText = questionNumber;\r\n    document.getElementById(\"questionTxt\").innerText = questionTxt;\r\n    document.getElementById(\"subtitleTxt\").innerText = subtitleTxt;\r\n    document.getElementById(\"annotationTxt\").innerText = annotationTxt;\r\n}\n\n//# sourceURL=webpack://yoderprototype/./source/controller.js?");

/***/ }),

/***/ "./source/data.js":
/*!************************!*\
  !*** ./source/data.js ***!
  \************************/
/***/ (() => {

eval("/*\r\n\r\n* Manages data - updates \r\n* Interacts with the controller\r\n\r\n*/\r\n\r\nvar currQuestion = localStorage.getItem('currQuestion') || 1;\r\nvar totalQuestions = 2;\r\n\r\nvar questionTxt = [\r\n    \"For each assignment, rank the syntax* difficulty required on a scale from 1 to 5.\", //Q1\r\n    \"For each assignment, rank the conceptual* difficulty required on a scale from 1 to 5.\", //Q2\r\n];\r\n\r\nvar subtitleTxt = [\r\n    \"5 being most difficult and 1 being not difficult.\", //Q1\r\n    \"5 being most difficult and 1 being not difficult.\", //Q2\r\n]\r\n\r\nvar annotationTxt = [\r\n    \"*Syntax is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'\",\r\n    \"*CONCEPTUAL? is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'\",\r\n];\r\n\r\nfunction getQuestionTxt() {\r\n    return questionTxt[currQuestion-1]; \r\n}\r\n\r\nfunction getSubtitleTxt() {\r\n    return subtitleTxt[currQuestion-1]; \r\n}\r\n\r\nfunction getAnnotationTxt() {\r\n    return annotationTxt[currQuestion-1];\r\n}\r\n\r\nfunction goToNextQuestion() {\r\n    if(currQuestion < totalQuestions) {\r\n        currQuestion++;\r\n        currQuestion = localStorage.setItem('currQuestion', currQuestion);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://yoderprototype/./source/data.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./source/controller.js");
/******/ 	
/******/ })()
;
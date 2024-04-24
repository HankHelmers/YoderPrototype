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

/***/ "./source/data.js":
/*!************************!*\
  !*** ./source/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAnnotationTxt: () => (/* binding */ getAnnotationTxt),\n/* harmony export */   getDatasetName: () => (/* binding */ getDatasetName),\n/* harmony export */   getQuestionNumber: () => (/* binding */ getQuestionNumber),\n/* harmony export */   getQuestionTxt: () => (/* binding */ getQuestionTxt),\n/* harmony export */   getSubtitleTxt: () => (/* binding */ getSubtitleTxt),\n/* harmony export */   goToNextQuestion: () => (/* binding */ goToNextQuestion),\n/* harmony export */   resetQuestions: () => (/* binding */ resetQuestions)\n/* harmony export */ });\n/*\r\n\r\n* Manages data - updates \r\n* Interacts with the controller\r\n\r\n*/\r\n\r\nconsole.log(\"Hello from data.js\")\r\n\r\nvar currQuestion = 0;\r\nvar totalQuestions = 2;\r\n\r\nvar questionTxt = [\r\n    \"For each assignment, rank the syntax* difficulty required on a scale from 1 to 5.\", //Q1\r\n    \"For each assignment, rank the conceptual* difficulty required on a scale from 1 to 5.\", //Q2\r\n];\r\n\r\nvar subtitleTxt = [\r\n    \"5 being most difficult and 1 being not difficult.\", //Q1\r\n    \"5 being most difficult and 1 being not difficult.\", //Q2\r\n]\r\n\r\nvar annotationTxt = [\r\n    \"*Syntax is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'\",\r\n    \"*CONCEPTUAL? is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'\",\r\n];\r\n\r\nvar datasetName = [\r\n    \"Syntax Difficulty\",\r\n    \"Conceptual Difficulty\",\r\n]\r\n\r\n// Export is an important inclusion if we want to call from another function\r\nfunction resetQuestions() {\r\n    currQuestion = 1;\r\n    //currQuestion = localStorage.setItem('currQuestion', currQuestion);\r\n}\r\n\r\nfunction getQuestionNumber() {\r\n    return currQuestion;\r\n}\r\n\r\nfunction getQuestionTxt() {\r\n    console.log(\"DATA.js: currQuestion:\", currQuestion);\r\n    return questionTxt[currQuestion-1]; \r\n}\r\n\r\nfunction getSubtitleTxt() {\r\n    return subtitleTxt[currQuestion-1]; \r\n}\r\n\r\nfunction getAnnotationTxt() {\r\n    return annotationTxt[currQuestion-1];\r\n}\r\n\r\nfunction getDatasetName() {\r\n    return datasetName[currQuestion-1];\r\n}\r\n\r\nfunction goToNextQuestion() {\r\n    // If there is another question\r\n    if(currQuestion < totalQuestions) {\r\n        // move to that question\r\n        currQuestion++;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://yoderprototype/./source/data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/data.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
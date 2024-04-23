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

/***/ "./source/data.js":
/*!************************!*\
  !*** ./source/data.js ***!
  \************************/
/***/ (() => {

eval("/*\r\n\r\n* Manages data - updates \r\n* Interacts with the controller\r\n\r\n*/\r\n\r\nvar currQuestion = localStorage.getItem('currQuestion') || 1;\r\nvar totalQuestions = 2;\r\n\r\nvar questionTxt = [\r\n    \"For each assignment, rank the syntax* difficulty required on a scale from 1 to 5.\", //Q1\r\n    \"For each assignment, rank the conceptual* difficulty required on a scale from 1 to 5.\", //Q2\r\n];\r\n\r\nvar subtitleTxt = [\r\n    \"5 being most difficult and 1 being not difficult.\", //Q1\r\n    \"5 being most difficult and 1 being not difficult.\", //Q2\r\n]\r\n\r\nvar annotationTxt = [\r\n    \"*Syntax is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'\",\r\n    \"*CONCEPTUAL? is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'\",\r\n];\r\n\r\nfunction getQuestionTxt() {\r\n    return questionTxt[currQuestion-1]; \r\n}\r\n\r\nfunction getSubtitleTxt() {\r\n    return subtitleTxt[currQuestion-1]; \r\n}\r\n\r\nfunction getAnnotationTxt() {\r\n    return annotationTxt[currQuestion-1];\r\n}\r\n\r\nfunction goToNextQuestion() {\r\n    if(currQuestion < totalQuestions) {\r\n        currQuestion++;\r\n        currQuestion = localStorage.setItem('currQuestion', currQuestion);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://yoderprototype/./source/data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/data.js"]();
/******/ 	
/******/ })()
;
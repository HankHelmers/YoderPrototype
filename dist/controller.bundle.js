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

/***/ "./source/chart.js":
/*!*************************!*\
  !*** ./source/chart.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderChart: () => (/* binding */ renderChart),\n/* harmony export */   saveAndResetChartData: () => (/* binding */ saveAndResetChartData)\n/* harmony export */ });\n/*\r\n\r\n* Provides the definition of Chart.js\r\n* Manages I/O with Database & Chart interactions\r\n\r\n*/\r\n\r\n//////////////////////////////////// INPUTS\r\n\r\n// Chart settings\r\nvar type = \"Categorical Rating\"\r\nvar questionId = 1;\r\nvar questionTotal = 2;\r\n\r\n// X Axes Categories\r\nvar xLabels = ['Twelve Problems', '2D Array', 'Hashmap', 'HW Quiz'] // X Axis Categories\r\nvar xFontSize = 10;\r\n\r\n// Y Axis Settings\r\nvar yLabel = \"Syntax Difficulty\"\r\nvar yMax = 5;\r\nvar yMin = 0;\r\nvar yStepsize = 1;\r\n\r\nvar pointRadius = 20;\r\n\r\n//////////////////////////////////// Setup Chart\r\nconsole.log(\"hello from chart.js\");\r\n\r\nvar myChart;        // GLOBAL REFERENCE TO DEFINED CHART \r\nvar inputCnt = 0;\r\nconst INPUT_MAX = 4;\r\n\r\n/*\r\nHow to call for data\r\n* 'data' is global reference to chart's data\r\n\r\n* data.datasets[0] - Dataset that creates the 0..5 with steps and \r\n                     adds the labels for the problems @ bottom\r\n\r\n* data.datasets[1] - Inputted clicks from the user\r\n    returns [input1, input2, input3, input4] where each input corresponds\r\n                     to the same indexed question\r\n*/\r\nconst data = {\r\n    labels: xLabels,\r\n\r\n    datasets: [{\r\n        type: 'bar',\r\n        label: 'Bar Dataset',\r\n        font: {\r\n            size: 0,\r\n        },\r\n        data: [0, 0, 0, 0],\r\n        pointRadius: pointRadius,\r\n    },\r\n\r\n    // datasets[1] -- syntax difficulty\r\n    {\r\n        type: 'scatter',\r\n        label: yLabel,\r\n        data: [],\r\n        pointRadius: pointRadius,\r\n    },\r\n    ],\r\n};\r\n\r\n// Chart Config \r\nconst config = {\r\n    data,\r\n    options: {\r\n        scales: {\r\n            x: {\r\n                ticks: {\r\n                    font: {\r\n                        size: xFontSize,\r\n                    }\r\n                }\r\n            },\r\n            y: {\r\n                max: yMax,\r\n                min: yMin,\r\n                ticks: {\r\n                    stepSize: yStepsize,\r\n                }\r\n            }\r\n        },\r\n\r\n        plugins: {\r\n            legend: {\r\n                labels: {\r\n                    // Legend font-size, not labels\r\n                    // font: {\r\n                    //     size: 14\r\n                    // },\r\n                    usePointStyle: true,\r\n                },\r\n                tooltip: {\r\n                    font: {\r\n                        size: 1\r\n                    }\r\n                }\r\n            },\r\n        },\r\n\r\n        // When Chart is Clicked\r\n        onClick(e) { chartOnClick(e) },\r\n    }\r\n};\r\n\r\n// Handles when the chart is clicked \r\n// Based on global reference to myChart\r\nfunction chartOnClick(e) {\r\n    // coordinates of click relative to canvas\r\n    const { x, y } = Chart.helpers.getRelativePosition(e, myChart);\r\n    // can also use const x = e.native.offsetX, y = e.native.offsetY;\r\n\r\n    // get values relative to chart axes\r\n    const dataX = Math.round(myChart.scales.x.getValueForPixel(x) * 100) / 100;\r\n    const dataY = Math.round(myChart.scales.y.getValueForPixel(y) * 100) / 100;\r\n\r\n    console.log(dataX, dataY)\r\n\r\n    addPoint(dataX, dataY);\r\n}\r\n\r\n// Adds a point to the chart \r\n// Based on global reference to myChart\r\nfunction addPoint(dataX, dataY) {\r\n    // { x: dataX, y: dataY }\r\n\r\n    myChart.config.data.datasets[1].data[dataX] = dataY;\r\n\r\n    console.log(isChartFilled());\r\n\r\n    if (isChartFilled()) {\r\n        document.getElementById('nextBtn').removeAttribute(\"hidden\");\r\n    }\r\n\r\n    // ADD QUESTION X DATA TO DATASET\r\n\r\n    myChart.update();\r\n}\r\n\r\nfunction isChartFilled() {\r\n    var dataset = myChart.config.data.datasets[1]\r\n    var isFilled = true;\r\n\r\n    for(var i = 0; i < xLabels.length; i++) {\r\n        isFilled = isFilled && dataset.data[i] != null; \r\n    }\r\n    \r\n    return isFilled;\r\n}\r\n\r\n// Called from controller.js @ START \r\n// Sets the global reference\r\nfunction renderChart() {\r\n    myChart = new Chart(document.getElementById('myChart'), config);\r\n}\r\n\r\n// Called from data.js when ready to move\r\nfunction saveAndResetChartData() {\r\n    console.log(\"CHART.JS: Save data \" + data.datasets[1].data);\r\n    data.datasets[1].data = [];\r\n    myChart.update();\r\n}\r\n\n\n//# sourceURL=webpack://yoderprototype/./source/chart.js?");

/***/ }),

/***/ "./source/controller.js":
/*!******************************!*\
  !*** ./source/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./source/data.js\");\n/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ \"./source/chart.js\");\n/*\r\n\r\n* interacts with the model\r\n* recieves & updates view\r\n\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    console.log(\"Page reloaded\");\r\n    // DATA.js - Reset & prepare question\r\n    (0,_data__WEBPACK_IMPORTED_MODULE_0__.resetQuestions)();\r\n\r\n    // CHART.js - renderChart\r\n    (0,_chart__WEBPACK_IMPORTED_MODULE_1__.renderChart)();\r\n\r\n    // View - Populate HTML view\r\n    populatePageInfo();\r\n});\r\n\r\nfunction populatePageInfo() {\r\n    console.log(\"populatePageInfo\" + (0,_data__WEBPACK_IMPORTED_MODULE_0__.getQuestionNumber)());\r\n\r\n    document.getElementById(\"nextBtn\").onclick = moveToNextQuestion;\r\n\r\n    document.getElementById(\"questionNumber\").innerText = \"Question \" + (0,_data__WEBPACK_IMPORTED_MODULE_0__.getQuestionNumber)();\r\n    document.getElementById(\"questionTxt\").innerText = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getQuestionTxt)();\r\n    document.getElementById(\"subtitleTxt\").innerText = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getSubtitleTxt)();\r\n    document.getElementById(\"annotationTxt\").innerText = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getAnnotationTxt)();\r\n}\r\n\r\n// Called from next question button\r\nfunction moveToNextQuestion() {\r\n\r\n    document.getElementById('nextBtn').hidden = true;\r\n\r\n    // DATA.js UPDATE\r\n    // go to next question in data\r\n    (0,_data__WEBPACK_IMPORTED_MODULE_0__.goToNextQuestion)();\r\n\r\n    // CHART.js UPDATE\r\n    // save chart data & reset chart\r\n    (0,_chart__WEBPACK_IMPORTED_MODULE_1__.saveAndResetChartData)();\r\n\r\n    populatePageInfo();\r\n}\n\n//# sourceURL=webpack://yoderprototype/./source/controller.js?");

/***/ }),

/***/ "./source/data.js":
/*!************************!*\
  !*** ./source/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAnnotationTxt: () => (/* binding */ getAnnotationTxt),\n/* harmony export */   getDatasetName: () => (/* binding */ getDatasetName),\n/* harmony export */   getQuestionNumber: () => (/* binding */ getQuestionNumber),\n/* harmony export */   getQuestionTxt: () => (/* binding */ getQuestionTxt),\n/* harmony export */   getSubtitleTxt: () => (/* binding */ getSubtitleTxt),\n/* harmony export */   goToNextQuestion: () => (/* binding */ goToNextQuestion),\n/* harmony export */   resetQuestions: () => (/* binding */ resetQuestions)\n/* harmony export */ });\n/*\r\n\r\n* Manages data - updates \r\n* Interacts with the controller\r\n\r\n*/\r\n\r\nconsole.log(\"Hello from data.js\")\r\n\r\nvar currQuestion = 0;\r\nvar totalQuestions = 2;\r\n\r\nvar questionTxt = [\r\n    \"For each assignment, rank the syntax* difficulty required on a scale from 1 to 5.\", //Q1\r\n    \"For each assignment, rank the conceptual* difficulty required on a scale from 1 to 5.\", //Q2\r\n];\r\n\r\nvar subtitleTxt = [\r\n    \"5 being most difficult and 1 being not difficult.\", //Q1\r\n    \"5 being most difficult and 1 being not difficult.\", //Q2\r\n]\r\n\r\nvar annotationTxt = [\r\n    \"*Syntax is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'\",\r\n    \"*CONCEPTUAL? is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'\",\r\n];\r\n\r\nvar datasetName = [\r\n    \"Syntax Difficulty\",\r\n    \"Conceptual Difficulty\",\r\n]\r\n\r\n// Export is an important inclusion if we want to call from another function\r\nfunction resetQuestions() {\r\n    currQuestion = 1;\r\n    //currQuestion = localStorage.setItem('currQuestion', currQuestion);\r\n}\r\n\r\nfunction getQuestionNumber() {\r\n    return currQuestion;\r\n}\r\n\r\nfunction getQuestionTxt() {\r\n    console.log(\"DATA.js: currQuestion:\", currQuestion);\r\n    return questionTxt[currQuestion-1]; \r\n}\r\n\r\nfunction getSubtitleTxt() {\r\n    return subtitleTxt[currQuestion-1]; \r\n}\r\n\r\nfunction getAnnotationTxt() {\r\n    return annotationTxt[currQuestion-1];\r\n}\r\n\r\nfunction getDatasetName() {\r\n    return datasetName[currQuestion-1];\r\n}\r\n\r\nfunction goToNextQuestion() {\r\n    // If there is another question\r\n    if(currQuestion < totalQuestions) {\r\n        // move to that question\r\n        currQuestion++;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://yoderprototype/./source/data.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./source/controller.js");
/******/ 	
/******/ })()
;
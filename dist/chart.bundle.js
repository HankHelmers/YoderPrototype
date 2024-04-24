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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderChart: () => (/* binding */ renderChart),\n/* harmony export */   saveAndResetChartData: () => (/* binding */ saveAndResetChartData)\n/* harmony export */ });\n/*\r\n\r\n* Provides the definition of Chart.js\r\n* Manages I/O with Database & Chart interactions\r\n\r\n*/\r\n\r\n//////////////////////////////////// INPUTS\r\n\r\n// Chart settings\r\nvar type = \"Categorical Rating\"\r\nvar questionId = 1;\r\nvar questionTotal = 2;\r\n\r\n// X Axes Categories\r\nvar xLabels = ['Twelve Problems', '2D Array', 'Hashmap', 'HW Quiz'] // X Axis Categories\r\nvar xFontSize = 10;\r\n\r\n// Y Axis Settings\r\nvar yLabel = \"Syntax Difficulty\"\r\nvar yMax = 5;\r\nvar yMin = 0;\r\nvar yStepsize = 1;\r\n\r\nvar pointRadius = 20;\r\n\r\n//////////////////////////////////// Setup Chart\r\nconsole.log(\"hello from chart.js\");\r\n\r\nvar myChart;        // GLOBAL REFERENCE TO DEFINED CHART \r\nvar inputCnt = 0;\r\nconst INPUT_MAX = 4;\r\n\r\n/*\r\nHow to call for data\r\n* 'data' is global reference to chart's data\r\n\r\n* data.datasets[0] - Dataset that creates the 0..5 with steps and \r\n                     adds the labels for the problems @ bottom\r\n\r\n* data.datasets[1] - Inputted clicks from the user\r\n    returns [input1, input2, input3, input4] where each input corresponds\r\n                     to the same indexed question\r\n*/\r\nconst data = {\r\n    labels: xLabels,\r\n\r\n    datasets: [{\r\n        type: 'bar',\r\n        label: 'Bar Dataset',\r\n        font: {\r\n            size: 0,\r\n        },\r\n        data: [0, 0, 0, 0],\r\n        pointRadius: pointRadius,\r\n    },\r\n\r\n    // datasets[1] -- syntax difficulty\r\n    {\r\n        type: 'scatter',\r\n        label: yLabel,\r\n        data: [],\r\n        pointRadius: pointRadius,\r\n    },\r\n    ],\r\n};\r\n\r\n// Chart Config \r\nconst config = {\r\n    data,\r\n    options: {\r\n        scales: {\r\n            x: {\r\n                ticks: {\r\n                    font: {\r\n                        size: xFontSize,\r\n                    }\r\n                }\r\n            },\r\n            y: {\r\n                max: yMax,\r\n                min: yMin,\r\n                ticks: {\r\n                    stepSize: yStepsize,\r\n                }\r\n            }\r\n        },\r\n\r\n        plugins: {\r\n            legend: {\r\n                labels: {\r\n                    // Legend font-size, not labels\r\n                    // font: {\r\n                    //     size: 14\r\n                    // },\r\n                    usePointStyle: true,\r\n                },\r\n                tooltip: {\r\n                    font: {\r\n                        size: 1\r\n                    }\r\n                }\r\n            },\r\n        },\r\n\r\n        // When Chart is Clicked\r\n        onClick(e) { chartOnClick(e) },\r\n    }\r\n};\r\n\r\n// Handles when the chart is clicked \r\n// Based on global reference to myChart\r\nfunction chartOnClick(e) {\r\n    // coordinates of click relative to canvas\r\n    const { x, y } = Chart.helpers.getRelativePosition(e, myChart);\r\n    // can also use const x = e.native.offsetX, y = e.native.offsetY;\r\n\r\n    // get values relative to chart axes\r\n    const dataX = Math.round(myChart.scales.x.getValueForPixel(x) * 100) / 100;\r\n    const dataY = Math.round(myChart.scales.y.getValueForPixel(y) * 100) / 100;\r\n\r\n    console.log(dataX, dataY)\r\n\r\n    addPoint(dataX, dataY);\r\n}\r\n\r\n// Adds a point to the chart \r\n// Based on global reference to myChart\r\nfunction addPoint(dataX, dataY) {\r\n    // { x: dataX, y: dataY }\r\n\r\n    myChart.config.data.datasets[1].data[dataX] = dataY;\r\n    inputCnt = (inputCnt >= 4) ? 4 : inputCnt + 1;\r\n\r\n    console.log(inputCnt);\r\n\r\n    if (inputCnt >= 4) {\r\n        document.getElementById('nextBtn').removeAttribute(\"hidden\")\r\n    }\r\n\r\n    // ADD QUESTION X DATA TO DATASET\r\n\r\n    myChart.update();\r\n}\r\n\r\n// Called from controller.js @ START \r\n// Sets the global reference\r\nfunction renderChart() {\r\n    myChart = new Chart(document.getElementById('myChart'), config);\r\n}\r\n\r\n// Called from data.js when ready to move\r\nfunction saveAndResetChartData() {\r\n    console.log(\"CHART.JS: Save data \" + data.datasets[1].data);\r\n    data.datasets[1].data = [];\r\n    myChart.update();\r\n}\r\n\n\n//# sourceURL=webpack://yoderprototype/./source/chart.js?");

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
/******/ 	__webpack_modules__["./source/chart.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
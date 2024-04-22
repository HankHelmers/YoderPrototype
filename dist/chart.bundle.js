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

/***/ "./source/chart.js":
/*!*************************!*\
  !*** ./source/chart.js ***!
  \*************************/
/***/ (() => {

eval("/*\r\n\r\n* Provides the definition of Chart.js\r\n* Manages I/O with Database & Chart interactions\r\n\r\n*/\r\n\r\n\r\n//////////////////////////////////// INPUTS\r\n\r\nfunction populatePageInfo(title, subtitle) {\r\n\r\n    console.log(\"populatePageInfo\");\r\n}\r\n\r\n// Chart settings\r\nvar type = \"Categorical Rating\"\r\nvar questionId = 1;\r\nvar questionTotal = 2;\r\n\r\n// X Axes Categories\r\nvar xLabels = ['Twelve Problems', '2D Array', 'Hashmap', 'HW Quiz'] // X Axis Categories\r\nvar xFontSize = 10;\r\n\r\n// Y Axis Settings\r\nvar yLabel = \"Syntax Difficulty\"  \r\nvar yMax = 5;\r\nvar yMin = 0;\r\nvar yStepsize = 1;\r\n\r\nvar pointRadius = 20;\r\n\r\n\r\n//////////////////////////////////// Setup Chart\r\nconsole.log(\"hello from chart.js\");\r\n\r\nvar inputCnt = 0;\r\nconst INPUT_MAX = 4;\r\n  \r\nconst data = {\r\n    labels: xLabels,\r\n\r\n    datasets: [{\r\n        type: 'bar',\r\n        label: 'Bar Dataset',\r\n        font: {\r\n            size: 0,\r\n        },\r\n        data: [0, 0, 0, 0],\r\n        pointRadius: pointRadius,\r\n    },\r\n    // datasets[1] -- syntax difficulty\r\n    {\r\n        type: 'scatter',\r\n        label: yLabel,\r\n        data: [],\r\n        pointRadius: pointRadius,\r\n    },\r\n    ],\r\n};\r\n\r\n// config \r\nconst config = {\r\n    data,\r\n    options: {\r\n        scales: {\r\n            x: {\r\n                ticks: {\r\n                    font: {\r\n                        size: xFontSize,\r\n                    }\r\n                }\r\n            },\r\n            y: {\r\n                max: yMax,\r\n                min: yMin,\r\n                ticks: {\r\n                    stepSize: yStepsize,\r\n                }\r\n            }\r\n        },\r\n\r\n        plugins: {\r\n            legend: {\r\n                labels: {\r\n                    // Legend font-size, not labels\r\n                    // font: {\r\n                    //     size: 14\r\n                    // },\r\n                    usePointStyle: true,\r\n                },\r\n                tooltip: {\r\n                    font: {\r\n                        size: 1\r\n                    }\r\n                }\r\n            },\r\n        },\r\n\r\n        // When Chart is Clicked\r\n        onClick(e) { chartOnClick(e) },\r\n    }\r\n};\r\n\r\n\r\n// render init block\r\nconst myChart = new Chart(\r\n    document.getElementById('myChart'),\r\n    config\r\n);\r\n\r\n\r\n// Handles when the chart is clicked\r\nfunction chartOnClick(e) {\r\n    // coordinates of click relative to canvas\r\n    const { x, y } = Chart.helpers.getRelativePosition(e, myChart);\r\n    // can also use const x = e.native.offsetX, y = e.native.offsetY;\r\n\r\n    // get values relative to chart axes\r\n    const dataX = Math.round(myChart.scales.x.getValueForPixel(x) * 100) / 100;\r\n    const dataY = Math.round(myChart.scales.y.getValueForPixel(y) * 100) / 100;\r\n\r\n    console.log(dataX, dataY)\r\n\r\n    addPoint(dataX, dataY);\r\n}\r\n\r\n// Adds a point to the chart \r\nfunction addPoint(dataX, dataY) {\r\n    // { x: dataX, y: dataY }\r\n\r\n    myChart.config.data.datasets[1].data[dataX] = dataY;\r\n    inputCnt = (inputCnt >= 4) ? 4 : inputCnt + 1;\r\n\r\n    console.log(inputCnt);\r\n\r\n    if (inputCnt >= 4) {\r\n        var btnId = 'nextBtn';\r\n        // At the last question, review the submit btn\r\n        if(questionId == questionTotal) {\r\n            btnId = 'submitBtn'; \r\n        }\r\n        document.getElementById(btnId).removeAttribute(\"hidden\")\r\n    }\r\n\r\n    // ADD QUESTION X DATA TO DATASET\r\n\r\n    myChart.update();\r\n}\r\n\r\n\r\n// submitBtn pressed\r\nfunction submitBtnPressed() {\r\n    // only pressable on the last question\r\n}\r\n\n\n//# sourceURL=webpack://yoderprototype/./source/chart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/chart.js"]();
/******/ 	
/******/ })()
;
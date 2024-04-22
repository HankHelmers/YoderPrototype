/*

* Provides the definition of Chart.js
* Manages I/O with Database & Chart interactions

*/


//////////////////////////////////// INPUTS

// Chart settings
var type = "Categorical Rating"
var questionId = 1;
var questionTotal = 2;

// X Axes Categories
var xLabels = ['Twelve Problems', '2D Array', 'Hashmap', 'HW Quiz'] // X Axis Categories
var xFontSize = 10;

// Y Axis Settings
//var yLabel = "Syntax Difficulty"
var yMax = 5;
var yMin = 0;
var yStepsize = 1;

var pointRadius = 20;



//////////////////////////////////// Setup Chart
console.log("hello from chart.js");

var inputCnt = 0;
const INPUT_MAX = 4;

function defineChart(yLabel) {
    const data = {
        labels: xLabels,

        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            font: {
                size: 0,
            },
            data: [0, 0, 0, 0],
            pointRadius: pointRadius,
        },
        // datasets[1] -- syntax difficulty
        {
            type: 'scatter',
            label: yLabel,
            data: [],
            pointRadius: pointRadius,
        },
        ],
    };

    // config 
    const config = {
        data,
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: xFontSize,
                        }
                    }
                },
                y: {
                    max: yMax,
                    min: yMin,
                    ticks: {
                        stepSize: yStepsize,
                    }
                }
            },

            plugins: {
                legend: {
                    labels: {
                        // Legend font-size, not labels
                        // font: {
                        //     size: 14
                        // },
                        usePointStyle: true,
                    },
                    tooltip: {
                        font: {
                            size: 1
                        }
                    }
                },
            },

            // When Chart is Clicked
            onClick(e) { chartOnClick(e) },
        }
    };


    // render init block
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}

// Handles when the chart is clicked
function chartOnClick(e) {
    // coordinates of click relative to canvas
    const { x, y } = Chart.helpers.getRelativePosition(e, myChart);
    // can also use const x = e.native.offsetX, y = e.native.offsetY;

    // get values relative to chart axes
    const dataX = Math.round(myChart.scales.x.getValueForPixel(x) * 100) / 100;
    const dataY = Math.round(myChart.scales.y.getValueForPixel(y) * 100) / 100;

    console.log(dataX, dataY)

    addPoint(dataX, dataY);
}

// Adds a point to the chart 
function addPoint(dataX, dataY) {
    // { x: dataX, y: dataY }

    myChart.config.data.datasets[1].data[dataX] = dataY;
    inputCnt = (inputCnt >= 4) ? 4 : inputCnt + 1;

    console.log(inputCnt);

    if (inputCnt >= 4) {
        document.getElementById('nextBtn').removeAttribute("hidden")
    }

    // ADD QUESTION X DATA TO DATASET

    myChart.update();
}

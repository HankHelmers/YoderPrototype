console.log("hello from index.js");

var inputCnt = 0;
const INPUT_MAX = 4;

// setup 
const data = {
    labels: ['Twelve Problems', '2D Array', 'Hashmap', 'HW Quiz'],
    //abels: ['January', 'February', 'March', 'April'],
    datasets: [{
        type: 'bar',
        label: 'Bar Dataset',
        data: [0, 0, 0, 0],
        pointRadius: 20,
    },
    {
        type: 'scatter',
        label: 'Syntax Difficulty',
        data: [],
        pointRadius: 20,
    },
    // {
    //     type: 'scatter',
    //     label: 'Conceptual Difficulty',
    //     data: [2, 3, 4, 4.5],
    //     pointRadius: 20,
    // },
    ],
};

// config 
const config = {
    data,
    options: {
        scales: {
            x: {
                //type: 'linear',
            },
            y: {
                max: 5,
                ticks: {
                    stepSize: 1,
                }
            }
        },

        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                }
            }
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
    inputCnt = (inputCnt >= 4) ? 4 : inputCnt+1;

    console.log(inputCnt);

    if(inputCnt >= 4) {
        document.getElementById('submitBtn').removeAttribute("hidden")
    }

    myChart.update();
}


/* Old


 
function updateChart(barvalue) {
  console.log(barvalue.value)
  myChart.config.data.datasets[0].data[0] = barvalue.value;
  myChart.update();
}

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;


*/
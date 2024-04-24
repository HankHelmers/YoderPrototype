/*

* interacts with the model
* recieves & updates view

*/

import { 
    getQuestionNumber, getQuestionTxt, getSubtitleTxt, getAnnotationTxt, 
    goToNextQuestion,
    resetQuestions,
} from './data';

import { renderChart, saveAndResetChartData } from './chart';


document.addEventListener("DOMContentLoaded", function() {
    console.log("Page reloaded");
    // DATA.js - Reset & prepare question
    resetQuestions();

    // CHART.js - renderChart
    renderChart();

    // View - Populate HTML view
    populatePageInfo();
});

function populatePageInfo() {
    console.log("populatePageInfo" + getQuestionNumber());

    document.getElementById("nextBtn").onclick = moveToNextQuestion;

    document.getElementById("questionNumber").innerText = "Question " + getQuestionNumber();
    document.getElementById("questionTxt").innerText = getQuestionTxt();
    document.getElementById("subtitleTxt").innerText = getSubtitleTxt();
    document.getElementById("annotationTxt").innerText = getAnnotationTxt();
}

// Called from next question button
function moveToNextQuestion() {

    // DATA.js UPDATE
    // go to next question in data
    goToNextQuestion();

    // CHART.js UPDATE
    // save chart data & reset chart
    saveAndResetChartData();

    populatePageInfo();
}
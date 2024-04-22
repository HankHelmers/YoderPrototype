/*

* interacts with the model
* recieves & updates view

*/

import { getQuestionTxt, getSubtitleTxt, getAnnotationTxt } from 'model.js'

function populatePageInfo() {
    console.log("populatePageInfo");

    document.getElementById("questionNumber").innerText = questionNumber;
    document.getElementById("questionTxt").innerText = questionTxt;
    document.getElementById("subtitleTxt").innerText = subtitleTxt;
    document.getElementById("annotationTxt").innerText = annotationTxt;
}
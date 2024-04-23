/*

* Manages data - updates 
* Interacts with the controller

*/

var currQuestion = localStorage.getItem('currQuestion') || 1;
var totalQuestions = 2;

var questionTxt = [
    "For each assignment, rank the syntax* difficulty required on a scale from 1 to 5.", //Q1
    "For each assignment, rank the conceptual* difficulty required on a scale from 1 to 5.", //Q2
];

var subtitleTxt = [
    "5 being most difficult and 1 being not difficult.", //Q1
    "5 being most difficult and 1 being not difficult.", //Q2
]

var annotationTxt = [
    "*Syntax is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'",
    "*CONCEPTUAL? is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'",
];

function getQuestionTxt() {
    return questionTxt[currQuestion-1]; 
}

function getSubtitleTxt() {
    return subtitleTxt[currQuestion-1]; 
}

function getAnnotationTxt() {
    return annotationTxt[currQuestion-1];
}

function goToNextQuestion() {
    if(currQuestion < totalQuestions) {
        currQuestion++;
        currQuestion = localStorage.setItem('currQuestion', currQuestion);
    }
}

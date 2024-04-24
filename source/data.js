/*

* Manages data - updates 
* Interacts with the controller

*/

console.log("Hello from data.js")

var currQuestion = 0;
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

var datasetName = [
    "Syntax Difficulty",
    "Conceptual Difficulty",
]

// Export is an important inclusion if we want to call from another function
export function resetQuestions() {
    currQuestion = 1;
    //currQuestion = localStorage.setItem('currQuestion', currQuestion);
}

export function getQuestionNumber() {
    return currQuestion;
}

export function getQuestionTxt() {
    console.log("DATA.js: currQuestion:", currQuestion);
    return questionTxt[currQuestion-1]; 
}

export function getSubtitleTxt() {
    return subtitleTxt[currQuestion-1]; 
}

export function getAnnotationTxt() {
    return annotationTxt[currQuestion-1];
}

export function getDatasetName() {
    return datasetName[currQuestion-1];
}

export function goToNextQuestion() {
    // If there is another question
    if(currQuestion < totalQuestions) {
        // move to that question
        currQuestion++;
    }
}

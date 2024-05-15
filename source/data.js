/*

* Manages data - updates 
* Interacts with the controller

*/

console.log("Hello from data.js")

var currQuestionIndex = 0;
var totalQuestions = 2;

var questionTxt = [
    "For each assignment, rank the syntax* difficulty required on a scale from 1 to 5.", //Q1
    "For each assignment, rank the conceptual difficulty required on a scale from 1 to 5.", //Q2
];

var subtitleTxt = [
    "5 being most difficult and 1 being not difficult.", //Q1
    "5 being most difficult and 1 being not difficult.", //Q2
]

var annotationTxt = [
    "*Syntax is defined as, 'rules that define the combinations of symbols that are considered to be correctly structured statements or expressions in that (programming) language.'",
    "",
];

var datasetName = [
    "Syntax Difficulty",
    "Conceptual Difficulty",
]

var datasetColor = [
    '#9BD0F5',
    '#FFB1C1'
]

var dataset = [];

// Export is an important inclusion if we want to call from another function
export function resetQuestions() {
    currQuestionIndex = 0;
}

export function getQuestionNumber() {
    return (currQuestionIndex+1);
}

export function getQuestionTxt() {
    console.log("(DATA.js) currQuestionIndex:", currQuestionIndex);
    return questionTxt[currQuestionIndex]; 
}

export function getSubtitleTxt() {
    return subtitleTxt[currQuestionIndex]; 
}

export function getAnnotationTxt() {
    return annotationTxt[currQuestionIndex];
}

export function getDatasetName() {
    return datasetName[currQuestionIndex];
}

export function getDatasetColor() {
    return datasetColor[currQuestionIndex];
}

export function goToNextQuestion() {
    // If there is another question
  
    // move to that question
    if(currQuestionIndex+1 == totalQuestions) {
        // completed survey
        completeSurvey();
    } else {
        currQuestionIndex++;
    }
}


/*
FIREBASE INTERACTIONS
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    //getDocs,
    addDoc,
    //onSnapshot,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlo37AEIyiacdh57NpuZVdYF-hPF9lf4E",
  authDomain: "csse220-survey-prototype.firebaseapp.com",
  projectId: "csse220-survey-prototype",
  storageBucket: "csse220-survey-prototype.appspot.com",
  messagingSenderId: "908571735702",
  appId: "1:908571735702:web:d357d8b7115faad27bb4b7",
  measurementId: "G-8R390H99M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// collection ref
const colRef = collection(db, "responses");

export function saveDataFromChart(inputPositions) {
    dataset[currQuestionIndex-1] = inputPositions;

    console.log("(DATA.JS) SAVE DATA TO DATABASE; currQuestionIndex-1 - " + (currQuestionIndex-1) + "; dataset: " + dataset[currQuestionIndex-1])

    // WORKS but currently have to put in proper security rules 
    // Only after completing all questions
}

export function completeSurvey() {
    console.log("(DATA.JS) Completed all questions")
        
    addDoc(colRef, {
        //key: keys,
        data: dataset,
        circle_size: 20,
      }).then(() => {
        console.log("(DATA.JS) Saved Successfully");
        //location.href = "thankyou.html";
      });
}
  
/*

* Manages data - updates 
* Interacts with the controller

*/

console.log("Hello from data.js")

var currQuestion = 0;
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



// Export is an important inclusion if we want to call from another function
export function resetQuestions() {
    currQuestion = 1;
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

export function getDatasetColor() {
    return datasetColor[currQuestion-1];
}

export function goToNextQuestion() {
    // If there is another question
    if(currQuestion < totalQuestions) {
        // move to that question
        currQuestion++;
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

export function saveDataFromChart(inputPositions, pointSize) {
    var userId = generateUserId();
    
    console.log("(DATA.JS) SAVE DATA TO DATABASE: " + inputPositions)

    // WORKS but currently have to put in proper security rules 
    addDoc(colRef, {
        userId: "TEST",
        //key: keys,
        data: inputPositions,
        circle_size: pointSize,
      }).then(() => {
        console.log("(DATA.JS) Saved Successfully");
        //location.href = "thanks.html"
      });

}


function generateUserId() {
    return Math.round(Math.random()*100000);
}
  
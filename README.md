# Homeplace for developing "YoderPrototype," which is a proof of concept visual surveying tool for quick surveying
## Stages of development
* Consent-form-prototype-1.0
Creating the frontend view point of displaying the consent form to the user.

* yoder-chart-prototype-1.1
Creating the initial chart interactions of inputting 4 data points related to 4 homework questions

* yoder-multiple-questions-prototype-1.2
The initial attempt was to add a second question using a second HTML page. Updated in the next stage to be based on a dataset that included the questions instead, utilizing the MVC development model to switch between questions.

* yoder-mvc-1.3
MVC implementation for multiple of the same type of chart questions asked in sequence. Question data is hardcoded into a data.js, which is interfaces with controller.js and chart.js to control interactions with Chart.js library.

## yoder-mvc-1.3
Need to do:
* Change the "Syntax Difficulty" tag when moving from question to question
* Save data into a dataset when we get to the last question
* 
04/23/24 Update
Developed for 1:30 hours
* Connected the core functionality of MVC - controller.js, data.js & chart.js
* Refactored each part to load when the page loads - resetQuestions (data), renderChart (chart) & populatePageInfo (view)
* Created function to move to the next question in the controller, connected with all the appropriate functionalities in data & chart.

* Learned how to import functions in between javascripts
* Reviewed how myChart acts like an object with functions and values to edit and call from.


## Yoder-chart-prototype
April 10th, 2024

Initial formating of user input for Dr. Yoder question.

## Consent-form-prototype
March 20th, 2024

Initial format of distributing consent forms at the beginning of surveys. 

Viewable @ [Consent Form Prototype](https://consent-form-prototype.web.app/)

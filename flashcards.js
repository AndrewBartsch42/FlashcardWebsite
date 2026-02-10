// TODO: Code a program header with a summary, author's FULL name, date, and GitHub repository URL
"use strict";

// declare two arrays for the questions and answers
const questions = [];
const answers = [];

/*
Two global script variables used during quiz mode:
1) currentIndex for keeping track of which question is being displayed
2) displayAnswer used during the quiz phase to only show the answer after first displaying the question
 */
let currentIndex = 0;
let displayAnswer = false;

/*
Create DOM references for all the DOM elements that have ids
use getElementById() which is the safest default (slightly faster)
instead of using querySelector() for advanced selection like CSS selector support
*/
const command = document.getElementById("command"); // add, list, quiz, clear
const commandError = document.getElementById("commandError");

const question = document.getElementById("question");
const questionError = document.getElementById("questionError");

const answer = document.getElementById("answer");
const answerError = document.getElementById("answerError");

const output = document.getElementById("output"); // display output to the user

const form = document.getElementById("flashcardForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default form button behavior

    // clear all errors from the previous submit
    commandError.textContent = "";
    questionError.textContent = "";
    answerError.textContent = "";
    output.textContent = "";

    /* TODO: Finish me
     - use a switch to run the appropriate function based on the command.value
     - use a default block to display an "Unknown command" error using the commandError
     - NOTE: for "add" pass the question and answer trim value to the addCard function
     */
    let inputCommand = command.value
    switch(inputCommand){
        case("add"):
            addCard(question.value.trim(), answer.value.trim());
            break;
        case ("list"):
            listCards();
            break;
        case ("quiz"):
            quiz();
            break;
        case ("clear"):
            clearCards();
            break;
        case ("load_default"):
            loadDefault();
            break;
        default:
            commandError.textContent = "Invalid Command";
    }
        
});

/**
 * Verify that both the question and answer contain a values using a boolean comparison
 * and if they are empty then display the error message(s) and return
 * make sure the first character of the question and answer are capitalized using the function
 * make sure the question ends with a question mark
 * add the question and answer to the arrays
 * display the question #, question, and answer in the output area
 *
 * @param question the input question trimmed value
 * @param answer the input answer trimmed value
 */
function addCard(input_question, input_answer) {
    let dataValidationError = false;
    if (input_question == ""){
        questionError.textContent = "Required Field"
        dataValidationError = true;
    }
    if (input_answer == ""){
        answerError.textContent = "Required Field"
        dataValidationError = true;
    }

    if (dataValidationError == false){
        questions.push(isQuestion(input_question));
        answers.push(input_answer);
    }
}

/**
 * Set the question and answer input fields to an empty string using textContent
 * If there are no questions, display an error message in the output area
 * Define a string that says "All cards:\n"
 * using a for...in display the card #, question (do not display the answer)
 * NOTE: the first card should display #1 instead #0
 */
function listCards() {
    if (questions.length == 0){
        output.textContent = "No questions in list"
    } else{
        let questionList = ""
        for(var i = 0; i < questions.length; i++)
            questionList += questions.at(i) + "\n";
        output.textContent = "All cards: \n" + questionList
    }
}

/**
 * Set the question and answer input fields to an empty string using textContent
 * Clear the current questions and answers using the function
 * and then load a few default questions and answers
 * and display how many questions were loaded in the output area
 */
function loadDefault() {
    // TODO: Finish me
}

/**
 * Set the question and answer input fields to an empty string using textContent
 * if there are no questions, display an error in the output area and return
 * if displayAnswer is true then
 *    display the card #, question, and answer using the currentIndex variable
 *    and tell the user to Press run to see the answer
 *    NOTE: the first card should display #1 not #0
 *    set displayAnswer to false
 *    increment currentIndex
 *    if currentIndex is equal to the array's length and reset back to 0
 * else
 *    only display the card # and current question to the output area
 *    and tell the user to Press run to see the next question
 *    NOTE: the first card should display #1 not #0
 *    set displayAnswer to true
  */
function showNextCard() {
    // TODO: Finish me
}

/**
 * Set the question and answer input fields to an empty string using textContent
 * clear the question and answer fields
 * clear all arrays by setting the length to 0
 * reset currentIndex to 0
 * display "All cards cleared." to the output area
 */
function clearCards() {
    for(var i = 0; i < questions.length; i++){
        questions.pop();
    }
    output.textContent = "All cards cleared";
}

/**
 * if !str then return the str unchanged
 * else using method chaining charAt, toUpperCase, slice
 * @param str the user's input for question or answer
 * @returns {*|string} where the first letter is uppercased
 */
function capitalizeFirstChar(str) {
    // TODO: Finish me
    if (!str){
        return str
    }
    else{
    //https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
        return String(str).charAt(0).toUpperCase() + String(str).slice(1);
    }
}


function isQuestion(str) {
    if(String(str).charAt(str.length - 1) == "?"){
        return capitalizeFirstChar(str);
    }
    else{
        return capitalizeFirstChar(str) + "?";
    }
}

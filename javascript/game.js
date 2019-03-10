/*
 * Author: Suki Sahota
 * Description: Questions Game
 */
const questions = [
    { q: "There are 12 inches in a foot.", a: "t" },
    { q: "There are 33.7 fluid ounces in a litre.", a: "f" },
    { q: "There are 27 letters in the english alphabet.", a: "f" },
    { q: "#2 pencils are acceptable for test taking in the U.S.", a: "t" },
    { q: "San Francisco is in Silicon Valley.", a: "f" }
];

let correct = 0;
let index = 0;
let userInput;

// Method to render new question and display up-to-date score
function renderQuestion() {
    if (index < questions.length) {
        document.querySelector("#questions-text").innerHTML = questions[index].q;
        document.querySelector("#score-text").innerHTML = `Score: ${ correct }`;
    }
    else {
        document.querySelector("#questions-text").innerHTML = "Game Over!";
        document.querySelector("#score-text").innerHTML = `Final Score: ${ correct } out of ${ questions.length }.`;
        if (correct === 5) {
            document.querySelector("#userprompt-text").innerHTML = "Wow! You got a perfect score."
        } else {
            document.querySelector("#userprompt-text").innerHTML = "Thanks for playing, stay hungry"
        }
    }
}

// Call renderQuestion method to produce first question
renderQuestion();

// When a key is released, the function is executed
document.onkeyup = function(event) {
    // Exit function early if no more questions
    if (index === questions.length) {
        return;
    }
    userInput = event.key.toLowerCase();
    // User data validation
    if (userInput === "t" || userInput === "f") {
        // Correct guess
        if (userInput === questions[index].a) {
            alert("Correct!");
            correct++;
        }
        // Incorrect guess
        else {
            alert("Wrong!");
        }
        document.querySelector("#userprompt-text").innerHTML = "Please make a selection: t/f";
        // Increment index variable and produce next question from questions array
        index++;
        renderQuestion();
    }
};
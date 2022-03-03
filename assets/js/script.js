// create array of question objects
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        option1: "1. strings",
        option2: "2. booleans",
        option3: "3. alerts",
        option4: "4. numbers",
        correct: "3. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        option1: "1. quotes",
        option2: "2. curly brackets",
        option3: "3. parentheses",
        option4: "4. square brackets",
        correct: "3. parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        option1: "1. numbers and strings",
        option2: "2. other arrays",
        option3: "3. booleans",
        option4: "4. all of the above",
        correct: "4. all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        option1: "1. commas",
        option2: "2. curly brackets",
        option3: "3. quotes",
        option4: "4. parentheses",
        correct: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        option1: "1. JavaScript",
        option2: "2. terminal / bash",
        option3: "3. for loops",
        option4: "4. console.log",
        correct: "4. console.log"
    }
];

var startButton = document.querySelector(".start-button");
var timerEl = document.getElementById("time-left");
var introView = document.querySelector(".intro-view");
var questionView = document.querySelector(".question-view");
var questionEl = document.getElementById("question");
var optionsListEl = document.getElementById("options");
var optionBtns = document.querySelectorAll(".option");
var opt1 = document.querySelector(".opt1");
var opt2 = document.querySelector(".opt2");
var opt3 = document.querySelector(".opt3");
var opt4 = document.querySelector(".opt4");
var completedView = document.querySelector(".completed-view");
var finalScoreEl = document.getElementById("final-score");
var submitEl = document.querySelector("#submit");
var navBar = document.querySelector(".nav-bar");
var highscoresView = document.querySelector(".highscores-view");
var inititalsEl = document.querySelector("#initials");
var highscoresList = document.querySelector("#highscores-list");
var returnEl = document.querySelector("#return");

var isEnd = false;
var timer;
var timerCount;
var questionIndex = 0;

function startQuiz() {
    isEnd = false;
    timerCount = 75;
    questionIndex = 0;

    // hide intro view and display question view
    introView.style.display = "none";
    questionView.style.display = "block";

    // display first question
    displayNextQuestion();

    // start timer
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;

        // end quiz if end conditions are met
        if (timerCount > 0 && isEnd) {
            clearInterval(timer);
            endQuiz();
        }

        // timer runs out
        if (timerCount <= 0) {
            clearInterval(timer);
            timerEl.textContent = 0;
            timerCount = 0;
            endQuiz();
        }
    }, 1000);
}

// present next question
function displayNextQuestion() {
    console.log("Question #" + questionIndex);

    // populate elements with data from questions array
    questionEl.textContent = questions[questionIndex].question;
    opt1.textContent = questions[questionIndex].option1;
    opt2.textContent = questions[questionIndex].option2;
    opt3.textContent = questions[questionIndex].option3;
    opt4.textContent = questions[questionIndex].option4;
}

function checkAnswer(answer) {
    // if chosen answer is not correct, decrement time
    if (answer !== questions[questionIndex].correct) {
        timerCount -= 10;
        // TODO: display Wrong! on screen
    } else {
        // TODO: display Correct! on screen
        console.log("correct!");
    }

    // move on to next question or end quiz
    questionIndex++;
    if (questionIndex >= questions.length) {
        isEnd = true;
    } else {
        displayNextQuestion();
    }
}

function endQuiz() {
    console.log("Quiz ended");
    questionView.style.display = "none";
    completedView.style.display = "block";
    finalScoreEl.textContent = timerCount;
}

function addScore(event) {
    event.preventDefault();
    completedView.style.display = "none";
    navBar.style.visibility = "hidden";
    highscoresView.style.display = "block";
    
    // create new list element with initials and score
    var initials = inititalsEl.value;
    var listItemEl = document.createElement('li');
    listItemEl.textContent = initials + " - " + timerCount;
    highscoresList.append(listItemEl);

}

function returnToHome(event) {
    event.preventDefault();
    highscoresView.style.display = "none"
    navBar.style.visibility = "visible";
    introView.style.display = "block";
}

// user clicks start button to start game
startButton.addEventListener("click", startQuiz);

// adds event listeners to all answer buttons
for (i of optionBtns) {
    i.addEventListener('click', function() {
        checkAnswer(this.innerHTML);
    });
}

// save initials and score
submitEl.addEventListener("click", addScore);

// back to homepage
returnEl.addEventListener("click", returnToHome);
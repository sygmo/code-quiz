// create array of question objects
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        option1: "1. strings",
        option2: "2. booleans",
        option3: "3. alerts",
        option4: "4. numbers",
        correct: "option3"
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        option1: "1. quotes",
        option2: "2. curly brackets",
        option3: "3. parentheses",
        option4: "4. square brackets",
        correct: "option3"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        option1: "1. numbers and strings",
        option2: "2. other arrays",
        option3: "3. booleans",
        option4: "4. all of the above",
        correct: "option4"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        option1: "1. commas",
        option2: "2. curly brackets",
        option3: "3. quotes",
        option4: "4. parentheses",
        correct: "option3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        option1: "1. JavaScript",
        option2: "2. terminal / bash",
        option3: "3. for loops",
        option4: "4. console.log",
        correct: "option4"
    }
];

var startButton = document.querySelector(".start-button");
var timerEl = document.getElementById("time-left");
var introView = document.querySelector(".intro-view");
var questionView = document.querySelector(".question-view");
var questionEl = document.getElementById("question");
var optionsListEl = document.getElementById("options");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var isEnd = false;
var timer;
var timerCount;
var questionIndex = 0;

function startQuiz() {
    isEnd = false;
    timerCount = 30;
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

        // timer runs out
        if (timerCount <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function displayNextQuestion() {
    console.log("Question #" + questionIndex);

    // populate elements with data from questions array
    questionEl.textContent = questions[questionIndex].question;
    opt1.textContent = questions[questionIndex].option1;
    opt2.textContent = questions[questionIndex].option2;
    opt3.textContent = questions[questionIndex].option3;
    opt4.textContent = questions[questionIndex].option4;
}

function endQuiz() {
    console.log("Quiz ended");
}

// user clicks start button to start game
startButton.addEventListener("click", startQuiz);

// present next question

// when question answered incorrectly, subtract time from the clock

// game over when timer reaches 0

// save initials and score
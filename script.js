// Full list of questions

var masterList = [
    {
        query: "Inside which HTML element do we put the JavaScript?",
        right: "<script>",
        wrong1: "<form>",
        wrong2: "<style>",
        wrong3: "<link>",
    },
    {
        query: "How do you create a function in JavaScript?",
        right: "function myFunc(){}",
        wrong1: "var function =",
        wrong2: "myFunc (function{})",
        wrong3: "function(myFunc){}",
    },
    {
        query: "How do you start a for loop?",
        right: "for (i = 0; i < 5; i++) {}",
        wrong1: "for (i++; 5 times)",
        wrong2: "for (i < 5; i++) {}",
        wrong3: "i = 0; i < 5; i++; for {}",
    },
    {
        query: "If var colors = [\"red\" , \"blue\" , \"green\"], what is colors[2]?",
        right: "green",
        wrong1: "blue",
        wrong2: "red",
        wrong3: "colors",
    },
    {
        query: "How would you calculate a random number between 1 and 10?",
        right: "Math.floor(Math.random() * 10) + 1;",
        wrong1: "Math.floor(Math.random() * 10);",
        wrong2: "(Math.random() * 10);",
        wrong3: "Math.random(Math.floor() * 10) + 1;",
    }
]

// variable declarations and query selectors

var timeLeft = 60
var timerEl = document.querySelector("#timer");
var answerOptions = ["1", "2", "3", "4"]
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");
var question = document.querySelector("#question");
var progressEl = document.querySelector("#progress")
var tileEl = document.querySelector("#quizTile")
var statusEl = document.querySelector("#status")
var currentPerc = "0%"
var largeNumberEl = document.querySelector("#largeNumber")
var tempScore = 0
var navEl = document.querySelector("nav")

// timer function

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft

        // if the time is up or there is no more questions, end the quiz. Then, save the score and redirect to the score submit page

        if (timeLeft === 0 || i == masterList.length) {
            clearInterval(timerInterval);
            tempScore = timeLeft
            localStorage.setItem("TemporaryScore", timeLeft);
            window.location.href = "scoresubmit.html";
        }
    }, 1000);
}

// Listen for clicks anywhere on the the quiz

tileEl.addEventListener("click", function (event) {
    event.preventDefault();

    // if it is the start button, start the quiz on question 1

    if (event.target.textContent == "Start") {
        setTime();
        statusEl.textContent = "...";
        i = 0;
        newQuestion(masterList[i])
    }

    // if the user clicks answer, parse if it is correct

    if (event.target.matches(".answer")) {
        
        if (event.target.textContent == masterList[i].right) {
            statusEl.textContent = "Correct!";
            i++;
            newQuestion(masterList[i])
            setTimeout(function () { statusEl.textContent = "..."; }, 4000);
        } else {
            statusEl.textContent = "Wrong!";
            timerEl.setAttribute("style", "color : red");
            if (timeLeft > 10) {
                timeLeft -= 10
            } else {
                timeLeft = 0
            }
            i++;
            newQuestion(masterList[i])
            setTimeout(function () { statusEl.textContent = "..."; }, 2000);
            setTimeout(function () { timerEl.setAttribute("style", "color : black"); }, 2000);
        }
    }


});

// Listen for click on the high score button to redirect to the high score page

navEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.textContent == "High Scores") {
        window.location.href = "highscores.html"
    }
});

// fuction for loading new questions 

function newQuestion(x) {
    loadingPerc()
    question.textContent = x.query;

    // make a new array with possible answers

    answerOptions = [x.right, x.wrong1, x.wrong2, x.wrong3];

    // randomize the order

    answerOptions = answerOptions.sort(function (a, b) { return 0.5 - Math.random() });

    // display the ransom order

    answer1.textContent = answerOptions[0];
    answer2.textContent = answerOptions[1];
    answer3.textContent = answerOptions[2];
    answer4.textContent = answerOptions[3];
}

// function for the progress bar

function loadingPerc() {
    pastPerc = ((i - 1) / masterList.length) * 100
    currentPerc = (i / masterList.length) * 100
    var load = setInterval(frame, 15);
    function frame() {
        if (pastPerc == currentPerc) {
            clearInterval(load);
        } else {
            pastPerc++;
            progressEl.style.width = pastPerc + '%';
        }
    }
}
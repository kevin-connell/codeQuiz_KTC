var masterList = [
    {
        query: "What is your name?",
        right: "Kevin",
        wrong1: "Jim",
        wrong2: "Bob",
        wrong3: "Carol",
    },
    {
        query: "What is your age?",
        right: "24",
        wrong1: "23",
        wrong2: "22",
        wrong3: "21",
    },
    {
        query: "Where do you live?",
        right: "West Philly",
        wrong1: "Nebraska",
        wrong2: "South Philly",
        wrong3: "New York",
    },
    {
        query: "Are you stunningly gorgeous?",
        right: "Yes",
        wrong1: "Maybe",
        wrong2: "Sometimes",
        wrong3: "No",
    },
    {
        query: "What is your favorite color?",
        right: "Green",
        wrong1: "Red",
        wrong2: "Black",
        wrong3: "Brown",
    }
]

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
var progressPerc = "0%"
var largeNumberEl = document.querySelector("#largeNumber")
var tempScore = 0

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft

        if (timeLeft === 0 || i == masterList.length) {
            clearInterval(timerInterval);
            tempScore = timeLeft
            localStorage.setItem("Temporary Score", timeLeft);
            window.location.href="scoresubmit.html";
        }
    }, 1000);
}

tileEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.textContent == "Start") {
        console.log("it matches Start");
        setTime();
        statusEl.textContent = "...";
        i = 0;

        newQuestion(masterList[i])
    }
    if (event.target.matches(".answer")) {
        console.log("You clicked an answer!")
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

function newQuestion(x) {
    progressPerc = (i / masterList.length) * 100 + "%"
    progressEl.setAttribute("style", "width : " + progressPerc);
    question.textContent = x.query;
    answerOptions = [x.right, x.wrong1, x.wrong2, x.wrong3];
    console.log(answerOptions)
    answerOptions = answerOptions.sort(function (a, b) { return 0.5 - Math.random() });
    console.log(answerOptions);
    answer1.textContent = answerOptions[0];
    answer2.textContent = answerOptions[1];
    answer3.textContent = answerOptions[2];
    answer4.textContent = answerOptions[3];
}
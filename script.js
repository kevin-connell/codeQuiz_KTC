var masterList = [
    {   query: "What is your name?",
        right: "Kevin",
        wrong1: "Jim",
        wrong2: "Bob",
        wrong3: "Carol",
    },
    {   query: "What is your age?",
        right: "24",
        wrong1: "23",
        wrong2: "22",
        wrong3: "21",
    },
    {   query: "Where do you live?",
        right: "West Philly",
        wrong1: "Nebraska",
        wrong2: "South Philly",
        wrong3: "New York",
    },
    {   query: "Are you stunningly gorgeous?",
        right: "Yes",
        wrong1: "Maybe",
        wrong2: "Sometimes",
        wrong3: "No",
    },
    {   query: "What is your favorite color?",
        right: "Green",
        wrong1: "Red",
        wrong2: "Black",
        wrong3: "Brown",
    }
]

console.log(masterList[2].query);


// for (var i = 0; i < masterKeys.length; i++) {
//     alert(masterList.(masterKeys[i]).query)
//     randomizeOptions(masterList.(masterKeys[1])
// }

var timeLeft = 60
var answerOptions = ["1", "2", "3", "4"]

var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var answer4 = document.querySelector("#a4");
var question = document.querySelector("#question");

function newQuestion(x) {
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
console.log(answer1)

newQuestion(masterList[2])
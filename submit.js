var tempScore = document.querySelector("#largeNumber")
var tileEl = document.querySelector("#quizTile")
var tempFinal = {user : "", score : ""}

tempScore.textContent = localStorage.getItem("TemporaryScore")

var highScores = JSON.parse(localStorage.getItem("HighScore")) || [];

tileEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.matches("#submit")) {
        tempFinal = {user : (document.querySelector("#name").value) , score : localStorage.getItem("TemporaryScore")};

        highScores.push(tempFinal);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(5);

        localStorage.setItem("HighScore" , JSON.stringify(highScores));

        window.location.href="highscores.html"
    }
});
var tempScore = document.querySelector("#largeNumber")
var tileEl = document.querySelector("#quizTile")
var tempFinal = {user : "", score : ""}

tempScore.textContent = localStorage.getItem("TemporaryScore")

var highScores = JSON.parse(localStorage.getItem("HighScore")) || [];

// listen for click on the entire submit tile

tileEl.addEventListener("click", function (event) {
    event.preventDefault();

    // if user clicks submit
    
    if (event.target.matches("#submit")) {

        // save the user info in temporary score

        tempFinal = {user : (document.querySelector("#name").value) , score : localStorage.getItem("TemporaryScore")};

        // add the score to the highscore list

        highScores.push(tempFinal);

        // sort the top scores from highest to least

        highScores.sort((a, b) => b.score - a.score);

        // if there are more than 5, take off the lowest

        highScores.splice(5);

        // save high score list to local storage

        localStorage.setItem("HighScore" , JSON.stringify(highScores));

        // go to the high score list

        window.location.href="highscores.html"
    }
});
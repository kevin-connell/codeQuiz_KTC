var tableEl = document.querySelector("#scoreTable")
var highScores = JSON.parse(localStorage.getItem("HighScore")) || [];

var tableInnerSt = "";

for (i = 0; i < highScores.length; i++) {
    tableInnerSt = tableInnerSt.concat(" <tr> <td>" + highScores[i].user + "</td> <td>" + highScores[i].score + "</td> </tr>")
};

tableEl.innerHTML = "<tr> <th>Name:</th> <th>Score:</th> </tr>" + tableInnerSt;

var tableEl = document.querySelector("#scoreTable")
var highScores = JSON.parse(localStorage.getItem("HighScore")) || [];

console.log(highScores)
console.log(highScores[0].score)

var tableInnerSt = "";

for (i = 0; i < highScores.length; i++) {
    tableInnerSt = tableInnerSt.concat(" <tr> <td>" + highScores[i].user + "</td> <td>" + highScores[i].score + "</td> </tr>")
};

console.log(tableInnerSt)

tableEl.innerHTML = "<tr> <th>Name:</th> <th>Score:</th> </tr>" + tableInnerSt;

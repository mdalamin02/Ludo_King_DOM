const finalScore = [];
document.querySelector(".play-btn").addEventListener("click", function roll() {
  this.innerText = "Play Again";
  document.getElementById("result").innerHTML =
    "<div ><img src='asset/dice-gif.gif'/></div>";
  document.getElementById("result").innerHTML =
    "<div style='display: flex; justify-content: center; align-items: center; margin: 10px;'><img src='asset/dice-gif.gif'/></div>";

  setTimeout(function () {
    const currentScore = parseInt(Math.random() * 6) + 1;
    document.querySelector(
      "#score"
    ).innerHTML = `Current score:  ${currentScore}`;
    finalScore.push(currentScore);

    document.getElementById("result").innerHTML =
      "<div><img style='width:70px; margin: 10px;' src='asset/" +
      currentScore +
      ".png'/></div>";

    const totalSum = finalScore.reduce((acc, num) => acc + num, 0);
    document.getElementById(
      "totalSum"
    ).innerHTML = `Your Total Score: ${totalSum}`;
  }, 2000);
});

function rollDice() {
  // Get player names from input fields
  const player1Name = document.getElementById("player1Input").value || "Player 1";
  const player2Name = document.getElementById("player2Input").value || "Player 2";

  // Update displayed names
  document.getElementById("player1Name").innerText = player1Name;
  document.getElementById("player2Name").innerText = player2Name;

  // Roll dice
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Show result
  const resultEl = document.getElementById("result");
  if (randomNumber1 > randomNumber2) {
    resultEl.innerText = `🚩 ${player1Name} Wins!`;
  } else if (randomNumber2 > randomNumber1) {
    resultEl.innerText = `${player2Name} Wins! 🚩`;
  } else {
    resultEl.innerText = "Draw!";
  }
}

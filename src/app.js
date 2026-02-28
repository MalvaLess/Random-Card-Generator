window.onload = function() {
  const suits = ["heart", "diamond", "club", "spade"];
  const suitSymbols = {
    heart: "♥",
    diamond: "♦",
    club: "♣",
    spade: "♠"
  };
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.createElement("div");
  card.classList.add("card", randomSuit);

  // Esquina superior
  const top = document.createElement("div");
  top.classList.add("corner", "top");
  const topValue = document.createElement("div");
  topValue.textContent = randomValue;
  const topSuit = document.createElement("div");
  topSuit.textContent = suitSymbols[randomSuit];
  top.appendChild(topValue);
  top.appendChild(topSuit);

  // Centro
  const middle = document.createElement("div");
  middle.classList.add("middle");
  middle.textContent = suitSymbols[randomSuit];

  // Esquina inferior
  const bottom = document.createElement("div");
  bottom.classList.add("corner", "bottom");
  const bottomValue = document.createElement("div");
  bottomValue.textContent = randomValue;
  const bottomSuit = document.createElement("div");
  bottomSuit.textContent = suitSymbols[randomSuit];
  bottom.appendChild(bottomValue);
  bottom.appendChild(bottomSuit);

  card.appendChild(top);
  card.appendChild(middle);
  card.appendChild(bottom);

  document.getElementById("card-container").appendChild(card);
};
//Declaring Card Attributes
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suits = ["♥", "♦", "♠", "♣"];


//Declaring HTML Variables
const textDiv = document.querySelector(".text");
const computerDeckCount = document.querySelector(".computer-deck");
const playerDeckCount = document.querySelector(".player-deck");
const computerCurrentCard = document.querySelector(".computer-current-card");
const playerCurrentCard = document.querySelector(".player-current-card");
const computerCurrentWarCard = document.querySelector(
  ".computer-current-warcard"
);
const playerCurrentWarCard = document.querySelector(".player-current-warcard");
const compwarcard1 = document.querySelector(".compwarcard1");
const compwarcard2 = document.querySelector(".compwarcard2");
const compwarcard3 = document.querySelector(".compwarcard3");
const compwarcard4 = document.querySelector(".compwarcard4");
const playwarcard1 = document.querySelector(".playwarcard1");
const playwarcard2 = document.querySelector(".playwarcard2");
const playwarcard3 = document.querySelector(".playwarcard3");
const playwarcard4 = document.querySelector(".playwarcard4");


// Creates Card 
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
  get color() {
    return this.suit === "♠" || this.suit === "♣" ? "black" : "red";
  }
  grabHTML() {
    const cardDiv = document.createElement("div");
    cardDiv.innerText = this.suit;
    cardDiv.classList.add("card", this.color, "slide");
    cardDiv.dataset.value = `${this.value} ${this.suit}`;

    return cardDiv;
  }
}

const newDeck = () => {
  return suits.flatMap((suits) => {
    return values.map((value) => {
      return new Card(suits, value);
    });
  });
};


//Creates Deck
class Deck {
  constructor(cards = newDeck()) {
    this.cards = cards;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

const deck = new Deck();



//Creates Players
class Players {
  constructor(hand, warPile, cardsLeft) {
    this.hand = hand;
    this.warPile = warPile;
    this.cardsLeft = cardsLeft;
  }

  resetGame(player, hand) {
    player.hand = hand;
    player.warPile = [];
    player.cardsLeft = 26;
  }
  getCurrentCard() {
    this.currentCard = this.hand.pop();
  }
}
const computer = new Players();
const player = new Players();
//Show and Hides the cards for War
function hide() {
  compwarcard1.style.display = "none";
  compwarcard2.style.display = "none";
  compwarcard3.style.display = "none";
  compwarcard4.style.display = "none";
  playwarcard1.style.display = "none";
  playwarcard2.style.display = "none";
  playwarcard3.style.display = "none";
  playwarcard4.style.display = "none";
}
function show() {
  compwarcard1.style.display = "grid";
  compwarcard2.style.display = "grid";
  compwarcard3.style.display = "grid";
  compwarcard4.style.display = "grid";
  playwarcard1.style.display = "grid";
  playwarcard2.style.display = "grid";
  playwarcard3.style.display = "grid";
  playwarcard4.style.display = "grid";
  compwarcard1.classList.add("slide");
  compwarcard2.classList.add("slide");
  compwarcard3.classList.add("slide");
  compwarcard4.classList.add("slide");
  playwarcard1.classList.add("slide");
  playwarcard2.classList.add("slide");
  playwarcard3.classList.add("slide");
  playwarcard4.classList.add("slide");
}


//Init Game on start up
const play = () => {
  deck.shuffle();
  player.resetGame(player, deck.cards.slice(0, 26));
  computer.resetGame(computer, deck.cards.slice(26));
  computerDeckCount.innerText = `CPU ${computer.hand.length}`;
  playerDeckCount.innerText = `YOU ${player.hand.length}`;
  hide();
};


//Function to reset game
const reset = () => {
  computerCurrentCard.style.display = "none";
  playerCurrentCard.style.display = "none";
  hide();
  textDiv.innerHTML = "";
  deck.shuffle();
  player.resetGame(player, deck.cards.slice(0, 26));
  computer.resetGame(computer, deck.cards.slice(26));
  computerDeckCount.innerText = `CPU ${computer.hand.length}`;
  playerDeckCount.innerText = `YOU ${player.hand.length}`;
};


play();


// The meat and potatoes
const gameLogic = () => {
  
  //resets cards on each turn
  if (
    computerCurrentCard.style.display === "none" ||
    playerCurrentCard.style.display === "none"
  ) {
    computerCurrentCard.style.display = "block";
    playerCurrentCard.style.display = "block";
  }

  //Win State
  if (player.hand.length === 0) {
    alert("Computer Won");
  } else if (computer.hand.length === 0) {
    alert("Player Won");
  }

  // Grabs the first card in deck which is the last element in the hand array
  player.getCurrentCard();
  computer.getCurrentCard();

// Compares cards
  if (player.currentCard.value > computer.currentCard.value) {
    console.log("Player Won This Round!!");
    textDiv.innerHTML = "You won this Round!";
    player.cardsLeft++;
    computer.cardsLeft--;
    player.hand.unshift(computer.currentCard);
    player.hand.unshift(player.currentCard);
    computerDeckCount.innerText = `CPU ${computer.hand.length}`;
    playerDeckCount.innerText = `YOU ${player.hand.length}`;
    console.log(player.hand);
    console.log(computer.hand);
    nextRound();
  } else if (player.currentCard.value < computer.currentCard.value) {
    console.log("Computer Won This Round!!");
    textDiv.innerHTML = "Computer Won This Round";
    computer.cardsLeft++;
    player.cardsLeft--;
    computer.hand.unshift(player.currentCard);
    computer.hand.unshift(computer.currentCard);
    computerDeckCount.innerText = `CPU ${computer.hand.length}`;
    playerDeckCount.innerText = `YOU ${player.hand.length}`;
    console.log(player.hand);
    console.log(computer.hand);
    nextRound();
  } else {
    nextRound();
    player.warPile.push(player.currentCard);
    computer.warPile.push(computer.currentCard);
    war();
    computerDeckCount.innerText = `CPU ${computer.hand.length}`;
    playerDeckCount.innerText = `YOU ${player.hand.length}`;
    console.log(player.hand);
    console.log(computer.hand);
  }

  console.log(
    `PlayerCard:${player.currentCard.value}${player.currentCard.suit} Point: ${player.cardsLeft} ComputerCard: ${computer.currentCard.value}${computer.currentCard.suit} Point: ${computer.cardsLeft}`
  );
};
 

// The war function
const war = () => {
  for (let i = 0; i <= 3; i++) {
    player.getCurrentCard();
    player.warPile.push(player.currentCard);
    console.log(player.warPile);
    computer.getCurrentCard();
    computer.warPile.push(computer.currentCard);
    console.log(computer.warPile);
    show();

    if (player.warPile.length === 5 && computer.warPile.length === 5) {
      if (player.warPile[4].value > computer.warPile[4].value) {
        textDiv.innerHTML = "WARRRRRRR: Player Wins";
        console.log("player won war");
        player.hand.push(...computer.warPile);
        player.hand.push(...player.warPile);
        player.warPile = [];
        computer.warPile = [];
        computerCurrentWarCard.appendChild(computer.currentCard.grabHTML());
        playerCurrentWarCard.appendChild(player.currentCard.grabHTML());
      } else if (player.warPile[4].value < computer.currentCard.value) {
        console.log("computer won war");
        textDiv.innerHTML = "WARRRRRRR: Computer Wins";
        computer.hand.push(...computer.warPile);
        computer.hand.push(...player.warPile);
        computer.warPile = [];
        player.warPile = [];
        computerCurrentWarCard.appendChild(computer.currentCard.grabHTML());
        playerCurrentWarCard.appendChild(player.currentCard.grabHTML());
      } else {
        console.log("again");
        warAgain();
      }
    }
  }
};
const warAgain = () => {
  for (let i = 0; i <= 3; i++) {
    player.getCurrentCard();
    player.warPile.push(player.currentCard);
    console.log(player.warPile);
    computer.getCurrentCard();
    computer.warPile.push(computer.currentCard);
    console.log(computer.warPile);
    if (player.warPile.length === 9 && computer.warPile.length === 9) {
      if (player.warPile[8].value > computer.warPile[8].value) {
        console.log("player won war");
        textDiv.innerHTML = "WARRRRRRR AGAIN: Player Wins";
        player.hand.push(...computer.warPile);
        player.hand.push(...player.warPile);
        player.warPile = [];
        computer.warPile = [];
      } else if (player.warPile[8].value < computer.warPile[8].value) {
        console.log("computer won war");
        textDiv.innerHTML = "WARRRRRRR AGAIN: Computer Wins";
        computer.hand.push(...computer.warPile);
        computer.hand.push(...player.warPile);
        computer.warPile = [];
        player.warPile = [];
      } else {
        console.log("damn");
      }
    }
  }
};

//Adds the slide class for CSS Animation
const slide = () => {
  computerCurrentCard.classList.add("slide");
};


//Creates a new round
const nextRound = () => {
  computerCurrentCard.innerHTML = "";
  playerCurrentCard.innerHTML = "";
  computerCurrentWarCard.innerHTML = "";
  playerCurrentWarCard.innerHTML = "";
  hide();
  computerCurrentCard.appendChild(computer.currentCard.grabHTML());
  playerCurrentCard.appendChild(player.currentCard.grabHTML());
};


//Buttons
const flipBtn = document.querySelector("#flip");
flipBtn.addEventListener("click", gameLogic);
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

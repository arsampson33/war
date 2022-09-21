const names = [
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
  "Ace",
];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suits = ["♥", "♦", "♠", "♣"];

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

class Card {
  constructor(suit, value) {
    this.suit = suit;
    // this.name = name;
    this.value = value
  }
}

const newDeck = () => {
    return suits.flatMap((suits) => {
      return values.map((value) => {
          return new Card(suits, value);
       
        });
      });
  };

const deck = new Deck();
deck.shuffle();
console.dir(deck.cards)

let playersPoints = 26;
let computerPoints = 26;


const play = () => {
  let playersCard = deck.cards.slice(0, 26);
  let computersCard = deck.cards.slice(26);
    console.log(playersCard)
    console.log(computersCard)

  for(let i = 0; i < 100; i++) {
    console.log(i)
    console.log(playersCard)
    console.log(computersCard)

    if (playersCard[i].value > computersCard[i].value) {
      playersPoints++;
      computerPoints--;
      console.log("Player Wins");
      console.log(`PlayerCard:${playersCard[i].value}${playersCard[i].suit} Point: ${playersPoints} ComputerCard: ${computersCard[i].value}${computersCard[i].suit} Point: ${computerPoints}`);
      playersCard.push(computersCard[i])
      // playersCard.push(playersCard.shift())
      // computersCard.slice(i,1)
  

      
    

      

    } else if (playersCard[i].value < computersCard[i].value) {
      computerPoints++;
      playersPoints--;
      console.log("Computer wins");
      console.log(`PlayerCard:${playersCard[i].value}${playersCard[i].suit} Point: ${playersPoints} ComputerCard: ${computersCard[i].value}${computersCard[i].suit} Point: ${computerPoints}`);
      computersCard.push(playersCard[i])
      // computersCard.push(computersCard.shift())
      // playersCard.slice(i,1)
  
 
      

    } else {
      console.log("Needs work");
      console.log(`PlayerCard:${playersCard[i].value}${playersCard[i].suit} Point: ${playersPoints} ComputerCard: ${computersCard[i].value}${computersCard[i].suit} Point: ${computerPoints}`);
      playersCard.push(playersCard[i])
      computersCard.push(computersCard[i])
   
    }
  } 
};



const flipBtn = document.querySelector("#flip");

flipBtn.addEventListener("click", play);

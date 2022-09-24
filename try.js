// const names = [
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
//   "jack",
//   "queen",
//   "king",
//   "Ace",
// ];
// const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const suits = ["♥", "♦", "♠", "♣"];

// class Deck {
//   constructor(cards = newDeck()) {
//     this.cards = cards;
//   }

//   shuffle() {
//     for (let i = this.cards.length - 1; i > 0; i--) {
//       const newIndex = Math.floor(Math.random() * (i + 1));
//       const oldValue = this.cards[newIndex];
//       this.cards[newIndex] = this.cards[i];
//       this.cards[i] = oldValue;
//     }
//   }
// }

// class Card {
//   constructor(suit, value) {
//     this.suit = suit;
//     // this.name = name;
//     this.value = value;
//   }
// }

// const newDeck = () => {
//   return suits.flatMap((suits) => {
//     return values.map((value) => {
//       return new Card(suits, value);
//     });
//   });
// };

// const deck = new Deck();
// deck.shuffle();
// console.dir(deck.cards);

// let player = [];
// let computer = [];
// let computerPoints = 26;
// let playersPoints = 26;

// const deal = () => {
//   for (let i = 0; i < deck.cards.length; i++) {
//     if (i % 2) {
//       player.push(deck.cards[i]);
//     } else {
//       computer.push(deck.cards[i]);
//     }
//   }
// };

// deal();



// const play = () => {

// for(let i = 0 ; i < 100 ; i++){
//     if (player.value > computer.value) {
//       playersPoints++;
//       computerPoints--;
//       console.log("Player Wins");
//       console.log(
//         `PlayerCard:${player.value}${player.suit} Point: ${playersPoints} ComputerCard: ${computer.value}${computer.suit} Point: ${computerPoints}`
//       );
    
//     } else if (player.value < computer.value) {
//       playersPoints--;
//       computerPoints++;
//       console.log("Computer wins");
//       console.log(
//         `PlayerCard:${player.value}${player.suit} Point: ${playersPoints} ComputerCard: ${computer.value}${computer.suit} Point: ${computerPoints}`
//       );
    


//     } else {
//       console.log('tie');
//             player.push(player)
//       computer.push(computer)
//     }
//   }
// }

// play();


// const flipBtn = document.querySelector("#flip");

// flipBtn.addEventListener("click", play); 

// // console.log(playersPoints);
// // console.log(computerPoints);

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
let i = 0


const play = () => {
  let playersCard = deck.cards.slice(0, 26);
  let computersCard = deck.cards.slice(26);
    console.log(playersCard)
    console.log(computersCard)

  for(const value in playersCard) {
    console.log(i)
    console.log(playersCard)
    console.log(computersCard)

    if (playersCard[i].value > computersCard[i].value) {
      playersPoints++;
      computerPoints--;
      console.log("Player Wins");
      console.log(`PlayerCard:${playersCard[i].value}${playersCard[i].suit} Point: ${playersPoints} ComputerCard: ${computersCard[i].value}${computersCard[i].suit} Point: ${computerPoints}`);
      playersCard.push(computersCard[i])
      playersCard.push(playersCard.shift())
      computersCard.slice(i,1)
  
i++
      
    

      

    } else if (playersCard[i].value < computersCard[i].value) {
      computerPoints++;
      playersPoints--;
      console.log("Computer wins");
      console.log(`PlayerCard:${playersCard[i].value}${playersCard[i].suit} Point: ${playersPoints} ComputerCard: ${computersCard[i].value}${computersCard[i].suit} Point: ${computerPoints}`);
      computersCard.push(playersCard[i])
      computersCard.push(computersCard.shift())
      playersCard.slice(i,1)
  
 i++
      

    } else {
      console.log("Needs work");
      console.log(`PlayerCard:${playersCard[i].value}${playersCard[i].suit} Point: ${playersPoints} ComputerCard: ${computersCard[i].value}${computersCard[i].suit} Point: ${computerPoints}`);
      playersCard.push(playersCard[i])
      computersCard.push(computersCard[i])
   i++
    }
  } 
};
 


const flipBtn = document.querySelector("#flip");

flipBtn.addEventListener("click", play);
switch(values){
  case 'Jack':
    values = 11
    break
  case 'Queen':
    values = 12
    break
  case 'King':
    values = 13
    break
  case 'Ace':
    values= 14
    break
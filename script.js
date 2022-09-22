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
      this.cards[i] = oldValue
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



class Players{
  constructor(hand, wonPile, warPile, cardsLeft){
    this.hand = hand 
    this.wonPile = wonPile
    this.warPile = warPile
    this.cardsLeft = cardsLeft
  }

resetGame(player, hand){
    player.hand = hand
    player.wonPile = []
    player.warPile = []
    player.cardsLeft = 26
  }
  getCurrentCard(){
   this.currentCard = this.hand.pop()
  }
}
const computer = new Players
const player = new Players


const play = () => {
  player.resetGame(player, deck.cards.slice(0,26))
  computer.resetGame(computer, deck.cards.slice(26))
}
play()
  console.log(player)
  console.log(computer)


const gameLogic = () => {
  if (player.hand.length === 0){
    console.log('Computer Won')
  } else if (computer.hand === 0) {
    console.log('Player Won')
  
    // if(player.hand.length === 0){
    //   player.hand.concat(player.wonPile)
      
    // }
    // if(computer.hand.length === 0){
    //   computer.hand.concat(computer.wonPile)
    // }
  }
  player.getCurrentCard()
  computer.getCurrentCard() 
  if (player.currentCard.value > computer.currentCard.value){
    console.log('Player Won This Round!!')
    player.cardsLeft++
    computer.cardsLeft--
    player.hand.unshift(computer.currentCard);
			// temp = player.hand.pop();
			// player.hand.unshift(temp);
      // player.hand.unshift(player.hand.splice(0, 1)[0])
      player.hand.unshift(player.currentCard)
      console.log(player.hand)
      console.log(computer.hand)
      
    // player.wonPile.push(computer.currentCard)
    // player.wonPile.push(player.currentCard)
    // computer.hand.pop()
  } else if (player.currentCard.value < computer.currentCard.value) {
    console.log('Computer Won This Round!!')
    computer.cardsLeft++
    player.cardsLeft--
    computer.hand.unshift(player.currentCard);
    // temp = computer.hand.pop();
    // computer.hand.unshift(temp);
    // player.hand.pop();
    // computer.hand.push(computer.hand.splice(0, 1)[0])
    computer.hand.unshift(computer.currentCard)
    console.log(player.hand)
    console.log(computer.hand)

    // computer.wonPile.push(computer.currentCard)
    // computer.wonPile.push(player.currentCard)
    // player.hand.pop()
  } else{
    console.log('WARRRRRRR')
    player.warPile.push(player.currentCard)
    computer.warPile.push(computer.currentCard)
    war()
    console.log(player.hand)
    console.log(computer.hand)
  }

  console.log(`PlayerCard:${player.currentCard.value}${player.currentCard.suit} Point: ${player.cardsLeft} ComputerCard: ${computer.currentCard.value}${computer.currentCard.suit} Point: ${computer.cardsLeft}`)
 
}

const war = () => {
  for(let i = 0;i <= 3; i++){
    player.getCurrentCard()
    player.warPile.push(player.currentCard)
  console.log(player.warPile)
    computer.getCurrentCard()
    computer.warPile.push(computer.currentCard)
  console.log(computer.warPile)
if (player.warPile.length === 5 && computer.warPile.length === 5){
  if(player.warPile[4].value > computer.warPile[4].value){
    console.log('player won war')
    player.hand.push(...computer.warPile)
    player.hand.push(...player.warPile)
  } else if (player.warPile[4].value < computer.warPile[4].value) {
    console.log('computer won war')
    computer.hand.push(...computer.warPile)
    computer.hand.push(...player.warPile)
  }else{
    console.log('again')
  }
}
} 
  }


//   if(player.warPile[i].value > computer.warPile[i].value){
//     player.hand.unshift(computer.warPile)
//   } else if (player.warPile[i].value < computer.warPile[i].value) {
//     computer.hand.unshift(player.warPile)  
//   }
//   else{
//     console.log('again')
//   }
// } 





 
//   let computersHand = ;
//   let playersCurrentCard = playersHand[playersHand.length-1]
//   let computersCurrentCard = computersHand[computersHand.length-1]
// }
  // const checkWinner = (player, computer) => {
  //   const playerValue = values.indexOf(player.value)
  //   const computerValue = values.indexOf(computer.value)
  //   if (playersHand[i].value > computersHand[i].value) {
  //     console.log('Player Wins')
      // playersPoints++;
      // computerPoints--;
      // playersHand.unshift(computersCurrentCard);
      // temp = playersHand.pop();
			// playersHand.unshift(temp);
			// computersHand.pop()
      // playersHand.push(playersHand.splice(0, 1)[0])
      // playersHand.push(playersHand.splice(0, 1)[0])
      // i++
     

//       // playersPoints++;
//       // computerPoints--;
//       // console.log("Player Wins");
//       // console.log(`PlayerCard:${playersCurrentCard.value}${playersCurrentCard.suit} Point: ${playersPoints} ComputerCard: ${computersCurrentCard.value}${computersCurrentCard.suit} Point: ${computerPoints}`);
//       // playersHand.push(computersHand)
//       // playersHand.push(playersCurrentCard.shift())
//       // computersHand.slice(i,1)
  

      
    

      

//     } else if (playersHand[i].value < computersHand[i].value) {
//       console.log('Computer Wins')
//       playersPoints++;
//       computerPoints--;
//       computersHand.unshift(playersCurrentCard[i]);
// 			temp = computersHand.pop();
// 			computersHand.unshift(temp);
// 			playersHand.pop();
//       computersHand.push(computersHand.splice(0, 1)[0])
//       computersHand.push(computersHand.splice(0, 1)[0])
//       i++
     
      
      
      
//       // computerPoints++;
//       // playersPoints--;
//       // console.log("Computer wins");
//       // console.log(`PlayerCard:${playersCurrentCard.value}${playersCurrentCard.suit} Point: ${playersPoints} ComputerCard: ${computersCurrentCard.value}${computersCurrentCard.suit} Point: ${computerPoints}`);
//       // computersHand.push(playersHand)
//       // computersHand.push(computersHand.shift())
//       // playersHand.slice(i,1)
  
 
      

//     } else {
//       console.log("Needs work")
//       i++
//     }
//       // console.log(`PlayerCard:${playersCurrentCard.value}${playersCurrentCard.suit} Point: ${playersPoints} ComputerCard: ${computersCurrentCard.value}${computersCurrentCard.suit} Point: ${computerPoints}`);
//       // playersHand.push(playersHand)
//       // computersHand.push(computersHand)
//       console.log(computersCurrentCard)
//       console.log(computersHand)
//       console.log(playersCurrentCard)
//       console.log(playersHand)
//       console.log(playersPoints)
//       console.log(computerPoints)
//       console.log(computersHand.length)
//       console.log(playersHand.length)
      
//     }
//   }
   





const flipBtn = document.querySelector("#flip");

flipBtn.addEventListener("click", gameLogic);

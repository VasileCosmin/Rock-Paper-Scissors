// function playerSelection() {
//   let playerSelection = prompt('Choose rock, paper or scissors');
//   if(playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors'){
//     return 'You must choose only rock, paper or scissors';
//   }else {
//     return playerSelection.toLowerCase();
//   }
// }

// function computerPlay() {
//   const options = ['rock', 'paper', 'scissors'];
//   let result = options[Math.floor(Math.random() * options.length)];
//   return result;
// }

// function game() {
//   let win = 0;
//   let lost = 0;


//   function playRound(player, computer) {
//     if(player === computer) {
//       console.log('It\'s a tie. Try again')
//       return playRound(playerSelection(), computerPlay());
//     }
  
//     if(player === 'rock') {
//       if(computer === 'scissors') {
//         win++;
//         return `You selected ${player.toUpperCase()}   Computer selected ${computer.toUpperCase()}
//                 \nYou Win! ${player.toUpperCase()} beats ${computer.toUpperCase()}`
//       }else {
//         lost++;
//         return `You selected ${player.toUpperCase()}   Computer selected ${computer.toUpperCase()}
//                 \nYou Lost! ${computer.toUpperCase()} beats ${player.toUpperCase()}`
//       }
//     }
  
//     if(player === 'paper') {
//       if(computer === 'scissors') {
//         lost++;
//         return `You selected ${player.toUpperCase()}   Computer selected ${computer.toUpperCase()}
//                 \nYou Lost! ${computer.toUpperCase()} beats ${player.toUpperCase()}`
//       }else {
//         win++;
//         return `You selected ${player.toUpperCase()}   Computer selected ${computer.toUpperCase()}
//                 \nYou Win! ${player.toUpperCase()} beats ${computer.toUpperCase()}`
//       }
//     }
  
//     if(player === 'scissors') {
//       if(computer === 'paper') {
//         win++;
//         return `You selected ${player.toUpperCase()}   Computer selected ${computer.toUpperCase()}
//                 \nYou Win!${player.toUpperCase()} beats ${computer.toUpperCase()}`
//       }else {
//         lost++;
//         return `You selected ${player.toUpperCase()}   Computer selected ${computer.toUpperCase()}
//                 \nYou Lost! ${computer.toUpperCase()} beats ${player.toUpperCase()}`
//       }
//     }
//   }


//   for(let i = 0; i < 5; i++) {
//     console.log(playRound(playerSelection(), computerPlay()));
//   }

//   if(win > lost) {
//     return `You Won The Game
//             \nYour Score: ${win}  Computer Score: ${lost}`;
//   }else {
//     return `You Lost The Game
//             \nYour Score: ${win}  Computer Score: ${lost}`;
//   }
// }
// console.log(game());
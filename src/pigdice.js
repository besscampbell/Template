// Business Logic
// let users = new Users();
// let player1 = new Player("Player One", true, [], 0);
// let player2 = new Player("Player Two", false, [], 0);
// users.players.push(player1, player2);


export function Player (user, turn, roundScore, totalScore) {
  this.user = user;
  this.turn = turn;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
}

// export function Users () {
//   this.players = []
// }

Player.prototype.diceRoll = function(number){
  let roll = number
  // 1+ Math.floor(Math.random()*6);
    if (roll === 1) {
        this.turn= false
        // player2.turn= !player2.turn
        this.roundScore = [];
        // alert("You rolled in the mud with that ONE! Your turn is over!");
    } else {
        this.roundScore.push(roll);
        return this.roundScore;
    }
}

Player.prototype.hold = function() {
  if (this.roundScore[0] != 0) {
    const add = (a, b) => a+b;
    // this.totalScore = this.totalScore + 
    return this.roundScore.reduce(add);
  //   this.roundScore = [];
  //   player1.turn= !player1.turn
  //   player2.turn= !player2.turn
  //   return this.roundScore; 
  }
  // if (this.totalScore >= 100) {
  //     alert("Back to the sty! You pass the pigs the best! You win!");
  // }
 };

// Users.prototype.whoseTurn = function() {
//   for (let i=0; i< this.players.length; i++){
//     if (this.players[i].turn === true) {
//     return this.players[i].diceRoll();
//     }
//   }
// }

// Users.prototype.holdTurn = function() {
//   for (let i=0; i< this.players.length; i++){
//     if (this.players[i].turn === true) {
//       return this.players[i].hold();
//     } 
//   }
// }
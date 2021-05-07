import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HillClimbingService {
  constructor() {}

  magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ];

  main(moves) {
    // console.log(moves);
    if (moves[1][1] === null) {
      let i = 1,
        j = 1;
      return { i, j };
    } 
    
    let bestMove, heiristic = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (moves[i][j] === null) {
          // Minimize x
          let move = this.customHeiristic(moves, i, j);
          // console.log("MOVE:", move, i, j);
          if(move < heiristic) {
            heiristic = move;
            bestMove = {i, j};
            console.log(`heiristic: ${heiristic}`)
            // console.log("TEST:", bestMove);
          }
        }
      }
    }
    console.log("***BEST MOVE:", bestMove);
    return bestMove;
  }

  customHeiristic(moves, i, j) {
    let symbol;
    moves[i][j] = 'o';
    symbol = this.checkWinner(moves);
    moves[i][j] = null;
    // console.log("Moves", JSON.parse(JSON.stringify(moves)))
    if (symbol == 'o') {
      // console.log("O Wins at:", i, j)
      // console.log(i, j);
      return 1;
    }
    
    moves[i][j] = 'x';
    symbol = this.checkWinner(moves);
    moves[i][j] = null;
    if (symbol == 'x') {
      // console.log(i, j);
      return 2;
    }

    return 3;
  }

  checkWinner(moves) {
    for (let i = 0; i < 3; i++) {
      if (
        moves[i][0] !== null &&
        moves[i][0] === moves[i][1] &&
        moves[i][0] === moves[i][2]
      ) {
        return moves[i][0];
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        moves[0][i] !== null &&
        moves[0][i] === moves[1][i] &&
        moves[0][i] === moves[2][i]
      ) {
        return moves[0][i];
      }
    }

    if (
      moves[0][0] !== null &&
      moves[0][0] === moves[1][1] &&
      moves[1][1] === moves[2][2]
    )
      return moves[0][0];

    if (
      moves[0][2] !== null &&
      moves[0][2] === moves[1][1] &&
      moves[1][1] === moves[2][0]
    )
      return moves[0][2];

    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) {
        if (moves[i][j] === null) return null;
      }
    return 'd'; // Draw
  }
}

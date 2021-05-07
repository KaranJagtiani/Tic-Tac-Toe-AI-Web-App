import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlphaBetaService {
  constructor() {}

  alphaBetaPruning(moves) {
    let bestScore = -1000;
    let bestMove;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (moves[i][j] === null) {
          moves[i][j] = 'o';
          let score = this.alphaBetaPruningMain(moves, 0, false, -Infinity, Infinity);
          moves[i][j] = null;
          if (score > bestScore) {
            bestScore = score;
            bestMove = { i, j };
          }
        }
      }
    }
    return bestMove;
  }

  lookup = {
    o: 10,
    x: -10,
    d: 1,
  };

  alphaBetaPruningMain(moves, depth, minimizer, alpha, beta) {
    let winner = this.lookup[this.checkWinner(moves)];
    if (winner) return winner;

    if (minimizer) {
      let bestScore = -1000;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (moves[i][j] === null) {
            moves[i][j] = 'o';
            let score = this.alphaBetaPruningMain(moves, depth + 1, !minimizer, alpha, beta);
            bestScore = Math.max(bestScore, score);
            moves[i][j] = null;

            alpha = Math.max(alpha, score);
            if(beta <= alpha)
              break;
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = 1000;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (moves[i][j] === null) {
            moves[i][j] = 'x';
            let score = this.alphaBetaPruningMain(moves, depth + 1, !minimizer, alpha, beta);
            bestScore = Math.min(bestScore, score);
            moves[i][j] = null;
            beta = Math.min(beta, score);
            if(beta <= alpha)
              break;
          }
        }
      }
      return bestScore;
    }
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

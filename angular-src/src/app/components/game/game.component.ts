import { Component, OnInit } from '@angular/core';
import { MinimaxService } from '../../services/minimax-service/minimax.service';
import { AlphaBetaService } from '../../services/alpha-beta/alpha-beta.service';
import { HillClimbingService } from 'src/app/services/hill-climbing/hill-climbing.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  clickedWhere: string;

  moves = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  firstTurn: boolean = true; // true == x and false == 0

  gameStarted: boolean = false;

  winner: boolean = false;

  draw: boolean = false;

  winnerWho: string;

  confetti: any;

  algoSelected: number = 0;
  algorithmName: string;

  winsList = [];

  constructor(
    private minimax: MinimaxService,
    private alphaBeta: AlphaBetaService,
    private hillClimbing: HillClimbingService,
  ) {}

  email: string;
  ngOnInit(): void {}

  algorithmSelected(option) {
    this.algoSelected = option;
  }

  makeRandomMove() {
    let spotsLeft = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.moves[i][j]) spotsLeft.push({ i, j });
      }
    }

    if (spotsLeft.length) {
      let random = spotsLeft[Math.floor(Math.random() * spotsLeft.length)];
      this.makeAIMove(random);
    }
  }

  passMovesArray() {
    // Random Algorithm
    this.algorithmName = 'Two Player';
    if (this.algoSelected == 2) {
      this.algorithmName = 'Random';
      this.makeRandomMove();
    } else if (this.algoSelected == 3) {
      this.algorithmName = 'Minimax';
      let move = this.minimax.minimax(this.moves);
      this.makeAIMove(move);
    } else if (this.algoSelected == 4) {
      this.algorithmName = 'Alpha-Beta';
      let move = this.alphaBeta.alphaBetaPruning(this.moves);
      this.makeAIMove(move);
    } else if (this.algoSelected == 5) {
      this.algorithmName = 'Hill Climbing';
      console.log('Hill Climbing');
      // let testBoard = [
      //   ['x', null, 'x'],
      //   ['o', 'o', null],
      //   [null, null, null],
      // ]
      let move = this.hillClimbing.main(this.moves);
      console.log('Move:', move);
      if (move) this.makeAIMove(move);
      else {
        console.log('Making Random Move');
        this.makeRandomMove();
      }
    }
  }

  makeAIMove(move) {
    if (move.i == 0 && move.j == 0) this.makeMoveOne();
    if (move.i == 0 && move.j == 1) this.makeMoveTwo();
    if (move.i == 0 && move.j == 2) this.makeMoveThree();
    if (move.i == 1 && move.j == 0) this.makeMoveFour();
    if (move.i == 1 && move.j == 1) this.makeMoveFive();
    if (move.i == 1 && move.j == 2) this.makeMoveSix();
    if (move.i == 2 && move.j == 0) this.makeMoveSeven();
    if (move.i == 2 && move.j == 1) this.makeMoveEight();
    if (move.i == 2 && move.j == 2) this.makeMoveNine();
  }

  makeMoveOne() {
    if (!this.winner && !this.moves[0][0]) {
      if (this.firstTurn) this.moves[0][0] = 'x';
      else this.moves[0][0] = 'o';
      this.firstTurn = !this.firstTurn;
      this.checkIfGameOver();
    }
  }

  makeMoveTwo() {
    if (!this.winner && !this.moves[0][1]) {
      if (this.firstTurn) this.moves[0][1] = 'x';
      else this.moves[0][1] = 'o';
      this.firstTurn = !this.firstTurn;
      this.checkIfGameOver();
    }
  }
  makeMoveThree() {
    if (!this.winner && !this.moves[0][2]) {
      if (this.firstTurn) this.moves[0][2] = 'x';
      else this.moves[0][2] = 'o';
      this.firstTurn = !this.firstTurn;
      this.checkIfGameOver();
    }
  }
  makeMoveFour() {
    if (!this.winner && !this.moves[1][0]) {
      if (this.firstTurn) this.moves[1][0] = 'x';
      else this.moves[1][0] = 'o';
      this.firstTurn = !this.firstTurn;
      this.checkIfGameOver();
    }
  }
  makeMoveFive() {
    if (!this.winner && !this.moves[1][1]) {
      if (this.firstTurn) this.moves[1][1] = 'x';
      else this.moves[1][1] = 'o';
      this.firstTurn = !this.firstTurn;
      this.checkIfGameOver();
    }
  }
  makeMoveSix() {
    if (!this.winner && !this.moves[1][2]) {
      if (this.firstTurn) this.moves[1][2] = 'x';
      else this.moves[1][2] = 'o';
      this.firstTurn = !this.firstTurn;
      this.checkIfGameOver();
    }
  }
  makeMoveSeven() {
    if (!this.winner && !this.moves[2][0]) {
      if (this.firstTurn) this.moves[2][0] = 'x';
      else this.moves[2][0] = 'o';
      this.firstTurn = !this.firstTurn;
      this.checkIfGameOver();
    }
  }
  makeMoveEight() {
    if (!this.winner && !this.moves[2][1]) {
      if (this.firstTurn) this.moves[2][1] = 'x';
      else this.moves[2][1] = 'o';
      this.firstTurn = !this.firstTurn;
      this.checkIfGameOver();
    }
  }
  makeMoveNine() {
    if (!this.winner && !this.moves[2][2]) {
      if (this.firstTurn) this.moves[2][2] = 'x';
      else this.moves[2][2] = 'o';
      this.firstTurn = !this.firstTurn;
      this.checkIfGameOver();
    }
  }

  // Detect Win
  checkIfGameOver() {
    this.gameStarted = true;
    let symbol = this.minimax.checkWinner(this.moves);
    if (symbol) this.declareWinner(symbol);
    if (!this.firstTurn) this.passMovesArray();
  }

  xScore: number = 0;
  oScore: number = 0;

  declareWinner(symbol: string) {
    if (symbol != 'd') {
      this.winner = true;
      let fSymbol = symbol.toUpperCase();
      let str = `${fSymbol} is the Winner!`;
      this.winnerWho = str;
      if (symbol == 'x') this.xScore += 1;
      if (symbol == 'o') this.oScore += 1;
    } else {
      this.winnerWho = 'Draw';
      this.draw = true;
    }
    let winner_obj = {
      winner: symbol,
      date: new Date(),
      game_type: this.algorithmName
    };

    this.winsList.push(winner_obj);
  }

  resetGame() {
    this.gameStarted = false;
    this.winner = false;
    this.draw = false;
    this.firstTurn = true;

    this.winnerWho = '';
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.moves[i][j] = null;
      }
    }
  }
}

import { Chess } from './chess';
import { Player, Move, Chessboard } from './types';

export class ChessGame {
  chess: Chess;
  whitePlayer: Player;
  blackPlayer: Player;

  constructor(player1Name: string, player2Name: string) {
    this.chess = new Chess();
    this.whitePlayer = { color: 'white', name: player1Name };
    this.blackPlayer = { color: 'black', name: player2Name };
  }

  // start the game (reset the board)
  startGame(): void {
    this.chess = new Chess(); // Reset the board
  }

  // make a move in the game
  makeMove(move: Move): boolean {
    return this.chess.movePiece(move);
  }

  // get the game state
  getGameState(): Chessboard {
    return this.chess.getGameState();
  }

  // check if the game is over
  isGameOver(): boolean {
    return this.chess.isGameOver();
  }

  // get the current player's turn
  getCurrentTurn(): string {
    return this.chess.turn;
  }
}

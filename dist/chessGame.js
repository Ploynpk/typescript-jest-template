"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessGame = void 0;
const chess_1 = require("./chess");
class ChessGame {
    chess;
    whitePlayer;
    blackPlayer;
    constructor(player1Name, player2Name) {
        this.chess = new chess_1.Chess();
        this.whitePlayer = { color: 'white', name: player1Name };
        this.blackPlayer = { color: 'black', name: player2Name };
    }
    // start the game (reset the board)
    startGame() {
        this.chess = new chess_1.Chess(); // Reset the board
    }
    // make a move in the game
    makeMove(move) {
        return this.chess.movePiece(move);
    }
    // get the game state
    getGameState() {
        return this.chess.getGameState();
    }
    // check if the game is over
    isGameOver() {
        return this.chess.isGameOver();
    }
    // get the current player's turn
    getCurrentTurn() {
        return this.chess.turn;
    }
}
exports.ChessGame = ChessGame;

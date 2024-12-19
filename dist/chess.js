"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chess = void 0;
class Chess {
    board;
    turn;
    constructor() {
        this.board = this.initializeBoard();
        this.turn = 'white';
    }
    // initialize the chessboard with all pieces in their starting positions
    initializeBoard() {
        const board = {};
        // set up the pieces for both players
        const setup = [
            ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
            ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn']
        ];
        for (let i = 0; i < 8; i++) {
            board[`${String.fromCharCode(97 + i)}1`] = { type: setup[0][i], color: 'white', hasMoved: false };
            board[`${String.fromCharCode(97 + i)}2`] = { type: 'pawn', color: 'white', hasMoved: false };
            board[`${String.fromCharCode(97 + i)}7`] = { type: 'pawn', color: 'black', hasMoved: false };
            board[`${String.fromCharCode(97 + i)}8`] = { type: setup[0][i], color: 'black', hasMoved: false };
        }
        return board;
    }
    //  all available moves
    getAvailableMoves(piece, square) {
        return [];
    }
    // validate a move and update the board state
    movePiece(move) {
        const { from, to } = move;
        const piece = this.board[from];
        if (!piece) {
            console.log('No piece at the source position');
            return false;
        }
        if (piece.color !== this.turn) {
            console.log("It's not your turn");
            return false;
        }
        const availableMoves = this.getAvailableMoves(piece, from);
        if (!availableMoves.includes(to)) {
            console.log('Invalid move');
            return false;
        }
        // make the move
        this.board[to] = this.board[from];
        this.board[from] = null;
        piece.hasMoved = true;
        this.turn = this.turn === 'white' ? 'black' : 'white'; // Switch turn
        return true;
    }
    // check if the game is over (checkmate, stalemate, etc.)
    isGameOver() {
        return false;
    }
}
exports.Chess = Chess;

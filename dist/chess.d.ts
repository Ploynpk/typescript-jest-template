import { Chessboard, Piece, Move, Square, Color } from './types';
export declare class Chess {
    board: Chessboard;
    turn: Color;
    constructor();
    private initializeBoard;
    getAvailableMoves(piece: Piece, square: Square): Square[];
    movePiece(move: Move): boolean;
    isGameOver(): boolean;
}

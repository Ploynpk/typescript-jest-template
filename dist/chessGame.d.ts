import { Chess } from './chess';
import { Player, Move, Chessboard } from './types';
export declare class ChessGame {
    chess: Chess;
    whitePlayer: Player;
    blackPlayer: Player;
    constructor(player1Name: string, player2Name: string);
    startGame(): void;
    makeMove(move: Move): boolean;
    getGameState(): Chessboard;
    isGameOver(): boolean;
    getCurrentTurn(): string;
}

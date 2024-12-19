export type Color = 'white' | 'black';
export type PieceType = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
export type Square = string;
export type Move = { from: Square; to: Square };

export interface Piece {
  type: PieceType;
  color: Color;
  hasMoved: boolean;
}

export interface Player {
  color: Color;
  name: string;
}

export interface Chessboard {
  [square: string]: Piece | null;
}

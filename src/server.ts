import express, { Request, Response } from 'express';
import { ChessGame } from './chessGame';
import { Move } from './types';

const app = express();  
const port = 3000;

app.use(express.json()); 

// create a new chess game
let chessGame: ChessGame | null = null;

// route to start a new game
app.post('/game/start', (req: Request, res: Response) => {
  const { player1Name, player2Name } = req.body;
  chessGame = new ChessGame(player1Name, player2Name);
  res.status(200).json({ message: 'Game started', gameState: chessGame.getGameState() });
});

// route to make a move
app.post('/game/move', (req: Request, res: Response) => {
  if (!chessGame) {
    return res.status(400).json({ error: 'No game in progress' });
  }

  const move: Move = req.body;
  const success = chessGame.makeMove(move);

  if (success) {
    return res.status(200).json({ message: 'Move successful', gameState: chessGame.getGameState() });
  }

  res.status(400).json({ error: 'Invalid move' });
});

// current game state // still getting error
app.get('/game/state', (req: Request, res: Response) => {
  if (!chessGame) {
    return res.status(400).json({ error: 'No game in progress' });
  }
  res.status(200).json({ gameState: chessGame.getGameState() });
});

// current turn
app.get('/game/turn', (req: Request, res: Response) => {
  if (!chessGame) {
    return res.status(400).json({ error: 'No game in progress' });
  }
  res.status(200).json({ currentTurn: chessGame.getCurrentTurn() });
});

//if the game is over
app.get('/game/over', (req: Request, res: Response) => {
  if (!chessGame) {
    return res.status(400).json({ error: 'No game in progress' });
  }
  const isOver = chessGame.isGameOver();
  res.status(200).json({ gameOver: isOver });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

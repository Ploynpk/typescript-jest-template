"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chessGame_1 = require("./chessGame");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// create a new chess game
let chessGame = null;
// route to start a new game
app.post('/game/start', (req, res) => {
    const { player1Name, player2Name } = req.body;
    chessGame = new chessGame_1.ChessGame(player1Name, player2Name);
    res.status(200).json({ message: 'Game started', gameState: chessGame.getGameState() });
});
// route to make a move
app.post('/game/move', (req, res) => {
    if (!chessGame) {
        return res.status(400).json({ error: 'No game in progress' });
    }
    const move = req.body;
    const success = chessGame.makeMove(move);
    if (success) {
        return res.status(200).json({ message: 'Move successful', gameState: chessGame.getGameState() });
    }
    res.status(400).json({ error: 'Invalid move' });
});
// current game state // still getting error
app.get('/game/state', (req, res) => {
    if (!chessGame) {
        return res.status(400).json({ error: 'No game in progress' });
    }
    res.status(200).json({ gameState: chessGame.getGameState() });
});
// current turn
app.get('/game/turn', (req, res) => {
    if (!chessGame) {
        return res.status(400).json({ error: 'No game in progress' });
    }
    res.status(200).json({ currentTurn: chessGame.getCurrentTurn() });
});
//if the game is over
app.get('/game/over', (req, res) => {
    if (!chessGame) {
        return res.status(400).json({ error: 'No game in progress' });
    }
    const isOver = chessGame.isGameOver();
    res.status(200).json({ gameOver: isOver });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

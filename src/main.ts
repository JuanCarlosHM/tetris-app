import { Canvas } from './graphics/canvas';
import { Board } from './core/board';
import { Piece } from './core/piece';
import { GameController } from './controllers/gameController';
import { InputController } from './controllers/inputController';


const canvasElement = document.getElementById('gameCanvas') as HTMLCanvasElement;
const renderer = new Canvas(canvasElement);

const board = new Board();
const pieceShape = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 0, 0],
];
const piece = new Piece(pieceShape, 3, 0, 'blue');

const gameController = new GameController(board, piece, renderer);
const inputController = new InputController(gameController);


inputController.init();

setInterval(() => {
  gameController.update(); 
}, 100)
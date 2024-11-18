import { Canvas } from './graphics/canvas';
import { Board } from './core/board';

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const renderer = new Canvas(canvas);
const board = new Board();

const piece = [
  [1, 1, 1],
  [0, 1, 0],
];

const position = { x: 3, y: 0 };

function gameLoop() {
  renderer.renderBoard(board.grid);
  renderer.renderPiece(piece, position);
  requestAnimationFrame(gameLoop);
}

gameLoop();
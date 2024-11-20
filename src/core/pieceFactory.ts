import { Piece } from './piece';

export class PieceFactory {
    
  static generateRandomPiece(boardCols: number): Piece {
    const pieceShapes = [
      { shape: [[1, 1, 1], [0, 1, 0]], color: 'purple' }, // T
      { shape: [[1, 1], [1, 1]], color: 'yellow' },       // square
      { shape: [[1, 1, 1, 1]], color: 'cyan' },          // line
      { shape: [[1, 1, 0], [0, 1, 1]], color: 'red' },   // Z
      { shape: [[0, 1, 1], [1, 1, 0]], color: 'green' }, // S
    ];

    const randomPiece = pieceShapes[Math.floor(Math.random() * pieceShapes.length)];
    const startX = Math.floor((boardCols - randomPiece.shape[0].length) / 2);

    return new Piece(randomPiece.shape, startX, 0, randomPiece.color); 
  }
}


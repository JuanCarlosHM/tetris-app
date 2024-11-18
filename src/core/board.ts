export class Board {
    grid: number[][];
  
    constructor(public rows: number = 20, public cols: number = 10) {
      this.grid = Array.from({ length: rows }, () => Array(cols).fill(0));
    }
  
    addPiece(piece: number[][], position: { x: number; y: number }): boolean {
      for (let y = 0; y < piece.length; y++) {
        for (let x = 0; x < piece[y].length; x++) {
          if (piece[y][x]) {
            const boardX = x + position.x;
            const boardY = y + position.y;
  
            // Verificar colisiones
            if (
              boardX < 0 ||
              boardX >= this.cols ||
              boardY >= this.rows ||
              this.grid[boardY][boardX]
            ) {
              return false;
            }
          }
        }
      }
  
      // Añadir pieza al tablero
      piece.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            this.grid[y + position.y][x + position.x] = cell;
          }
        });
      });
  
      return true;
    }
  }

  
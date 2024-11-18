export class Canvas {
    private ctx: CanvasRenderingContext2D;
  
    constructor(private canvas: HTMLCanvasElement) {
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Failed to get canvas context');
      this.ctx = context;
    }
  
    renderBoard(board: number[][]): void {
      const { ctx } = this;
      const tileSize = 30;
  
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      board.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            ctx.fillStyle = 'blue';
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
          }
        });
      });
    }
  
    renderPiece(piece: number[][], position: { x: number; y: number }): void {
      const { ctx } = this;
      const tileSize = 30;
  
      piece.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            ctx.fillStyle = 'red';
            ctx.fillRect(
              (x + position.x) * tileSize,
              (y + position.y) * tileSize,
              tileSize,
              tileSize
            );
            ctx.strokeStyle = 'white';
            ctx.strokeRect(
              (x + position.x) * tileSize,
              (y + position.y) * tileSize,
              tileSize,
              tileSize
            );
          }
        });
      });
    }
  }
  
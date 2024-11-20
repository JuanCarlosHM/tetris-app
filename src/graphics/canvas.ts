import { Cell } from "../interfaces/Cell";

export class Canvas {

  private ctx: CanvasRenderingContext2D;
  private htmlCanvas: HTMLCanvasElement

  constructor(htmlCanvas: HTMLCanvasElement) {

    this.htmlCanvas = htmlCanvas;
    const context = htmlCanvas.getContext('2d');

    if (!context) throw new Error('Failed to get canvas context');
    this.ctx = context;
  }


  draw(cells: Cell[]) {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.htmlCanvas.width, this.htmlCanvas.height);

    cells.forEach(({ coordinateX, coordinateY, color, width, height }) => {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(coordinateX * width, coordinateY * height, width, height);
    });
  }

}
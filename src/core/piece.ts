import { Cell } from "../interfaces/Cell";

export class Piece {
    shape: number[][];
    coordinateX: number;
    coordinateY: number;
    color: string;

    constructor(shape: number[][], startX: number, startY: number, color: string) {
        this.shape = shape;
        this.coordinateX = startX;
        this.coordinateY = startY;
        this.color = color; 
    }

    generateCells(cellWidth: number, cellHeight: number): Cell[] {
        const cells: Cell[] = [];
        this.shape.forEach((row, dy) => {
            
            row.forEach((value, dx) => {
                if (value === 1) {
                    cells.push({
                        coordinateX: this.coordinateX + dx,
                        coordinateY: this.coordinateY + dy,
                        color: this.color,
                        width: cellWidth,
                        height: cellHeight,
                    });
                }
            });
        });
        
        return cells;
    }
}

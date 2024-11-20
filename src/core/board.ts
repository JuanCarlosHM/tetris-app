import { Cell } from "../interfaces/Cell";
import { validateNumber } from "../utils/validations";
import { Piece } from "./piece";


export class Board {

    grid: number[][];
    private rows: number;
    private cols: number;

    constructor(rows?: number, cols?: number) {
        this.rows = rows && validateNumber(rows) ? rows : 20;
        this.cols = cols && validateNumber(cols) ? cols : 10;

        this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
    }

    getRows() {
        return this.rows;
    }

    getCols() {
        return this.cols;
    }

    generateCells(cellWidth: number, cellHeight: number): Cell[] {
        const cells: Cell[] = [];

        this.grid.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value === 1) {
                    cells.push({
                        coordinateX: x,
                        coordinateY: y,
                        color: '#fff',
                        width: cellWidth,
                        height: cellHeight,
                    });
                }
            });
        });

        return cells;
    }

    isPositionValid(x: number, y: number, shape: number[][]): boolean {
        for (let row = 0; row < shape.length; row++) {
            for (let col = 0; col < shape[row].length; col++) {
                if (shape[row][col] === 1) {
                    const newX = x + col;
                    const newY = y + row;

                    if (newX < 0 || newX >= this.cols || newY >= this.rows) {
                        return false;
                    }

                    if (newY >= 0 && this.grid[newY][newX] === 1) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    placePiece(piece: Piece): void {
        piece.shape.forEach((row, dy) => {
            row.forEach((value, dx) => {
                if (value === 1) {
                    const x = piece.coordinateX + dx;
                    const y = piece.coordinateY + dy;

                    if (y >= 0 && y < this.rows && x >= 0 && x < this.cols) {
                        this.grid[y][x] = 1;
                    }
                }
            });
        });
    }

    removeCompleteLines(): number {

        let linesCleared = 0;

        console.log(JSON.stringify(this.grid));


        this.grid = this.grid.filter((row) => {
            const isComplete = row.every((cell) => cell !== 0);
            if (isComplete) linesCleared++;
            return !isComplete;
        });

        while (this.grid.length < this.rows) {
            this.grid.unshift(Array(this.cols).fill(0));
        }

        return linesCleared;
    }

}
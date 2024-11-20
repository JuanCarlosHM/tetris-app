import { Board } from "../core/board";
import { Piece } from "../core/piece";
import { PieceFactory } from "../core/pieceFactory";
import { Canvas } from "../graphics/canvas";

export class GameController {

    private board: Board;
    private piece: Piece;
    private renderer: Canvas;

    constructor(board: Board, piece: Piece, renderer: Canvas) {
        this.board = board;
        this.piece = piece;
        this.renderer = renderer;
    }

    update() {
        const cells = this.combineCells();
        this.renderer.draw(cells);
        
        
    }

    private combineCells() {
        const boardCells = this.board.generateCells(30, 30);
        const pieceCells = this.piece.generateCells(30, 30);
        return [...boardCells, ...pieceCells];
    }

    private spawnNewPiece() {
        console.log(this.piece);
        const newPiece = PieceFactory.generateRandomPiece(this.board.getCols());
        if (this.board.isPositionValid(newPiece.coordinateX, newPiece.coordinateY, newPiece.shape)) {
            this.piece = newPiece;
        } else {
            throw new Error('error with spawn new piece');
        }

    }

    private movePiece(deltaX: number, deltaY: number) {
        const newCoordinateX = this.piece.coordinateX + deltaX;
        const newCoordinateY = this.piece.coordinateY + deltaY;

        if (this.board.isPositionValid(newCoordinateX, newCoordinateY, this.piece.shape)) {
            this.piece.coordinateX = newCoordinateX;
            this.piece.coordinateY = newCoordinateY;
            console.log(`Pieza movida a (${deltaX}, ${deltaY})`);
        } else {
            console.log('Movimiento inválido');
        }
    }

    movePieceDown() {
        const newCoordinateY = this.piece.coordinateY + 1;
        if (this.board.isPositionValid(this.piece.coordinateX, newCoordinateY, this.piece.shape)) {
            this.piece.coordinateY = newCoordinateY;
            console.log('Pieza movida abajo');

        } else {
            console.log('else');
            
            this.board.placePiece(this.piece);
            const linesCleared = this.board.removeCompleteLines();
            console.log(this.board.grid);
            
            
            if (linesCleared > 0) {
                console.log(`Líneas eliminadas: ${linesCleared}`);
            }
            this.spawnNewPiece();
            console.log('Movimiento inválido hacia abajo');
        }

    }

    movePieceRight() {
        this.movePiece(1, 0);
    }

    movePieceLeft() {
        this.movePiece(-1, 0);
    }
}

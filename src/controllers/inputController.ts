import { GameController } from './gameController';

export class InputController {

    private gameController : GameController;

    constructor(gameController: GameController) {
        this.gameController = gameController;
    }
  
    init() {
      window.addEventListener('keydown', (event) => this.handleKeyDown(event));
    }
  
    private handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case 'ArrowLeft':
          this.gameController.movePieceLeft();
          break;
        case 'ArrowRight':
          this.gameController.movePieceRight();
          break;
        case 'ArrowDown':
          this.gameController.movePieceDown();
          break;
        //case 'ArrowUp':
          //this.gameController.rotatePiece();
         // break;
      }
    }
  }
  
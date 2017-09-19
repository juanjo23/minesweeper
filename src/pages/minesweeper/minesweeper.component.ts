import { Component } from '@angular/core';
import { NavController, Toast, ToastController } from 'ionic-angular';

import { MineController } from './mine/mine.component';
import { MineLogic } from './minelogic';

@Component({
  selector: 'minesweeper',
  templateUrl: 'minesweeper.template.html'
})
export class MinesweeperController {
  public mines: MineController[][];
  public icon: string = 'happy';
  public isGameLost: boolean;
  public isGameWon: boolean;
  public tappedMines: number;
  public minesNumber: number;
  public minesLength: number;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.minesNumber = 10;
    this.minesLength = 8;
    this.newGame();
  }

  public newGame(): void {
    const mineLogic: MineLogic = new MineLogic(this.minesLength, this.minesNumber);
    this.mines = mineLogic.mines;
    this.isGameLost = false;
    this.isGameWon = false;

    this.tappedMines = 0;
  }

  public gameLost(): void {
    this.isGameLost = true;
    this.presentToast('Perdiste el juego :(', 'JUEGO NUEVO');
  }

  public gameWon(): void {
    this.isGameWon = true;
    this.presentToast('Congrats!! Ganaste el Juego :)', 'JUEGO NUEVO');
  }

  public presentToast(msj: string, closeText: string, duration: number = undefined): void {
    const toast: Toast = this.toastCtrl.create({
      message: msj,
      showCloseButton: true,
      closeButtonText: closeText
    });
    if (duration) {
      toast.setDuration(duration);
    }
    toast.onWillDismiss(() => {
      this.newGame();
    });
    toast.present();
  }

  public mineTapped (i: number, j: number): void {
    if (this.mines[i][j].isPressed) {
      return;
    }
    this.tappedMines += 1;
    this.mines[i][j].isPressed = true;
    if (this.mines[i][j].isMine) {
      this.gameLost();
    } else if (this.mines[i][j].closeMines === 0) {
      this.unhideAdjacents(i, j);
    } else if (this.tappedMines >= this.minesLength * this.minesLength - this.minesNumber ) {
      this.gameWon();
    }
  }

  public unhideAdjacents(i: number, j: number): void {
    const isSafe: Function = (index: number) => index >= 0 && index < this.mines.length;

    if (isSafe(j - 1)) {
      this.tapAndVisitNeighbors(i, j - 1);
    }
    if (isSafe(i + 1) && isSafe(j - 1)) {
      this.tapAndVisitNeighbors(i + 1, j - 1);
    }
    if (isSafe(i + 1)) {
      this.tapAndVisitNeighbors(i + 1, j);
    }
    if (isSafe(i + 1) && isSafe(j + 1)) {
      this.tapAndVisitNeighbors(i + 1, j + 1);
    }
    if (isSafe(j + 1)) {
      this.tapAndVisitNeighbors(i, j + 1);
    }
    if (isSafe(i - 1) && isSafe(j + 1)) {
      this.tapAndVisitNeighbors(i - 1, j + 1);
    }
    if (isSafe(i - 1)) {
      this.tapAndVisitNeighbors(i - 1, j);
    }
    if (isSafe(i - 1) && isSafe(j - 1)) {
      this.tapAndVisitNeighbors(i - 1, j - 1);
    }
  }

  public tapAndVisitNeighbors(i: number, j: number): void {
    if (!this.mines[i][j].isPressed ) {
      this.mines[i][j].isPressed = true;
      this.mines[i][j].showContent = true;
      this.tappedMines += 1;
      if (this.mines[i][j].closeMines === 0) {
        this.unhideAdjacents(i, j);
      }
    }
  }
}

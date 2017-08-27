import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MineController } from './mine/mine.component';
import { MineLogic } from './minelogic';

@Component({
  selector: 'minesweeper',
  templateUrl: 'minesweeper.template.html'
})
export class MinesweeperController {
  public mines: MineController[][];
  public icon: string = 'happy';

  constructor(public navCtrl: NavController) {
    const mineLogic: MineLogic = new MineLogic();
    this.mines = mineLogic.mines;
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
      this.mines[i][j].tapMine();
      if (this.mines[i][j].closeMines === 0) {
        this.unhideAdjacents(i, j);
      }
    }
  }
}

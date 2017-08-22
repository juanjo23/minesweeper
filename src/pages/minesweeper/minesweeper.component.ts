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
    this.mines[0][0].showContent = true;
  }

  public unhideAdjacents(mine: MineController): void {
    const i: number = mine.pos.x;
    const j: number = mine.pos.y;
    const length: number = this.mines.length;

    if (i > 0 ) {
      this.mines[i - 1][j].tapMine();
    }
    if (j > 0) {
      this.mines[i][j - 1].tapMine();
    }
    if (i > 0 && j > 0 ) {
      this.mines[i - 1][j - 1].tapMine();
    }
    if (i > 0 && j < length - 1 ) {
        this.mines[i - 1][j + 1].tapMine();
    }
    if (i < length - 1) {
      this.mines[i + 1][j].tapMine();
    }
    if (i < length - 1 && j > 0) {
      this.mines[i + 1][j - 1].tapMine();
    }
    if (j < length - 1) {
      this.mines[i][j + 1].tapMine();
    }
    if (i < length - 1 && j < length - 1) {
      this.mines[i + 1][j + 1].tapMine();
    }

    console.log(mine.pos.x, mine.pos.y);
    this.mines[0][0].showContent = false;
    this.mines[2][2].showContent = true;
    this.mines[3][3].showContent = true;
    this.mines[4][4].showContent = true;
    this.mines[5][5].showContent = true;
    this.mines[6][6].showContent = true;
    this.mines[7][7].showContent = true;
  }

}

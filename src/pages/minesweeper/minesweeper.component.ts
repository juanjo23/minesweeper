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

    const safe: Function = (index: number) => index < 0 ? index + 1 : (index > length - 1 ? index - 1 : index);
    this.mines[safe(i)][safe(j - 1)].tapMine();
    this.mines[safe(i)][safe(j + 1)].tapMine();
    this.mines[safe(i - 1)][safe(j)].tapMine();
    this.mines[safe(i + 1)][safe(j)].tapMine();
    this.mines[safe(i + 1)][safe(j - 1)].tapMine();
    this.mines[safe(i + 1)][safe(j + 1)].tapMine();
    this.mines[safe(i - 1)][safe(j - 1)].tapMine();
    this.mines[safe(i - 1)][safe(j + 1)].tapMine();
  }
}

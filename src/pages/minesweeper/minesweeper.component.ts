import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MineController } from './mine/mine.component';
import { MineLogic } from './minelogic';
import { Box } from './minelogic';

@Component({
  selector: 'minesweeper',
  templateUrl: 'minesweeper.template.html'
})
export class MinesweeperController {
  public mines: Box[][];
  public icon: string = 'happy';

  constructor(public navCtrl: NavController) {
    const a: any = new MineLogic();
    this.mines = a.mines;
  }
  public tapEvent(): void {
    this.icon = this.icon === 'happy' ? 'sad' : 'happy';
  }
  public pressEvent(): void {
    this.icon = this.icon === 'happy' ? 'sad' : 'happy';
  }

}

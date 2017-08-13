import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MineLogic } from './minelogic';
import { Box } from './minelogic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public mines: Box[][];

  constructor(public navCtrl: NavController) {
    const a: any = new MineLogic();
    this.mines = a.mines;
    a.printMines();
  }

}

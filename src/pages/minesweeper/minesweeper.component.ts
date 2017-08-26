import { Component } from '@angular/core';
import { ModalController, NavParams, Platform, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    const mineLogic: MineLogic = new MineLogic();
    this.mines = mineLogic.mines;
    this.mines[0][0].showContent = true;
  }

  public cont: number = 0;
  public unhideAdjacents(i: number, j: number): void {
    const length: number = this.mines.length;
    const isSafe: Function = (index: number) => index < 0 ? false : (index > length - 1 ? false : true);

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
      if (this.mines[i][j].adjacentMines === 0) {
        this.unhideAdjacents(i, j);
      }
    }
  }

  public unhideBlock(i: number, j: number): void {
    const length: number = this.mines.length;
    const safe: Function = (index: number) => index < 0 ? index + 1 : (index > length - 1 ? index - 1 : index);
    this.mines[safe(i)][safe(j - 1)].tapMine();
  }
  public openModal(): void {
    const modal: any = this.modalCtrl.create(ModalContentPage);
    modal.present();
  }
}

@Component({
  templateUrl: './modal.content.html'
})

export class ModalContentPage {

  constructor( public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {

  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
}

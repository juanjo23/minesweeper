import { Component } from '@angular/core';

@Component({
  selector: 'mine',
  templateUrl: 'mine.template.html'
})

export class MineController {
  public isMine: boolean;
  public adjacentMines: number;

  constructor () {
    this.isMine = false;
    this.adjacentMines = 0;
  }

  public setAdjacentMines(minesCount: number): void {
    this.adjacentMines = minesCount;
  }
  public toString(): string {
    if (this.isMine) {
      return '*';
    } else if (this.adjacentMines > 0) {
      return this.adjacentMines + '';
    }
    return '-';
  }

}

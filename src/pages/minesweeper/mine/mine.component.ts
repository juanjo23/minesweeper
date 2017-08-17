import { Component, Input } from '@angular/core';

@Component({
  selector: 'mine',
  templateUrl: 'mine.template.html'
})

export class MineController {
  @Input() public width: any;
  @Input() public mine: any;

  public isMine: boolean;
  public adjacentMines: number;

  constructor () {
    this.isMine = false;
    this.adjacentMines = 0;
    window.console.log(this.mine);
  }

  public ngOnChanges(changes: any): void {
    if (changes.mine && changes.mine.currentValue) {
      this.isMine = this.mine.isMine;
      this.adjacentMines = this.mine.adjacentMines;
    }
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
    return '';
  }

}

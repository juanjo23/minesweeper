import { Component, Input } from '@angular/core';

@Component({
  selector: 'mine',
  templateUrl: 'mine.template.html'
})

export class MineController {
  @Input() public total: any;
  @Input() public mine: any;

  public isMine: boolean;
  public adjacentMines: number;
  public isDisabled: boolean;
  public showFlag: boolean;

  constructor () {
    this.isMine = false;
    this.adjacentMines = 0;
    this.showFlag = false;
  }

  public ngOnChanges(changes: any): void {
    if (changes.mine && changes.mine.currentValue) {
      this.isMine = this.mine.isMine;
      this.adjacentMines = this.mine.adjacentMines;
      this.isDisabled = this.adjacentMines === 0;
    }
  }

  public setAdjacentMines(minesCount: number): void {
    this.adjacentMines = minesCount;
  }

  public setFlag(): void {
    this.showFlag = true;
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

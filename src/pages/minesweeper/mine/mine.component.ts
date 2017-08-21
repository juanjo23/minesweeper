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
  public isPressed: boolean;
  public showFlag: boolean;
  public showContent: boolean;
  public color: string;

  constructor () {
    this.isMine = false;
    this.adjacentMines = 0;
    this.showFlag = false;
    this.showContent = true;
  }

  public ngOnChanges(changes: any): void {
    if (changes.mine && changes.mine.currentValue) {
      this.isMine = this.mine.isMine;
      this.adjacentMines = !this.isMine ? this.mine.adjacentMines : 0;
      this.initValues();
    }
  }

  public initValues(): void {
    this.isPressed = this.adjacentMines === 0 && !this.isMine;
    this.color = `num${this.adjacentMines}`;
  }

  public setAdjacentMines(minesCount: number): void {
    this.adjacentMines = minesCount;
  }

  public toggleFlag(): void {
    this.showFlag = !this.showFlag;
    this.showContent = false;
  }

  public toString(): string {
    if (this.adjacentMines > 0) {
      return this.adjacentMines + '';
    }
    return '';
  }

}

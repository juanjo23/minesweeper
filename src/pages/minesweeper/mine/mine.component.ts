import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mine',
  templateUrl: 'mine.template.html'
})

export class MineController {
  @Input() public total: number;
  @Input() public mine: MineController;
  @Input() public showContent: boolean;
  @Input() public isPressed: boolean;
  @Output() public unhideAdjacents: EventEmitter<boolean> = new EventEmitter<boolean>();

  public pos: {x, y};
  public isMine: boolean;
  public adjacentMines: number;
  public showFlag: boolean;
  public color: string;

  constructor () {
    this.pos = {x: 0, y: 0};
    this.isMine = false;
    this.adjacentMines = 0;
    this.showFlag = false;
    this.showContent = false;
    this.isPressed = false;
  }

  public ngOnChanges(changes: any): void {
    if (changes.mine && changes.mine.currentValue) {
      this.initValues();
    }
  }

  public initValues(): void {
    this.isMine = this.mine.isMine;
    this.adjacentMines = !this.isMine ? this.mine.adjacentMines : 0;
    this.showContent = this.mine.showContent;
    this.isPressed = this.mine.isPressed;
    this.color = `num${this.adjacentMines}`;
  }

  public setAdjacentMines(minesCount: number): void {
    this.adjacentMines = minesCount;
  }

  public toggleFlag(): void {
    this.showFlag = !this.showFlag;
    this.showContent = false;
  }

  public tapMine(): void {
    this.showContent = true;
    this.isPressed = true;
    if (this.adjacentMines === 0) {
      this.unhideAdjacents.emit();
    }
  }

  public toString(): string {
    if (this.adjacentMines > 0) {
      return this.adjacentMines + '';
    }
    return '';
  }

}

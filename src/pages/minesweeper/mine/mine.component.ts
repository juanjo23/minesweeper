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
  @Input() public isGameLost: boolean;
  @Output() public unhideAdjacents: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onLostGame: EventEmitter<void> = new EventEmitter<void>();

  public pos: {x, y};
  public isMine: boolean;
  public closeMines: number;
  public showFlag: boolean;
  public color: string;
  public wrongTap: boolean;
  public toString = () => this.closeMines > 0 ? this.closeMines : '';

  constructor () {
    this.pos = {x: 0, y: 0};
    this.isMine = false;
    this.closeMines = 0;
    this.showFlag = false;
    this.showContent = false;
    this.isPressed = false;
    this.wrongTap = false;
  }

  public ngOnChanges(changes: any): void {
    if (changes.mine && changes.mine.currentValue) {
      this.initValues();
    }
  }

  public initValues(): void {
    this.isMine = this.mine.isMine;
    this.closeMines = !this.isMine ? this.mine.closeMines : 0;
    this.showContent = this.mine.showContent;
    this.isPressed = this.mine.isPressed;
    this.color = `num${this.closeMines}`;
  }

  public setCloseMines(minesCount: number): void {
    this.closeMines = minesCount;
  }

  public toggleFlag(): void {
    this.showFlag = !this.showFlag;
    this.showContent = false;
  }

  public tapMine(): void {
    this.showContent = true;
    this.isPressed = true;
    if (!this.isGameOver() && this.closeMines === 0) {
      this.unhideAdjacents.emit();
    }
  }


  public isGameOver(): boolean {
    if (this.isMine) {
      this.wrongTap = true;
      this.onLostGame.emit();
      return true;
    } else {
      console.log('Game is not over');
    }
  }
}

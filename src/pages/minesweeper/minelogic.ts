import {MineController} from './mine/mine.component';

export class MineLogic {
  public mines: MineController[][] = [];

  public randomMines: number[];
  constructor (private MINES_LENGTH: number = 15, private MINES_CANT: number = 8) {
    this.initGrid();
    this.generateRandomMines();
    this.setMines();
    this.setAdjacentMines();
  }

  public initGrid(): void {
    for (let i: number = 0; i < this.MINES_LENGTH; i += 1) {
      this.mines.push([]);
      for (let j: number = 0; j < this.MINES_LENGTH; j += 1) {
        this.mines[i][j] = new MineController();
        this.mines[i][j].pos = {x: i, y: j};
      }
    }
  }

  private generateRandomMines(): void {
    const randomPlaces: boolean[] = [];
    this.randomMines = [];
    let cont: number = 0;
    do {
      const xRand: number = Math.floor(Math.random() * this.MINES_LENGTH );
      const yRand: number = Math.floor(Math.random() * this.MINES_LENGTH );
      const rand: number = this.joinNumbers(xRand, yRand);
      if (!randomPlaces[rand]) {
        randomPlaces[rand] = true;
        this.randomMines.push(rand);
        cont += 1;
      }
    } while (cont < this.MINES_CANT);
  }

  private joinNumbers = (x: number, y: number) => parseInt([x, y].join(''), 10);

  public setMines(): void {
    const minesPositions: {x: number, y: number}[] = this.randomMines.map( mineNumber => {
      const nums: string[] = (mineNumber + '').split('');
      const point: {x: number, y: number} = {x: 0, y: 0};
      if (nums.length === 1) {
        point.x = parseInt(nums[0], 10);
      } else {
        point.y = parseInt(nums[0], 10);
        point.x = parseInt(nums[1], 10);
      }
      return point;
    });
    minesPositions.forEach(pos => {
      this.mines[pos.y][pos.x].isMine = true;
    });
  }

  public setAdjacentMines(): void {
    for (let i: number = 0; i < this.MINES_LENGTH; i += 1) {
      for (let j: number = 0; j < this.MINES_LENGTH; j += 1) {
        const minesNumber: number = this.countAdjacentMines(i, j);
        this.mines[i][j].setCloseMines(minesNumber);
      }
    }
  }

  private countAdjacentMines(i: number, j: number): number {
    let minesCount: number = 0;
    if (i > 0 && j > 0 && this.mines[i - 1][j - 1].isMine) {
      minesCount += 1;
    }
    if (i > 0 && this.mines[i - 1][j].isMine) {
      minesCount += 1;
    }
    if (i > 0 && j < this.MINES_LENGTH - 1 &&  this.mines[i - 1][j + 1].isMine) {
      minesCount += 1;
    }
    if (i < this.MINES_LENGTH - 1 && j > 0 && this.mines[i + 1][j - 1].isMine) {
      minesCount += 1;
    }
    if (i < this.MINES_LENGTH - 1 && this.mines[i + 1][j].isMine) {
      minesCount += 1;
    }
    if (i < this.MINES_LENGTH - 1 && j < this.MINES_LENGTH - 1 && this.mines[i + 1][j + 1].isMine) {
      minesCount += 1;
    }
    if (j > 0 && this.mines[i][j - 1].isMine) {
      minesCount += 1;
    }
    if (j < this.MINES_LENGTH - 1 && this.mines[i][j + 1].isMine) {
      minesCount += 1;
    }
    return minesCount;
  }
}

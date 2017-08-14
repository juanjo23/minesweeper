export class Box {
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
      return `${this.adjacentMines}`;
    }
    return '-';
  }
}
export class MineLogic {
  public mines: Box[][] = [];
  public MINES_MAX: number = 15;
  public MINES_LENGTH: number = 10;
  public randomMines: number[];
  constructor () {
    this.generateRandomMines();
    this.initGrid();
    this.setMines();
    this.setAdjacentMines();
  }

  private generateRandomMines(): void {
    const randomPlaces: boolean[] = [];
    this.randomMines = [];
    let cont: number = 0;
    do {
      const rand: number = Math.floor(Math.random() * 100);
      if (!randomPlaces[rand]) {
        randomPlaces[rand] = true;
        this.randomMines.push(rand);
        cont += 1;
      }
    } while (cont < this.MINES_MAX);
  }

  public initGrid(): void {
    for (let i: number = 0; i < this.MINES_LENGTH; i += 1) {
      this.mines.push([]);
      for (let j: number = 0; j < this.MINES_LENGTH; j += 1) {
        this.mines[i][j] = new Box();
      }
    }
  }

  public setMines(): void {
    const minesPositions: {x: number, y: number}[] = this.randomMines.map( mineNumber => {
      const nums: string[] = (mineNumber + '').split('');
      const point: {x: number, y: number} = {x: 0, y: 0};
      if (nums.length === 1) {
        point.y = parseInt(nums[0], 10);
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
        this.mines[i][j].setAdjacentMines(minesNumber);
      }
    }
  }

  private countAdjacentMines(i: number, j: number): number {
    let minesCount: number = 0;
    try {
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
    } catch (error) {
      window.console.log(`Error = ${error}`);
    }
    return minesCount;
  }
}

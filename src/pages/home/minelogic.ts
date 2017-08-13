export class Box {
  public isMine: boolean;
  public adjacentMines: number;
  constructor () {
    this.isMine = false;
    this.adjacentMines = undefined;
  }
  public toString(): string {

    return this.isMine ? '* ' : '. ';
  }
}
export class MineLogic {
  public mines: Box[][] = [];
  public MINES_MAX: number = 15;
  public randomMines: number[];
  constructor () {
    this.generateRandomMines();
    this.initGrid();
    this.setMines();
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
    for (let i: number = 0; i < 10; i += 1) {
      this.mines.push([]);
      for (let j: number = 0; j < 10; j += 1) {
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

  public printMines(): void {
    for (let i: number = 0; i < this.mines.length; i += 1) {
      let line: string = '';
      for (let j: number = 0; j < this.mines.length; j += 1) {
        line += this.mines[i][j].isMine ? '*' : '.';
      }
      console.log(line);
    }
  }
}

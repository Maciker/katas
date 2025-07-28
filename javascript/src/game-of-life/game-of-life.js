export class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array(height).fill(null)
      .map(() => Array(width).fill(false));
  }

  isCellAlive(x, y) {
    return this.grid[y][x];
  }

  setCell(x, y, alive) {
    this.grid[y][x] = alive;
  }

  isValidPosition(x, y) {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  countLiveNeighbors(centerX, centerY) {
    const neighborOffsets = [
      [-1, -1], [0, -1], [1, -1],
      [-1,  0],          [1,  0],
      [-1,  1], [0,  1], [1,  1]
    ];

    return neighborOffsets.reduce((liveCount, [dx, dy]) => {
      const neighborX = centerX + dx;
      const neighborY = centerY + dy;
      
      if (this.isValidPosition(neighborX, neighborY) && this.grid[neighborY][neighborX]) {
        return liveCount + 1;
      }
      return liveCount;
    }, 0);
  }

  createEmptyGrid() {
    return Array(this.height).fill(null)
      .map(() => Array(this.width).fill(false));
  }

  willCellLive(isAlive, neighborCount) {
    if (isAlive) {
      return neighborCount === 2 || neighborCount === 3; // Survival rules
    }
    return neighborCount === 3; // Birth rule
  }

  forEachCell(callback) {
    Array.from({ length: this.height }).forEach((_, y) => {
      Array.from({ length: this.width }).forEach((_, x) => {
        callback(x, y);
      });
    });
  }

  nextGeneration() {
    const nextGrid = this.createEmptyGrid();
    
    this.forEachCell((x, y) => {
      const currentState = this.grid[y][x];
      const neighborCount = this.countLiveNeighbors(x, y);
      nextGrid[y][x] = this.willCellLive(currentState, neighborCount);
    });
    
    this.grid = nextGrid;
  }
}
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

  nextGeneration() {
    const newGrid = Array(this.height).fill(null)
      .map(() => Array(this.width).fill(false));
    
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const neighbors = this.countLiveNeighbors(x, y);
        const isAlive = this.grid[y][x];
        
        if (isAlive) {
          newGrid[y][x] = neighbors >= 2 && neighbors <= 3;
        } else {
          newGrid[y][x] = neighbors === 3;
        }
      }
    }
    
    this.grid = newGrid;
  }
}
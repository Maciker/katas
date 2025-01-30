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

  countLiveNeighbors(x, y) {
    let count = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue;
        const newX = x + dx;
        const newY = y + dy;
        if (newX >= 0 && newX < this.width && 
            newY >= 0 && newY < this.height &&
            this.grid[newY][newX]) {
          count++;
        }
      }
    }
    return count;
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
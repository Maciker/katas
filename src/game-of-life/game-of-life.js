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
}
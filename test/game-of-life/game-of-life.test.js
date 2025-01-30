import { Game } from '../../src/game-of-life/game-of-life';

describe('Game of Life', () => {
  describe('Grid initialization', () => {
    test('should create an empty grid of specified size', () => {
      const game = new Game(3, 3);
      expect(game.isCellAlive(0, 0)).toBe(false);
      expect(game.isCellAlive(1, 1)).toBe(false);
      expect(game.isCellAlive(2, 2)).toBe(false);
    });

    test('should allow setting cells alive', () => {
      const game = new Game(3, 3);
      game.setCell(1, 1, true);
      expect(game.isCellAlive(1, 1)).toBe(true);
      expect(game.isCellAlive(0, 0)).toBe(false);
    });
  });

  describe('Game Rules', () => {
    test('live cell with fewer than 2 live neighbors dies', () => {
      const game = new Game(3, 3);
      // Set up a single live cell
      game.setCell(1, 1, true);
      
      game.nextGeneration();
      
      expect(game.isCellAlive(1, 1)).toBe(false);
    });

    test('live cell with 2 live neighbors survives', () => {
      const game = new Game(3, 3);
      // Set up a line of 3 cells with middle cell having 2 neighbors
      game.setCell(0, 1, true);
      game.setCell(1, 1, true);
      game.setCell(2, 1, true);
      
      game.nextGeneration();
      
      expect(game.isCellAlive(1, 1)).toBe(true);
    });

    test('live cell with more than 3 neighbors dies from overpopulation', () => {
      const game = new Game(3, 3);
      // Set up a cell with 4 neighbors
      game.setCell(1, 1, true); // Center cell
      game.setCell(0, 0, true); // Top-left
      game.setCell(0, 1, true); // Left
      game.setCell(1, 0, true); // Top
      game.setCell(2, 0, true); // Top-right
      
      game.nextGeneration();
      
      expect(game.isCellAlive(1, 1)).toBe(false);
    });
  });
});
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
  });
});
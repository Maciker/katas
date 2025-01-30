import { Game } from '../../src/game-of-life/game-of-life';

describe('Game of Life', () => {
  describe('Grid initialization', () => {
    test('should create an empty grid of specified size', () => {
      const game = new Game(3, 3);
      expect(game.isCellAlive(0, 0)).toBe(false);
      expect(game.isCellAlive(1, 1)).toBe(false);
      expect(game.isCellAlive(2, 2)).toBe(false);
    });
  });
});
const assert = require('assert');
const Game = require('../../src/bowling-game/game');

describe('Bowling Game', () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    it('should score 0 for a gutter game', () => {
        rollMany(20, 0);
        assert.strictEqual(game.score(), 0);
    });

    it('should score 20 for all ones game', () => {
        rollMany(20, 1);
        assert.strictEqual(game.score(), 20);
    });

    it('should score 16 for a spare followed by a 3', () => {
        game.roll(5);  // first roll of frame
        game.roll(5);  // spare
        game.roll(3);  // next roll (counted as bonus)
        rollMany(17, 0); // fill the rest with zeros
        assert.strictEqual(game.score(), 16);
    });

    it('should score 24 for a strike followed by 3 and 4', () => {
        game.roll(10);  // strike
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        assert.strictEqual(game.score(), 24);
    });

    it('should score 300 for a perfect game', () => {
        rollMany(12, 10);  // 12 strikes
        assert.strictEqual(game.score(), 300);
    });

    function rollMany(n, pins) {
        for (let i = 0; i < n; i++) {
            game.roll(pins);
        }
    }
});
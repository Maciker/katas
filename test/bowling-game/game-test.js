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

    it('should handle spare in last frame', () => {
        rollMany(18, 0);    // 9 frames of zeros
        game.roll(5);       // last frame first roll
        game.roll(5);       // last frame second roll (spare)
        game.roll(7);       // bonus roll
        assert.strictEqual(game.score(), 17);
    });

    it('should handle strike in last frame', () => {
        rollMany(18, 0);    // 9 frames of zeros
        game.roll(10);      // last frame strike
        game.roll(7);       // bonus roll
        game.roll(2);       // bonus roll
        assert.strictEqual(game.score(), 19);
    });

    describe('Input validation', () => {
        it('should throw error for negative pins', () => {
            assert.throws(() => game.roll(-1), Error);
        });

        it('should throw error for pins > 10', () => {
            assert.throws(() => game.roll(11), Error);
        });

        it('should throw error for non-integer pins', () => {
            assert.throws(() => game.roll(5.5), Error);
        });

        it('should throw error for too many rolls', () => {
            // Roll more than max allowed rolls
            for (let i = 0; i < 22; i++) {
                try {
                    game.roll(0);
                } catch (e) {
                    assert.strictEqual(e.message, 'Cannot roll more than max rolls in a game');
                    return;
                }
            }
            assert.fail('Should have thrown error for too many rolls');
        });
    });

    function rollMany(n, pins) {
        for (let i = 0; i < n; i++) {
            game.roll(pins);
        }
    }
});
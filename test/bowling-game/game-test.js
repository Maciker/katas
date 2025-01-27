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

    function rollMany(n, pins) {
        for (let i = 0; i < n; i++) {
            game.roll(pins);
        }
    }
});
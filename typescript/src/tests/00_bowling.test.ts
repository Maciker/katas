import Game from '../core/00_bowling';
describe('Bowling Game Tests', ()=>{
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    it('should initialize a new game', () => {
        expect(game).toBeDefined();
    });

    it('should score 0 in the worst game', () => {
        rollMany(0)
        expect(game.score()).toBe(0);
    });

    it('should score 20 in a full 1s frame', () => {
        rollMany(1);
        expect(game.score()).toBe(20);
    });

    function rollMany(value: number) {
        for (let i = 0; i < 20; i++) {
            game.roll(value);
        }
    }
})
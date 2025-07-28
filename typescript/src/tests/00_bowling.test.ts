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

    it('should score 20 with a spare roll and two 5s', () => {
        game.roll(5);
        game.roll(5); // Spare
        game.roll(5); // Bonus roll
        rollMany(0);
        expect(game.score()).toBe(20);
    });

    it('should score 300 in a perfect game', () => {
        rollMany(10, 12);
        expect(game.score()).toBe(300);
    });

    function rollMany(value: number, times: number = 20) {
        for (let i = 0; i < times; i++) {
            game.roll(value);
        }
    }
})
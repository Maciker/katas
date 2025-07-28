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
        for (let i = 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score()).toBe(0);
    });
})
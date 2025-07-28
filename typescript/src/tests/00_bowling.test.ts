import Game from '../core/00_bowling';
describe('Bowling Game Tests', ()=>{
    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    it('should initialize a new game', () => {
        expect(game).toBeDefined();
    });
})
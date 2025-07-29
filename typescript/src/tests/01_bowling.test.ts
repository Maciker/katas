import  BowlingGame from '../core/01_bowling';
import Game from "../core/00_bowling";
describe("Bowling Game", () => {
    let game: BowlingGame;

    beforeEach(() => {
        game = new BowlingGame();
    });

    it('should return 0 for no rolls', () => {
        expect(game.totalScore()).toBe(0);
    })
});
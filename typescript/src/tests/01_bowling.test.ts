import  BowlingGame from '../core/01_bowling';
import Game from "../core/00_bowling";
describe("Bowling Game", () => {
    let game: BowlingGame;

    beforeEach(() => {
        game = new BowlingGame();
    });

    it('should score 0 in a full fail game', () => {
        for (let i = 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.totalScore()).toBe(0);
    })
});
import  BowlingGame from '../core/01_bowling';
describe("Bowling Game", () => {
    it('should return 0 for no rolls', () => {
        const game = new BowlingGame();
        expect(game.totalScore()).toBe(0);
    })
});
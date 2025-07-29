import  BowlingGame from '../core/01_bowling';
describe("Bowling Game", () => {
    let bowlingGame: BowlingGame;

    beforeEach(() => {
        bowlingGame = new BowlingGame();
    });

    it('should score 0 in a full fail game', () => {
        for (let i = 0; i < 20; i++) {
            bowlingGame.roll(0);
        }
        expect(bowlingGame.totalScore()).toBe(0);
    })

    it('should score 20 in a full 1s game', () => {
        for (let i = 0; i < 20; i++) {
            bowlingGame.roll(1);
        }
        expect(bowlingGame.totalScore()).toBe(20);
    })
});
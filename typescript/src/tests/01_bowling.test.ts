import  BowlingGame from '../core/01_bowling';
describe("Bowling Game", () => {
    let bowlingGame: BowlingGame;

    beforeEach(() => {
        bowlingGame = new BowlingGame();
    });

    it('should score 0 in a full fail game', () => {
        manyRolls();
        expect(bowlingGame.calculateTotalScore()).toBe(0);
    })

    it('should score 20 in a full 1s game', () => {
        manyRolls(1)
        expect(bowlingGame.calculateTotalScore()).toBe(20);
    })

    it('should score 20 with a spare roll and two 5s', () => {
        bowlingGame.roll(5);
        bowlingGame.roll(5); // Spare
        bowlingGame.roll(5); // Bonus roll
        manyRolls(0);
        expect(bowlingGame.calculateTotalScore()).toBe(20);
    });

    it('should score 300 in a perfect game', () => {
        manyRolls(10, 12);
        expect(bowlingGame.calculateTotalScore()).toBe(300);
    });

    function manyRolls(pinsHit: number = 0, times: number = 20) {
        for (let i = 0; i < times; i++) {
            bowlingGame.roll(pinsHit);
        }
    }
});
import getTennisScore from "../src/getTennisScore";

describe('Tennis score test suite', () => {
    it('should return player one Wins when reach 4 points with an advantage of 2', () => {
        expect(getTennisScore(4, 0)).toEqual('Player One Wins')
    })
})
import getTennisScore from "../src/getTennisScore";

describe('Tennis score test suite', () => {
    it('should return player one Wins when reach 4 points with an advantage of 2', () => {
        expect(getTennisScore(4, 0)).toEqual('Player One Wins')
        expect(getTennisScore(4, 1)).toEqual('Player One Wins')
    })
    it('should return player Two Wins when reach 4 points with an advantage of 2', () => {
        expect(getTennisScore(2, 4)).toEqual('Player Two Wins')
    })
    it('should return "Love-All" if the players are tied at 0', () => {
        expect(getTennisScore(0, 0)).toEqual('Love-All')
    })
})
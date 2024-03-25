import getTennisScore from "../src/getTennisScore";

describe('Tennis score test suite', () => {
    it('should return player one Wins when reach 4 points with an advantage of 2', () => {
        expect(getTennisScore(4, 0)).toEqual('Player One Wins')
        expect(getTennisScore(4, 1)).toEqual('Player One Wins')
        expect(getTennisScore(7, 5)).toEqual('Player One Wins')
    })
    it('should return player Two Wins when reach 4 points with an advantage of 2', () => {
        expect(getTennisScore(2, 4)).toEqual('Player Two Wins')
        expect(getTennisScore(6, 8)).toEqual('Player Two Wins')
    })
    it('should return "Love-All" if the players are tied at 0', () => {
        expect(getTennisScore(0, 0)).toEqual('Love-All')
    })
    it('should return "Fifteen-All" if the players are tied at 0', () => {
        expect(getTennisScore(1, 1)).toEqual('Fifteen-All')
    })
    it('should return "Thirty-All" if the players are tied at 0', () => {
        expect(getTennisScore(2, 2)).toEqual('Thirty-All')
    })
    it('should return "Deuce" if the players are tied at 3 or more', () => {
        expect(getTennisScore(3, 3)).toEqual('Deuce')
        expect(getTennisScore(3, 3)).toEqual('Deuce')
    })
    it('should return "Advantage Player One" when both reach 3 or more points and the player two is one less', () => {
        expect(getTennisScore(4, 3)).toEqual('Advantage Player One')
        expect(getTennisScore(7, 6)).toEqual('Advantage Player One')
    })
    it('should return "Advantage Player Two" when both reach 3 or more points and the player one is one less', () => {
        expect(getTennisScore(3, 4)).toEqual('Advantage Player Two')
        expect(getTennisScore(6, 7)).toEqual('Advantage Player Two')
    })
    it('should return the scoring of both players', () => {
        expect(getTennisScore(1, 0)).toEqual('Fifteen - Love')
        expect(getTennisScore(1, 3)).toEqual('Fifteen - Forty')
    })
})
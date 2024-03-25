const getTennisScore = (playerOneScore, playerTwoScore) => {
    const scoreSyntax = {
        0: 'Love',
        1: 'Fifteen',
        2: 'Thirty',
        3: 'Forty'
    }
    if (playerOneScore === playerTwoScore) {
        return `${scoreSyntax[playerOneScore]}-All`
    }
    if (playerOneScore >= 4 && playerTwoScore <= 2) {
        return "Player One Wins"
    }
    if (playerOneScore <= 2 && playerTwoScore >= 4) {
        return "Player Two Wins"
    }
    return 0
}
export default getTennisScore
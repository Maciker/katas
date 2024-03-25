const getTennisScore = (playerOneScore, playerTwoScore) => {
    const scoreSyntax = {
        0: 'Love',
        1: 'Fifteen',
        2: 'Thirty',
        3: 'Forty'
    }
    if (playerOneScore === playerTwoScore) {
        if (playerOneScore < 3 ) {
            return `${scoreSyntax[playerOneScore]}-All`
        }
        return 'Deuce'
    }
    if (playerOneScore - playerTwoScore >= 2 && playerOneScore >= 4) {
        return "Player One Wins"
    } else if (playerOneScore - playerTwoScore === 1 && playerTwoScore >=3) {
        return "Advantage Player One"
    }
    if (playerTwoScore - playerOneScore >= 2 && playerTwoScore >= 4) {
        return "Player Two Wins"
    } else if (playerTwoScore - playerOneScore === 1 && playerOneScore >=3) {
        return "Advantage Player Two"
    }
    return 0
}
export default getTennisScore
const getTennisScore = (playerOneScore, playerTwoScore) => {
    if (playerOneScore >= 4 && playerTwoScore <= 2) {
        return "Player One Wins"
    }
    if (playerOneScore <= 2 && playerTwoScore >= 4) {
        return "Player Two Wins"
    }
    return 0
}
export default getTennisScore
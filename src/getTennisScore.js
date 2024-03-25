const getTennisScore = (playerOneScore, playerTwoScore) => {
    if (playerOneScore >= 4 && playerTwoScore <= 2) {
        return "Player One Wins"
    }
    return 0
}
export default getTennisScore
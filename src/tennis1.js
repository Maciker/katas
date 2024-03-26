'use strict';

function getScore(m_score1, m_score2) {
    const scoreSyntax = {
        0: 'Love',
        1: 'Fifteen',
        2: 'Thirty',
        3: 'Forty'
    }
    if (m_score1 === m_score2) {
        if (m_score1 >= 3) {
            return 'Deuce'
        }
        return `${scoreSyntax[m_score1]}-All`
    }
    const scoreRemainder = m_score1 - m_score2;
    const bothScoresAboveFour = m_score1 >= 4 || m_score2 >= 4;
    if (bothScoresAboveFour && scoreRemainder === 1) {
        return "Advantage player1";
    }
    if (bothScoresAboveFour && scoreRemainder === -1) {
        return "Advantage player2";
    }
    if (bothScoresAboveFour && scoreRemainder >= 2) {
        return "Win for player1";
    }
    if (bothScoresAboveFour && scoreRemainder <= -2) {
        return "Win for player2";
    }

    return `${scoreSyntax[m_score1]}-${scoreSyntax[m_score2]}`;
}

module.exports = getScore;
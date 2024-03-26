'use strict';

function getScore(m_score1, m_score2) {
    const scoreSyntax = {
        0: 'Love',
        1: 'Fifteen',
        2: 'Thirty',
        3: 'Forty'
    }
    let score = "";
    let tempScore = 0;
    if (m_score1 === m_score2) {
        if (m_score1 >= 3) {
            return 'Deuce'
        }
        return `${scoreSyntax[m_score1]}-All`
    }
    const minusResult = m_score1 - m_score2;
    if (m_score1 >= 4 || m_score2 >= 4) {
        if (minusResult === 1) {
            return "Advantage player1";
        }
        if (minusResult === -1) {
            return "Advantage player2";
        }
        if (minusResult >= 2) {
            return "Win for player1";
        }
        if (minusResult <= -2) {
            score = "Win for player2";
        }
    } else {
        for (let i = 1; i < 3; i++) {
            if (i === 1) {tempScore = m_score1;}
            else {
                score += "-";
                tempScore = m_score2;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
}

module.exports = getScore;
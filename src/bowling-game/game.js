class Game {
    constructor() {
        this.rolls = new Array(21).fill(0);
        this.currentRoll = 0;
    }

    roll(pins) {
        this.rolls[this.currentRoll++] = pins;
    }

    score() {
        let score = 0;
        let frameIndex = 0;
        
        for (let frame = 0; frame < 10; frame++) {
            score += this.scoreFrame(frameIndex);
            frameIndex += this.nextFrameIndex(frameIndex);
        }
        return score;
    }

    scoreFrame(frameIndex) {
        if (this.isStrike(frameIndex)) {
            return 10 + this.strikeBonus(frameIndex);
        }
        if (this.isSpare(frameIndex)) {
            return 10 + this.spareBonus(frameIndex);
        }
        return this.sumOfBallsInFrame(frameIndex);
    }

    nextFrameIndex(frameIndex) {
        return this.isStrike(frameIndex) ? 1 : 2;
    }

    isStrike(frameIndex) {
        return this.rolls[frameIndex] === 10;
    }

    isSpare(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }

    strikeBonus(frameIndex) {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    }

    spareBonus(frameIndex) {
        return this.rolls[frameIndex + 2];
    }

    sumOfBallsInFrame(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
    }
}

module.exports = Game;
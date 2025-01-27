class Game {
    constructor() {
        this.rolls = new Array(21).fill(0);
        this.currentRoll = 0;
    }

    roll(pins) {
        this.rolls[this.currentRoll++] = pins;
    }

    score() {
        let gameScore = 0;
        let currentFrame = 0;
        
        for (let frameNumber = 0; frameNumber < 10; frameNumber++) {
            gameScore += this.scoreFrame(currentFrame);
            currentFrame += this.getFrameSize(currentFrame);
        }
        return gameScore;
    }

    scoreFrame(frameStart) {
        if (this.isStrike(frameStart)) {
            return 10 + this.strikeBonus(frameStart);
        }
        if (this.isSpare(frameStart)) {
            return 10 + this.spareBonus(frameStart);
        }
        return this.sumOfBallsInFrame(frameStart);
    }

    getFrameSize(frameStart) {
        return this.isStrike(frameStart) ? 1 : 2;
    }

    isStrike(frameStart) {
        return this.rolls[frameStart] === 10;
    }

    isSpare(frameStart) {
        return this.rolls[frameStart] + this.rolls[frameStart + 1] === 10;
    }

    strikeBonus(frameStart) {
        return this.rolls[frameStart + 1] + this.rolls[frameStart + 2];
    }

    spareBonus(frameStart) {
        return this.rolls[frameStart + 2];
    }

    sumOfBallsInFrame(frameStart) {
        return this.rolls[frameStart] + this.rolls[frameStart + 1];
    }
}

module.exports = Game;
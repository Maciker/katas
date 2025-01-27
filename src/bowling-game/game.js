class Game {
    static MAX_PINS = 10;
    static FRAMES_PER_GAME = 10;
    static MAX_ROLLS = 21;  // 2 rolls per frame * 10 frames + 1 bonus roll

    #rolls;
    #currentRoll;

    constructor() {
        this.#rolls = new Array(Game.MAX_ROLLS).fill(0);
        this.#currentRoll = 0;
    }

    /**
     * Records a roll in the game
     * @param {number} pins - Number of pins knocked down in this roll
     * @throws {Error} If pins is invalid or if too many rolls are made
     */
    roll(pins) {
        if (!Number.isInteger(pins) || pins < 0 || pins > Game.MAX_PINS) {
            throw new Error(`Invalid number of pins: ${pins}. Must be between 0 and ${Game.MAX_PINS}`);
        }
        if (this.#currentRoll >= Game.MAX_ROLLS) {
            throw new Error('Cannot roll more than max rolls in a game');
        }
        
        const frameIndex = Math.floor(this.#currentRoll / 2);
        const isSecondRoll = this.#currentRoll % 2 === 1;
        const isNotLastFrame = frameIndex < 9;
        
        if (isSecondRoll && isNotLastFrame) {
            const firstRoll = this.#rolls[this.#currentRoll - 1];
            if (firstRoll !== Game.MAX_PINS && firstRoll + pins > Game.MAX_PINS) {
                throw new Error(`Invalid roll: ${pins}. Total pins in frame cannot exceed ${Game.MAX_PINS}`);
            }
        }
        
        this.#rolls[this.#currentRoll++] = pins;
    }

    /**
     * Calculates the total score for the game
     * @returns {number} The total score
     */
    score() {
        let gameScore = 0;
        let currentFrame = 0;
        
        for (let frameNumber = 0; frameNumber < Game.FRAMES_PER_GAME; frameNumber++) {
            gameScore += this.scoreFrame(currentFrame);
            currentFrame += this.getFrameSize(currentFrame);
        }
        return gameScore;
    }

    /**
     * Calculates the score for a single frame
     * @param {number} frameStart - Starting position of the frame in the rolls array
     * @returns {number} The score for this frame including any bonus
     */
    scoreFrame(frameStart) {
        if (this.isStrike(frameStart)) {
            return Game.MAX_PINS + this.strikeBonus(frameStart);
        }
        if (this.isSpare(frameStart)) {
            return Game.MAX_PINS + this.spareBonus(frameStart);
        }
        return this.sumOfBallsInFrame(frameStart);
    }

    /**
     * Determines the size of a frame (1 for strike, 2 for others)
     * @param {number} frameStart - Starting position of the frame
     * @returns {number} The size of the frame
     */
    getFrameSize(frameStart) {
        return this.isStrike(frameStart) ? 1 : 2;
    }

    /**
     * Checks if the frame is a strike
     * @param {number} frameStart - Starting position of the frame
     * @returns {boolean} True if it's a strike
     */
    isStrike(frameStart) {
        return this.#rolls[frameStart] === Game.MAX_PINS;
    }

    /**
     * Checks if the frame is a spare
     * @param {number} frameStart - Starting position of the frame
     * @returns {boolean} True if it's a spare
     */
    isSpare(frameStart) {
        return this.sumOfBallsInFrame(frameStart) === Game.MAX_PINS;
    }

    /**
     * Calculates bonus points for a strike
     * @param {number} frameStart - Starting position of the frame
     * @returns {number} The bonus points
     */
    strikeBonus(frameStart) {
        return this.#rolls[frameStart + 1] + this.#rolls[frameStart + 2];
    }

    /**
     * Calculates bonus points for a spare
     * @param {number} frameStart - Starting position of the frame
     * @returns {number} The bonus points
     */
    spareBonus(frameStart) {
        return this.#rolls[frameStart + 2];
    }

    /**
     * Calculates the sum of both rolls in a frame
     * @param {number} frameStart - Starting position of the frame
     * @returns {number} The sum of both rolls
     */
    sumOfBallsInFrame(frameStart) {
        return this.#rolls[frameStart] + this.#rolls[frameStart + 1];
    }
}

module.exports = Game;
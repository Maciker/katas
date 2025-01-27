class Game {
    constructor() {
        this.rolls = new Array(21).fill(0);
        this.currentRoll = 0;
    }

    roll(pins) {
        this.rolls[this.currentRoll++] = pins;
    }

    score() {
        return 0;
    }
}

module.exports = Game;
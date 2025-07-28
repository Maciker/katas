class Game {
    private rolls: number[] = [];
    constructor() {
        // Initialize properties if needed
    }
    roll(pins: number): void {
        this.rolls.push(pins);
    }
    score(): number {
        let totalScore = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (rollIndex >= this.rolls.length) {
                break;
            }

            if (this.rolls[rollIndex] === 10) { // Strike
                totalScore += 10 + (this.rolls[rollIndex + 1] || 0) + (this.rolls[rollIndex + 2] || 0);
                rollIndex += 1;
            } else if ((this.rolls[rollIndex] || 0) + (this.rolls[rollIndex + 1] || 0) === 10) { // Spare
                totalScore += 10 + (this.rolls[rollIndex + 2] || 0);
                rollIndex += 2;
            } else { // Open frame
                totalScore += (this.rolls[rollIndex] || 0) + (this.rolls[rollIndex + 1] || 0);
                rollIndex += 2;
            }
        }

        return totalScore;
    }
}
// Example usage:
const game = new Game();
game.roll(5);
game.roll(4);
console.log(game.score()); // Should return 0 until implemented

export default Game;
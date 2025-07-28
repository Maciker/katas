class Game {
    private rolls: number[] = [];
    constructor() {
        // Initialize properties if needed
    }
    roll(pins: number): void {
        this.rolls.push(pins);
    }
    score(): number {
        let rollIndex = 0;

        return this.rolls.reduce((totalScore) => {

            if (rollIndex >= this.rolls.length) {
                return totalScore;
            }
            if (this.rolls[rollIndex] === 10) { // Strike
                totalScore += 10 + (this.rolls[rollIndex + 1] || 0) + (this.rolls[rollIndex + 2] || 0);
                rollIndex += 1;
            } else if (this.rolls[rollIndex] + (this.rolls[rollIndex + 1] || 0) === 10) { // Spare
                totalScore += 10 + (this.rolls[rollIndex + 2] || 0);
                rollIndex += 2;
            } else { // Open frame
                totalScore += this.rolls[rollIndex];
                rollIndex += 1;
            }
            return totalScore
        }, 0);
    }
}
// Example usage:
const game = new Game();
game.roll(5);
game.roll(4);
console.log(game.score()); // Should return 0 until implemented

export default Game;
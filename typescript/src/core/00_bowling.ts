class Game {
    private rolls: number[] = [];
    constructor() {
        // Initialize properties if needed
    }
    roll(pins: number): void {
        this.rolls.push(pins);
    }
    score(): number {
        return this.rolls.reduce((accumulated, current) => accumulated + current, 0);
    }
}
// Example usage:
const game = new Game();
game.roll(5);
game.roll(4);
console.log(game.score()); // Should return 0 until implemented

export default Game;
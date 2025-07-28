class Game {
    constructor() {
        // Initialize properties if needed
    }
    roll(pins: number): void {

    }
    score(): number {
        return 1;
    }
}

// Example usage:
const game = new Game();
game.roll(5);
game.roll(4);
console.log(game.score()); // Should return 0 until implemented

export default Game;
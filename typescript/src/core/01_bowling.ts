class BowlingGame {
    private rolls: number[] = [];
    roll(pins: number): void {
        this.rolls.push(pins);
    }

    calculateTotalScore(): number {
        return this.rolls.reduce((total, pins) => total + pins, 0);
    }
}

export default BowlingGame;
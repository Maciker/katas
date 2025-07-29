class BowlingGame {
    private rolls: number[] = [];
    roll(pins: number): void {
        this.rolls.push(pins);
    }

    totalScore(): number {
        return 0
    }
}

export default BowlingGame;
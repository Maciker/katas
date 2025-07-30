export type CellStatus = {
    Alive: boolean;
    Dead: boolean;
};

export class Cell {
    constructor(readonly CellStatus: CellStatus) {

    }

    cellLifeStatus(aliveNeighbors: number): CellStatus {
        const cellStatus: CellStatus = {
            Alive: false,
            Dead: true
        };

        if (this.CellStatus) {
            // Live cell logic
            if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                cellStatus.Alive = false; // Under-population or Over-population
            } else {
                cellStatus.Alive = true; // Survival
            }
        } else {
            // Dead cell logic
            if (aliveNeighbors === 3) {
                cellStatus.Alive = true; // Reproduction
            }
        }

        return cellStatus;
    }
}
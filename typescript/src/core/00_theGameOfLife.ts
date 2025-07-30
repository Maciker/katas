export type CellStatus = {
    Alive: boolean;
    Dead: boolean;
};

export class Cell {
    constructor(readonly CellStatus: CellStatus) {

    }

    cellLifeStatus(aliveNeighbors: number): CellStatus {
        const aliveCellStatus: CellStatus = {
            Alive: true,
            Dead: false
        };

        const deadCellStatus: CellStatus = {
            Alive: false,
            Dead: true
        };

        if (this.CellStatus.Alive) {
            // Live cell logic
            if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                return deadCellStatus // Under-population or Over-population
            } else {
                return aliveCellStatus // Survival
            }
        }
        if (aliveNeighbors === 3) {
            return aliveCellStatus // Reproduction
        }

        return this.CellStatus;
    }
}
import {CellStatus, aliveCellStatus, deadCellStatus} from "./00_CellStatusType";

export class Cell {
    constructor(readonly CellStatus: CellStatus) {

    }

    cellLifeStatus(aliveNeighbors: number): CellStatus {
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
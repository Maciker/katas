import {CellStatus, aliveCellStatus, deadCellStatus} from "./00_CellStatusType";

export class Cell {
    constructor(readonly CellStatus: CellStatus) {

    }

    isAlive(): boolean {
        return this.CellStatus.Alive;
    }

    cellLifeCycle(aliveNeighbors: number): Cell {
        if (this.isAlive()) {
            // Live cell logic
            return this.aliveCellLifeCycle(aliveNeighbors);
        }
        return this.deadCellLifeCycle(aliveNeighbors);
    }

    private deadCellLifeCycle(aliveNeighbors: number) {
        if (aliveNeighbors === 3) {
            return new Cell(aliveCellStatus) // Reproduction
        }

        return this;
    }

    private aliveCellLifeCycle(aliveNeighbors: number) {
        if (aliveNeighbors < 2 || aliveNeighbors > 3) {
            return new Cell(deadCellStatus) // Under-population or Over-population
        } else {
            return new Cell(aliveCellStatus) // Survival
        }
    }
}
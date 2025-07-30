/*	Rule
1	Under‑population – a live cell with fewer than two live neighbors dies.
2	Over‑population – a live cell with more than three live neighbors dies.
3	Survival – a live cell with two or three live neighbors lives on to the next generation.
4	Reproduction – a dead cell with exactly three live neighbors becomes a live cell.*/

import {Cell, CellStatus} from "../core/00_theGameOfLife";
let aliveCell : Cell;
let deadCell : Cell;

const DeadCellStatus: CellStatus = {
    Alive: false,
    Dead: true
};

const AliveCellStatus: CellStatus = {
    Alive: true,
    Dead: false
};

beforeEach(() => {
    aliveCell = new Cell(AliveCellStatus);
    deadCell = new Cell(DeadCellStatus);
})

describe('The Game of Life', () => {
    it('Under‑population – a live cell with fewer than two live neighbors dies.', () => {
        let nextStatus = aliveCell.cellLifeStatus(1);
        expect(nextStatus).toStrictEqual(DeadCellStatus)
    })
})
/*	Rule
1	Under‑population – a live cell with fewer than two live neighbors dies.
2	Over‑population – a live cell with more than three live neighbors dies.
3	Survival – a live cell with two or three live neighbors lives on to the next generation.
4	Reproduction – a dead cell with exactly three live neighbors becomes a live cell.
*/

import { Cell } from '../core/00_theGameOfLife';

import { aliveCellStatus, deadCellStatus } from '../core/00_CellStatusType';
let aliveCell: Cell;
let deadCell: Cell;

beforeEach(() => {
  aliveCell = new Cell(aliveCellStatus);
  deadCell = new Cell(deadCellStatus);
});

describe('The Game of Life', () => {
  it('Under‑population – a live cell with fewer than two live neighbors dies.', () => {
    expect(aliveCell.cellLifeCycle(1).CellStatus).toStrictEqual(deadCellStatus);
    expect(deadCell.cellLifeCycle(1).CellStatus).toStrictEqual(deadCellStatus);
  });
  it('Over‑population – a live cell with more than three live neighbors dies.', () => {
    expect(aliveCell.cellLifeCycle(4).CellStatus).toStrictEqual(deadCellStatus);
    expect(deadCell.cellLifeCycle(4).CellStatus).toStrictEqual(deadCellStatus);
  });
  it('Survival – a live cell with two or three live neighbors lives on to the next generation.', () => {
    expect(aliveCell.cellLifeCycle(2).CellStatus).toStrictEqual(aliveCellStatus);
    expect(aliveCell.cellLifeCycle(3).CellStatus).toStrictEqual(aliveCellStatus);

    expect(deadCell.cellLifeCycle(2).CellStatus).toStrictEqual(deadCellStatus);
  });
  it('Reproduction – a dead cell with exactly three live neighbors becomes a live cell.', () => {
    expect(deadCell.cellLifeCycle(3).CellStatus).toStrictEqual(aliveCellStatus);
  });
});

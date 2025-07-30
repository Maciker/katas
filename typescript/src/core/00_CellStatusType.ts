export type CellStatus = {
    Alive: boolean;
    Dead: boolean;
};

export const aliveCellStatus: CellStatus = {
    Alive: true,
    Dead: false
};

export const deadCellStatus: CellStatus = {
    Alive: false,
    Dead: true
};
# Conway’s Game of Life – Kata Problem Statement

This kata asks you to compute the next generation of Conway’s Game of Life for any given starting state.

World – a finite, two‑dimensional grid of cells.

Cell state – each cell is either alive or dead.

Edges – life cannot exist outside the grid (no wrap‑around).

Task – given an initial board, produce the board for the next generation by applying Conway’s four rules:

#	Rule
1	Under‑population – a live cell with fewer than two live neighbors dies.
2	Over‑population – a live cell with more than three live neighbors dies.
3	Survival – a live cell with two or three live neighbors lives on to the next generation.
4	Reproduction – a dead cell with exactly three live neighbors becomes a live cell.

Your solution should support:

Creating a board from any valid initial state (or a random one).

Evolving the board once to its next generation using the rules above
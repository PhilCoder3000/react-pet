import { ISudokuField } from './types';

export default class SudokuField implements ISudokuField {
  #size: number;
  #availableValues: number[];
  #blank: number[][];

  constructor(size: 9) {
    this.#size = size;
    this.#availableValues = Array.from({ length: size }, (_, i) => i + 1);
    this.#blank = Array.from({ length: (size / 3) ** 2 }, () =>
      Array.from({ length: 9 }, () => 0),
    );
  }

  fillBlank() {
    for (let i = 0; i < this.#blank.length; i++) {
      switch (i) {
        case 0:
        case 1:
        case 2:
          this.#blank[i] = this.getSquare(this.#blank.slice(0, i), []);
          break;
        case 3:
        case 4:
        case 5:
          this.#blank[i] = this.getSquare(this.#blank.slice(3, i), [
            this.#blank[i - 3],
          ]);
          break;
        case 6:
        case 7:
        case 8:
          this.#blank[i] = this.getSquare(this.#blank.slice(6, i), [
            this.#blank[i - 3],
            this.#blank[i - 6],
          ]);
          break;
        default:
          break;
      }
    }
    return this.#blank;
  }

  getSquare(horizontalSquare: number[][], verticalSquare: number[][]) {
    const square: number[] = [];
    for (let i = 0; i < 9; i++) {
      const availableForRow = this.getAvailableForRow(i, horizontalSquare, this.#availableValues);
      const availableForColumn = this.getAvailableForColumn(i, verticalSquare, this.#availableValues);
      const usedValues = [
        ...availableForColumn,
        ...availableForRow,
        ...square
      ]
      square.push(
        this.getRandomItemFromArray(usedValues),
      );
    }
    return square;
  }

  getAvailableForRow(i: number, usedSquares: number[][], availableValues: number[]) {
    let usedValues: number[] = [];
    if (i < 3) {
      usedValues = usedSquares.map((sq) => sq.slice(0, 3)).flat();
    } else if (i < 6) {
      usedValues = usedSquares.map((sq) => sq.slice(3, 6)).flat();
    } else if (i < 9) {
      usedValues = usedSquares.map((sq) => sq.slice(6, 9)).flat();
    }
    return availableValues.filter((v) => !usedValues.includes(v));
  }

  getAvailableForColumn(i: number, usedSquares: number[][], availableValues: number[]) {
    let usedValues: number[] = [];
    if (i === 0 || i === 3 || i === 6) {
      usedValues = usedSquares.map((sq) => [sq[0], sq[3], sq[6]]).flat();
    }
    if (i === 1 || i === 4 || i === 7) {
      usedValues = usedSquares.map((sq) => [sq[1], sq[4], sq[7]]).flat();
    }
    if (i === 2 || i === 5 || i === 8) {
      usedValues = usedSquares.map((sq) => [sq[2], sq[5], sq[8]]).flat();
    }
    return availableValues.filter((v) => !usedValues.includes(v));
  }

  getRandomItemFromArray(arr: number[]): number {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
}

// // Define the size of the Sudoku grid (standard Sudoku is 9x9)
// const size = 9;

// // Define a function to generate a blank Sudoku grid
// function generateBlankGrid() {
//   const grid = [];
//   for (let i = 0; i < size; i++) {
//     grid.push([]);
//     for (let j = 0; j < size; j++) {
//       grid[i].push(0);
//     }
//   }
//   return grid;
// }

// // Define a function to randomly fill in the Sudoku grid
// function fillGrid(grid) {
//   for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//       // Check if the current cell is already filled in
//       if (grid[i][j] === 0) {
//         // Generate a list of possible values for this cell
//         const possibleValues = getPossibleValues(grid, i, j);
//         // If there are no possible values, backtrack to the previous cell
//         if (possibleValues.length === 0) {
//           return false;
//         }
//         // Otherwise, randomly choose one of the possible values and continue
//         const randomValue = possibleValues[Math.floor(Math.random() * possibleValues.length)];
//         grid[i][j] = randomValue;
//       }
//     }
//   }
//   return true;
// }

// // Define a function to get the possible values for a given cell
// function getPossibleValues(grid, row, col) {
//   const possibleValues = [];
//   for (let i = 1; i <= size; i++) {
//     // Check if this value is already in the same row or column
//     let foundInRow = false;
//     let foundInCol = false;
//     for (let j = 0; j < size; j++) {
//       if (grid[row][j] === i) {
//         foundInRow = true;
//       }
//       if (grid[j][col] === i) {
//         foundInCol = true;
//       }
//     }
//     // Check if this value is already in the same 3x3 box
//     const boxRow = Math.floor(row / 3) * 3;
//     const boxCol = Math.floor(col / 3) * 3;
//     for (let j = boxRow; j < boxRow + 3; j++) {
//       for (let k = boxCol; k < boxCol + 3; k++) {
//         if (grid[j][k] === i) {
//           foundInRow = true;
//         }
//       }
//     }
//     // If this value is not already in the same row, column, or box, add it to the list of possible values
//     if (!foundInRow && !foundInCol) {
//       possibleValues.push(i);
//     }
//   }
//   return possibleValues;
// }

// // Define a function to remove some of the values from the completed Sudoku grid to create a puzzle
// function createPuzzle(grid, difficulty) {
//   const numberOfCellsToRemove = Math.floor((difficulty / 10) * size * size);
//   let cellsRemoved = 0;
//   while (cellsRemoved < numberOfCellsToRemove) {
//     const row = Math.floor(Math.random() * size);
//     const col = Math.floor(Math.random() * size);
//     if (grid[row][col] !== 0) {
//       grid[row][col] = 0;
//       cellsRemoved++;
//     }
//   }
// }

// // Generate a blank Sudoku grid
// const blankGrid = generateBlankGrid();

// // Fill in the Sudoku grid
// if (fillGrid(blankGrid)) {
//   // Create a puzzle from the completed Sudoku
// createPuzzle(blankGrid, 50); // 50 represents the difficulty level of the puzzle (here it's set to "hard")
// }
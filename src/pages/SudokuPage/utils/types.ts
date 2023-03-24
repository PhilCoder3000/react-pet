export interface ISudokuField {
  fillBlank(): number[][]
  getSquare(horizontalSquare: number[][], verticalSquare: number[][]): number[]
  getAvailableForRow(i: number, usedSquares: number[][], availableValues: number[]): number[]
  getAvailableForColumn(i: number, usedSquares: number[][], availableValues: number[]): number[]
  getRandomItemFromArray(arr: number[]): number
}
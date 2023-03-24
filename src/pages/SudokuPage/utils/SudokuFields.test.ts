import SudokuField from './SudokuField';

describe('Sudoku', () => {
  const sudoku = new SudokuField(9);

  test('getRandomItemFromArray', () => {
    let randomItem = sudoku.getRandomItemFromArray([5])
    expect(randomItem).toBe(5)

    const arr = [3, 5, 7, 9]
    randomItem = sudoku.getRandomItemFromArray(arr)
    expect(arr.includes(randomItem)).toBeTruthy()
  })

  test('getAvailableForColumn', () => {
    const square = [1,2,3,4,5,6,7,8,9]

    let availableForColumn = sudoku.getAvailableForColumn(0, [square], square)
    expect([2,3,5,6,8,9]).toStrictEqual(availableForColumn)

    availableForColumn = sudoku.getAvailableForColumn(1, [square], square)
    expect([1,3,4,6,7,9]).toStrictEqual(availableForColumn)

    availableForColumn = sudoku.getAvailableForColumn(2, [square], square)
    expect([1,2,4,5,7,8]).toStrictEqual(availableForColumn)
  })

  test('getAvailableForRow', () => {
    const square = [1,2,3,4,5,6,7,8,9]

    let availableForColumn = sudoku.getAvailableForRow(1, [square], square)
    expect([4,5,6,7,8,9]).toStrictEqual(availableForColumn)

    availableForColumn = sudoku.getAvailableForRow(3, [square], square)
    expect([1,2,3,7,8,9]).toStrictEqual(availableForColumn)

    availableForColumn = sudoku.getAvailableForRow(6, [square], square)
    expect([1,2,3,4,5,6]).toStrictEqual(availableForColumn)
  })
  // TODO GetSquare
});

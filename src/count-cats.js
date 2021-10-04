import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let catsNumber = 0;
  for (let arrayNumber = 0; arrayNumber < matrix.length; arrayNumber = arrayNumber + 1) {
    for (let elementNumber = 0; elementNumber < matrix[arrayNumber].length; elementNumber = elementNumber + 1) {
      if (matrix[arrayNumber][elementNumber] === "^^") catsNumber = catsNumber + 1;
    }
  }
  return catsNumber;
}
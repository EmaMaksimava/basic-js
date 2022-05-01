const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let lengthOfArray = n.toString().length;
  let arrOfNumber = n.toString().split('');
  let arrOfValues = [];
  for (let i = 0; i < lengthOfArray; i++){
    let copy = [...arrOfNumber];
    copy.splice(i, 1);

    arrOfValues.push(+(copy.join('')))
  }
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  };
  return getMaxOfArray(arrOfValues);
}

module.exports = {
  deleteDigit
};

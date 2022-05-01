const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const copy = [...arr];
  const result = [];
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  for (let i = 0; i < copy.length; i++) {
    switch(copy[i]) {
      case discardNext:
        copy.splice(i, 1);
        copy.splice(i, 1);
        break;
      case discardPrev:
        copy.splice(i, 1);
        i -= 1;
        result.pop();
        break;
      case doubleNext:
        if (i + 1 < copy.length) {
          result.push(copy[i + 1]);
        }
        copy.splice(i, 1);
        i -= 1;
        break;
      case doublePrev:
        if (i - 1 >= 0) {
          result.push(copy[i - 1]);
        }
        copy.splice(i, 1);
        i -= 1;
        break;
      default:
        result.push(copy[i])
    }
  }
  return result;
}

module.exports = {
  transform
};

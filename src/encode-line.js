const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  let arrOfValues = string.split('');
  console.log(arrOfValues);
  let encodeArr = [];
  let counter = 1;
  let currentValue = null;
  for (let i = 0; i< arrOfValues.length; i++){
    currentValue = arrOfValues[i];
    if( arrOfValues[i + 1] === arrOfValues[i]){
      counter += 1;
    } else {
      if( counter > 1){
        encodeArr.push(counter.toString())
      }
      encodeArr.push(currentValue)
      console.log(encodeArr, counter, currentValue)
      counter = 1;
      console.log(counter, currentValue);

    }
  }
  return encodeArr.join('');
}

module.exports = {
  encodeLine
};

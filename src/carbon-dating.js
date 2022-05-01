const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string') return false;
  let sampleActivityNumber = parseFloat(sampleActivity);
  if (isNaN(sampleActivityNumber)) return false;
  if (sampleActivityNumber > MODERN_ACTIVITY || sampleActivityNumber <= 0) return false;
  const constantForReaction = 0.693 / HALF_LIFE_PERIOD;

  const timeOfIsotope = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivityNumber) / constantForReaction);
  console.log(timeOfIsotope);
  return timeOfIsotope
}

module.exports = {
  dateSample
};

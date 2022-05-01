const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainOfValues: [],
  getLength() {
    return this.chainOfValues.length;
  },
  addLink(value = '') {
    this.chainOfValues.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(this.chainOfValues[position] && position !== 0){
      this.chainOfValues.splice((position - 1), 1);
      return this;
    }

    this.deleteChain();
    throw new Error("You can't remove incorrect link!");
  },

  reverseChain(){
    this.chainOfValues.reverse();
    return this;
  },

  finishChain() {
    const finalChain = this.chainOfValues.join('~~');
    console.log(finalChain);
    this.deleteChain();
    return finalChain;
  },

  deleteChain() {
    this.chainOfValues = [];
  }
};

module.exports = {
  chainMaker
};

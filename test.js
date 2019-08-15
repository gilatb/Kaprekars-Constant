const chai = require('chai'), expect = chai.expect, should = chai.should();

const { kaprekarsConstant } = require('./index.js');

describe('Kaprekars Constant', function () {
  it(`Should verify input type is valid and convert if possible, otherwise
  throw an error`, function () {
      kaprekarsConstant('6512').should.equal(5);
      expect(() => kaprekarsConstant()).to.throw(Error);
      expect(() => kaprekarsConstant([])).to.throw(Error);
    });

  it(`Should pad a number with zeroes until it is 4 numbers in length and return
   the number of routines it takes to reach Kaprekars Constant.`,
    function () {
      kaprekarsConstant(2111).should.equal(5);
      kaprekarsConstant('0121').should.equal(4);
      kaprekarsConstant(8640).should.equal(6);
      kaprekarsConstant(9831).should.equal(7);
    });
})
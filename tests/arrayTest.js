var chai = require('chai');
var assert = chai.assert;
describe('array', () => {
  it('should start empty', () => {
    var arr = [];
    assert.equal(arr.length, 0);
  })
})
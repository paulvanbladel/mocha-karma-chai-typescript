import { assert } from 'chai';
import { Calculator } from '../calculator';
import  * as mocha from 'mocha'

var calculator = new Calculator();


describe('Calculator', function () {
  it('should calculata 1 + 2 and return 2', function () {
    assert.equal(calculator.sum(1, 1), 2)
  });
});
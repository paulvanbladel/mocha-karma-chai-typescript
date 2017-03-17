import { assert } from 'chai';
import { Calculator } from '../calculator';


var calculator = new Calculator();


describe('Calculator', function () {
  it('should calculata 1 + 2 and return 2', function () {
    assert.equal(calculator.sum(1, 1), 2)
  });
});
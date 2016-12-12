/* eslint-env mocha */
import A from 'assert';
import pow from './pow';

describe('pow(power, base)', () => {
  it('raises "base" to "power"', () => {
    A.equal(pow(10, 2), 1024);
    A.equal(pow(2, 10), 100);
    A.equal(pow(-2, 2), 0.25);
    A.equal(pow(2, -2), 4);
    A.equal(pow(-2, -2), 0.25);
  });

  it('allows partial application', () => {
    A.equal(pow(10)(2), 1024);
  });
});

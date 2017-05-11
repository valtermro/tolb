/* eslint-env mocha */
import A from 'assert';
import subtract from './subtract';

describe('math.subtract(subtrahend, minuend)', () => {
  it('subtracts "subtrahend" from "minuend"', () => {
    A.equal(subtract(2, 10), 8);
    A.equal(subtract(10, 2), -8);
  });

  it('allows partial application', () => {
    A.equal(subtract(2)(10), 8);
  });
});

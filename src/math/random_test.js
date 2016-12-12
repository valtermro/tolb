/* eslint-env mocha */
import A from 'assert';
import random from './random';

describe('random(min, max)', () => {
  function test(min, max) {
    let last;
    for (let i = 0; i < 1000; i++) {
      const rand = random(min, max);
      A.notEqual(rand, last);
      A.equal(rand >= min, true);
      A.equal(rand < max, true);
      last = rand;
    }
  }

  it('returns a random number between "min" and "max"', () => {
    test(10, 100);
    test(1, 200);
    test(-10, 50);
  });

  it('allows partial application', () => {
    const rand = random(10)(100);
    A.equal(typeof rand === 'number', true);
    A.equal(rand >= 10, true);
    A.equal(rand < 100, true);
  });
});

/* eslint-env mocha */
import A from 'assert';
import roundTo from './roundTo';

describe('roundTo(places, value)', () => {
  it('rounds "value" to a value with "places" decimal values', () => {
    A.equal(roundTo(0, 2.4), 2);
    A.equal(roundTo(0, 2.6), 3);
    A.equal(roundTo(1, 2.14), 2.1);
    A.equal(roundTo(1, 2.15), 2.2);
    A.equal(roundTo(1, 2.16), 2.2);
    A.equal(roundTo(2, Math.PI), 3.14);
    A.equal(roundTo(4, Math.PI), 3.1416);
    A.equal(roundTo(11, Math.PI), 3.14159265359);
  });

  it('allows partial application', () => {
    A.equal(roundTo(2)(Math.PI), 3.14);
  });
});

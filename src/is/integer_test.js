/* eslint-env mocha */
import A from 'assert';
import integer from './integer';

describe('is.integer(subject)', () => {
  it('checks if "subject" is an integer', () => {
    A.equal(integer(1), true);
    A.equal(integer(0), true);
    A.equal(integer(-0), true);
    A.equal(integer(-1), true);
    A.equal(integer(1.0), true);
    A.equal(integer(-1.0), true);
    A.equal(integer(1.8), false);
    A.equal(integer(-1.8), false);
    A.equal(integer(Math.PI), false);
    A.equal(integer(NaN), false);
    A.equal(integer(Infinity), false);
    A.equal(integer(-Infinity), false);
    A.equal(integer(new Number(1)), false) // eslint-disable-line
    A.equal(integer('foo'), false);
    A.equal(integer([]), false);
    A.equal(integer({}), false);
    A.equal(integer(null), false);
    A.equal(integer(undefined), false);
  });
});

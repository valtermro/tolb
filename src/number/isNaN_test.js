/* eslint-env mocha */
import A from 'assert';
import isNaN from './isNaN';

describe('number.isNaN(subject)', () => {
  it('checks if "subject" is NaN', () => {
    A.equal(isNaN(NaN), true);
    A.equal(isNaN(Number.NaN), true);
    A.equal(isNaN('foo'), false);
    A.equal(isNaN(1), false);
    A.equal(isNaN('1'), false);
    A.equal(isNaN([]), false);
    A.equal(isNaN({}), false);
    A.equal(isNaN(undefined), false);
    A.equal(isNaN(null), false);
  });
});

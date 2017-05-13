/* eslint-env mocha */
import A from 'assert';
import nan from './nan';

describe('is.nan(subject)', () => {
  it('checks if "subject" is NaN', () => {
    A.equal(nan(NaN), true);
    A.equal(nan(Number.NaN), true);
    A.equal(nan('foo'), false);
    A.equal(nan(1), false);
    A.equal(nan('1'), false);
    A.equal(nan([]), false);
    A.equal(nan({}), false);
    A.equal(nan(undefined), false);
    A.equal(nan(null), false);
  });
});

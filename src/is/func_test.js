/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback */
import A from 'assert';
import func from './func';

describe('is.func(subject)', () => {
  it('checks if "subject" is a function', () => {
    A.equal(func(function () { /* */ }), true);
    A.equal(func(() => { /* */ }), true);
    A.equal(func([].map), true);
    A.equal(func(''), false);
    A.equal(func(0), false);
    A.equal(func([]), false);
    A.equal(func({}), false);
    A.equal(func(null), false);
    A.equal(func(undefined), false);
  });
});

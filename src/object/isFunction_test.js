/* eslint-env mocha */
/* eslint-disable prefer-arrow-callback */
import A from 'assert';
import isFunction from './isFunction';

describe('object.isFunction(subject)', () => {
  it('checks if "subject" is a function', () => {
    A.equal(isFunction(function () { /**/ }), true);
    A.equal(isFunction(() => { /**/ }), true);
    A.equal(isFunction([].map), true);
    A.equal(isFunction(''), false);
    A.equal(isFunction(0), false);
    A.equal(isFunction([]), false);
    A.equal(isFunction({}), false);
    A.equal(isFunction(null), false);
    A.equal(isFunction(undefined), false);
  });
});

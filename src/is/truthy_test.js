/* eslint-env mocha */
import A from 'assert';
import truthy from './truthy';

describe('is.truthy(subject)', () => {
  it('checkes if "subject" both has value and is not `false`', () => {
    A.equal(truthy(false), false);
    A.equal(truthy(true), true);
    A.equal(truthy(''), true);
    A.equal(truthy(0), true);
    A.equal(truthy([]), true);
    A.equal(truthy({}), true);
  });
});

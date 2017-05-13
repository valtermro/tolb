/* eslint-env mocha */
import A from 'assert';
import isEmpty from './isEmpty';
import util from '../../lib/util';

describe('object.isEmpty(subject)', () => {
  function Foo() { /**/ }

  it('checks if "subject" is empty', () => {
    A.equal(isEmpty(''), true);
    A.equal(isEmpty('f'), false);
    A.equal(isEmpty({}), true);
    A.equal(isEmpty({ a: 1 }), false);
    A.equal(isEmpty([]), true);
    A.equal(isEmpty([1]), false);
    A.equal(isEmpty(util.arrayLike()), true);
    A.equal(isEmpty(Foo), false);
    A.equal(isEmpty(util.arrayLike(1)), false);
    A.equal(isEmpty(new Foo()), false);
    A.equal(isEmpty(0), false);
    A.equal(isEmpty(true), false);
    A.equal(isEmpty(false), false);
    A.equal(isEmpty(null), false);
    A.equal(isEmpty(undefined), false);
    A.equal(isEmpty([null]), false);
    A.equal(isEmpty([undefined]), false);
  });
});

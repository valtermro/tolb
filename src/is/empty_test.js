/* eslint-env mocha */
import A from 'assert';
import empty from './empty';
import util from '../../lib/util';

describe('i s.empty(subject)', () => {
  function Foo() { /* */ }

  it('checks if "subject" is empty', () => {
    A.equal(empty(''), true);
    A.equal(empty('f'), false);
    A.equal(empty({}), true);
    A.equal(empty({ a: 1 }), false);
    A.equal(empty([]), true);
    A.equal(empty([1]), false);
    A.equal(empty(util.arrayLike()), true);
    A.equal(empty(Foo), false);
    A.equal(empty(util.arrayLike(1)), false);
    A.equal(empty(new Foo()), false);
    A.equal(empty(0), false);
    A.equal(empty(true), false);
    A.equal(empty(false), false);
    A.equal(empty(null), false);
    A.equal(empty(undefined), false);
    A.equal(empty([null]), false);
    A.equal(empty([undefined]), false);
  });
});

/* eslint-env mocha */
import A from 'assert';
import toString from './toString';

describe('util.toString(obj)', () => {
  const equal = A.strictEqual;

  it('string literal', () => {
    equal(toString(''), '""');
    equal(toString('foo'), '"foo"');
  });

  it('string object', () => {
    equal(toString(new String()), 'String("")');
    equal(toString(new String('foo')), 'String("foo")');
  });

  it('number', () => {
    equal(toString(1), '1');
  });

  it('number object', () => {
    equal(toString(new Number(1)), 'Number(1)');
  });

  it('boolean', () => {
    equal(toString(false), 'false');
    equal(toString(true), 'true');
  });

  it('null', () => {
    equal(toString(null), 'null');
  });

  it('undefined', () => {
    equal(toString(undefined), 'undefined');
  });

  it('array', () => {
    equal(toString([]), '[]');
    equal(toString([1, 2, 3]), '[1,2,3]');
  });

  it('function', () => {
    equal(toString(function foo(a, b) { /* */ }), // eslint-disable-line
         'function foo(a, b) {/* */}');
  });

  it('plain object', () => {
    equal(toString({}), '{}');

    equal(toString({ a: 1, b: false, c: 'ola' }),
         '{"a":1,"b":false,"c":"ola"}');

    equal(toString({ a: 1, b: [2, false], c: { d: [true, 0] } }),
         '{"a":1,"b":[2,false],"c":{"d":[true,0]}}');

    equal(toString({ a: 1, b: { c: function foo() { /* */ }, d: [function () { /* */ }] } }),
         '{"a":1,"b":{"c":function foo() {/* */},"d":[function () {/* */}]}}');

    equal(toString({ foo: [1, 2, 3, { bar: false }] }),
         '{"foo":[1,2,3,{"bar":false}]}');
  });
});

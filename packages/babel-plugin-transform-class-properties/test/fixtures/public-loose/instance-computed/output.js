function test(x) {
  var _x;
  _x = x;
  var F = /*#__PURE__*/babelHelpers.createClass(function F() {
    "use strict";

    babelHelpers.classCallCheck(this, F);
    this[_x] = 1;
  });
  x = 'deadbeef';
  expect(new F().foo).toBe(1);
  x = 'wrong';
  expect(new F().foo).toBe(1);
}
test('foo');

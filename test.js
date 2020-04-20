
var fib = require('./')
var tape = require('tape')

var fibs = [0, 1,1,2,3,5,8,13,21]
tape('simple', function (t) {
  fibs.forEach(function (v, i) {
    var r = fib.fib(i)
    t.equal(r, v, 'expect:fib('+i+')==='+v)
  })
  t.end()
})

tape('big numbers', function (t) {
  t.equal(fib.fib(20),      6765)
  t.equal(fib.fib(40), 102334155)
  t.end()
})

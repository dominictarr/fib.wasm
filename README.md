# fib.wasm

calculate fibonacci numbers using wasm.

intended more as a wasm example than because anyone seriously
needs to calculate fibonacci numbers.

## example

``` js
var f = require('fib.wasm')

f.fib(1) => 1
f.fib(2) => 2
f.fib(3) => 3
f.fib(4) => 5
f.fib(5) => 8
...
f.fib(1000) => 1318412525
```

anyway but the real reason I wrote this is so you can read the code.

## other handwritten wat on npm to read

* [mafintosh/blake2b-wasm](https://github.com/mafintosh/blake2b-wasm)
* [mafintosh/siphash24](https://github.com/mafintosh/siphash24)
* [mafintosh/xsalsa20](https://github.com/mafintosh/xsalsa20)

## License

MIT





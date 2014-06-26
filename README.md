baptize
==========

Dunk an es6 generator (function or object) in the stream for good laughs.

```javascript
'use strict'
var baptize = require('baptize'),
    termp = require('term-pipe');

// nifty
var fib = function*(){
  let x = bint(0), y = bint(1), z = bint(0);
  while(true){
    z = x.add(y);
    x = y;
    y = z;
    yield y;
  }
};

// it just works
baptize(fib).pipe(termp);

// it just works
baptize(fib()).pipe(termp);
```

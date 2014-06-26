'use strict'
var bint = require('bignum'),
    baptize = require('baptize'),
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

// yes
baptize(fib,{objectMode: true})

// yes
baptize(fib(),{objectMode: true})

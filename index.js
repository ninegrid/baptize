'use strict'
var Readable = require('stream').Readable,
    util = require('util'),
    isGobj = require('is-genobj'),
    isGfn  = require('is-genfn');

var gob = null;

var baptizes = function(){
  let baptize = function(g,opt){
    if(!(this instanceof baptize)) return new baptize(g,opt);
    if(!opt) opt = {};
    if(!'objectMode' in opt) opt.objectMode = true;
    Readable.call(this,opt);
    if(isGfn(g)) gob = g();
    if(isGobj(g)){
      gob = g;
    }

    this._read = function(){
      let its = gob.next();
      if(its.value){
        this.push(its.value);
      } else {
        this.push(null);
      }
    };
  };

  util.inherits(baptize,Readable);

  return baptize;
};

module.exports = baptizes();

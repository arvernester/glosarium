!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/",t(t.s=275)}({12:function(n,t){$(function(){$("#content").addClass("block-section line-bottom"),$("select.version").change(function(){""!=$(this).val()&&(window.location=_.replace(routes.pageApiIndex,"{version?}",$(this).val()))})}),hljs.initHighlightingOnLoad()},275:function(n,t,e){n.exports=e(12)}});
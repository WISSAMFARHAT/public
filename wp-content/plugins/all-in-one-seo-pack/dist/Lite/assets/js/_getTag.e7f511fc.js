import{u as o,r as s,w as S,j as _,x as e,c as b,M as c}from"./isArrayLikeObject.ab8f4241.js";var j=o(s,"WeakMap");const i=j;var M=S(Object.keys,Object);const P=M;var T=Object.prototype,O=T.hasOwnProperty;function K(t){if(!_(t))return P(t);var n=[];for(var a in Object(t))O.call(t,a)&&a!="constructor"&&n.push(a);return n}var $=o(s,"DataView");const u=$;var C=o(s,"Promise");const p=C;var V=o(s,"Set");const g=V;var f="[object Map]",k="[object Object]",v="[object Promise]",w="[object Set]",m="[object WeakMap]",y="[object DataView]",x=e(u),A=e(c),W=e(p),d=e(g),h=e(i),r=b;(u&&r(new u(new ArrayBuffer(1)))!=y||c&&r(new c)!=f||p&&r(p.resolve())!=v||g&&r(new g)!=w||i&&r(new i)!=m)&&(r=function(t){var n=b(t),a=n==k?t.constructor:void 0,l=a?e(a):"";if(l)switch(l){case x:return y;case A:return f;case W:return v;case d:return w;case h:return m}return n});const L=r;export{g as S,i as W,K as b,L as g};

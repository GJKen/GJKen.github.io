!function(e){var o="object"==typeof exports&&exports&&!exports.nodeType&&exports,n="object"==typeof module&&module&&!module.nodeType&&module,t="object"==typeof global&&global;t.global!==t&&t.window!==t&&t.self!==t||(e=t);var r,u,g=2147483647,y=36,w=1,b=26,i=38,f=700,C=72,j=128,m="-",c=/^xn--/,s=/[^\x20-\x7E]/,d=/[\x2E\u3002\uFF0E\uFF61]/g,l={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=y-w,A=Math.floor,I=String.fromCharCode;function E(e){throw RangeError(l[e])}function a(e,o){for(var n=e.length,t=[];n--;)t[n]=o(e[n]);return t}function h(e,o){return a(e.split(d),function(e){return a(e.split("@"),o).join("@")}).join(".")}function F(e){for(var o,n,t=[],r=0,u=e.length;r<u;)55296<=(o=e.charCodeAt(r++))&&o<=56319&&r<u?56320==(64512&(n=e.charCodeAt(r++)))?t.push(((1023&o)<<10)+(1023&n)+65536):(t.push(o),r--):t.push(o);return t}function O(e){return a(e,function(e){var o="";return 65535<e&&(o+=I((e-=65536)>>>10&1023|55296),e=56320|1023&e),o+=I(e)}).join("")}function P(e,o){return e+22+75*(e<26)-((0!=o)<<5)}function S(e,o,n){var t=0;for(e=n?A(e/f):e>>1,e+=A(e/o);p*b>>1<e;t+=y)e=A(e/p);return A(t+(p+1)*e/(e+i))}function v(e){var o,n,t,r,u,i,f,c,s,d,l,p=[],a=e.length,h=0,v=j,x=C;for((n=e.lastIndexOf(m))<0&&(n=0),t=0;t<n;++t)128<=e.charCodeAt(t)&&E("not-basic"),p.push(e.charCodeAt(t));for(r=0<n?n+1:0;r<a;){for(u=h,i=1,f=y;a<=r&&E("invalid-input"),l=e.charCodeAt(r++),(y<=(c=l-48<10?l-22:l-65<26?l-65:l-97<26?l-97:y)||c>A((g-h)/i))&&E("overflow"),h+=c*i,!(c<(s=f<=x?w:x+b<=f?b:f-x));f+=y)i>A(g/(d=y-s))&&E("overflow"),i*=d;x=S(h-u,o=p.length+1,0==u),A(h/o)>g-v&&E("overflow"),v+=A(h/o),h%=o,p.splice(h++,0,v)}return O(p)}function x(e){var o,n,t,r,u,i,f,c,s,d,l,p,a,h,v,x=[];for(p=(e=F(e)).length,o=j,u=C,i=n=0;i<p;++i)(l=e[i])<128&&x.push(I(l));for(t=r=x.length,r&&x.push(m);t<p;){for(f=g,i=0;i<p;++i)o<=(l=e[i])&&l<f&&(f=l);for(f-o>A((g-n)/(a=t+1))&&E("overflow"),n+=(f-o)*a,o=f,i=0;i<p;++i)if((l=e[i])<o&&++n>g&&E("overflow"),l==o){for(c=n,s=y;!(c<(d=s<=u?w:u+b<=s?b:s-u));s+=y)v=c-d,h=y-d,x.push(I(P(d+v%h,0))),c=A(v/h);x.push(I(P(c,0))),u=S(n,a,t==r),n=0,++t}++n,++o}return x.join("")}if(r={version:"1.3.0",ucs2:{decode:F,encode:O},decode:v,encode:x,toASCII:function(e){return h(e,function(e){return s.test(e)?"xn--"+x(e):e})},toUnicode:function(e){return h(e,function(e){return c.test(e)?v(e.slice(4).toLowerCase()):e})}},"undefined"!=typeof exports)exports.punycode=r;else if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return r});else if(o&&n)if(module.exports==o)n.exports=r;else for(u in r)r.hasOwnProperty(u)&&(o[u]=r[u]);else e.punycode=r}(this),function(e){"use strict";vAPI.punycode=punycode}();
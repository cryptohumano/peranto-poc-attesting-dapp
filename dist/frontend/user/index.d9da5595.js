function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequire94c2;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequire94c2=s),s.register("2TGXb",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("50e8S",(function(t,n){var r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,b,w,E,C,S,T,k,I,A,x,_,N;e(t.exports,"ContextConsumer",(()=>r),(e=>r=e)),e(t.exports,"ContextProvider",(()=>i),(e=>i=e)),e(t.exports,"Element",(()=>s),(e=>s=e)),e(t.exports,"ForwardRef",(()=>o),(e=>o=e)),e(t.exports,"Fragment",(()=>a),(e=>a=e)),e(t.exports,"Lazy",(()=>c),(e=>c=e)),e(t.exports,"Memo",(()=>l),(e=>l=e)),e(t.exports,"Portal",(()=>u),(e=>u=e)),e(t.exports,"Profiler",(()=>h),(e=>h=e)),e(t.exports,"StrictMode",(()=>d),(e=>d=e)),e(t.exports,"Suspense",(()=>f),(e=>f=e)),e(t.exports,"SuspenseList",(()=>p),(e=>p=e)),e(t.exports,"isAsyncMode",(()=>m),(e=>m=e)),e(t.exports,"isConcurrentMode",(()=>g),(e=>g=e)),e(t.exports,"isContextConsumer",(()=>y),(e=>y=e)),e(t.exports,"isContextProvider",(()=>v),(e=>v=e)),e(t.exports,"isElement",(()=>b),(e=>b=e)),e(t.exports,"isForwardRef",(()=>w),(e=>w=e)),e(t.exports,"isFragment",(()=>E),(e=>E=e)),e(t.exports,"isLazy",(()=>C),(e=>C=e)),e(t.exports,"isMemo",(()=>S),(e=>S=e)),e(t.exports,"isPortal",(()=>T),(e=>T=e)),e(t.exports,"isProfiler",(()=>k),(e=>k=e)),e(t.exports,"isStrictMode",(()=>I),(e=>I=e)),e(t.exports,"isSuspense",(()=>A),(e=>A=e)),e(t.exports,"isSuspenseList",(()=>x),(e=>x=e)),e(t.exports,"isValidElementType",(()=>_),(e=>_=e)),e(t.exports,"typeOf",(()=>N),(e=>N=e));var D,R=Symbol.for("react.element"),O=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),j=Symbol.for("react.context"),V=Symbol.for("react.server_context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen");function H(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case R:switch(e=e.type){case L:case P:case M:case B:case $:return e;default:switch(e=e&&e.$$typeof){case V:case j:case U:case z:case q:case F:return e;default:return t}}case O:return t}}}D=Symbol.for("react.module.reference"),r=j,i=F,s=R,o=U,a=L,c=z,l=q,u=O,h=P,d=M,f=B,p=$,m=function(){return!1},g=function(){return!1},y=function(e){return H(e)===j},v=function(e){return H(e)===F},b=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===R},w=function(e){return H(e)===U},E=function(e){return H(e)===L},C=function(e){return H(e)===z},S=function(e){return H(e)===q},T=function(e){return H(e)===O},k=function(e){return H(e)===P},I=function(e){return H(e)===M},A=function(e){return H(e)===B},x=function(e){return H(e)===$},_=function(e){return"string"==typeof e||"function"==typeof e||e===L||e===P||e===M||e===B||e===$||e===G||"object"==typeof e&&null!==e&&(e.$$typeof===z||e.$$typeof===q||e.$$typeof===F||e.$$typeof===j||e.$$typeof===U||e.$$typeof===D||void 0!==e.getModuleId)},N=H})),s.register("lmRxe",(function(t,n){var r,i,s,o,a,c,l,u,h,d,f,p,m,g,y,v,b,w,E,C,S,T,k,I,A,x,_,N;e(t.exports,"AsyncMode",(()=>r),(e=>r=e)),e(t.exports,"ConcurrentMode",(()=>i),(e=>i=e)),e(t.exports,"ContextConsumer",(()=>s),(e=>s=e)),e(t.exports,"ContextProvider",(()=>o),(e=>o=e)),e(t.exports,"Element",(()=>a),(e=>a=e)),e(t.exports,"ForwardRef",(()=>c),(e=>c=e)),e(t.exports,"Fragment",(()=>l),(e=>l=e)),e(t.exports,"Lazy",(()=>u),(e=>u=e)),e(t.exports,"Memo",(()=>h),(e=>h=e)),e(t.exports,"Portal",(()=>d),(e=>d=e)),e(t.exports,"Profiler",(()=>f),(e=>f=e)),e(t.exports,"StrictMode",(()=>p),(e=>p=e)),e(t.exports,"Suspense",(()=>m),(e=>m=e)),e(t.exports,"isAsyncMode",(()=>g),(e=>g=e)),e(t.exports,"isConcurrentMode",(()=>y),(e=>y=e)),e(t.exports,"isContextConsumer",(()=>v),(e=>v=e)),e(t.exports,"isContextProvider",(()=>b),(e=>b=e)),e(t.exports,"isElement",(()=>w),(e=>w=e)),e(t.exports,"isForwardRef",(()=>E),(e=>E=e)),e(t.exports,"isFragment",(()=>C),(e=>C=e)),e(t.exports,"isLazy",(()=>S),(e=>S=e)),e(t.exports,"isMemo",(()=>T),(e=>T=e)),e(t.exports,"isPortal",(()=>k),(e=>k=e)),e(t.exports,"isProfiler",(()=>I),(e=>I=e)),e(t.exports,"isStrictMode",(()=>A),(e=>A=e)),e(t.exports,"isSuspense",(()=>x),(e=>x=e)),e(t.exports,"isValidElementType",(()=>_),(e=>_=e)),e(t.exports,"typeOf",(()=>N),(e=>N=e));var D="function"==typeof Symbol&&Symbol.for,R=D?Symbol.for("react.element"):60103,O=D?Symbol.for("react.portal"):60106,L=D?Symbol.for("react.fragment"):60107,M=D?Symbol.for("react.strict_mode"):60108,P=D?Symbol.for("react.profiler"):60114,F=D?Symbol.for("react.provider"):60109,j=D?Symbol.for("react.context"):60110,V=D?Symbol.for("react.async_mode"):60111,U=D?Symbol.for("react.concurrent_mode"):60111,B=D?Symbol.for("react.forward_ref"):60112,$=D?Symbol.for("react.suspense"):60113,q=D?Symbol.for("react.suspense_list"):60120,z=D?Symbol.for("react.memo"):60115,G=D?Symbol.for("react.lazy"):60116,H=D?Symbol.for("react.block"):60121,K=D?Symbol.for("react.fundamental"):60117,Q=D?Symbol.for("react.responder"):60118,W=D?Symbol.for("react.scope"):60119;function Y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case R:switch(e=e.type){case V:case U:case L:case P:case M:case $:return e;default:switch(e=e&&e.$$typeof){case j:case B:case G:case z:case F:return e;default:return t}}case O:return t}}}function X(e){return Y(e)===U}r=V,i=U,s=j,o=F,a=R,c=B,l=L,u=G,h=z,d=O,f=P,p=M,m=$,g=function(e){return X(e)||Y(e)===V},y=X,v=function(e){return Y(e)===j},b=function(e){return Y(e)===F},w=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===R},E=function(e){return Y(e)===B},C=function(e){return Y(e)===L},S=function(e){return Y(e)===G},T=function(e){return Y(e)===z},k=function(e){return Y(e)===O},I=function(e){return Y(e)===P},A=function(e){return Y(e)===M},x=function(e){return Y(e)===$},_=function(e){return"string"==typeof e||"function"==typeof e||e===L||e===U||e===P||e===M||e===$||e===q||"object"==typeof e&&null!==e&&(e.$$typeof===G||e.$$typeof===z||e.$$typeof===F||e.$$typeof===j||e.$$typeof===B||e.$$typeof===K||e.$$typeof===Q||e.$$typeof===W||e.$$typeof===H)},N=Y})),s("2TGXb").register(JSON.parse('{"dlLLd":"index.d9da5595.js","lgmIG":"peranto_logo.ca2b3b06.png","62hCr":"index.31026b9b.js"}'));var o,a=s("aaGF3"),c=s("5a1fP"),l=s("jQ7Zu"),u=s("l4VFs"),h=(l=s("jQ7Zu"),{"aria-busy":!0,role:"status"});l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu");o=s("50e8S");var d;l=s("jQ7Zu");d=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),o=Object.keys(t);if(s.length!==o.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var l=s[c];if(!a(l))return!1;var u=e[l],h=t[l];if(!1===(i=n?n.call(r,u,h,l):void 0)||void 0===i&&u!==h)return!1}return!0};var f=function(e){function t(e,r,c,l,d){for(var f,p,m,g,w,C=0,S=0,T=0,k=0,I=0,R=0,L=m=f=0,P=0,F=0,j=0,V=0,U=c.length,B=U-1,$="",q="",z="",G="";P<U;){if(p=c.charCodeAt(P),P===B&&0!==S+k+T+C&&(0!==S&&(p=47===S?10:47),k=T=C=0,U++,B++),0===S+k+T+C){if(P===B&&(0<F&&($=$.replace(h,"")),0<$.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:$+=c.charAt(P)}p=59}switch(p){case 123:for(f=($=$.trim()).charCodeAt(0),m=1,V=++P;P<U;){switch(p=c.charCodeAt(P)){case 123:m++;break;case 125:m--;break;case 47:switch(p=c.charCodeAt(P+1)){case 42:case 47:e:{for(L=P+1;L<B;++L)switch(c.charCodeAt(L)){case 47:if(42===p&&42===c.charCodeAt(L-1)&&P+2!==L){P=L+1;break e}break;case 10:if(47===p){P=L+1;break e}}P=L}}break;case 91:p++;case 40:p++;case 34:case 39:for(;P++<B&&c.charCodeAt(P)!==p;);}if(0===m)break;P++}if(m=c.substring(V,P),0===f&&(f=($=$.replace(u,"").trim()).charCodeAt(0)),64===f){switch(0<F&&($=$.replace(h,"")),p=$.charCodeAt(1)){case 100:case 109:case 115:case 45:F=r;break;default:F=D}if(V=(m=t(r,F,m,p,d+1)).length,0<O&&(w=a(3,m,F=n(D,$,j),r,x,A,V,p,d,l),$=F.join(""),void 0!==w&&0===(V=(m=w.trim()).length)&&(p=0,m="")),0<V)switch(p){case 115:$=$.replace(E,o);case 100:case 109:case 45:m=$+"{"+m+"}";break;case 107:m=($=$.replace(y,"$1 $2"))+"{"+m+"}",m=1===N||2===N&&s("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=$+m,112===l&&(q+=m,m="")}else m=""}else m=t(r,n(r,$,j),m,l,d+1);z+=m,m=j=F=L=f=0,$="",p=c.charCodeAt(++P);break;case 125:case 59:if(1<(V=($=(0<F?$.replace(h,""):$).trim()).length))switch(0===L&&(f=$.charCodeAt(0),45===f||96<f&&123>f)&&(V=($=$.replace(" ",":")).length),0<O&&void 0!==(w=a(1,$,r,e,x,A,q.length,l,d,l))&&0===(V=($=w.trim()).length)&&($="\0\0"),f=$.charCodeAt(0),p=$.charCodeAt(1),f){case 0:break;case 64:if(105===p||99===p){G+=$+c.charAt(P);break}default:58!==$.charCodeAt(V-1)&&(q+=i($,f,p,$.charCodeAt(2)))}j=F=L=f=0,$="",p=c.charCodeAt(++P)}}switch(p){case 13:case 10:47===S?S=0:0===1+f&&107!==l&&0<$.length&&(F=1,$+="\0"),0<O*M&&a(0,$,r,e,x,A,q.length,l,d,l),A=1,x++;break;case 59:case 125:if(0===S+k+T+C){A++;break}default:switch(A++,g=c.charAt(P),p){case 9:case 32:if(0===k+C+S)switch(I){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===k+S+C&&(F=j=1,g="\f"+g);break;case 108:if(0===k+S+C+_&&0<L)switch(P-L){case 2:112===I&&58===c.charCodeAt(P-3)&&(_=I);case 8:111===R&&(_=R)}break;case 58:0===k+S+C&&(L=P);break;case 44:0===S+T+k+C&&(F=1,g+="\r");break;case 34:case 39:0===S&&(k=k===p?0:0===k?p:k);break;case 91:0===k+S+T&&C++;break;case 93:0===k+S+T&&C--;break;case 41:0===k+S+C&&T--;break;case 40:if(0===k+S+C){if(0===f)if(2*I+3*R==533);else f=1;T++}break;case 64:0===S+T+k+C+L+m&&(m=1);break;case 42:case 47:if(!(0<k+C+T))switch(S){case 0:switch(2*p+3*c.charCodeAt(P+1)){case 235:S=47;break;case 220:V=P,S=42}break;case 42:47===p&&42===I&&V+2!==P&&(33===c.charCodeAt(V+2)&&(q+=c.substring(V,P+1)),g="",S=0)}}0===S&&($+=g)}R=I,I=p,P++}if(0<(V=q.length)){if(F=r,0<O&&(void 0!==(w=a(2,q,F,e,x,A,V,l,d,l))&&0===(q=w).length))return G+q+z;if(q=F.join(",")+"{"+q+"}",0!=N*_){switch(2!==N||s(q,2)||(_=0),_){case 111:q=q.replace(b,":-moz-$1")+q;break;case 112:q=q.replace(v,"::-webkit-input-$1")+q.replace(v,"::-moz-$1")+q.replace(v,":-ms-input-$1")+q}_=0}}return G+q+z}function n(e,t,n){var i=t.trim().split(m);t=i;var s=i.length,o=e.length;switch(o){case 0:case 1:var a=0;for(e=0===o?"":e[0]+" ";a<s;++a)t[a]=r(e,t[a],n).trim();break;default:var c=a=0;for(t=[];a<s;++a)for(var l=0;l<o;++l)t[c++]=r(e[l]+" ",i[a],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,n,r){var o=e+";",a=2*t+3*n+4*r;if(944===a){e=o.indexOf(":",9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+";",1===N||2===N&&s(c,1)?"-webkit-"+c+c:c}if(0===N||2===N&&!s(o,1))return o;switch(a){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(I,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(c=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+c+o;case 1005:return f.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(t=(c=o.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(w,"tb");break;case 232:c=o.replace(w,"tb-rl");break;case 220:c=o.replace(w,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+c+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,a=(c=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,"-webkit-"+c)+";"+o;break;case 207:case 102:o=o.replace(c,"-webkit-"+(102<a?"inline-":"")+"box")+";"+o.replace(c,"-webkit-"+c)+";"+o.replace(c,"-ms-"+c+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return c=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+c+"-ms-flex-"+c+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===k.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(c,"-webkit-"+c)+o.replace(c,"-moz-"+c.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function s(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),L(2!==t?r:r.replace(T,"$1"),n,t)}function o(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(C," or ($1)").substring(4):"("+t+")"}function a(e,t,n,r,i,s,o,a,c,u){for(var h,d=0,f=t;d<O;++d)switch(h=R[d].call(l,e,f,n,r,i,s,o,a,c,u)){case void 0:case!1:case!0:case null:break;default:f=h}if(f!==t)return f}function c(e){return void 0!==(e=e.prefix)&&(L=null,e?"function"!=typeof e?N=1:(N=2,L=e):N=0),c}function l(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<O){var i=a(-1,n,r,r,x,A,0,0,0,0);void 0!==i&&"string"==typeof i&&(n=i)}var s=t(D,r,n,0,0);return 0<O&&(void 0!==(i=a(-2,s,r,r,x,A,s.length,0,0,0))&&(s=i)),"",_=0,A=x=1,s}var u=/^\0+/g,h=/[\0\r\f]/g,d=/: */g,f=/zoo|gra/,p=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,S=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,k=/stretch|:\s*\w+\-(?:conte|avail)/,I=/([^-])(image-set\()/,A=1,x=1,_=0,N=1,D=[],R=[],O=0,L=null,M=0;return l.use=function e(t){switch(t){case void 0:case null:O=R.length=0;break;default:if("function"==typeof t)R[O++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else M=0|!!t}return e},l.set=c,void 0!==e&&c(e),l},p={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var m,g=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,y=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return g.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),v={};v=s("lmRxe");var b={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},w={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},E={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C={};function S(e){return v.isMemo(e)?E:C[e.$$typeof]||b}C[v.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},C[v.Memo]=E;var T=Object.defineProperty,k=Object.getOwnPropertyNames,I=Object.getOwnPropertySymbols,A=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,_=Object.prototype;m=function e(t,n,r){if("string"!=typeof n){if(_){var i=x(n);i&&i!==_&&e(t,i,r)}var s=k(n);I&&(s=s.concat(I(n)));for(var o=S(t),a=S(n),c=0;c<s.length;++c){var l=s[c];if(!(w[l]||r&&r[l]||a&&a[l]||o&&o[l])){var u=A(n,l);try{T(t,l,u)}catch(e){}}}}return t};var N,D,R,O=N={};function L(){throw new Error("setTimeout has not been defined")}function M(){throw new Error("clearTimeout has not been defined")}function P(e){if(D===setTimeout)return setTimeout(e,0);if((D===L||!D)&&setTimeout)return D=setTimeout,setTimeout(e,0);try{return D(e,0)}catch(t){try{return D.call(null,e,0)}catch(t){return D.call(this,e,0)}}}!function(){try{D="function"==typeof setTimeout?setTimeout:L}catch(e){D=L}try{R="function"==typeof clearTimeout?clearTimeout:M}catch(e){R=M}}();var F,j=[],V=!1,U=-1;function B(){V&&F&&(V=!1,F.length?j=F.concat(j):U=-1,j.length&&$())}function $(){if(!V){var e=P(B);V=!0;for(var t=j.length;t;){for(F=j,j=[];++U<t;)F&&F[U].run();U=-1,t=j.length}F=null,V=!1,function(e){if(R===clearTimeout)return clearTimeout(e);if((R===M||!R)&&clearTimeout)return R=clearTimeout,clearTimeout(e);try{R(e)}catch(t){try{return R.call(null,e)}catch(t){return R.call(this,e)}}}(e)}}function q(e,t){this.fun=e,this.array=t}function z(){}function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}O.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];j.push(new q(e,t)),1!==j.length||V||P($)},q.prototype.run=function(){this.fun.apply(null,this.array)},O.title="browser",O.browser=!0,O.env={},O.argv=[],O.version="",O.versions={},O.on=z,O.addListener=z,O.once=z,O.off=z,O.removeListener=z,O.removeAllListeners=z,O.emit=z,O.prependListener=z,O.prependOnceListener=z,O.listeners=function(e){return[]},O.binding=function(e){throw new Error("process.binding is not supported")},O.cwd=function(){return"/"},O.chdir=function(e){throw new Error("process.chdir is not supported")},O.umask=function(){return 0};var H=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},K=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,o.typeOf)(e)},Q=Object.freeze([]),W=Object.freeze({});function Y(e){return"function"==typeof e}function X(e){return e.displayName||e.name||"Component"}function Z(e){return e&&"string"==typeof e.styledComponentId}var J="undefined"!=typeof window&&"HTMLElement"in window,ee=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==N&&void 0!==N.env&&!1);function te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ne=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&te(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var s=r;s<i;s++)this.groupSizes[s]=0}for(var o=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,s=r;s<i;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),re=new Map,ie=new Map,se=1,oe=function(e){if(re.has(e))return re.get(e);for(;ie.has(se);)se++;var t=se++;return re.set(e,t),ie.set(t,e),t},ae=function(e){return ie.get(e)},ce=function(e,t){t>=se&&(se=t+1),re.set(e,t),ie.set(t,e)},le=new RegExp('^data-styled\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ue=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},he=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(le);if(a){var c=0|parseInt(a[1],10),l=a[2];0!==c&&(ce(l,c),ue(e,l,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},de=function(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null},fe=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute("data-styled"))return r}}(n),s=void 0!==i?i.nextSibling:null;r.setAttribute("data-styled","active"),r.setAttribute("data-styled-version","5.3.11");var o=de();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},pe=function(){function e(e){var t=this.element=fe(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}te(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),me=function(){function e(e){var t=this.element=fe(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ge=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ye=J,ve={isServer:!J,useCSSOMInjection:!ee},be=function(){function e(e,t,n){void 0===e&&(e=W),void 0===t&&(t={}),this.options=G({},ve,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&J&&ye&&(ye=!1,function(e){for(var t=document.querySelectorAll('style[data-styled][data-styled-version="5.3.11"]'),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute("data-styled")&&(he(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return oe(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(G({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){var e,t,n,r,i;return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new ge(i):r?new pe(i):new me(i),new ne(e)))},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(oe(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(oe(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(oe(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++){var s=ae(i);if(void 0!==s){var o=e.names.get(s),a=t.getGroup(i);if(o&&a&&o.size){var c="data-styled.g"+i+'[id="'+s+'"]',l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+=e+",")})),r+=""+a+c+'{content:"'+l+'"}/*!sc*/\n'}}}return r}(this)},e}(),we=/(a)(d)/gi,Ee=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ce(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ee(t%52)+n;return(Ee(t%52)+n).replace(we,"$1-$2")}var Se=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Te=function(e){return Se(5381,e)};function ke(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Y(n)&&!Z(n))return!1}return!0}var Ie=Te("5.3.11"),Ae=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ke(e),this.componentId=t,this.baseHash=Se(Ie,t),this.baseStyle=n,be.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var s=Ge(this.rules,e,t,n).join(""),o=Ce(Se(this.baseHash,s)>>>0);if(!t.hasNameForId(r,o)){var a=n(s,"."+o,void 0,r);t.insertRules(r,o,a)}i.push(o),this.staticRulesId=o}else{for(var c=this.rules.length,l=Se(this.baseHash,n.hash),u="",h=0;h<c;h++){var d=this.rules[h];if("string"==typeof d)u+=d;else if(d){var f=Ge(d,e,t,n),p=Array.isArray(f)?f.join(""):f;l=Se(l,p+h),u+=p}}if(u){var m=Ce(l>>>0);if(!t.hasNameForId(r,m)){var g=n(u,"."+m,void 0,r);t.insertRules(r,m,g)}i.push(m)}}return i.join(" ")},e}(),xe=/^\s*\/\/.*$/gm,_e=[":","[",".","#"];function Ne(e){var t,n,r,i,s=void 0===e?W:e,o=s.options,a=void 0===o?W:o,c=s.plugins,l=void 0===c?Q:c,u=new f(a),h=[],d=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,i,s,o,a,c,l,u,h){switch(n){case 1:if(0===u&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===l)return r+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+r),"";default:return r+(0===h?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){h.push(e)})),p=function(e,r,s){return 0===r&&-1!==_e.indexOf(s[n.length])||s.match(i)?e:"."+t};function m(e,s,o,a){void 0===a&&(a="&");var c=e.replace(xe,""),l=s&&o?o+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(o||!s?"":s,l)}return u.use([].concat(l,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,p))},d,function(e){if(-2===e){var t=h;return h=[],t}}])),m.hash=l.length?l.reduce((function(e,t){return t.name||te(15),Se(e,t.name)}),5381).toString():"",m}var De=t(l).createContext(),Re=(De.Consumer,t(l).createContext()),Oe=(Re.Consumer,new be),Le=Ne();function Me(){return(0,l.useContext)(De)||Oe}function Pe(){return(0,l.useContext)(Re)||Le}function Fe(e){var n=(0,l.useState)(e.stylisPlugins),r=n[0],i=n[1],s=Me(),o=(0,l.useMemo)((function(){var t=s;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),a=(0,l.useMemo)((function(){return Ne({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,l.useEffect)((function(){t(d)(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),t(l).createElement(De.Provider,{value:o},t(l).createElement(Re.Provider,{value:a},e.children))}var je=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Le);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return te(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=Le),this.name+e.hash},e}(),Ve=/([A-Z])/,Ue=/([A-Z])/g,Be=/^ms-/,$e=function(e){return"-"+e.toLowerCase()};function qe(e){return Ve.test(e)?e.replace(Ue,$e).replace(Be,"-ms-"):e}var ze=function(e){return null==e||!1===e||""===e};function Ge(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)""!==(i=Ge(e[o],t,n,r))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}return ze(e)?"":Z(e)?"."+e.styledComponentId:Y(e)?"function"!=typeof(c=e)||c.prototype&&c.prototype.isReactComponent||!t?e:Ge(e(t),t,n,r):e instanceof je?n?(e.inject(n,r),e.getName(r)):e:K(e)?function e(t,n){var r,i,s=[];for(var o in t)t.hasOwnProperty(o)&&!ze(t[o])&&(Array.isArray(t[o])&&t[o].isCss||Y(t[o])?s.push(qe(o)+":",t[o],";"):K(t[o])?s.push.apply(s,e(t[o],o)):s.push(qe(o)+": "+(r=o,(null==(i=t[o])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||r in p||r.startsWith("--")?String(i).trim():i+"px")+";")));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString();var c}var He=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ke(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Y(e)||K(e)?He(Ge(H(Q,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:He(Ge(H(e,n)))}new Set;var Qe=function(e,t,n){return void 0===n&&(n=W),e.theme!==n.theme&&e.theme||t||n.theme},We=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ye=/(^-|-$)/g;function Xe(e){return e.replace(We,"-").replace(Ye,"")}var Ze=function(e){return Ce(Te(e)>>>0)};function Je(e){return"string"==typeof e&&!0}var et=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},tt=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function nt(e,t,n){var r=e[n];et(t)&&et(r)?rt(r,t):e[n]=t}function rt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(et(o))for(var a in o)tt(a)&&nt(e,o[a],a)}return e}var it=t(l).createContext();it.Consumer;var st={};function ot(e,n,r){var i=Z(e),s=!Je(e),o=n.attrs,a=void 0===o?Q:o,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Xe(e);st[n]=(st[n]||0)+1;var r=n+"-"+Ze("5.3.11"+n+st[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):c,h=n.displayName,d=void 0===h?function(e){return Je(e)?"styled."+e:"Styled("+X(e)+")"}(e):h,f=n.displayName&&n.componentId?Xe(n.displayName)+"-"+n.componentId:n.componentId||u,p=i&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,g=n.shouldForwardProp;i&&e.shouldForwardProp&&(g=n.shouldForwardProp?function(t,r,i){return e.shouldForwardProp(t,r,i)&&n.shouldForwardProp(t,r,i)}:e.shouldForwardProp);var v,b=new Ae(r,f,i?e.componentStyle:void 0),w=b.isStatic&&0===a.length,E=function(e,t){return function(e,t,n,r){var i=e.attrs,s=e.componentStyle,o=e.defaultProps,a=e.foldedComponentIds,c=e.shouldForwardProp,u=e.styledComponentId,h=e.target,d=function(e,t,n){void 0===e&&(e=W);var r=G({},t,{theme:e}),i={};return n.forEach((function(e){var t,n,s,o=e;for(t in Y(o)&&(o=o(r)),o)r[t]=i[t]="className"===t?(n=i[t],s=o[t],n&&s?n+" "+s:n||s):o[t]})),[r,i]}(Qe(t,(0,l.useContext)(it),o)||W,t,i),f=d[0],p=d[1],m=function(e,t,n,r){var i=Me(),s=Pe();return t?e.generateAndInjectStyles(W,i,s):e.generateAndInjectStyles(n,i,s)}(s,r,f),g=n,v=p.$as||t.$as||p.as||t.as||h,b=Je(v),w=p!==t?G({},t,{},p):t,E={};for(var C in w)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?E.as=w[C]:(c?c(C,y,v):!b||y(C))&&(E[C]=w[C]));return t.style&&p.style!==t.style&&(E.style=G({},t.style,{},p.style)),E.className=Array.prototype.concat(a,u,m!==u?m:null,t.className,p.className).filter(Boolean).join(" "),E.ref=g,(0,l.createElement)(v,E)}(v,e,t,w)};return E.displayName=d,(v=t(l).forwardRef(E)).attrs=p,v.componentStyle=b,v.displayName=d,v.shouldForwardProp=g,v.foldedComponentIds=i?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Q,v.styledComponentId=f,v.target=i?e.target:e,v.withComponent=function(e){var t=n.componentId,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["componentId"]),s=t&&t+"-"+(Je(e)?e:Xe(X(e)));return ot(e,G({},i,{attrs:p,componentId:s}),r)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=i?rt({},e.defaultProps,t):t}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),s&&t(m)(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var at=function(e){return function e(t,n,r){if(void 0===r&&(r=W),!(0,o.isValidElementType)(n))return te(1,String(n));var i=function(){return t(n,r,Ke.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,n,G({},r,{},i))},i.attrs=function(i){return e(t,n,G({},r,{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i}(ot,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){at[e]=at(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ke(e),be.registerId(this.componentId+1)}var t=e.prototype;t.createStyles=function(e,t,n,r){var i=r(Ge(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&be.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ke.apply(void 0,[e].concat(n)).join(""),s=Ze(i);return new je(s,i)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=de();return"<style "+[n&&'nonce="'+n+'"','data-styled="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?te(2):e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)return te(2);var r=((n={})["data-styled"]="",n["data-styled-version"]="5.3.11",n.dangerouslySetInnerHTML={__html:e.instance.toString()},n),i=de();return i&&(r.nonce=i),[t(l).createElement("style",G({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new be({isServer:!0}),this.sealed=!1}var n=e.prototype;n.collectStyles=function(e){return this.sealed?te(2):t(l).createElement(Fe,{sheet:this.instance},e)},n.interleaveWithNodeStream=function(e){return te(3)}}();var lt,ut,ht=at,dt=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ft=ct(lt||(lt=dt(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),33.98873199462888,242.776657104492,26.70543228149412,84.97182998657219,242.776657104492,84.97182998657219,2.42776657104492,242.776657104492,240.34889053344708),pt=(ht.path(ut||(ut=dt(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),2.42776657104492,242.776657104492,ft,1.6),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(void 0!==n[e])return n[e];if(e&&e.indexOf(".")>0){for(var r=e.split("."),i=r.length,s=n[r[0]],o=1;null!=s&&o<i;)s=s[r[o]],o+=1;if(void 0!==s)return s}return t}});var mt,gt,yt,vt=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},bt=ct(mt||(mt=vt(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));ht.svg(gt||(gt=vt(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),bt,pt("speed","0.75")),ht.polyline(yt||(yt=vt(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(e){return e.width}));l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu");var wt,Et,Ct,St=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Tt=ct(wt||(wt=St(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));ht.polygon(Et||(Et=St(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),Tt),ht.svg(Ct||(Ct=St(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"]))),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu"),l=s("jQ7Zu");l=s("jQ7Zu");l=s("jQ7Zu");l=s("jQ7Zu");l=s("jQ7Zu");var kt={};e(kt,"default",(()=>At),(e=>At=e));l=s("jQ7Zu");var It=function(){return It=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},It.apply(this,arguments)};function At(e){var n=e.visible,r=void 0===n||n,i=e.width,s=void 0===i?"80":i,o=e.height,a=void 0===o?"80":o,c=e.wrapperClass,u=void 0===c?"":c,d=e.wrapperStyle,f=void 0===d?{}:d,p=e.ariaLabel,m=void 0===p?"dna-loading":p;return r?t(l).createElement("svg",It({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:s,height:a,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:u,style:f,"aria-label":m,"data-testid":"dna-svg"},h),t(l).createElement("circle",{cx:"6.451612903225806",cy:"60.6229",r:"3.41988",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-0.5s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"0s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-0.5s"})),t(l).createElement("circle",{cx:"6.451612903225806",cy:"39.3771",r:"2.58012",fill:"#46dff0"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-0.5s"})),t(l).createElement("circle",{cx:"16.129032258064512",cy:"68.1552",r:"3.17988",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-0.7s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-0.7s"})),t(l).createElement("circle",{cx:"16.129032258064512",cy:"31.8448",r:"2.82012",fill:"#46dff0"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-0.7s"})),t(l).createElement("circle",{cx:"25.806451612903224",cy:"69.3634",r:"2.93988",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-0.9s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-0.9s"})),t(l).createElement("circle",{cx:"25.806451612903224",cy:"30.6366",r:"3.06012",fill:"#46dff0"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-0.9s"})),t(l).createElement("circle",{cx:"35.48387096774193",cy:"65.3666",r:"2.69988",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.1s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.1s"})),t(l).createElement("circle",{cx:"35.48387096774193",cy:"34.6334",r:"3.30012",fill:"#46dff0"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.1s"})),t(l).createElement("circle",{cx:"45.16129032258064",cy:"53.8474",r:"2.45988",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.3s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-0.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.3s"})),t(l).createElement("circle",{cx:"45.16129032258064",cy:"46.1526",r:"3.54012",fill:"#46dff0"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.3s"})),t(l).createElement("circle",{cx:"54.838709677419345",cy:"39.3771",r:"2.58012",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"})),t(l).createElement("circle",{cx:"54.838709677419345",cy:"60.6229",r:"3.41988",fill:"#46dff0"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.5s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.5s"})),t(l).createElement("circle",{cx:"64.51612903225805",cy:"31.8448",r:"2.82012",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"})),t(l).createElement("circle",{cx:"64.51612903225805",cy:"68.1552",r:"3.17988",fill:"#46dff0"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.7s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.2s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.7s"})),t(l).createElement("circle",{cx:"74.19354838709677",cy:"30.6366",r:"3.06012",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"})),t(l).createElement("circle",{cx:"74.19354838709677",cy:"69.3634",r:"2.93988",fill:"#46dff0"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.9s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.4s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-1.9s"})),t(l).createElement("circle",{cx:"83.87096774193547",cy:"34.6334",r:"3.30012",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"})),t(l).createElement("circle",{cx:"83.87096774193547",cy:"65.3666",r:"2.69988",fill:"#46dff0"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-3.1s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.6s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-2.1s"})),t(l).createElement("circle",{cx:"93.54838709677418",cy:"46.1526",r:"3.54012",fill:"rgba(233, 12, 89, 0.5125806451612902)"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-1.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"})),t(l).createElement("circle",{cx:"93.54838709677418",cy:"53.8474",r:"2.45988",fill:"#46dff0"},t(l).createElement("animate",{attributeName:"r",keyTimes:"0;0.5;1",values:"2.4000000000000004;3.5999999999999996;2.4000000000000004",dur:"2s",repeatCount:"indefinite",begin:"-3.3s"}),t(l).createElement("animate",{attributeName:"cy",keyTimes:"0;0.5;1",values:"30.5;69.5;30.5",dur:"2s",repeatCount:"indefinite",begin:"-2.8s",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1",calcMode:"spline"}),t(l).createElement("animate",{attributeName:"fill",keyTimes:"0;0.5;1",values:"#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",dur:"2s",repeatCount:"indefinite",begin:"-2.3s"}))):null}l=s("jQ7Zu");l=s("jQ7Zu");l=s("jQ7Zu");l=s("jQ7Zu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},_t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new Nt;const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dt=function(e){return function(e){const t=xt(e);return _t.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Rt=function(e){try{return _t.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ot=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Lt=()=>{try{return Ot()||(()=>{if(void 0===N||void 0===N.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Rt(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Mt=e=>{const t=(e=>{var t,n;return null===(n=null===(t=Lt())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Pt=()=>{var e;return null===(e=Lt())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Dt(JSON.stringify({alg:"none",type:"JWT"})),Dt(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Ut extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bt.prototype.create)}}class Bt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace($t,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Ut(r,o,n)}}const $t=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(zt(n)&&zt(s)){if(!qt(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function zt(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e){return e&&e._delegate?e._delegate:e}class Ht{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ft;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Qt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=[];var Yt,Xt;(Xt=Yt||(Yt={}))[Xt.DEBUG=0]="DEBUG",Xt[Xt.VERBOSE=1]="VERBOSE",Xt[Xt.INFO=2]="INFO",Xt[Xt.WARN=3]="WARN",Xt[Xt.ERROR=4]="ERROR",Xt[Xt.SILENT=5]="SILENT";const Zt={debug:Yt.DEBUG,verbose:Yt.VERBOSE,info:Yt.INFO,warn:Yt.WARN,error:Yt.ERROR,silent:Yt.SILENT},Jt=Yt.INFO,en={[Yt.DEBUG]:"log",[Yt.VERBOSE]:"log",[Yt.INFO]:"info",[Yt.WARN]:"warn",[Yt.ERROR]:"error"},tn=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=en[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class nn{constructor(e){this.name=e,this._logLevel=Jt,this._logHandler=tn,this._userLogHandler=null,Wt.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Yt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Zt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Yt.DEBUG,...e),this._logHandler(this,Yt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Yt.VERBOSE,...e),this._logHandler(this,Yt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Yt.INFO,...e),this._logHandler(this,Yt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Yt.WARN,...e),this._logHandler(this,Yt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Yt.ERROR,...e),this._logHandler(this,Yt.ERROR,...e)}}let rn,sn;const on=new WeakMap,an=new WeakMap,cn=new WeakMap,ln=new WeakMap,un=new WeakMap;let hn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return an.get(e);if("objectStoreNames"===t)return e.objectStoreNames||cn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function dn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(sn||(sn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(mn(this),t),pn(on.get(this))}:function(...t){return pn(e.apply(mn(this),t))}:function(t,...n){const r=e.call(mn(this),t,...n);return cn.set(r,t.sort?t.sort():[t]),pn(r)}}function fn(e){return"function"==typeof e?dn(e):(e instanceof IDBTransaction&&function(e){if(an.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));an.set(e,t)}(e),t=e,(rn||(rn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,hn):e);var t}function pn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(pn(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&on.set(t,e)})).catch((()=>{})),un.set(t,e),t}(e);if(ln.has(e))return ln.get(e);const t=fn(e);return t!==e&&(ln.set(e,t),un.set(t,e)),t}const mn=e=>un.get(e);function gn(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=pn(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(pn(o.result),e.oldVersion,e.newVersion,pn(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const yn=["get","getKey","getAll","getAllKeys","count"],vn=["put","add","delete","clear"],bn=new Map;function wn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(bn.get(t))return bn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=vn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!yn.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return bn.set(t,s),s}hn=(e=>({...e,get:(t,n,r)=>wn(t,n)||e.get(t,n,r),has:(t,n)=>!!wn(t,n)||e.has(t,n)}))(hn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class En{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Cn=new nn("@firebase/app"),Sn={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Tn=new Map,kn=new Map;function In(e,t){try{e.container.addComponent(t)}catch(n){Cn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function An(e){const t=e.name;if(kn.has(t))return Cn.debug(`There were multiple attempts to register component ${t}.`),!1;kn.set(t,e);for(const t of Tn.values())In(t,e);return!0}function xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n=new Bt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ht("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=Pt()),!n)throw _n.create("no-options");const s=Tn.get(i);if(s){if(qt(n,s.options)&&qt(r,s.config))return s;throw _n.create("duplicate-app",{appName:i})}const o=new Qt(i);for(const e of kn.values())o.addComponent(e);const a=new Nn(n,r,o);return Tn.set(i,a),a}function Rn(e="[DEFAULT]"){const t=Tn.get(e);if(!t&&"[DEFAULT]"===e&&Pt())return Dn();if(!t)throw _n.create("no-app",{appName:e});return t}function On(e,t,n){var r;let i=null!==(r=Sn[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Cn.warn(e.join(" "))}An(new Ht(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Ln=null;function Mn(){return Ln||(Ln=gn("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw _n.create("idb-open",{originalErrorMessage:e.message})}))),Ln}async function Pn(e,t){try{const n=(await Mn()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");await r.put(t,Fn(e)),await n.done}catch(e){if(e instanceof Ut)Cn.warn(e.message);else{const t=_n.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Cn.warn(t.message)}}}function Fn(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Un(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Vn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Vn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Bn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Dt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vn(){return(new Date).toISOString().substring(0,10)}class Un{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Vt()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await Mn();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Fn(e))}catch(e){if(e instanceof Ut)Cn.warn(e.message);else{const t=_n.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Cn.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Pn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Pn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Bn(e){return Dt(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n;$n="",An(new Ht("platform-logger",(e=>new En(e)),"PRIVATE")),An(new Ht("heartbeat",(e=>new jn(e)),"PRIVATE")),On("@firebase/app","0.9.13",$n),On("@firebase/app","0.9.13","esm2017"),On("fire-js","");var qn,zn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},Gn={},Hn=Hn||{},Kn=zn||self;function Qn(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Wn(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Yn="closure_uid_"+(1e9*Math.random()>>>0),Xn=0;function Zn(e,t,n){return e.call.apply(e.bind,arguments)}function Jn(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function er(e,t,n){return(er=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Zn:Jn).apply(null,arguments)}function tr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function nr(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function rr(){this.s=this.s,this.o=this.o}rr.prototype.s=!1,rr.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Yn)&&e[Yn]||(e[Yn]=++Xn))},rr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ir=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function sr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function or(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Qn(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function ar(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ar.prototype.h=function(){this.defaultPrevented=!0};var cr=function(){if(!Kn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Kn.addEventListener("test",(()=>{}),t),Kn.removeEventListener("test",(()=>{}),t)}catch(e){}return e}();function lr(e){return/^[\s\xa0]*$/.test(e)}function ur(){var e=Kn.navigator;return e&&(e=e.userAgent)?e:""}function hr(e){return-1!=ur().indexOf(e)}function dr(e){return dr[" "](e),e}dr[" "]=function(){};var fr,pr,mr,gr=hr("Opera"),yr=hr("Trident")||hr("MSIE"),vr=hr("Edge"),br=vr||yr,wr=hr("Gecko")&&!(-1!=ur().toLowerCase().indexOf("webkit")&&!hr("Edge"))&&!(hr("Trident")||hr("MSIE"))&&!hr("Edge"),Er=-1!=ur().toLowerCase().indexOf("webkit")&&!hr("Edge");function Cr(){var e=Kn.document;return e?e.documentMode:void 0}e:{var Sr="",Tr=(pr=ur(),wr?/rv:([^\);]+)(\)|;)/.exec(pr):vr?/Edge\/([\d\.]+)/.exec(pr):yr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(pr):Er?/WebKit\/(\S+)/.exec(pr):gr?/(?:Version)[ \/]?(\S+)/.exec(pr):void 0);if(Tr&&(Sr=Tr?Tr[1]:""),yr){var kr=Cr();if(null!=kr&&kr>parseFloat(Sr)){fr=String(kr);break e}}fr=Sr}if(Kn.document&&yr){var Ir=Cr();mr=Ir||(parseInt(fr,10)||void 0)}else mr=void 0;var Ar=mr;function xr(e,t){if(ar.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(wr){e:{try{dr(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:_r[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xr.$.h.call(this)}}nr(xr,ar);var _r={2:"touch",3:"pen",4:"mouse"};xr.prototype.h=function(){xr.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Nr="closure_listenable_"+(1e6*Math.random()|0),Dr=0;function Rr(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Dr,this.fa=this.ia=!1}function Or(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Lr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Mr(e){const t={};for(const n in e)t[n]=e[n];return t}const Pr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fr(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Pr.length;t++)n=Pr[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function jr(e){this.src=e,this.g={},this.h=0}function Vr(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=ir(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Or(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Ur(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}jr.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Ur(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Rr(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var Br="closure_lm_"+(1e6*Math.random()|0),$r={};function qr(e,t,n,r,i){if(r&&r.once)return Gr(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)qr(e,t[s],n,r,i);return null}return n=Zr(n),e&&e[Nr]?e.O(t,n,Wn(r)?!!r.capture:!!r,i):zr(e,t,n,!1,r,i)}function zr(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Wn(i)?!!i.capture:!!i,a=Yr(e);if(a||(e[Br]=a=new jr(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Wr;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)cr||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Qr(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Gr(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Gr(e,t[s],n,r,i);return null}return n=Zr(n),e&&e[Nr]?e.P(t,n,Wn(r)?!!r.capture:!!r,i):zr(e,t,n,!0,r,i)}function Hr(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Hr(e,t[s],n,r,i);else r=Wn(r)?!!r.capture:!!r,n=Zr(n),e&&e[Nr]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Ur(s=e.g[t],n,r,i))&&(Or(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Yr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ur(t,n,r,i)),(n=-1<e?t[e]:null)&&Kr(n))}function Kr(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Nr])Vr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Qr(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Yr(t))?(Vr(n,e),0==n.h&&(n.src=null,t[Br]=null)):Or(e)}}}function Qr(e){return e in $r?$r[e]:$r[e]="on"+e}function Wr(e,t){if(e.fa)e=!0;else{t=new xr(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Kr(e),e=n.call(r,t)}return e}function Yr(e){return(e=e[Br])instanceof jr?e:null}var Xr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zr(e){return"function"==typeof e?e:(e[Xr]||(e[Xr]=function(t){return e.handleEvent(t)}),e[Xr])}function Jr(){rr.call(this),this.i=new jr(this),this.S=this,this.J=null}function ei(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new ar(t,e);else if(t instanceof ar)t.target=t.target||e;else{var i=t;Fr(t=new ar(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ti(o,r,!0,t)&&i}if(i=ti(o=t.g=e,r,!0,t)&&i,i=ti(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ti(o=t.g=n[s],r,!1,t)&&i}function ti(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Vr(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}nr(Jr,rr),Jr.prototype[Nr]=!0,Jr.prototype.removeEventListener=function(e,t,n,r){Hr(this,e,t,n,r)},Jr.prototype.N=function(){if(Jr.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Or(n[r]);delete t.g[e],t.h--}}this.J=null},Jr.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Jr.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ni=Kn.JSON.stringify;function ri(){var e=ui;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var ii=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new si),(e=>e.reset()));class si{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function oi(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function ai(e){Kn.setTimeout((()=>{throw e}),0)}let ci,li=!1,ui=new class{constructor(){this.h=this.g=null}add(e,t){const n=ii.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},hi=()=>{const e=Kn.Promise.resolve(void 0);ci=()=>{e.then(di)}};var di=()=>{for(var e;e=ri();){try{e.h.call(e.g)}catch(e){ai(e)}var t=ii;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}li=!1};function fi(e,t){Jr.call(this),this.h=e||1,this.g=t||Kn,this.j=er(this.qb,this),this.l=Date.now()}function pi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function mi(e,t,n){if("function"==typeof e)n&&(e=er(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=er(e.handleEvent,e)}return 2147483647<Number(t)?-1:Kn.setTimeout(e,t||0)}function gi(e){e.g=mi((()=>{e.g=null,e.i&&(e.i=!1,gi(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}nr(fi,Jr),(qn=fi.prototype).ga=!1,qn.T=null,qn.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ei(this,"tick"),this.ga&&(pi(this),this.start()))}},qn.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},qn.N=function(){fi.$.N.call(this),pi(this),delete this.g};class yi extends rr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gi(this)}N(){super.N(),this.g&&(Kn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vi(e){rr.call(this),this.h=e,this.g={}}nr(vi,rr);var bi=[];function wi(e,t,n,r){Array.isArray(n)||(n&&(bi[0]=n.toString()),n=bi);for(var i=0;i<n.length;i++){var s=qr(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ei(e){Lr(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Kr(e)}),e),e.g={}}function Ci(){this.g=!0}function Si(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ni(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}vi.prototype.N=function(){vi.$.N.call(this),Ei(this)},vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ci.prototype.Ea=function(){this.g=!1},Ci.prototype.info=function(){};var Ti={},ki=null;function Ii(){return ki=ki||new Jr}function Ai(e){ar.call(this,Ti.Ta,e)}function xi(e){const t=Ii();ei(t,new Ai(t))}function _i(e,t){ar.call(this,Ti.STAT_EVENT,e),this.stat=t}function Ni(e){const t=Ii();ei(t,new _i(t,e))}function Di(e,t){ar.call(this,Ti.Ua,e),this.size=t}function Ri(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Kn.setTimeout((function(){e()}),t)}Ti.Ta="serverreachability",nr(Ai,ar),Ti.STAT_EVENT="statevent",nr(_i,ar),Ti.Ua="timingevent",nr(Di,ar);var Oi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Li={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mi(){}function Pi(e){return e.h||(e.h=e.i())}function Fi(){}Mi.prototype.h=null;var ji,Vi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ui(){ar.call(this,"d")}function Bi(){ar.call(this,"c")}function $i(){}function qi(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new vi(this),this.P=Gi,e=br?125:void 0,this.V=new fi(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new zi}function zi(){this.i=null,this.g="",this.h=!1}nr(Ui,ar),nr(Bi,ar),nr($i,Mi),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},ji=new $i;var Gi=45e3,Hi={},Ki={};function Qi(e,t,n){e.L=1,e.v=fs(cs(t)),e.s=n,e.S=!0,Wi(e,null)}function Wi(e,t){e.G=Date.now(),Ji(e),e.A=cs(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Is(n.i,"t",r),e.C=0,n=e.l.J,e.h=new zi,e.g=ko(e.l,n?t:null,!e.s),0<e.O&&(e.M=new yi(er(e.Pa,e,e.g),e.O)),wi(e.U,e.g,"readystatechange",e.nb),t=e.I?Mr(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),xi(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function Yi(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Xi(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=Zi(e,n),r==Ki){4==t&&(e.o=4,Ni(14),i=!1),Si(e.j,e.m,null,"[Incomplete Response]");break}if(r==Hi){e.o=4,Ni(15),Si(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Si(e.j,e.m,r,null),is(e,r)}Yi(e)&&r!=Ki&&r!=Hi&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ni(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),yo(t),t.M=!0,Ni(11))):(Si(e.j,e.m,n,"[Invalid Chunked Response]"),rs(e),ns(e))}function Zi(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ki:(n=Number(t.substring(n,r)),isNaN(n)?Hi:(r+=1)+n>t.length?Ki:(t=t.slice(r,r+n),e.C=r+n,t))}function Ji(e){e.Y=Date.now()+e.P,es(e,e.P)}function es(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ri(er(e.lb,e),t)}function ts(e){e.B&&(Kn.clearTimeout(e.B),e.B=null)}function ns(e){0==e.l.H||e.J||wo(e.l,e)}function rs(e){ts(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,pi(e.V),Ei(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function is(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Rs(n.i,e)))if(!e.K&&Rs(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;bo(n),co(n)}go(n),Ni(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Ri(er(n.ib,n),6e3));if(1>=Ds(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else Co(n,11)}else if((e.K||n.g==e)&&bo(n),!lr(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const t=l[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=l[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Os(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,ds(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((r=n).wa=To(r,r.J?r.pa:null,r.Y),o.K){Ls(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(ts(a),Ji(a)),r.g=o}else mo(r);0<n.j.length&&uo(n)}else"stop"!=l[0]&&"close"!=l[0]||Co(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Co(n,7):ao(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}xi()}catch(e){}}function ss(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Qn(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Qn(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Qn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(qn=qi.prototype).setTimeout=function(e){this.P=e},qn.nb=function(e){e=e.target;const t=this.M;t&&3==to(e)?t.l():this.Pa(e)},qn.Pa=function(e){try{if(e==this.g)e:{const u=to(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||br||this.g&&(this.h.h||this.g.ja()||no(this.g)))){this.J||4!=u||7==t||xi(),ts(this);var n=this.g.da();this.ca=n;t:if(Yi(this)){var r=no(this.g);e="";var i=r.length,s=4==to(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){rs(this),ns(this);var o="";break t}this.h.i=new Kn.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!lr(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Ni(12),rs(this),ns(this);break e}Si(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,is(this,n)}this.S?(Xi(this,u,o),br&&this.i&&3==u&&(wi(this.U,this.V,"tick",this.mb),this.V.start())):(Si(this.j,this.m,o,null),is(this,o)),4==u&&rs(this),this.i&&!this.J&&(4==u?wo(this.l,this):(this.i=!1,Ji(this)))}else(function(e){const t={};e=(e.g&&2<=to(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(lr(e[r]))continue;var n=oi(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ni(12)):(this.o=0,Ni(13)),rs(this),ns(this)}}}catch(e){}},qn.mb=function(){if(this.g){var e=to(this.g),t=this.g.ja();this.C<t.length&&(ts(this),Xi(this,e,t),this.i&&4!=e&&Ji(this))}},qn.cancel=function(){this.J=!0,rs(this)},qn.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(xi(),Ni(17)),rs(this),this.o=2,ns(this)):es(this,this.Y-e)};var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function as(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof as){this.h=e.h,ls(this,e.j),this.s=e.s,this.g=e.g,us(this,e.m),this.l=e.l;var t=e.i,n=new Cs;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),hs(this,n),this.o=e.o}else e&&(t=String(e).match(os))?(this.h=!1,ls(this,t[1]||"",!0),this.s=ps(t[2]||""),this.g=ps(t[3]||"",!0),us(this,t[4]),this.l=ps(t[5]||"",!0),hs(this,t[6]||"",!0),this.o=ps(t[7]||"")):(this.h=!1,this.i=new Cs(null,this.h))}function cs(e){return new as(e)}function ls(e,t,n){e.j=n?ps(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function us(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function hs(e,t,n){t instanceof Cs?(e.i=t,function(e,t){t&&!e.j&&(Ss(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ts(this,t),Is(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=ms(t,ws)),e.i=new Cs(t,e.h))}function ds(e,t,n){e.i.set(t,n)}function fs(e){return ds(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ps(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ms(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,gs),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function gs(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}as.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ms(t,ys,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ms(t,ys,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ms(n,"/"==n.charAt(0)?bs:vs,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ms(n,Es)),e.join("")};var ys=/[#\/\?@]/g,vs=/[#\?:]/g,bs=/[#\?]/g,ws=/[#\?@]/g,Es=/#/g;function Cs(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ss(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ts(e,t){Ss(e),t=As(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ks(e,t){return Ss(e),t=As(e,t),e.g.has(t)}function Is(e,t,n){Ts(e,t),0<n.length&&(e.i=null,e.g.set(As(e,t),sr(n)),e.h+=n.length)}function As(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(qn=Cs.prototype).add=function(e,t){Ss(this),this.i=null,e=As(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},qn.forEach=function(e,t){Ss(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},qn.ta=function(){Ss(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},qn.Z=function(e){Ss(this);let t=[];if("string"==typeof e)ks(this,e)&&(t=t.concat(this.g.get(As(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},qn.set=function(e,t){return Ss(this),this.i=null,ks(this,e=As(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},qn.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},qn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function xs(e){this.l=e||_s,Kn.PerformanceNavigationTiming?e=0<(e=Kn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Kn.g&&Kn.g.Ka&&Kn.g.Ka()&&Kn.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _s=10;function Ns(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ds(e){return e.h?1:e.g?e.g.size:0}function Rs(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Os(e,t){e.g?e.g.add(t):e.h=t}function Ls(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ms(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return sr(e.i)}xs.prototype.cancel=function(){if(this.i=Ms(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ps(){this.g=new class{stringify(e){return Kn.JSON.stringify(e,void 0)}parse(e){return Kn.JSON.parse(e,void 0)}}}function Fs(e,t,n){const r=n||"";try{ss(e,(function(e,n){let i=e;Wn(e)&&(i=ni(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function js(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Vs(e){this.l=e.fc||null,this.j=e.ob||!1}function Us(e,t){Jr.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Bs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nr(Vs,Mi),Vs.prototype.g=function(){return new Us(this.l,this.j)},Vs.prototype.i=function(e){return function(){return e}}({}),nr(Us,Jr);var Bs=0;function $s(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function qs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,zs(e)}function zs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(qn=Us.prototype).open=function(e,t){if(this.readyState!=Bs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,zs(this)},qn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Kn).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},qn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,qs(this)),this.readyState=Bs},qn.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Kn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$s(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},qn.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?qs(this):zs(this),3==this.readyState&&$s(this)}},qn.Za=function(e){this.g&&(this.response=this.responseText=e,qs(this))},qn.Ya=function(e){this.g&&(this.response=e,qs(this))},qn.ka=function(){this.g&&qs(this)},qn.setRequestHeader=function(e,t){this.v.append(e,t)},qn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},qn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Us.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Gs=Kn.JSON.parse;function Hs(e){Jr.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ks,this.L=this.M=!1}nr(Hs,Jr);var Ks="",Qs=/^https?$/i,Ws=["POST","PUT"];function Ys(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Xs(e),Js(e)}function Xs(e){e.F||(e.F=!0,ei(e,"complete"),ei(e,"error"))}function Zs(e){if(e.h&&void 0!==Hn&&(!e.C[1]||4!=to(e)||2!=e.da()))if(e.v&&4==to(e))mi(e.La,0,e);else if(ei(e,"readystatechange"),4==to(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.I).match(os)[1]||null;!i&&Kn.self&&Kn.self.location&&(i=Kn.self.location.protocol.slice(0,-1)),r=!Qs.test(i?i.toLowerCase():"")}n=r}if(n)ei(e,"complete"),ei(e,"success");else{e.m=6;try{var s=2<to(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",Xs(e)}}finally{Js(e)}}}function Js(e,t){if(e.g){eo(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ei(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function eo(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Kn.clearTimeout(e.A),e.A=null)}function to(e){return e.g?e.g.readyState:0}function no(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ks:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ro(e){let t="";return Lr(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function io(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ro(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ds(e,t,n))}function so(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function oo(e){this.Ga=0,this.j=[],this.l=new Ci,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=so("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=so("baseRetryDelayMs",5e3,e),this.hb=so("retryDelaySeedMs",1e4,e),this.eb=so("forwardChannelMaxRetries",2,e),this.xa=so("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new xs(e&&e.concurrentRequestLimit),this.Ja=new Ps,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ao(e){if(lo(e),3==e.H){var t=e.W++,n=cs(e.I);if(ds(n,"SID",e.K),ds(n,"RID",t),ds(n,"TYPE","terminate"),fo(e,n),(t=new qi(e,e.l,t)).L=2,t.v=fs(cs(n)),n=!1,Kn.navigator&&Kn.navigator.sendBeacon)try{n=Kn.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&Kn.Image&&((new Image).src=t.v,n=!0),n||(t.g=ko(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ji(t)}So(e)}function co(e){e.g&&(yo(e),e.g.cancel(),e.g=null)}function lo(e){co(e),e.u&&(Kn.clearTimeout(e.u),e.u=null),bo(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Kn.clearTimeout(e.m),e.m=null)}function uo(e){if(!Ns(e.i)&&!e.m){e.m=!0;var t=e.Na;ci||hi(),li||(ci(),li=!0),ui.add(t,e),e.C=0}}function ho(e,t){var n;n=t?t.m:e.W++;const r=cs(e.I);ds(r,"SID",e.K),ds(r,"RID",n),ds(r,"AID",e.V),fo(e,r),e.o&&e.s&&io(r,e.o,e.s),n=new qi(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=po(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Os(e.i,n),Qi(n,r,t)}function fo(e,t){e.na&&Lr(e.na,(function(e,n){ds(t,n,e)})),e.h&&ss({},(function(e,n){ds(t,n,e)}))}function po(e,t,n){n=Math.min(e.j.length,n);var r=e.h?er(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),s=!1;else try{Fs(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function mo(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ci||hi(),li||(ci(),li=!0),ui.add(t,e),e.A=0}}function go(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Ri(er(e.Ma,e),Eo(e,e.A)),e.A++,!0)}function yo(e){null!=e.B&&(Kn.clearTimeout(e.B),e.B=null)}function vo(e){e.g=new qi(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=cs(e.wa);ds(t,"RID","rpc"),ds(t,"SID",e.K),ds(t,"AID",e.V),ds(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ds(t,"TO",e.qa),ds(t,"TYPE","xmlhttp"),fo(e,t),e.o&&e.s&&io(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=fs(cs(t)),n.s=null,n.S=!0,Wi(n,e)}function bo(e){null!=e.v&&(Kn.clearTimeout(e.v),e.v=null)}function wo(e,t){var n=null;if(e.g==t){bo(e),yo(e),e.g=null;var r=2}else{if(!Rs(e.i,t))return;n=t.F,Ls(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;ei(r=Ii(),new Di(r,n)),uo(e)}else mo(e);else if(3==(i=t.o)||0==i&&0<t.ca||!(1==r&&function(e,t){return!(Ds(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Ri(er(e.Na,e,t),Eo(e,e.C)),e.C++,0)))}(e,t)||2==r&&go(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Co(e,5);break;case 4:Co(e,10);break;case 3:Co(e,6);break;default:Co(e,2)}}function Eo(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Co(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=er(e.pb,e);n||(n=new as("//www.google.com/images/cleardot.gif"),Kn.location&&"http"==Kn.location.protocol||ls(n,"https"),fs(n)),function(e,t){const n=new Ci;if(Kn.Image){const r=new Image;r.onload=tr(js,n,r,"TestLoadImage: loaded",!0,t),r.onerror=tr(js,n,r,"TestLoadImage: error",!1,t),r.onabort=tr(js,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=tr(js,n,r,"TestLoadImage: timeout",!1,t),Kn.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Ni(2);e.H=0,e.h&&e.h.za(t),So(e),lo(e)}function So(e){if(e.H=0,e.ma=[],e.h){const t=Ms(e.i);0==t.length&&0==e.j.length||(or(e.ma,t),or(e.ma,e.j),e.i.i.length=0,sr(e.j),e.j.length=0),e.h.ya()}}function To(e,t,n){var r=n instanceof as?cs(n):new as(n);if(""!=r.g)t&&(r.g=t+"."+r.g),us(r,r.m);else{var i=Kn.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new as(null);r&&ls(s,r),t&&(s.g=t),i&&us(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ds(r,n,t),ds(r,"VER",e.ra),fo(e,r),r}function ko(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new Hs(new Vs({ob:!0})):new Hs(e.va)).Oa(e.J),t}function Io(){}function Ao(){if(yr&&!(10<=Number(Ar)))throw Error("Environmental error: no available transport.")}function xo(e,t){Jr.call(this),this.g=new oo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!lr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!lr(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Do(this)}function _o(e){Ui.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function No(){Bi.call(this),this.status=1}function Do(e){this.g=e}function Ro(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Oo(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function Lo(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(qn=Hs.prototype).Oa=function(e){this.M=e},qn.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ji.g(),this.C=this.u?Pi(this.u):Pi(ji),this.g.onreadystatechange=er(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void Ys(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=Kn.FormData&&e instanceof Kn.FormData,!(0<=ir(Ws,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{eo(this),0<this.B&&((this.L=function(e){return yr&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=er(this.ua,this)):this.A=mi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Ys(this,e)}},qn.ua=function(){void 0!==Hn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ei(this,"timeout"),this.abort(8))},qn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ei(this,"complete"),ei(this,"abort"),Js(this))},qn.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Js(this,!0)),Hs.$.N.call(this)},qn.La=function(){this.s||(this.G||this.v||this.l?Zs(this):this.kb())},qn.kb=function(){Zs(this)},qn.isActive=function(){return!!this.g},qn.da=function(){try{return 2<to(this)?this.g.status:-1}catch(e){return-1}},qn.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},qn.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Gs(t)}},qn.Ia=function(){return this.m},qn.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(qn=oo.prototype).ra=8,qn.H=1,qn.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new qi(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Mr(s),Fr(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=po(this,i,t),ds(n=cs(this.I),"RID",e),ds(n,"CVER",22),this.F&&ds(n,"X-HTTP-Session-Id",this.F),fo(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ro(s)))+"&"+t:this.o&&io(n,this.o,s)),Os(this.i,i),this.bb&&ds(n,"TYPE","init"),this.P?(ds(n,"$req",t),ds(n,"SID","null"),i.aa=!0,Qi(i,n,null)):Qi(i,n,t),this.H=2}}else 3==this.H&&(e?ho(this,e):0==this.j.length||Ns(this.i)||ho(this))},qn.Ma=function(){if(this.u=null,vo(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ri(er(this.jb,this),e)}},qn.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ni(10),co(this),vo(this))},qn.ib=function(){null!=this.v&&(this.v=null,co(this),go(this),Ni(19))},qn.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Ni(2)):(this.l.info("Failed to ping google.com"),Ni(1))},qn.isActive=function(){return!!this.h&&this.h.isActive(this)},(qn=Io.prototype).Ba=function(){},qn.Aa=function(){},qn.za=function(){},qn.ya=function(){},qn.isActive=function(){return!0},qn.Va=function(){},Ao.prototype.g=function(e,t){return new xo(e,t)},nr(xo,Jr),xo.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Ni(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=To(e,null,e.Y),uo(e)},xo.prototype.close=function(){ao(this.g)},xo.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ni(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&uo(t)},xo.prototype.N=function(){this.g.h=null,delete this.j,ao(this.g),delete this.g,xo.$.N.call(this)},nr(_o,Ui),nr(No,Bi),nr(Do,Io),Do.prototype.Ba=function(){ei(this.g,"a")},Do.prototype.Aa=function(e){ei(this.g,new _o(e))},Do.prototype.za=function(e){ei(this.g,new No)},Do.prototype.ya=function(){ei(this.g,"b")},nr(Ro,(function(){this.blockSize=-1})),Ro.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ro.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)Oo(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Oo(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Oo(this,r),i=0;break}}this.h=i,this.i+=t},Ro.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var Mo={};function Po(e){return-128<=e&&128>e?function(e,t){var n=Mo;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new Lo([0|e],0>e?-1:0)})):new Lo([0|e],0>e?-1:0)}function Fo(e){if(isNaN(e)||!isFinite(e))return Vo;if(0>e)return zo(Fo(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=jo;return new Lo(t,0)}var jo=4294967296,Vo=Po(0),Uo=Po(1),Bo=Po(16777216);function $o(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function qo(e){return-1==e.h}function zo(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Lo(n,~e.h).add(Uo)}function Go(e,t){return e.add(zo(t))}function Ho(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ko(e,t){this.g=e,this.h=t}function Qo(e,t){if($o(t))throw Error("division by zero");if($o(e))return new Ko(Vo,Vo);if(qo(e))return t=Qo(zo(e),t),new Ko(zo(t.g),zo(t.h));if(qo(t))return t=Qo(e,zo(t)),new Ko(zo(t.g),t.h);if(30<e.g.length){if(qo(e)||qo(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Uo,r=t;0>=r.X(e);)n=Wo(n),r=Wo(r);var i=Yo(n,1),s=Yo(r,1);for(r=Yo(r,2),n=Yo(n,2);!$o(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Yo(r,1),n=Yo(n,1)}return t=Go(e,i.R(t)),new Ko(i,t)}for(i=Vo;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=Fo(n)).R(t);qo(o)||0<o.X(e);)o=(s=Fo(n-=r)).R(t);$o(s)&&(s=Uo),i=i.add(s),e=Go(e,o)}return new Ko(i,e)}function Wo(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Lo(n,e.h)}function Yo(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Lo(i,e.h)}(qn=Lo.prototype).ea=function(){if(qo(this))return-zo(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:jo+r)*t,t*=jo}return e},qn.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if($o(this))return"0";if(qo(this))return"-"+zo(this).toString(e);for(var t=Fo(Math.pow(e,6)),n=this,r="";;){var i=Qo(n,t).g,s=((0<(n=Go(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if($o(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},qn.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},qn.X=function(e){return qo(e=Go(this,e))?-1:$o(e)?0:1},qn.abs=function(){return qo(this)?zo(this):this},qn.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Lo(n,-2147483648&n[n.length-1]?-1:0)},qn.R=function(e){if($o(this)||$o(e))return Vo;if(qo(this))return qo(e)?zo(this).R(zo(e)):zo(zo(this).R(e));if(qo(e))return zo(this.R(zo(e)));if(0>this.X(Bo)&&0>e.X(Bo))return Fo(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Ho(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Ho(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ho(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ho(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Lo(n,0)},qn.gb=function(e){return Qo(this,e).h},qn.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Lo(n,this.h&e.h)},qn.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Lo(n,this.h|e.h)},qn.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Lo(n,this.h^e.h)},Ao.prototype.createWebChannel=Ao.prototype.g,xo.prototype.send=xo.prototype.u,xo.prototype.open=xo.prototype.m,xo.prototype.close=xo.prototype.close,Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,Li.COMPLETE="complete",Fi.EventType=Vi,Vi.OPEN="a",Vi.CLOSE="b",Vi.ERROR="c",Vi.MESSAGE="d",Jr.prototype.listen=Jr.prototype.O,Hs.prototype.listenOnce=Hs.prototype.P,Hs.prototype.getLastError=Hs.prototype.Sa,Hs.prototype.getLastErrorCode=Hs.prototype.Ia,Hs.prototype.getStatus=Hs.prototype.da,Hs.prototype.getResponseJson=Hs.prototype.Wa,Hs.prototype.getResponseText=Hs.prototype.ja,Hs.prototype.send=Hs.prototype.ha,Hs.prototype.setWithCredentials=Hs.prototype.Oa,Ro.prototype.digest=Ro.prototype.l,Ro.prototype.reset=Ro.prototype.reset,Ro.prototype.update=Ro.prototype.j,Lo.prototype.add=Lo.prototype.add,Lo.prototype.multiply=Lo.prototype.R,Lo.prototype.modulo=Lo.prototype.gb,Lo.prototype.compare=Lo.prototype.X,Lo.prototype.toNumber=Lo.prototype.ea,Lo.prototype.toString=Lo.prototype.toString,Lo.prototype.getBits=Lo.prototype.D,Lo.fromNumber=Fo,Lo.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return zo(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=Fo(Math.pow(n,8)),i=Vo,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=Fo(Math.pow(n,o)),i=i.R(o).add(Fo(a))):i=(i=i.R(r)).add(Fo(a))}return i};var Xo=Gn.createWebChannelTransport=function(){return new Ao},Zo=Gn.getStatEventTarget=function(){return Ii()},Jo=Gn.ErrorCode=Oi,ea=Gn.EventType=Li,ta=Gn.Event=Ti,na=Gn.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ra=Gn.FetchXmlHttpFactory=Vs,ia=Gn.WebChannel=Fi,sa=Gn.XhrIo=Hs,oa=Gn.Md5=Ro,aa=Gn.Integer=Lo;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ca.UNAUTHENTICATED=new ca(null),ca.GOOGLE_CREDENTIALS=new ca("google-credentials-uid"),ca.FIRST_PARTY=new ca("first-party-uid"),ca.MOCK_USER=new ca("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let la="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new nn("@firebase/firestore");function ha(){return ua.logLevel}function da(e,...t){if(ua.logLevel<=Yt.DEBUG){const n=t.map(ma);ua.debug(`Firestore (${la}): ${e}`,...n)}}function fa(e,...t){if(ua.logLevel<=Yt.ERROR){const n=t.map(ma);ua.error(`Firestore (${la}): ${e}`,...n)}}function pa(e,...t){if(ua.logLevel<=Yt.WARN){const n=t.map(ma);ua.warn(`Firestore (${la}): ${e}`,...n)}}function ma(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e="Unexpected state"){const t=`FIRESTORE (${la}) INTERNAL ASSERTION FAILED: `+e;throw fa(t),new Error(t)}function ya(e,t){e||ga()}function va(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class wa extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ca.UNAUTHENTICATED)))}shutdown(){}}class Ta{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ka{constructor(e){this.t=e,this.currentUser=ca.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Ea;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ea,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{da("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(da("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ea)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(da("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ya("string"==typeof t.accessToken),new Ca(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ya(null===e||"string"==typeof e),new ca(e)}}class Ia{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=ca.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Aa{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Ia(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ca.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _a{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&da("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,da("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{da("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):da("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ya("string"==typeof e.token),this.T=e.token,new xa(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Na(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Na(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ra(e,t){return e<t?-1:e>t?1:0}function Oa(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class La{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new wa(ba.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new wa(ba.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new wa(ba.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new wa(ba.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return La.fromMillis(Date.now())}static fromDate(e){return La.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new La(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ra(this.nanoseconds,e.nanoseconds):Ra(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ma(e)}static min(){return new Ma(new La(0,0))}static max(){return new Ma(new La(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t,n){void 0===t?t=0:t>e.length&&ga(),void 0===n?n=e.length-t:n>e.length-t&&ga(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Pa.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pa?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Fa extends Pa{construct(e,t,n){return new Fa(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new wa(ba.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Fa(t)}static emptyPath(){return new Fa([])}}const ja=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Va extends Pa{construct(e,t,n){return new Va(e,t,n)}static isValidIdentifier(e){return ja.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Va.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Va(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new wa(ba.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new wa(ba.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new wa(ba.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new wa(ba.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Va(t)}static emptyPath(){return new Va([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.path=e}static fromPath(e){return new Ua(Fa.fromString(e))}static fromName(e){return new Ua(Fa.fromString(e).popFirst(5))}static empty(){return new Ua(Fa.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Fa.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Fa.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ua(new Fa(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ba.UNKNOWN_ID=-1;function $a(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ma.fromTimestamp(1e9===r?new La(n+1,0):new La(n,r));return new za(i,Ua.empty(),t)}function qa(e){return new za(e.readTime,e.key,-1)}class za{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new za(Ma.min(),Ua.empty(),-1)}static max(){return new za(Ma.max(),Ua.empty(),-1)}}function Ga(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ua.comparator(e.documentKey,t.documentKey),0!==n?n:Ra(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ka{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(e){if(e.code!==ba.FAILED_PRECONDITION||e.message!==Ha)throw e;da("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ga(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Wa(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Wa?t:Wa.resolve(t)}catch(e){return Wa.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Wa.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Wa.reject(t)}static resolve(e){return new Wa(((t,n)=>{t(e)}))}static reject(e){return new Wa(((t,n)=>{n(e)}))}static waitFor(e){return new Wa(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Wa.resolve(!1);for(const n of e)t=t.next((e=>e?Wa.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Wa(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Wa(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Za(e){return null==e}function Ja(e){return 0===e&&1/e==-1/0}function ec(e){return"number"==typeof e&&Number.isInteger(e)&&!Ja(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xa.ct=-1;const tc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],nc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],rc=nc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ic(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function sc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function oc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t){this.comparator=e,this.root=t||lc.EMPTY}insert(e,t){return new ac(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,lc.BLACK,null,null))}remove(e){return new ac(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cc(this.root,e,this.comparator,!1)}getReverseIterator(){return new cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cc(this.root,e,this.comparator,!0)}}class cc{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lc{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:lc.RED,this.left=null!=r?r:lc.EMPTY,this.right=null!=i?i:lc.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new lc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return lc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return lc.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ga();if(this.right.isRed())throw ga();const e=this.left.check();if(e!==this.right.check())throw ga();return e+(this.isRed()?0:1)}}lc.EMPTY=null,lc.RED=!0,lc.BLACK=!1,lc.EMPTY=new class{constructor(){this.size=0}get key(){throw ga()}get value(){throw ga()}get color(){throw ga()}get left(){throw ga()}get right(){throw ga()}copy(e,t,n,r,i){return this}insert(e,t,n){return new lc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uc{constructor(e){this.comparator=e,this.data=new ac(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hc(this.data.getIterator())}getIteratorFrom(e){return new hc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof uc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new uc(this.comparator);return t.data=e,t}}class hc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc{constructor(e){this.fields=e,e.sort(Va.comparator)}static empty(){return new dc([])}unionWith(e){let t=new uc(Va.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new dc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Oa(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new fc("Invalid base64 string: "+e):e}}(e);return new pc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new pc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ra(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pc.EMPTY_BYTE_STRING=new pc("");const mc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gc(e){if(ya(!!e),"string"==typeof e){let t=0;const n=mc.exec(e);if(ya(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:yc(e.seconds),nanos:yc(e.nanos)}}function yc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function vc(e){return"string"==typeof e?pc.fromBase64String(e):pc.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function wc(e){const t=e.mapValue.fields.__previous_value__;return bc(t)?wc(t):t}function Ec(e){const t=gc(e.mapValue.fields.__local_write_time__.timestampValue);return new La(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Sc{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Sc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Sc&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?bc(e)?4:Vc(e)?9007199254740991:10:ga()}function Ic(e,t){if(e===t)return!0;const n=kc(e);if(n!==kc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ec(e).isEqual(Ec(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=gc(e.timestampValue),r=gc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return vc(e.bytesValue).isEqual(vc(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return yc(e.geoPointValue.latitude)===yc(t.geoPointValue.latitude)&&yc(e.geoPointValue.longitude)===yc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return yc(e.integerValue)===yc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=yc(e.doubleValue),r=yc(t.doubleValue);return n===r?Ja(n)===Ja(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Oa(e.arrayValue.values||[],t.arrayValue.values||[],Ic);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ic(n)!==ic(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Ic(n[e],r[e])))return!1;return!0}(e,t);default:return ga()}}function Ac(e,t){return void 0!==(e.values||[]).find((e=>Ic(e,t)))}function xc(e,t){if(e===t)return 0;const n=kc(e),r=kc(t);if(n!==r)return Ra(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ra(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=yc(e.integerValue||e.doubleValue),r=yc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return _c(e.timestampValue,t.timestampValue);case 4:return _c(Ec(e),Ec(t));case 5:return Ra(e.stringValue,t.stringValue);case 6:return function(e,t){const n=vc(e),r=vc(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Ra(n[e],r[e]);if(0!==t)return t}return Ra(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ra(yc(e.latitude),yc(t.latitude));return 0!==n?n:Ra(yc(e.longitude),yc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=xc(n[e],r[e]);if(t)return t}return Ra(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Tc.mapValue&&t===Tc.mapValue)return 0;if(e===Tc.mapValue)return 1;if(t===Tc.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Ra(r[e],s[e]);if(0!==t)return t;const o=xc(n[r[e]],i[s[e]]);if(0!==o)return o}return Ra(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ga()}}function _c(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ra(e,t);const n=gc(e),r=gc(t),i=Ra(n.seconds,r.seconds);return 0!==i?i:Ra(n.nanos,r.nanos)}function Nc(e){return Dc(e)}function Dc(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=gc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?vc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ua.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Dc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Dc(e.fields[i])}`;return n+"}"}(e.mapValue):ga()}function Rc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Oc(e){return!!e&&"integerValue"in e}function Lc(e){return!!e&&"arrayValue"in e}function Mc(e){return!!e&&"nullValue"in e}function Pc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Fc(e){return!!e&&"mapValue"in e}function jc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return sc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=jc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=jc(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Vc(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uc{constructor(e){this.value=e}static empty(){return new Uc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Fc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jc(t)}setAll(e){let t=Va.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=jc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Fc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ic(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Fc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){sc(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Uc(jc(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bc{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Bc(e,0,Ma.min(),Ma.min(),Ma.min(),Uc.empty(),0)}static newFoundDocument(e,t,n,r){return new Bc(e,1,t,Ma.min(),n,r,0)}static newNoDocument(e,t){return new Bc(e,2,t,Ma.min(),Ma.min(),Uc.empty(),0)}static newUnknownDocument(e,t){return new Bc(e,3,t,Ma.min(),Ma.min(),Uc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ma.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Uc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Uc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ma.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Bc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t){this.position=e,this.inclusive=t}}function qc(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ua.comparator(Ua.fromName(o.referenceValue),n.key):xc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function zc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ic(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{}class Qc extends Kc{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new nl(e,t,n):"array-contains"===t?new ol(e,n):"in"===t?new al(e,n):"not-in"===t?new cl(e,n):"array-contains-any"===t?new ll(e,n):new Qc(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new rl(e,n):new il(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(xc(t,this.value)):null!==t&&kc(this.value)===kc(t)&&this.matchesComparison(xc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ga()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wc extends Kc{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Wc(e,t)}matches(e){return Yc(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Yc(e){return"and"===e.op}function Xc(e){return Zc(e)&&Yc(e)}function Zc(e){for(const t of e.filters)if(t instanceof Wc)return!1;return!0}function Jc(e){if(e instanceof Qc)return e.field.canonicalString()+e.op.toString()+Nc(e.value);if(Xc(e))return e.filters.map((e=>Jc(e))).join(",");{const t=e.filters.map((e=>Jc(e))).join(",");return`${e.op}(${t})`}}function el(e,t){return e instanceof Qc?function(e,t){return t instanceof Qc&&e.op===t.op&&e.field.isEqual(t.field)&&Ic(e.value,t.value)}(e,t):e instanceof Wc?function(e,t){return t instanceof Wc&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&el(n,t.filters[r])),!0)}(e,t):void ga()}function tl(e){return e instanceof Qc?function(e){return`${e.field.canonicalString()} ${e.op} ${Nc(e.value)}`}(e):e instanceof Wc?function(e){return e.op.toString()+" {"+e.getFilters().map(tl).join(" ,")+"}"}(e):"Filter"}class nl extends Qc{constructor(e,t,n){super(e,t,n),this.key=Ua.fromName(n.referenceValue)}matches(e){const t=Ua.comparator(e.key,this.key);return this.matchesComparison(t)}}class rl extends Qc{constructor(e,t){super(e,"in",t),this.keys=sl("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class il extends Qc{constructor(e,t){super(e,"not-in",t),this.keys=sl("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function sl(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ua.fromName(e.referenceValue)))}class ol extends Qc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Lc(t)&&Ac(t.arrayValue,this.value)}}class al extends Qc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ac(this.value.arrayValue,t)}}class cl extends Qc{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ac(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Ac(this.value.arrayValue,t)}}class ll extends Qc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Lc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Ac(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function hl(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ul(e,t,n,r,i,s,o)}function dl(e){const t=va(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Jc(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Za(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Nc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Nc(e))).join(",")),t.dt=e}return t.dt}function fl(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Hc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!el(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!zc(e.startAt,t.startAt)&&zc(e.endAt,t.endAt)}function pl(e){return Ua.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ml{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function gl(e,t,n,r,i,s,o,a){return new ml(e,t,n,r,i,s,o,a)}function yl(e){return new ml(e)}function vl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function bl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function wl(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function El(e){return null!==e.collectionGroup}function Cl(e){const t=va(e);if(null===t.wt){t.wt=[];const e=wl(t),n=bl(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Gc(e)),t.wt.push(new Gc(Va.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Gc(Va.keyField(),e))}}}return t.wt}function Sl(e){const t=va(e);if(!t._t)if("F"===t.limitType)t._t=hl(t.path,t.collectionGroup,Cl(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Cl(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Gc(n.field,t))}const n=t.endAt?new $c(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $c(t.startAt.position,t.startAt.inclusive):null;t._t=hl(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function Tl(e,t){t.getFirstInequalityField(),wl(e);const n=e.filters.concat([t]);return new ml(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function kl(e,t,n){return new ml(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Il(e,t){return fl(Sl(e),Sl(t))&&e.limitType===t.limitType}function Al(e){return`${dl(Sl(e))}|lt:${e.limitType}`}function xl(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>tl(e))).join(", ")}]`),Za(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Nc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Nc(e))).join(",")),`Target(${t})`}(Sl(e))}; limitType=${e.limitType})`}function _l(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ua.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Cl(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=qc(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Cl(e),t))&&!(e.endAt&&!function(e,t,n){const r=qc(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Cl(e),t))}(e,t)}function Nl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Dl(e){return(t,n)=>{let r=!1;for(const i of Cl(e)){const e=Rl(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Rl(e,t,n){const r=e.field.isKeyField()?Ua.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?xc(r,i):ga()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ga()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){sc(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return oc(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new ac(Ua.comparator);function Ml(){return Ll}const Pl=new ac(Ua.comparator);function Fl(...e){let t=Pl;for(const n of e)t=t.insert(n.key,n);return t}function jl(e){let t=Pl;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Vl(){return Bl()}function Ul(){return Bl()}function Bl(){return new Ol((e=>e.toString()),((e,t)=>e.isEqual(t)))}new ac(Ua.comparator);const $l=new uc(Ua.comparator);function ql(...e){let t=$l;for(const n of e)t=t.add(n);return t}const zl=new uc(Ra);function Gl(){return zl}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ja(t)?"-0":t}}function Kl(e){return{integerValue:""+e}}function Ql(e,t){return ec(t)?Kl(t):Hl(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this._=void 0}}function Yl(e,t,n){return e instanceof Jl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&bc(t)&&(t=wc(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof eu?tu(e,t):e instanceof nu?ru(e,t):function(e,t){const n=Zl(e,t),r=su(n)+su(e.gt);return Oc(n)&&Oc(e.gt)?Kl(r):Hl(e.serializer,r)}(e,t)}function Xl(e,t,n){return e instanceof eu?tu(e,t):e instanceof nu?ru(e,t):n}function Zl(e,t){var n;return e instanceof iu?Oc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class Jl extends Wl{}class eu extends Wl{constructor(e){super(),this.elements=e}}function tu(e,t){const n=ou(t);for(const t of e.elements)n.some((e=>Ic(e,t)))||n.push(t);return{arrayValue:{values:n}}}class nu extends Wl{constructor(e){super(),this.elements=e}}function ru(e,t){let n=ou(t);for(const t of e.elements)n=n.filter((e=>!Ic(e,t)));return{arrayValue:{values:n}}}class iu extends Wl{constructor(e,t){super(),this.serializer=e,this.gt=t}}function su(e){return yc(e.integerValue||e.doubleValue)}function ou(e){return Lc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new au}static exists(e){return new au(void 0,e)}static updateTime(e){return new au(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cu(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class lu{}function uu(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new bu(e.key,au.none()):new pu(e.key,e.data,au.none());{const n=e.data,r=Uc.empty();let i=new uc(Va.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new mu(e.key,r,new dc(i.toArray()),au.none())}}function hu(e,t,n){e instanceof pu?function(e,t,n){const r=e.value.clone(),i=yu(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof mu?function(e,t,n){if(!cu(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=yu(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(gu(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function du(e,t,n,r){return e instanceof pu?function(e,t,n,r){if(!cu(e.precondition,t))return n;const i=e.value.clone(),s=vu(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof mu?function(e,t,n,r){if(!cu(e.precondition,t))return n;const i=vu(e.fieldTransforms,r,t),s=t.data;return s.setAll(gu(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return cu(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function fu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Oa(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof eu&&t instanceof eu||e instanceof nu&&t instanceof nu?Oa(e.elements,t.elements,Ic):e instanceof iu&&t instanceof iu?Ic(e.gt,t.gt):e instanceof Jl&&t instanceof Jl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class pu extends lu{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class mu extends lu{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gu(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function yu(e,t,n){const r=new Map;ya(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Xl(o,a,n[i]))}return r}function vu(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Yl(e,s,t))}return r}class bu extends lu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&hu(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=du(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=du(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ul();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=uu(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ma.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ql())}isEqual(e){return this.batchId===e.batchId&&Oa(this.mutations,e.mutations,((e,t)=>fu(e,t)))&&Oa(this.baseMutations,e.baseMutations,((e,t)=>fu(e,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cu{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Su,Tu;function ku(e){if(void 0===e)return fa("GRPC error has no .code"),ba.UNKNOWN;switch(e){case Su.OK:return ba.OK;case Su.CANCELLED:return ba.CANCELLED;case Su.UNKNOWN:return ba.UNKNOWN;case Su.DEADLINE_EXCEEDED:return ba.DEADLINE_EXCEEDED;case Su.RESOURCE_EXHAUSTED:return ba.RESOURCE_EXHAUSTED;case Su.INTERNAL:return ba.INTERNAL;case Su.UNAVAILABLE:return ba.UNAVAILABLE;case Su.UNAUTHENTICATED:return ba.UNAUTHENTICATED;case Su.INVALID_ARGUMENT:return ba.INVALID_ARGUMENT;case Su.NOT_FOUND:return ba.NOT_FOUND;case Su.ALREADY_EXISTS:return ba.ALREADY_EXISTS;case Su.PERMISSION_DENIED:return ba.PERMISSION_DENIED;case Su.FAILED_PRECONDITION:return ba.FAILED_PRECONDITION;case Su.ABORTED:return ba.ABORTED;case Su.OUT_OF_RANGE:return ba.OUT_OF_RANGE;case Su.UNIMPLEMENTED:return ba.UNIMPLEMENTED;case Su.DATA_LOSS:return ba.DATA_LOSS;default:return ga()}}(Tu=Su||(Su={}))[Tu.OK=0]="OK",Tu[Tu.CANCELLED=1]="CANCELLED",Tu[Tu.UNKNOWN=2]="UNKNOWN",Tu[Tu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Tu[Tu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Tu[Tu.NOT_FOUND=5]="NOT_FOUND",Tu[Tu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Tu[Tu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Tu[Tu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Tu[Tu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Tu[Tu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Tu[Tu.ABORTED=10]="ABORTED",Tu[Tu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Tu[Tu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Tu[Tu.INTERNAL=13]="INTERNAL",Tu[Tu.UNAVAILABLE=14]="UNAVAILABLE",Tu[Tu.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Au}static getOrCreateInstance(){return null===Au&&(Au=new Iu),Au}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Au=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new aa([4294967295,4294967295],0);function Nu(e){const t=xu().encode(e),n=new oa;return n.update(t),new Uint8Array(n.digest())}function Du(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new aa([n,r],0),new aa([i,s],0)]}class Ru{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ou(`Invalid padding: ${t}`);if(n<0)throw new Ou(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Ou(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Ou(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=aa.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(aa.fromNumber(n)));return 1===r.compare(_u)&&(r=new aa([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=Nu(e),[n,r]=Du(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Ru(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.It)return;const t=Nu(e),[n,r]=Du(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,r,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ou extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Mu.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Lu(Ma.min(),r,new ac(Ra),Ml(),ql())}}class Mu{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Mu(n,t,ql(),ql(),ql())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Fu{constructor(e,t){this.targetId=e,this.Vt=t}}class ju{constructor(e,t,n=pc.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Vu{constructor(){this.St=0,this.Dt=$u(),this.Ct=pc.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ql(),t=ql(),n=ql();return this.Dt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ga()}})),new Mu(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=$u()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Uu{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ml(),this.zt=Bu(),this.Wt=new ac(Ra)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:ga()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const s=i.target;if(pl(s))if(0===r){const e=new Ua(s.path);this.Yt(n,e,Bc.newNoDocument(e,Ma.min()))}else ya(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Iu.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const l={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(l.bloomFilter={applied:0===e,hashCount:null!==(r=null==u?void 0:u.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==u?void 0:u.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),l}(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=vc(i).toUint8Array()}catch(e){if(e instanceof fc)return pa("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Ru(a,s,o)}catch(e){return pa(e instanceof Ou?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const i=this.se(r);if(i){if(n.current&&pl(i.target)){const t=new Ua(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,Bc.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=ql();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new Lu(e,t,this.Wt,this.jt,n);return this.jt=Ml(),this.zt=Bu(),this.Wt=new ac(Ra),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Vu,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new uc(Ra),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||da("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Vu),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Bu(){return new ac(Ua.comparator)}function $u(){return new ac(Ua.comparator)}const qu={asc:"ASCENDING",desc:"DESCENDING"},zu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gu={and:"AND",or:"OR"};class Hu{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ku(e,t){return e.useProto3Json||Za(t)?t:{value:t}}function Qu(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Yu(e){return ya(!!e),Ma.fromTimestamp(function(e){const t=gc(e);return new La(t.seconds,t.nanos)}(e))}function Xu(e,t){return function(e){return new Fa(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Zu(e){const t=Fa.fromString(e);return ya(ph(t)),t}function Ju(e,t){const n=Zu(t);if(n.get(1)!==e.databaseId.projectId)throw new wa(ba.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new wa(ba.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ua(rh(n))}function eh(e,t){return Xu(e.databaseId,t)}function th(e){const t=Zu(e);return 4===t.length?Fa.emptyPath():rh(t)}function nh(e){return new Fa(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rh(e){return ya(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ih(e,t){return{documents:[eh(e,t.path)]}}function sh(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=eh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=eh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return fh(Wc.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:hh(e.field),direction:ch(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ku(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function oh(e){let t=th(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ya(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=ah(e);return t instanceof Wc&&Xc(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Gc(dh(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Za(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new $c(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new $c(n,t)}(n.endAt)),gl(t,i,o,s,a,"F",c,l)}function ah(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=dh(e.unaryFilter.field);return Qc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=dh(e.unaryFilter.field);return Qc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=dh(e.unaryFilter.field);return Qc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=dh(e.unaryFilter.field);return Qc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ga()}}(e):void 0!==e.fieldFilter?function(e){return Qc.create(dh(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ga()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Wc.create(e.compositeFilter.filters.map((e=>ah(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ga()}}(e.compositeFilter.op))}(e):ga()}function ch(e){return qu[e]}function lh(e){return zu[e]}function uh(e){return Gu[e]}function hh(e){return{fieldPath:e.canonicalString()}}function dh(e){return Va.fromServerFormat(e.fieldPath)}function fh(e){return e instanceof Qc?function(e){if("=="===e.op){if(Pc(e.value))return{unaryFilter:{field:hh(e.field),op:"IS_NAN"}};if(Mc(e.value))return{unaryFilter:{field:hh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Pc(e.value))return{unaryFilter:{field:hh(e.field),op:"IS_NOT_NAN"}};if(Mc(e.value))return{unaryFilter:{field:hh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hh(e.field),op:lh(e.op),value:e.value}}}(e):e instanceof Wc?function(e){const t=e.getFilters().map((e=>fh(e)));return 1===t.length?t[0]:{compositeFilter:{op:uh(e.op),filters:t}}}(e):ga()}function ph(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t,n,r,i=Ma.min(),s=Ma.min(),o=pc.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new mh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.fe=e}}function yh(e){const t=oh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?kl(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(yc(e.integerValue));else if("doubleValue"in e){const n=yc(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),Ja(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(vc(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Vc(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):ga()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),Ua.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}vh.Ve=new vh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bh{constructor(){this.rn=new wh}addToCollectionParentIndex(e,t){return this.rn.add(t),Wa.resolve()}getCollectionParents(e,t){return Wa.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Wa.resolve()}deleteFieldIndex(e,t){return Wa.resolve()}getDocumentsMatchingTarget(e,t){return Wa.resolve(null)}getIndexType(e,t){return Wa.resolve(0)}getFieldIndexes(e,t){return Wa.resolve([])}getNextCollectionGroupToUpdate(e){return Wa.resolve(null)}getMinOffset(e,t){return Wa.resolve(za.min())}getMinOffsetFromCollectionGroup(e,t){return Wa.resolve(za.min())}updateCollectionGroup(e,t,n){return Wa.resolve()}updateIndexEntries(e,t){return Wa.resolve()}}class wh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new uc(Fa.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new uc(Fa.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Eh{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Eh(e,Eh.DEFAULT_COLLECTION_PERCENTILE,Eh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Eh.DEFAULT_COLLECTION_PERCENTILE=10,Eh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Eh.DEFAULT=new Eh(41943040,Eh.DEFAULT_COLLECTION_PERCENTILE,Eh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Eh.DISABLED=new Eh(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ch{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ch(0)}static Mn(){return new Ch(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sh{constructor(){this.changes=new Ol((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Wa.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Th{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&du(n.mutation,e,dc.empty(),La.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,ql()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=ql()){const r=Vl();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Fl();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Vl();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ql())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ml();const s=Bl(),o=Bl();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof mu)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),du(o.mutation,t,o.mutation.getFieldMask(),La.now())):s.set(t.key,dc.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Th(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Bl();let r=new ac(((e,t)=>e-t)),i=ql();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||dc.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||ql()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,l=Ul();c.forEach((e=>{if(!i.has(e)){const r=uu(t.get(e),n.get(e));null!==r&&l.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,l))}return Wa.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Ua.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):El(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Wa.resolve(Vl());let o=-1,a=i;return s.next((t=>Wa.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Wa.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,ql()))).next((e=>({batchId:o,changes:jl(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ua(t)).next((e=>{let t=Fl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Fl();return this.indexManager.getCollectionParents(e,r).next((s=>Wa.forEach(s,(s=>{const o=function(e,t){return new ml(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Bc.newInvalidDocument(r)))}));let n=Fl();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&du(s.mutation,i,dc.empty(),La.now()),_l(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Wa.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Yu(n.createTime)}),Wa.resolve()}getNamedQuery(e,t){return Wa.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:yh(e.bundledQuery),readTime:Yu(e.readTime)}}(t)),Wa.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.overlays=new ac(Ua.comparator),this.ls=new Map}getOverlay(e,t){return Wa.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Vl();return Wa.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),Wa.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Wa.resolve()}getOverlaysForCollection(e,t,n){const r=Vl(),i=t.length+1,s=new Ua(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Wa.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ac(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Vl(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Vl(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Wa.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Eu(t,n));let i=this.ls.get(t);void 0===i&&(i=ql(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.fs=new uc(_h.ds),this.ws=new uc(_h._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new _h(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new _h(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new Ua(new Fa([])),n=new _h(t,e),r=new _h(t,e+1),i=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Ua(new Fa([])),n=new _h(t,e),r=new _h(t,e+1);let i=ql();return this.ws.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new _h(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class _h{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Ua.comparator(e.key,t.key)||Ra(e.As,t.As)}static _s(e,t){return Ra(e.As,t.As)||Ua.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new uc(_h.ds)}checkEmpty(e){return Wa.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new wu(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.Rs=this.Rs.add(new _h(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Wa.resolve(s)}lookupMutationBatch(e,t){return Wa.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return Wa.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Wa.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Wa.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new _h(t,0),r=new _h(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);i.push(t)})),Wa.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new uc(Ra);return t.forEach((e=>{const t=new _h(e,0),r=new _h(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),Wa.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ua.isDocumentKey(i)||(i=i.child(""));const s=new _h(new Ua(i),0);let o=new uc(Ra);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)}),s),Wa.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ya(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Wa.forEach(t.mutations,(r=>{const i=new _h(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new _h(t,0),r=this.Rs.firstAfterOrEqual(n);return Wa.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Wa.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.Ds=e,this.docs=new ac(Ua.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Wa.resolve(n?n.document.mutableCopy():Bc.newInvalidDocument(t))}getEntries(e,t){let n=Ml();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Bc.newInvalidDocument(e))})),Wa.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Ml();const s=t.path,o=new Ua(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Ga(qa(o),n)<=0||(r.has(o.key)||_l(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Wa.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ga()}Cs(e,t){return Wa.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Rh(this)}getSize(e){return Wa.resolve(this.size)}}class Rh extends Sh{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),Wa.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e){this.persistence=e,this.xs=new Ol((e=>dl(e)),fl),this.lastRemoteSnapshotVersion=Ma.min(),this.highestTargetId=0,this.Ns=0,this.ks=new xh,this.targetCount=0,this.Ms=Ch.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Wa.resolve()}getLastRemoteSnapshotVersion(e){return Wa.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Wa.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Wa.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Wa.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Ch(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Wa.resolve()}updateTargetData(e,t){return this.Fn(t),Wa.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Wa.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Wa.waitFor(i).next((()=>r))}getTargetCount(e){return Wa.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Wa.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Wa.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Wa.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Wa.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Wa.resolve(n)}containsKey(e,t){return Wa.resolve(this.ks.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t){this.$s={},this.overlays={},this.Os=new Xa(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Oh(this),this.indexManager=new bh,this.remoteDocumentCache=function(e){return new Dh(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new gh(t),this.qs=new Ih(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ah,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Nh(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){da("MemoryPersistence","Starting transaction:",e);const r=new Mh(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return Wa.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Mh extends Ka{constructor(e){super(),this.currentSequenceNumber=e}}class Ph{constructor(e){this.persistence=e,this.Qs=new xh,this.js=null}static zs(e){return new Ph(e)}get Ws(){if(this.js)return this.js;throw ga()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Wa.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Wa.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Wa.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Wa.forEach(this.Ws,(n=>{const r=Ua.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,Ma.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Wa.or([()=>Wa.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fh{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=ql(),r=ql();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Fh(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((i=>i||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(vl(t))return Wa.resolve(null);let n=Sl(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=kl(t,null,"F"),n=Sl(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=ql(...r);return this.Ui.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,kl(t,null,"F")):this.Wi(e,s,t,n)}))))})))))}Gi(e,t,n,r){return vl(t)||r.isEqual(Ma.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const s=this.ji(t,i);return this.zi(t,s,n,r)?this.Qi(e,t):(ha()<=Yt.DEBUG&&da("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xl(t)),this.Wi(e,s,t,$a(r,-1)))}))}ji(e,t){let n=new uc(Dl(e));return t.forEach(((t,r)=>{_l(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return ha()<=Yt.DEBUG&&da("QueryEngine","Using full collection scan to execute query:",xl(t)),this.Ui.getDocumentsMatchingQuery(e,t,za.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new ac(Ra),this.Yi=new Ol((e=>dl(e)),fl),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kh(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function Uh(e,t,n,r){return new Vh(e,t,n,r)}async function Bh(e,t){const n=va(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=ql();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function $h(e){const t=va(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function qh(e,t,n){let r=ql(),i=ql();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ml();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ma.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):da("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{nr:r,sr:i}}))}function zh(e,t){const n=va(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((i=>i?(r=i,Wa.resolve(r)):n.Bs.allocateTargetId(e).next((i=>(r=new mh(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Gh(e,t,n){const r=va(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Ya(e))throw e;da("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Hh(e,t,n){const r=va(e);let i=Ma.min(),s=ql();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=va(e),i=r.Yi.get(n);return void 0!==i?Wa.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,Sl(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:Ma.min(),n?s:ql()))).next((e=>(Kh(r,Nl(t),e),{documents:e,ir:s})))))}function Kh(e,t,n){let r=e.Xi.get(t)||Ma.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}class Qh{constructor(){this.activeTargetIds=Gl()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wh{constructor(){this.Hr=new Qh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Qh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){da("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){da("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zh=null;function Jh(){return null===Zh?Zh=268435456+Math.round(2147483648*Math.random()):Zh++,"0x"+Zh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ed={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const s=Jh(),o=this.To(e,t);da("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(e,o,a,n).then((t=>(da("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw pa("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+la,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=ed[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=Jh();return new Promise(((s,o)=>{const a=new sa;a.setWithCredentials(!0),a.listenOnce(ea.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Jo.NO_ERROR:const t=a.getResponseJson();da("WebChannelConnection",`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Jo.TIMEOUT:da("WebChannelConnection",`RPC '${e}' ${i} timed out`),o(new wa(ba.DEADLINE_EXCEEDED,"Request time out"));break;case Jo.HTTP_ERROR:const n=a.getStatus();if(da("WebChannelConnection",`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ba).indexOf(t)>=0?t:ba.UNKNOWN}(t.status);o(new wa(e,t.message))}else o(new wa(ba.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new wa(ba.UNAVAILABLE,"Connection failed."));break;default:ga()}}finally{da("WebChannelConnection",`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);da("WebChannelConnection",`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const r=Jh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Xo(),o=Zo(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new ra({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");da("WebChannelConnection",`Creating RPC '${e}' stream ${r}: ${l}`,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const f=new td({ro:t=>{d?da("WebChannelConnection",`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(da("WebChannelConnection",`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),da("WebChannelConnection",`RPC '${e}' stream ${r} sending:`,t),u.send(t))},oo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,ia.EventType.OPEN,(()=>{d||da("WebChannelConnection",`RPC '${e}' stream ${r} transport opened.`)})),p(u,ia.EventType.CLOSE,(()=>{d||(d=!0,da("WebChannelConnection",`RPC '${e}' stream ${r} transport closed`),f.wo())})),p(u,ia.EventType.ERROR,(t=>{d||(d=!0,pa("WebChannelConnection",`RPC '${e}' stream ${r} transport errored:`,t),f.wo(new wa(ba.UNAVAILABLE,"The operation could not be completed")))})),p(u,ia.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ya(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){da("WebChannelConnection",`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Su[e];if(void 0!==t)return ku(t)}(t),i=o.message;void 0===n&&(n=ba.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new wa(n,i)),u.close()}else da("WebChannelConnection",`RPC '${e}' stream ${r} received:`,i),f._o(i)}})),p(o,ta.STAT_EVENT,(t=>{t.stat===na.PROXY?da("WebChannelConnection",`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===na.NOPROXY&&da("WebChannelConnection",`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(e){return new Hu(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&da("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new sd(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===ba.RESOURCE_EXHAUSTED?(fa(t.toString()),fa("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===ba.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new wa(ba.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return da("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(da("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ad extends od{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ga()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(ya(void 0===t||"string"==typeof t),pc.fromBase64String(t||"")):(ya(void 0===t||t instanceof Uint8Array),pc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ba.UNKNOWN:ku(e.code);return new wa(t,e.message||"")}(o);n=new ju(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ju(e,r.document.name),s=Yu(r.document.updateTime),o=r.document.createTime?Yu(r.document.createTime):Ma.min(),a=new Uc({mapValue:{fields:r.document.fields}}),c=Bc.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Pu(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ju(e,r.document),s=r.readTime?Yu(r.readTime):Ma.min(),o=Bc.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ju(e,r.document),s=r.removedTargetIds||[];n=new Pu([],s,i,null)}else{if(!("filter"in t))return ga();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Cu(r,i),o=e.targetId;n=new Fu(o,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ma.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ma.min():t.readTime?Yu(t.readTime):Ma.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=nh(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=pl(r)?{documents:ih(e,r)}:{query:sh(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Wu(e,t.resumeToken);const r=Ku(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ma.min())>0){n.readTime=Qu(e,t.snapshotVersion.toTimestamp());const r=Ku(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ga()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=nh(this.serializer),t.removeTarget=e,this.Wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cd extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new wa(ba.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Io(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ba.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new wa(ba.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.vo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ba.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new wa(ba.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class ld{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(fa(t),this.mu=!1):da("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{bd(this)&&(da("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=va(e);t.vu.add(4),await dd(t),t.bu.set("Unknown"),t.vu.delete(4),await hd(t)}(this))}))})),this.bu=new ld(n,r)}}async function hd(e){if(bd(e))for(const t of e.Ru)await t(!0)}async function dd(e){for(const t of e.Ru)await t(!1)}function fd(e,t){const n=va(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),vd(n)?yd(n):Ad(n).Ko()&&md(n,t))}function pd(e,t){const n=va(e),r=Ad(n);n.Au.delete(t),r.Ko()&&gd(n,t),0===n.Au.size&&(r.Ko()?r.jo():bd(n)&&n.bu.set("Unknown"))}function md(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ma.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ad(e).su(t)}function gd(e,t){e.Vu.qt(t),Ad(e).iu(t)}function yd(e){e.Vu=new Uu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Ad(e).start(),e.bu.gu()}function vd(e){return bd(e)&&!Ad(e).Uo()&&e.Au.size>0}function bd(e){return 0===va(e).vu.size}function wd(e){e.Vu=void 0}async function Ed(e){e.Au.forEach(((t,n)=>{md(e,t)}))}async function Cd(e,t){wd(e),vd(e)?(e.bu.Iu(t),yd(e)):e.bu.set("Unknown")}async function Sd(e,t,n){if(e.bu.set("Online"),t instanceof ju&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){da("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Td(e,n)}else if(t instanceof Pu?e.Vu.Ht(t):t instanceof Fu?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Ma.min()))try{const t=await $h(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(pc.EMPTY_BYTE_STRING,r.snapshotVersion)),gd(e,t);const i=new mh(r.target,t,n,r.sequenceNumber);md(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){da("RemoteStore","Failed to raise snapshot:",t),await Td(e,t)}}async function Td(e,t,n){if(!Ya(t))throw t;e.vu.add(1),await dd(e),e.bu.set("Offline"),n||(n=()=>$h(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{da("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await hd(e)}))}async function kd(e,t){const n=va(e);n.asyncQueue.verifyOperationInProgress(),da("RemoteStore","RemoteStore received new credentials");const r=bd(n);n.vu.add(3),await dd(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await hd(n)}async function Id(e,t){const n=va(e);t?(n.vu.delete(2),await hd(n)):t||(n.vu.add(2),await dd(n),n.bu.set("Unknown"))}function Ad(e){return e.Su||(e.Su=function(e,t,n){const r=va(e);return r.fu(),new ad(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:Ed.bind(null,e),ao:Cd.bind(null,e),nu:Sd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),vd(e)?yd(e):e.bu.set("Unknown")):(await e.Su.stop(),wd(e))}))),e.Su}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ea,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new xd(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new wa(ba.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _d(e,t){if(fa("AsyncQueue",`${t}: ${e}`),Ya(e))return new wa(ba.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ua.comparator(t.key,n.key):(e,t)=>Ua.comparator(e.key,t.key),this.keyedMap=Fl(),this.sortedSet=new ac(this.comparator)}static emptySet(e){return new Nd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Nd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.Cu=new ac(Ua.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):ga():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Rd{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Rd(e,t,Nd.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Il(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.Nu=void 0,this.listeners=[]}}class Ld{constructor(){this.queries=new Ol((e=>Al(e)),Il),this.onlineState="Unknown",this.ku=new Set}}async function Md(e,t){const n=va(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Od),i)try{s.Nu=await n.onListen(r)}catch(e){const n=_d(e,`Initialization of query '${xl(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&Vd(n)}async function Pd(e,t){const n=va(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Fd(e,t){const n=va(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.$u(e)&&(r=!0);i.Nu=e}}r&&Vd(n)}function jd(e,t,n){const r=va(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function Vd(e){e.ku.forEach((e=>{e.next()}))}class Ud{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Rd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Rd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bd{constructor(e){this.key=e}}class $d{constructor(e){this.key=e}}class qd{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ql(),this.mutatedKeys=ql(),this.tc=Dl(e),this.ec=new Nd(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Dd,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=_l(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.rc(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.tc(u,a)>0||c&&this.tc(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ga()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Rd(this.query,e.ec,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Dd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ql(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new $d(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new Bd(n))})),t}hc(e){this.Yu=e.ir,this.Zu=ql();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Rd.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class zd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Gd{constructor(e){this.key=e,this.fc=!1}}class Hd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new Ol((e=>Al(e)),Il),this._c=new Map,this.mc=new Set,this.gc=new ac(Ua.comparator),this.yc=new Map,this.Ic=new xh,this.Tc={},this.Ec=new Map,this.Ac=Ch.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function Kd(e,t){const n=cf(e);let r,i;const s=n.wc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const e=await zh(n.localStore,Sl(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Qd(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&fd(n.remoteStore,e)}return i}async function Qd(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await Hh(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return tf(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const s=await Hh(e.localStore,t,!0),o=new qd(t,s.ir),a=o.sc(s.documents),c=Mu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),l=o.applyChanges(a,e.isPrimaryClient,c);tf(e,n,l.cc);const u=new zd(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),l.snapshot}async function Wd(e,t){const n=va(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((e=>!Il(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),pd(n.remoteStore,r.targetId),Jd(n,r.targetId)})).catch(Qa)):(Jd(n,r.targetId),await Gh(n.localStore,r.targetId,!0))}async function Yd(e,t){const n=va(e);try{const e=await function(e,t){const n=va(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?l=l.withResumeToken(pc.EMPTY_BYTE_STRING,Ma.min()).withLastLimboFreeSnapshotVersion(Ma.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,r)),i=i.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,s)&&o.push(n.Bs.updateTargetData(e,l))}));let a=Ml(),c=ql();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(qh(e,s,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!r.isEqual(Ma.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Wa.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(ya(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?ya(r.fc):e.removedDocuments.size>0&&(ya(r.fc),r.fc=!1))})),await sf(n,e,t)}catch(e){await Qa(e)}}function Xd(e,t,n){const r=va(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=va(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(r=!0)})),r&&Vd(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Zd(e,t,n){const r=va(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),s=i&&i.key;if(s){let e=new ac(Ua.comparator);e=e.insert(s,Bc.newNoDocument(s,Ma.min()));const n=ql().add(s),i=new Lu(Ma.min(),new Map,new ac(Ra),e,n);await Yd(r,i),r.gc=r.gc.remove(s),r.yc.delete(t),rf(r)}else await Gh(r.localStore,t,!1).then((()=>Jd(r,t,n))).catch(Qa)}function Jd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||ef(e,t)}))}function ef(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(pd(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),rf(e))}function tf(e,t,n){for(const r of n)r instanceof Bd?(e.Ic.addReference(r.key,t),nf(e,r)):r instanceof $d?(da("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||ef(e,r.key)):ga()}function nf(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(da("SyncEngine","New document in limbo: "+n),e.mc.add(r),rf(e))}function rf(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Ua(Fa.fromString(t)),r=e.Ac.next();e.yc.set(r,new Gd(n)),e.gc=e.gc.insert(n,r),fd(e.remoteStore,new mh(Sl(yl(n.path)),r,"TargetPurposeLimboResolution",Xa.ct))}}async function sf(e,t,n){const r=va(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach(((e,a)=>{o.push(r.Rc(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Fh.Li(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.dc.nu(i),await async function(e,t){const n=va(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Wa.forEach(t,(t=>Wa.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Wa.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Ya(e))throw e;da("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,s))}async function of(e,t){const n=va(e);if(!n.currentUser.isEqual(t)){da("SyncEngine","User change. New user:",t.toKey());const e=await Bh(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new wa(ba.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Ec.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await sf(n,e.er)}}function af(e,t){const n=va(e),r=n.yc.get(t);if(r&&r.fc)return ql().add(r.key);{let e=ql();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}function cf(e){const t=va(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Yd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=af.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zd.bind(null,t),t.dc.nu=Fd.bind(null,t.eventManager),t.dc.Pc=jd.bind(null,t.eventManager),t}class lf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=id(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Uh(this.persistence,new jh,e.initialUser,this.serializer)}createPersistence(e){return new Lh(Ph.zs,this.serializer)}createSharedClientState(e){return new Wh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Xd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=of.bind(null,this.syncEngine),await Id(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ld}createDatastore(e){const t=id(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new nd(r));var r;return function(e,t,n,r){return new cd(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Xd(this.syncEngine,e,0),s=Xh.D()?new Xh:new Yh,new ud(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Hd(e,t,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=va(e);da("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await dd(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):fa("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class df{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=ca.UNAUTHENTICATED,this.clientId=Da.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{da("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(da("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new wa(ba.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ea;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=_d(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function ff(e,t){e.asyncQueue.verifyOperationInProgress(),da("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Bh(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function pf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await gf(e);da("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>kd(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>kd(t.remoteStore,n))),e._onlineComponents=t}function mf(e){return"FirebaseError"===e.name?e.code===ba.FAILED_PRECONDITION||e.code===ba.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function gf(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){da("FirestoreClient","Using user provided OfflineComponentProvider");try{await ff(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!mf(n))throw n;pa("Error using user provided cache. Falling back to memory cache: "+n),await ff(e,new lf)}}else da("FirestoreClient","Using default OfflineComponentProvider"),await ff(e,new lf);return e._offlineComponents}async function yf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(da("FirestoreClient","Using user provided OnlineComponentProvider"),await pf(e,e._uninitializedComponentsProvider._online)):(da("FirestoreClient","Using default OnlineComponentProvider"),await pf(e,new uf))),e._onlineComponents}async function vf(e){const t=await yf(e),n=t.eventManager;return n.onListen=Kd.bind(null,t.syncEngine),n.onUnlisten=Wd.bind(null,t.syncEngine),n}function bf(e,t,n={}){const r=new Ea;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new hf({next:n=>{t.enqueueAndForget((()=>Pd(e,o))),n.fromCache&&"server"===r.source?i.reject(new wa(ba.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Ud(n,s,{includeMetadataChanges:!0,Ku:!0});return Md(e,o)}(await vf(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wf(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ef=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(e,t,n){if(!n)throw new wa(ba.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Sf(e){if(Ua.isDocumentKey(e))throw new wa(ba.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Tf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ga()}function kf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new wa(ba.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tf(e);throw new wa(ba.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class If{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new wa(ba.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new wa(ba.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new wa(ba.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wf(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new wa(ba.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new wa(ba.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new wa(ba.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Af{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new If({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new wa(ba.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new wa(ba.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new If(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Sa;switch(e.type){case"firstParty":return new Aa(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new wa(ba.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ef.get(e);t&&(da("ComponentProvider","Removing Datastore"),Ef.delete(e),t.terminate())}(this),Promise.resolve()}}function xf(e,t,n,r={}){var i;const s=(e=kf(e,Af))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&pa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=ca.MOCK_USER;else{t=jt(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new wa(ba.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ca(s)}e._authCredentials=new Ta(new Ca(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Df(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _f(this.firestore,e,this._key)}}class Nf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Nf(this.firestore,e,this._query)}}class Df extends Nf{constructor(e,t,n){super(e,t,yl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _f(this.firestore,null,new Ua(e))}withConverter(e){return new Df(this.firestore,e,this._path)}}function Rf(e,t,...n){if(e=Gt(e),Cf("collection","path",t),e instanceof Af){const r=Fa.fromString(t,...n);return Sf(r),new Df(e,null,r)}{if(!(e instanceof _f||e instanceof Df))throw new wa(ba.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Fa.fromString(t,...n));return Sf(r),new Df(e.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Of{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new sd(this,"async_queue_retry"),this.Xc=()=>{const e=rd();e&&da("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=rd();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=rd();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new Ea;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ya(e))throw e;da("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw fa("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=xd.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&ga()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class Lf extends Af{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Of,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pf(this),this._firestoreClient.terminate()}}function Mf(e){return e._firestoreClient||Pf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Pf(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new Cc(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,wf(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new df(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ff{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ff(pc.fromBase64String(e))}catch(e){throw new wa(ba.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ff(pc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new wa(ba.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Va(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vf{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new wa(ba.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new wa(ba.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ra(this._lat,e._lat)||Ra(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=/^__.*__$/;function $f(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ga()}}class qf{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new qf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Jf(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if($f(this.ca)&&Bf.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class zf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||id(e)}ya(e,t,n,r=!1){return new qf({ca:e,methodName:t,ga:n,path:Va.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gf(e){const t=e._freezeSettings(),n=id(e._databaseId);return new zf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Hf(e,t,n,r=!1){return Kf(n,e.ya(r?4:3,t))}function Kf(e,t){if(Wf(e=Gt(e)))return Yf("Unsupported field value:",t,e),Qf(e,t);if(e instanceof Vf)return function(e,t){if(!$f(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Kf(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Gt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ql(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=La.fromDate(e);return{timestampValue:Qu(t.serializer,n)}}if(e instanceof La){const n=new La(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Qu(t.serializer,n)}}if(e instanceof Uf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ff)return{bytesValue:Wu(t.serializer,e._byteString)};if(e instanceof _f){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xu(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${Tf(e)}`)}(e,t)}function Qf(e,t){const n={};return oc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sc(e,((e,r)=>{const i=Kf(r,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Wf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof La||e instanceof Uf||e instanceof Ff||e instanceof _f||e instanceof Vf)}function Yf(e,t,n){if(!Wf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Tf(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}const Xf=new RegExp("[~\\*/\\[\\]]");function Zf(e,t,n){if(t.search(Xf)>=0)throw Jf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new jf(...t.split("."))._internalPath}catch(r){throw Jf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Jf(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new wa(ba.INVALID_ARGUMENT,a+e+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ep{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _f(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new tp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(np("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class tp extends ep{data(){return super.data()}}function np(e,t){return"string"==typeof t?Zf(e,t):t instanceof jf?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new wa(ba.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ip{}class sp extends ip{}function op(e,t,...n){let r=[];t instanceof ip&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof lp)).length,n=e.filter((e=>e instanceof ap)).length;if(t>1||t>0&&n>0)throw new wa(ba.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const t of r)e=t._apply(e);return e}class ap extends sp{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new ap(e,t,n)}_apply(e){const t=this._parse(e);return dp(e._query,t),new Nf(e.firestore,e.converter,Tl(e._query,t))}_parse(e){const t=Gf(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new wa(ba.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){hp(o,s);const t=[];for(const n of o)t.push(up(r,e,n));a={arrayValue:{values:t}}}else a=up(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||hp(o,s),a=Hf(n,"where",o,"in"===s||"not-in"===s);return Qc.create(i,s,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function cp(e,t,n){const r=t,i=np("where",e);return ap._create(i,r,n)}class lp extends ip{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lp(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Wc.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)dp(n,e),n=Tl(n,e)}(e._query,t),new Nf(e.firestore,e.converter,Tl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function up(e,t,n){if("string"==typeof(n=Gt(n))){if(""===n)throw new wa(ba.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!El(t)&&-1!==n.indexOf("/"))throw new wa(ba.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Fa.fromString(n));if(!Ua.isDocumentKey(r))throw new wa(ba.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Rc(e,new Ua(r))}if(n instanceof _f)return Rc(e,n._key);throw new wa(ba.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tf(n)}.`)}function hp(e,t){if(!Array.isArray(e)||0===e.length)throw new wa(ba.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function dp(e,t){if(t.isInequality()){const n=wl(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new wa(ba.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=bl(e);null!==i&&fp(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new wa(ba.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new wa(ba.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function fp(e,t,n){if(!n.isEqual(t))throw new wa(ba.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class pp{convertValue(e,t="none"){switch(kc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ga()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return sc(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Uf(yc(e.latitude),yc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=wc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ec(e));default:return null}}convertTimestamp(e){const t=gc(e);return new La(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Fa.fromString(e);ya(ph(n));const r=new Sc(n.get(1),n.get(3)),i=new Ua(n.popFirst(5));return r.isEqual(t)||fa(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gp extends ep{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(np("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class yp extends gp{data(e={}){return super.data(e)}}class vp{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new mp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new yp(this._firestore,this._userDataWriter,n.key,n,new mp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new wa(ba.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new yp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new mp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new yp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new mp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:bp(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ga()}}class wp extends pp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ff(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _f(this.firestore,null,t)}}function Ep(e){e=kf(e,Nf);const t=kf(e.firestore,Lf),n=Mf(t),r=new wp(t);return rp(e._query),bf(n,e._query).then((n=>new vp(t,r,e,n)))}!function(e,t=!0){la="9.23.0",An(new Ht("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Lf(new ka(e.getProvider("auth-internal")),new _a(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new wa(ba.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sc(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),On("@firebase/firestore","3.13.0",e),On("@firebase/firestore","3.13.0","esm2017")}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
On("firebase","9.23.0","app");var Cp=(l=s("jQ7Zu")).forwardRef((function({title:e,titleId:t,...n},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{fillRule:"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",clipRule:"evenodd"}))})),Sp=s("aLBVI"),Tp=(Sp=s("aLBVI"),s("3hLxt"));async function kp(){return Sp.default.get(Tp.paths.session).json()}async function Ip(e,t){const n={"x-session-id":t};await Sp.default.post(Tp.paths.session,{json:e,headers:n})}const Ap=window;function xp(){return Object.entries(Ap.kilt).filter((([,e])=>e.specVersion.startsWith("3."))).map((([e])=>e))}async function _p(e){if(!e)throw new Error("No provider");const{dAppEncryptionKeyUri:t,challenge:n,sessionId:r}=await kp(),i=await e.startSession("Peranto Attest App",t,n),{encryptionKeyUri:s,encryptedChallenge:o,nonce:a}=i;await Ip({encryptionKeyUri:s,encryptedChallenge:o,nonce:a},r);const{name:c}=e;return{...i,sessionId:r,name:c}}function Np(e){return e instanceof Error?e:new Error(String(e))}var Dp=s("5jKHo");const Rp=["email","twitter","id"],Op={email:{$schema:"http://kilt-protocol.org/draft-01/ctype#",title:"Email",properties:{Email:{type:"string"}},type:"object",$id:"kilt:ctype:0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac"},twitter:{$schema:"http://kilt-protocol.org/draft-01/ctype#",title:"Twitter",properties:{Twitter:{type:"string"}},type:"object",$id:"kilt:ctype:0x47d04c42bdf7fdd3fc5a194bcaa367b2f4766a6b16ae3df628927656d818f420"},id:{$schema:"http://kilt-protocol.org/draft-01/ctype#",properties:{email:{type:"string"},username:{type:"string"}},title:"Authorization",type:"object",$id:"kilt:ctype:0xdf952230c87e7fbdc8503a394540c8e99029180611e7107c4eee33f67f57aa57"}},Lp={id:2,email:2,twitter:3};function Mp(e){return Rp.includes(e)}var Pp;Tp=s("3hLxt");Pp=new URL(s("2TGXb").resolve("lgmIG"),import.meta.url).toString();const Fp=Array.from(Tn.values()),jp=function(e,t){const n="string"==typeof e?e:t||"(default)",r=xn("object"==typeof e?e:Rn(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=Mt("firestore");e&&xf(r,...e)}return r}(Fp.length>0?Fp[0]:Dn({apiKey:"AIzaSyAAwR5GvEUi3lLWy9bb1tz65jhvHI3vufc",authDomain:"peranto-test.firebaseapp.com",projectId:"peranto-test",storageBucket:"peranto-test.appspot.com",messagingSenderId:"777447831295",appId:"1:777447831295:web:6a987d7c8b307ecef43eca"})),Vp=(e,t)=>t?"bg-base-100 border-none":e?"btn-error":"btn-neutral",Up={closed:(0,a.jsx)("p",{children:"Your wallet was closed. Please try again."}),unauthorized:(0,a.jsxs)("p",{children:["The authorization was rejected. Follow the instructions on our Tech Support site to establish the connection between this attester and your wallet.",(0,a.jsx)("a",{href:"https://support.kilt.io/support/solutions/articles/80000968082-how-to-grant-access-to-website",target:"_blank",rel:"noreferrer",children:"Tech Support"})]}),unknown:(0,a.jsx)("p",{children:"Something went wrong! Try again or reload the page or restart your browser."})},Bp=({onClick:e,isError:t,isLoading:n,label:r,isSubmit:i})=>(0,a.jsx)("button",{className:`btn ${Vp(t,n)} btn-active max-w-[200px]`,type:i?"submit":"button",onClick:e,children:n?(0,a.jsx)(kt.default,{visible:!0,height:"40",width:"40",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"}):t?"Try again":r});function $p({onConnect:e}){const{kilt:t}=Ap,[n,r]=(0,l.useState)(xp()),[i,s]=(0,l.useState)(!1),[o,c]=(0,l.useState)();(0,l.useEffect)((()=>{function e(){r(xp())}return window.dispatchEvent(new CustomEvent("kilt-dapp#initialized")),window.addEventListener("kilt-extension#initialized",e),()=>window.removeEventListener("kilt-extension#initialized",e)}),[]);const u=(0,l.useCallback)((async n=>{try{s(!0),c(void 0),e(await _p(t[n]))}catch(e){const{message:t}=Np(e);t.includes("closed")?c("closed"):t.includes("Not authorized")?c("unauthorized"):(c("unknown"),console.error(e)),s(!1)}}),[e,t]);return(0,a.jsxs)("section",{className:"flex flex-col items-center gap-4 text-justify",children:[0===n.length&&(0,a.jsx)("p",{children:"Looking for a wallet… To make a claim you need to have e.g. Sporran wallet installed and have an identity configured in it."}),n.map((e=>(0,a.jsx)(Bp,{onClick:()=>u(e),isError:!!o,isLoading:i,label:`Connect to ${t[e].name}`},e))),o&&Up[o]]})}function qp(){const{type:e}=(0,u.useParams)(),[t,n]=(0,l.useState)(),[r,i]=(0,l.useState)("start"),[s,o]=(0,l.useState)(),[c,h]=(0,l.useState)(!1);(0,l.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("truoraFlow_document-validation")||"{}");console.log("META::",e)}),[]),document.querySelector('[name="email"]').value="",document.querySelector('[name="username"]').value="";const d=(0,l.useCallback)((e=>{n(e)}),[]),f=(0,l.useCallback)((async n=>{if(n.preventDefault(),o(void 0),h(!0),!t||!e||!Mp(e))return;const r=Object.fromEntries(new FormData(n.currentTarget).entries());try{const{sessionId:n}=t,s={"x-session-id":n};await t.listen((async e=>{await Sp.default.post(Tp.paths.requestAttestation,{headers:s,json:e}),i("requested")}));const o=await Sp.default.post(Tp.paths.terms,{headers:s,json:{type:e,claimContents:r}}).json();await t.send(o)}catch(e){const{message:t}=Np(e);t.includes("closed")||t.includes("Conflict")?o("closed"):t.includes("Not authorized")?o("unauthorized"):(o("unknown"),console.error(e))}finally{h(!1)}}),[t,e]),p=(0,l.useCallback)((async e=>{if(e.preventDefault(),o(void 0),t)try{const{sessionId:e}=t,n={"x-session-id":e};await Sp.default.post(Tp.paths.pay,{headers:n}),i("paid")}catch(e){console.error(e),o("unknown")}}),[t]);if(!e||!Mp(e))return(0,a.jsx)("p",{children:"Error - Unsupported CType"});const m=Op[e],{title:g,properties:y}=m;return(0,a.jsx)("section",{className:"bg-base-200 min-h-screen flex flex-col justify-center",children:(0,a.jsx)("div",{className:"container mx-auto max-w-5xl card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:(0,a.jsxs)("div",{className:"card-body flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(u.Link,{to:Dp.paths.home,className:"absolute -top-7 -left-2 text-xs flex items-center btn btn-link p-0 m-0",children:(0,a.jsx)(Cp,{className:"w-6"})})}),(0,a.jsxs)("div",{className:"flex justify-between items-end mt-2",children:[(0,a.jsx)("h2",{className:"text-xl",children:"Authorization"===g?"INE":g}),(0,a.jsxs)("span",{children:["Price: ",Lp[e]," KILT"]})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("form",{className:"my-2 flex flex-col items-center",onSubmit:f,children:["start"===r&&"id"===e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{className:"btn btn-info",href:"https://identity.truora.com/preview/IPFcbd9b16226d31a44b0b22eda776afd0d",children:"Validation with Truora"}),(0,a.jsx)(a.Fragment,{children:Object.keys(y).map((e=>(0,a.jsxs)("label",{className:"hidden",children:[e,":",(0,a.jsx)("input",{name:e,disabled:!t,required:!0})]},e)))})]}),"start"===r&&"id"!==e&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(a.Fragment,{children:Object.keys(y).map((e=>(0,a.jsxs)("label",{children:[e,":",(0,a.jsx)("input",{name:e,disabled:!t,required:!0})]},e)))})}),!t&&(0,a.jsx)($p,{onConnect:d}),t&&(0,a.jsx)(Bp,{isLoading:c,isError:!!s,label:"Submit",isSubmit:!0})]}),"requested"===r&&(0,a.jsxs)("form",{onSubmit:p,children:[(0,a.jsx)("p",{children:"Thanks for your request. Please pay"}),(0,a.jsx)("button",{children:"Pay"})]}),"paid"===r&&(0,a.jsx)("p",{children:"Thanks for your payment! Your request has been sent to the attester for processing. You can check the attestation status in your wallet."}),s&&Up[s]]})]})})})}function zp(){return(0,l.useEffect)((()=>{const e=new URLSearchParams(window.location.search),t=e.get("process_id"),n=e.get("account_id");t&&n&&(async()=>{const e=op(Rf(jp,"truora"),cp("account_id","==",n),cp("identity_process_id","==",t)),r=await Ep(e);let i={};r.forEach((e=>{i={...e.data(),id:e.id}})),localStorage.setItem(`truoraFlow_${i.type}`,JSON.stringify(i)),"document-validation"===i.type&&location.replace("/claim/id")})()}),[]),(0,a.jsx)("section",{className:"bg-base-200 ",style:{backgroundImage:`url(${t(Pp)})`,backgroundRepeat:"no-repeat",backgroundSize:"369px auto",backgroundPosition:"center 60px"},children:(0,a.jsx)("div",{className:"hero min-h-screen container mx-auto max-w-5xl",children:(0,a.jsxs)("div",{className:"hero-content flex-col lg:flex-row",children:[(0,a.jsxs)("div",{className:"flex flex-col text-center lg:text-left",children:[(0,a.jsx)("h1",{className:"text-5xl font-bold text-[#1b2a51]",children:"Attest App"}),(0,a.jsx)("p",{className:"py-6 text-[#1b2a51]",children:"This KILT Attester Example demonstrates how to issue credentials for a couple basic claim types which already exist on the KILT blockchain. The user chooses a claim type, enters the claim data, makes a (mock) payment, and the claim is sent to the attester to be reviewed."})]}),(0,a.jsx)("div",{className:"card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("p",{className:"text-[#1b2a51]",children:"Start selecting a claim type:"}),(0,a.jsx)("ul",{className:"menu w-56 rounded-box",children:Rp.map(((e,t)=>(0,a.jsx)("li",{children:(0,a.jsxs)(u.Link,{className:"link text-[#1b2a51]",to:(0,u.generatePath)(Dp.paths.claim,{type:e}),children:[0===t&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),1===t&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),2===t&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Authorization"===Op[e].title?"INE":Op[e].title]})},e)))})]})})]})})})}(0,c.createRoot)(document.querySelector("#app")).render((0,a.jsx)(u.BrowserRouter,{children:(0,a.jsxs)(u.Routes,{children:[(0,a.jsx)(u.Route,{path:Dp.paths.home,element:(0,a.jsx)(zp,{})}),(0,a.jsx)(u.Route,{path:Dp.paths.claim,element:(0,a.jsx)(qp,{})}),(0,a.jsx)(u.Route,{path:"*",element:(0,a.jsx)("p",{children:"404 - Not found"})})]})}));
//# sourceMappingURL=index.d9da5595.js.map

(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8L3F":function(e,t,n){"use strict";(function(e){for(var t="undefined"!=typeof window&&"undefined"!=typeof document,n=["Edge","Trident","Firefox"],r=0,o=0;o<n.length;o+=1)if(t&&navigator.userAgent.indexOf(n[o])>=0){r=1;break}var i=t&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),r))}};function a(e){return e&&"[object Function]"==={}.toString.call(e)}function s(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function l(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function f(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=s(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+r)?e:f(l(e))}var c=t&&!(!window.MSInputMethodContext||!document.documentMode),p=t&&/MSIE 10/.test(navigator.userAgent);function d(e){return 11===e?c:10===e?p:c||p}function u(e){if(!e)return document.documentElement;for(var t=d(10)?document.body:null,n=e.offsetParent;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===s(n,"position")?u(n):n:e?e.ownerDocument.documentElement:document.documentElement}function m(e){return null!==e.parentNode?m(e.parentNode):e}function h(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var a,s,l=i.commonAncestorContainer;if(e!==l&&t!==l||r.contains(o))return"BODY"===(s=(a=l).nodeName)||"HTML"!==s&&u(a.firstElementChild)!==a?u(l):l;var f=m(e);return f.host?h(f.host,t):h(e,m(t).host)}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"===r||"HTML"===r){var o=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||o;return i[n]}return e[n]}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=g(t,"top"),o=g(t,"left"),i=n?-1:1;return e.top+=r*i,e.bottom+=r*i,e.left+=o*i,e.right+=o*i,e}function v(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function w(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],d(10)?n["offset"+e]+r["margin"+("Height"===e?"Top":"Left")]+r["margin"+("Height"===e?"Bottom":"Right")]:0)}function E(){var e=document.body,t=document.documentElement,n=d(10)&&getComputedStyle(t);return{height:w("Height",e,t,n),width:w("Width",e,t,n)}}var y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function D(e){return N({},e,{right:e.left+e.width,bottom:e.top+e.height})}function L(e){var t={};try{if(d(10)){t=e.getBoundingClientRect();var n=g(e,"top"),r=g(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(u){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?E():{},a=i.width||e.clientWidth||o.right-o.left,l=i.height||e.clientHeight||o.bottom-o.top,f=e.offsetWidth-a,c=e.offsetHeight-l;if(f||c){var p=s(e);f-=v(p,"x"),c-=v(p,"y"),o.width-=f,o.height-=c}return D(o)}function T(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=d(10),o="HTML"===t.nodeName,i=L(e),a=L(t),l=f(e),c=s(t),p=parseFloat(c.borderTopWidth,10),u=parseFloat(c.borderLeftWidth,10);n&&"HTML"===t.nodeName&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var m=D({top:i.top-a.top-p,left:i.left-a.left-u,width:i.width,height:i.height});if(m.marginTop=0,m.marginLeft=0,!r&&o){var h=parseFloat(c.marginTop,10),g=parseFloat(c.marginLeft,10);m.top-=p-h,m.bottom-=p-h,m.left-=u-g,m.right-=u-g,m.marginTop=h,m.marginLeft=g}return(r&&!n?t.contains(l):t===l&&"BODY"!==l.nodeName)&&(m=b(m,t)),m}function k(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=T(e,n),o=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:g(n),s=t?0:g(n,"left"),l={top:a-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:o,height:i};return D(l)}function H(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===s(e,"position")||H(l(e)))}function M(e){if(!e||!e.parentElement||d())return document.documentElement;for(var t=e.parentElement;t&&"none"===s(t,"transform");)t=t.parentElement;return t||document.documentElement}function F(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=o?M(e):h(e,t);if("viewport"===r)i=k(a,o);else{var s=void 0;"scrollParent"===r?"BODY"===(s=f(l(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===r?e.ownerDocument.documentElement:r;var c=T(s,a,o);if("HTML"!==s.nodeName||H(a))i=c;else{var p=E(),d=p.height,u=p.width;i.top+=c.top-c.marginTop,i.bottom=d+c.top,i.left+=c.left-c.marginLeft,i.right=u+c.left}}return i.left+=n,i.top+=n,i.right-=n,i.bottom-=n,i}function A(e){return e.width*e.height}function S(e,t,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=F(n,r,i,o),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},l=Object.keys(s).map((function(e){return N({key:e},s[e],{area:A(s[e])})})).sort((function(e,t){return t.area-e.area})),f=l.filter((function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight})),c=f.length>0?f[0].key:l[0].key,p=e.split("-")[1];return c+(p?"-"+p:"")}function C(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=r?M(t):h(t,n);return T(n,o,r)}function j(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),r=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function B(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function P(e,t,n){n=n.split("-")[0];var r=j(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",l=i?"height":"width",f=i?"width":"height";return o[a]=t[a]+t[l]/2-r[l]/2,o[s]=n===s?t[s]-r[f]:t[B(s)],o}function W(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function I(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var r=W(e,(function(e){return e[t]===n}));return e.indexOf(r)}(e,"name",n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&a(n)&&(t.offsets.popper=D(t.offsets.popper),t.offsets.reference=D(t.offsets.reference),t=n(t,e))})),t}function R(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=C(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=S(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=P(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=I(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function U(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function q(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var o=t[r],i=o?""+o+n:e;if(void 0!==document.body.style[i])return i}return null}function Y(){return this.state.isDestroyed=!0,U(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[q("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function z(e){var t=e.ownerDocument;return t?t.defaultView:window}function _(e,t,n,r){n.updateBound=r,z(e).addEventListener("resize",n.updateBound,{passive:!0});var o=f(e);return function e(t,n,r,o){var i="BODY"===t.nodeName,a=i?t.ownerDocument.defaultView:t;a.addEventListener(n,r,{passive:!0}),i||e(f(a.parentNode),n,r,o),o.push(a)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function G(){this.state.eventsEnabled||(this.state=_(this.reference,this.options,this.state,this.scheduleUpdate))}function J(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,z(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function V(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function K(e,t){Object.keys(t).forEach((function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&V(t[n])&&(r="px"),e.style[n]=t[n]+r}))}function X(e,t,n){var r=W(e,(function(e){return e.name===t})),o=!!r&&e.some((function(e){return e.name===n&&e.enabled&&e.order<r.order}));if(!o){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}var Q=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Z=Q.slice(3);function $(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Z.indexOf(e),r=Z.slice(n+1).concat(Z.slice(0,n));return t?r.reverse():r}var ee="flip",te="clockwise",ne="counterclockwise";function re(e,t,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),a=e.split(/(\+|\-)/).map((function(e){return e.trim()})),s=a.indexOf(W(a,(function(e){return-1!==e.search(/,|\s/)})));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,f=-1!==s?[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))]:[a];return(f=f.map((function(e,r){var o=(1===r?!i:i)?"height":"width",a=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,r){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],a=o[2];if(!i)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=r}return D(s)[t]/100*i}if("vh"===a||"vw"===a){return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}(e,o,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,r){V(n)&&(o[t]+=n*("-"===e[r-1]?-1:1))}))})),o}var oe={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var o=e.offsets,i=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",f=s?"width":"height",c={start:O({},l,i[l]),end:O({},l,i[l]+i[f]-a[f])};e.offsets.popper=N({},a,c[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,r=e.placement,o=e.offsets,i=o.popper,a=o.reference,s=r.split("-")[0],l=void 0;return l=V(+n)?[+n,0]:re(n,i,a,s),"left"===s?(i.top+=l[0],i.left-=l[1]):"right"===s?(i.top+=l[0],i.left+=l[1]):"top"===s?(i.left+=l[0],i.top-=l[1]):"bottom"===s&&(i.left+=l[0],i.top+=l[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||u(e.instance.popper);e.instance.reference===n&&(n=u(n));var r=q("transform"),o=e.instance.popper.style,i=o.top,a=o.left,s=o[r];o.top="",o.left="",o[r]="";var l=F(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);o.top=i,o.left=a,o[r]=s,t.boundaries=l;var f=t.priority,c=e.offsets.popper,p={primary:function(e){var n=c[e];return c[e]<l[e]&&!t.escapeWithReference&&(n=Math.max(c[e],l[e])),O({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=c[n];return c[e]>l[e]&&!t.escapeWithReference&&(r=Math.min(c[n],l[e]-("right"===e?c.width:c.height))),O({},n,r)}};return f.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";c=N({},c,p[t](e))})),e.offsets.popper=c,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",l=a?"left":"top",f=a?"width":"height";return n[s]<i(r[l])&&(e.offsets.popper[l]=i(r[l])-n[f]),n[l]>i(r[s])&&(e.offsets.popper[l]=i(r[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!X(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],i=e.offsets,a=i.popper,l=i.reference,f=-1!==["left","right"].indexOf(o),c=f?"height":"width",p=f?"Top":"Left",d=p.toLowerCase(),u=f?"left":"top",m=f?"bottom":"right",h=j(r)[c];l[m]-h<a[d]&&(e.offsets.popper[d]-=a[d]-(l[m]-h)),l[d]+h>a[m]&&(e.offsets.popper[d]+=l[d]+h-a[m]),e.offsets.popper=D(e.offsets.popper);var g=l[d]+l[c]/2-h/2,b=s(e.instance.popper),v=parseFloat(b["margin"+p],10),w=parseFloat(b["border"+p+"Width"],10),E=g-e.offsets.popper[d]-v-w;return E=Math.max(Math.min(a[c]-h,E),0),e.arrowElement=r,e.offsets.arrow=(O(n={},d,Math.round(E)),O(n,u,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(U(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=F(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],o=B(r),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case ee:a=[r,o];break;case te:a=$(r);break;case ne:a=$(r,!0);break;default:a=t.behavior}return a.forEach((function(s,l){if(r!==s||a.length===l+1)return e;r=e.placement.split("-")[0],o=B(r);var f=e.offsets.popper,c=e.offsets.reference,p=Math.floor,d="left"===r&&p(f.right)>p(c.left)||"right"===r&&p(f.left)<p(c.right)||"top"===r&&p(f.bottom)>p(c.top)||"bottom"===r&&p(f.top)<p(c.bottom),u=p(f.left)<p(n.left),m=p(f.right)>p(n.right),h=p(f.top)<p(n.top),g=p(f.bottom)>p(n.bottom),b="left"===r&&u||"right"===r&&m||"top"===r&&h||"bottom"===r&&g,v=-1!==["top","bottom"].indexOf(r),w=!!t.flipVariations&&(v&&"start"===i&&u||v&&"end"===i&&m||!v&&"start"===i&&h||!v&&"end"===i&&g);(d||b||w)&&(e.flipped=!0,(d||b)&&(r=a[l+1]),w&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=r+(i?"-"+i:""),e.offsets.popper=N({},e.offsets.popper,P(e.instance.popper,e.offsets.reference,e.placement)),e=I(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=i[n]-(s?o[a?"width":"height"]:0),e.placement=B(t),e.offsets.popper=D(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!X(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=W(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=W(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=L(u(e.instance.popper)),l={position:o.position},f={left:Math.floor(o.left),top:Math.round(o.top),bottom:Math.round(o.bottom),right:Math.floor(o.right)},c="bottom"===n?"top":"bottom",p="right"===r?"left":"right",d=q("transform"),m=void 0,h=void 0;if(h="bottom"===c?-s.height+f.bottom:f.top,m="right"===p?-s.width+f.right:f.left,a&&d)l[d]="translate3d("+m+"px, "+h+"px, 0)",l[c]=0,l[p]=0,l.willChange="transform";else{var g="bottom"===c?-1:1,b="right"===p?-1:1;l[c]=h*g,l[p]=m*b,l.willChange=c+", "+p}var v={"x-placement":e.placement};return e.attributes=N({},v,e.attributes),e.styles=N({},l,e.styles),e.arrowStyles=N({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return K(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&K(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,o){var i=C(o,t,e,n.positionFixed),a=S(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),K(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},ie=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};y(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=i(this.update.bind(this)),this.options=N({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(N({},e.Defaults.modifiers,o.modifiers)).forEach((function(t){r.options.modifiers[t]=N({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return N({name:e},r.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&a(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)})),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return x(e,[{key:"update",value:function(){return R.call(this)}},{key:"destroy",value:function(){return Y.call(this)}},{key:"enableEventListeners",value:function(){return G.call(this)}},{key:"disableEventListeners",value:function(){return J.call(this)}}]),e}();ie.Utils=("undefined"!=typeof window?window:e).PopperUtils,ie.placements=Q,ie.Defaults=oe}).call(this,n("yLpj"))},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("q1tI"),o=n.n(r),i=(n("q4sD"),n("EVdn"),n("8L3F"),n("Bl7J")),a=n("Wbzz");n("1pif");function s(){return o.a.createElement(i.a,null,o.a.createElement("main",{role:"main",className:"main home"},o.a.createElement("div",{id:"particles",className:"jumbotron particles"},o.a.createElement("div",{className:"image-container"},o.a.createElement("img",{className:"jumbotron-img",src:"assets/img/logos/datahub_color_vert-gry-bg.png",alt:"DATA HUB ICON"})),o.a.createElement("div",{className:"title-text-container"},o.a.createElement("h1",null,"A Data & AI Platform for the Hybrid Cloud")),o.a.createElement("div",{className:"button-container"},o.a.createElement("a",{className:"btn btn-lg btn-primary btn-getting-started",href:"{{ site.baseurl }}/docs.html",role:"button"},"Get started"))),o.a.createElement("div",{className:"jumbotron small"},o.a.createElement("div",{className:"image-container"},o.a.createElement("img",{className:"jumbotron-img",src:"assets/img/logos/datahub_color_vert-gry-bg.png",alt:"DATA HUB ICON"})),o.a.createElement("div",{className:"title-text-container"},o.a.createElement("h1",null,"A Data & AI Platform for the Hybrid Cloud")),o.a.createElement("div",{className:"button-container"},o.a.createElement(a.a,{className:"btn btn-lg btn-primary btn-getting-started",to:"/docs-sidebar",role:"button"}," Get started"))),o.a.createElement("div",{className:"container what-is"},o.a.createElement("div",{className:"row dh-info"},o.a.createElement("div",{className:"dh-info-text-container offset-md-1 col-md-10"},o.a.createElement("div",{className:"dh-info-section"},o.a.createElement("h2",{className:"dh-info-title"},"What is Open Data Hub?"),o.a.createElement("p",null,"Open Data Hub is a blueprint for building an AI as a service platform on Red Hat's ",o.a.createElement("a",{href:"https://kubernetes.io/"},"Kubernetes"),"-based",o.a.createElement("a",{href:"https://www.openshift.com/"},"OpenShift® Container Platform")," and",o.a.createElement("a",{href:"https://www.redhat.com/en/technologies/storage/ceph"}," Ceph Object Storage"),". It inherits from upstream efforts such as ",o.a.createElement("a",{href:"https://strimzi.io/"},"Kafka/Strimzi")," and ",o.a.createElement("a",{href:"https://www.kubeflow.org/"},"Kubeflow"),", and is the foundation for Red Hat's internal data science and AI platform. Data scientists can create models using Jupyter notebooks, and select from popular tools such as",o.a.createElement("a",{href:"https://www.tensorflow.org/"},"TensorFlow™"),", ",o.a.createElement("a",{href:"http://scikit-learn.org/stable/index.html"},"scikit-learn"),",",o.a.createElement("a",{href:"http://spark.apache.org/"},"Apache Spark™")," and more for developing models. Teams can spend more time solving critical business needs and less on installing and maintaining infrastructure with the Open Data Hub."),o.a.createElement("p",null,"Open Data Hub is a meta-project that integrates open source projects into a practical solution. It aims to foster collaboration between communities, vendors, user-enterprises, and academics following open source best practices.  The ",o.a.createElement("strong",null,"open source community")," can experiment and develop ",o.a.createElement("strong",null,"intelligent applications")," without incurring high costs and having to master the complexity of modern machine learning and artificial intelligence software stacks."),o.a.createElement("p",null,"Read about the new features coming to Open Data Hub in our ",o.a.createElement("a",{href:"{{ '/docs/roadmap/future.html' | prepend: site.baseurl }}"},"Project Road Map"),"."))))),o.a.createElement("div",{className:"full-width-image"},o.a.createElement("img",{src:"assets/img/datahub_flow.png",alt:"Data Hub Parts"})),o.a.createElement("div",{className:"container getting-started"},o.a.createElement("div",{className:"row dh-info"},o.a.createElement("div",{className:"dh-info-text-container offset-md-1 col-md-10"},o.a.createElement("div",{className:"dh-info-section"},o.a.createElement("h2",{className:"dh-info-title"},"Getting Started"),o.a.createElement("p",null,"For additional information about the Open Data Hub, read our ",o.a.createElement("a",{href:"/news"},"blogs")," and ",o.a.createElement("a",{href:"{{ '/docs.html' | prepend: site.baseurl }}"},"documentation"),"."),o.a.createElement("p",null,"To set up the Open Data Hub, all you need is a running ",o.a.createElement("a",{href:"https://www.openshift.com/"},"OpenShift®"),"cluster. For storing data and models, we recommend using a S3 object store such as",o.a.createElement("a",{href:"https://ceph.com/ceph-storage/object-storage/"},"Ceph"),". Once your OpenShift and Ceph installations are running, deploy the Open Data Hub components using our ",o.a.createElement("a",{href:"https://www.ansible.com/"},"Ansible")," playbooks and OpenShift® deployment templates.")),o.a.createElement("div",{className:"dh-info-section"},o.a.createElement("p",null,o.a.createElement("a",{className:"btn",role:"button",href:"{{ '/docs/getting-started/quick-installation.html' | prepend: site.baseurl }}"},"Installation"))))))))}},q4sD:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-c3fd679048ac4731ae31.js.map
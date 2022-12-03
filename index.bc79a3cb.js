import{R as wn,r as ee}from"./chunks/index.32c5cd87.js";import{S as K}from"./chunks/styles.module.f6b4fe12.js";import{j as I}from"./chunks/jsx-runtime.b196acee.js";/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function qt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?qt(Object(e),!0).forEach(function(a){ie(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):qt(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function st(t){return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},st(t)}function ae(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Kt(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function re(t,n,e){return n&&Kt(t.prototype,n),e&&Kt(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ie(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function jt(t,n){return se(t)||le(t,n)||An(t,n)||ue()}function mt(t){return oe(t)||fe(t)||An(t)||ce()}function oe(t){if(Array.isArray(t))return wt(t)}function se(t){if(Array.isArray(t))return t}function fe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function le(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function An(t,n){if(!!t){if(typeof t=="string")return wt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return wt(t,n)}}function wt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qt=function(){},zt={},On={},Sn=null,Cn={mark:Qt,measure:Qt};try{typeof window<"u"&&(zt=window),typeof document<"u"&&(On=document),typeof MutationObserver<"u"&&(Sn=MutationObserver),typeof performance<"u"&&(Cn=performance)}catch{}var me=zt.navigator||{},Jt=me.userAgent,Zt=Jt===void 0?"":Jt,z=zt,g=On,tn=Sn,at=Cn;z.document;var M=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",En=~Zt.indexOf("MSIE")||~Zt.indexOf("Trident/"),N="___FONT_AWESOME___",At=16,Pn="fa",In="svg-inline--fa",Y="data-fa-i2svg",Ot="data-fa-pseudo-element",de="data-fa-pseudo-element-pending",Ft="data-prefix",Dt="data-icon",nn="fontawesome-i2svg",ve="async",pe=["HTML","HEAD","STYLE","SCRIPT"],Nn=function(){try{return!0}catch{return!1}}(),Yt={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},ft={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Tn={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},be={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ge=/fa[srltdbk]?[\-\ ]/,_n="fa-layers-text",he=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,ye={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Mn=[1,2,3,4,5,6,7,8,9,10],xe=Mn.concat([11,12,13,14,15,16,17,18,19,20]),ke=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],D={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},we=[].concat(mt(Object.keys(ft)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",D.GROUP,D.SWAP_OPACITY,D.PRIMARY,D.SECONDARY]).concat(Mn.map(function(t){return"".concat(t,"x")})).concat(xe.map(function(t){return"w-".concat(t)})),Rn=z.FontAwesomeConfig||{};function Ae(t){var n=g.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Oe(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(g&&typeof g.querySelector=="function"){var Se=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Se.forEach(function(t){var n=jt(t,2),e=n[0],a=n[1],r=Oe(Ae(e));r!=null&&(Rn[a]=r)})}var Ce={familyPrefix:Pn,styleDefault:"solid",replacementClass:In,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},J=l(l({},Ce),Rn);J.autoReplaceSvg||(J.observeMutations=!1);var d={};Object.keys(J).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){J[t]=e,rt.forEach(function(a){return a(d)})},get:function(){return J[t]}})});z.FontAwesomeConfig=d;var rt=[];function Ee(t){return rt.push(t),function(){rt.splice(rt.indexOf(t),1)}}var L=At,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pe(t){if(!(!t||!M)){var n=g.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=g.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return g.head.insertBefore(n,a),t}}var Ie="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){for(var t=12,n="";t-- >0;)n+=Ie[Math.random()*62|0];return n}function X(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function $t(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Ln(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ne(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Ln(t[e]),'" ')},"").trim()}function dt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function Wt(t){return t.size!==P.size||t.x!==P.x||t.y!==P.y||t.rotate!==P.rotate||t.flipX||t.flipY}function Te(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function _e(t){var n=t.transform,e=t.width,a=e===void 0?At:e,r=t.height,o=r===void 0?At:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&En?f+="translate(".concat(n.x/L-a/2,"em, ").concat(n.y/L-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/L,"em), calc(-50% + ").concat(n.y/L,"em)) "):f+="translate(".concat(n.x/L,"em, ").concat(n.y/L,"em) "),f+="scale(".concat(n.size/L*(n.flipX?-1:1),", ").concat(n.size/L*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Me=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function jn(){var t=Pn,n=In,e=d.familyPrefix,a=d.replacementClass,r=Me;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var en=!1;function gt(){d.autoAddCss&&!en&&(Pe(jn()),en=!0)}var Re={mixout:function(){return{dom:{css:jn,insertCss:gt}}},hooks:function(){return{beforeDOMElementCreation:function(){gt()},beforeI2svg:function(){gt()}}}},T=z||{};T[N]||(T[N]={});T[N].styles||(T[N].styles={});T[N].hooks||(T[N].hooks={});T[N].shims||(T[N].shims=[]);var E=T[N],zn=[],Le=function t(){g.removeEventListener("DOMContentLoaded",t),lt=1,zn.map(function(n){return n()})},lt=!1;M&&(lt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),lt||g.addEventListener("DOMContentLoaded",Le));function je(t){!M||(lt?setTimeout(t,0):zn.push(t))}function nt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Ln(t):"<".concat(n," ").concat(Ne(a),">").concat(o.map(nt).join(""),"</").concat(n,">")}function an(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var ze=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},ht=function(n,e,a,r){var o=Object.keys(n),i=o.length,s=r!==void 0?ze(e,r):e,f,u,c;for(a===void 0?(f=1,c=n[o[0]]):(f=0,c=a);f<i;f++)u=o[f],c=s(c,n[u],u,n);return c};function Fe(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function St(t){var n=Fe(t);return n.length===1?n[0].toString(16):null}function De(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function rn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Ct(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=rn(n);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(t,rn(n)):E.styles[t]=l(l({},E.styles[t]||{}),o),t==="fas"&&Ct("fa",n)}var Z=E.styles,Ye=E.shims,$e=Object.values(Tn),Ut=null,Fn={},Dn={},Yn={},$n={},Wn={},We=Object.keys(Yt);function Ue(t){return~we.indexOf(t)}function He(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Ue(r)?r:null}var Un=function(){var n=function(o){return ht(Z,function(i,s,f){return i[f]=ht(s,o,{}),i},{})};Fn=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Dn=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),Wn=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var e="far"in Z||d.autoFetchSvg,a=ht(Ye,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Yn=a.names,$n=a.unicodes,Ut=vt(d.styleDefault)};Ee(function(t){Ut=vt(t.styleDefault)});Un();function Ht(t,n){return(Fn[t]||{})[n]}function Ge(t,n){return(Dn[t]||{})[n]}function U(t,n){return(Wn[t]||{})[n]}function Hn(t){return Yn[t]||{prefix:null,iconName:null}}function Be(t){var n=$n[t],e=Ht("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function F(){return Ut}var Gt=function(){return{prefix:null,iconName:null,rest:[]}};function vt(t){var n=Yt[t],e=ft[t]||ft[n],a=t in E.styles?t:null;return e||a||null}function pt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,a=e===void 0?!1:e,r=null,o=t.reduce(function(i,s){var f=He(d.familyPrefix,s);if(Z[s]?(s=$e.includes(s)?be[s]:s,r=s,i.prefix=s):We.indexOf(s)>-1?(r=s,i.prefix=vt(s)):f?i.iconName=f:s!==d.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var u=r==="fa"?Hn(i.iconName):{},c=U(i.prefix,i.iconName);u.prefix&&(r=null),i.iconName=u.iconName||c||i.iconName,i.prefix=u.prefix||i.prefix,i.prefix==="far"&&!Z.far&&Z.fas&&!d.autoFetchSvg&&(i.prefix="fas")}return i},Gt());return(o.prefix==="fa"||r==="fa")&&(o.prefix=F()||"fas"),o}var Xe=function(){function t(){ae(this,t),this.definitions={}}return re(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=l(l({},e.definitions[s]||{}),i[s]),Ct(s,i[s]);var f=Tn[s];f&&Ct(f,i[s]),Un()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,u=i.icon,c=u[2];e[s]||(e[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(e[s][m]=u)}),e[s][f]=u}),e}}]),t}(),on=[],H={},B={},Ve=Object.keys(B);function qe(t,n){var e=n.mixoutsTo;return on=t,H={},Object.keys(B).forEach(function(a){Ve.indexOf(a)===-1&&delete B[a]}),on.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),st(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){H[i]||(H[i]=[]),H[i].push(o[i])})}a.provides&&a.provides(B)}),e}function Et(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=H[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function $(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=H[t]||[];r.forEach(function(o){o.apply(null,e)})}function _(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return B[t]?B[t].apply(null,n):void 0}function Pt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||F();if(!!n)return n=U(e,n)||n,an(Gn.definitions,e,n)||an(E.styles,e,n)}var Gn=new Xe,Ke=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,$("noAuto")},Qe={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?($("beforeI2svg",n),_("pseudoElements2svg",n),_("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,je(function(){Ze({autoReplaceSvgRoot:e}),$("watch",n)})}},Je={icon:function(n){if(n===null)return null;if(st(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:U(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=vt(n[0]);return{prefix:a,iconName:U(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.familyPrefix,"-"))>-1||n.match(ge))){var r=pt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||F(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=F();return{prefix:o,iconName:U(o,n)||n}}}},S={noAuto:Ke,config:d,dom:Qe,parse:Je,library:Gn,findIconDefinition:Pt,toHtml:nt},Ze=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?g:e;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&S.dom.i2svg({node:a})};function bt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return nt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!M){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ta(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(Wt(i)&&e.found&&!a.found){var s=e.width,f=e.height,u={x:s/f/2,y:.5};r.style=dt(l(l({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function na(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(d.familyPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function Bt(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,u=t.maskId,c=t.titleId,m=t.extra,v=t.watchable,b=v===void 0?!1:v,k=a.found?a:e,O=k.width,h=k.height,A=r==="fak",y=[d.replacementClass,o?"".concat(d.familyPrefix,"-").concat(o):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),x={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:y,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(h)})},C=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(O/h*16*.0625,"em")}:{};b&&(x.attributes[Y]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||tt())},children:[f]}),delete x.attributes.title);var w=l(l({},x),{},{prefix:r,iconName:o,main:e,mask:a,maskId:u,transform:i,symbol:s,styles:l(l({},C),m.styles)}),R=a.found&&e.found?_("generateAbstractMask",w)||{children:[],attributes:{}}:_("generateAbstractIcon",w)||{children:[],attributes:{}},V=R.children,q=R.attributes;return w.children=V,w.attributes=q,s?na(w):ta(w)}function sn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,u=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(u[Y]="");var c=l({},i.styles);Wt(r)&&(c.transform=_e({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);var m=dt(c);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[n]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function ea(t){var n=t.content,e=t.title,a=t.extra,r=l(l(l({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=dt(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var yt=E.styles;function It(t){var n=t[0],e=t[1],a=t.slice(4),r=jt(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var aa={found:!1,width:512,height:512};function ra(t,n){!Nn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Nt(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=F()),new Promise(function(a,r){if(_("missingIconAbstract"),e==="fa"){var o=Hn(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&yt[n]&&yt[n][t]){var i=yt[n][t];return a(It(i))}ra(t,n),a(l(l({},aa),{},{icon:d.showMissingIcons&&t?_("missingIconAbstract")||{}:{}}))})}var fn=function(){},Tt=d.measurePerformance&&at&&at.mark&&at.measure?at:{mark:fn,measure:fn},Q='FA "6.1.2"',ia=function(n){return Tt.mark("".concat(Q," ").concat(n," begins")),function(){return Bn(n)}},Bn=function(n){Tt.mark("".concat(Q," ").concat(n," ends")),Tt.measure("".concat(Q," ").concat(n),"".concat(Q," ").concat(n," begins"),"".concat(Q," ").concat(n," ends"))},Xt={begin:ia,end:Bn},it=function(){};function ln(t){var n=t.getAttribute?t.getAttribute(Y):null;return typeof n=="string"}function oa(t){var n=t.getAttribute?t.getAttribute(Ft):null,e=t.getAttribute?t.getAttribute(Dt):null;return n&&e}function sa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function fa(){if(d.autoReplaceSvg===!0)return ot.replace;var t=ot[d.autoReplaceSvg];return t||ot.replace}function la(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function ca(t){return g.createElement(t)}function Xn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?la:ca:e;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Xn(i,{ceFn:a}))}),r}function ua(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var ot={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(Xn(r),e)}),e.getAttribute(Y)===null&&d.keepOriginalSource){var a=g.createComment(ua(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~$t(e).indexOf(d.replacementClass))return ot.replace(n);var r=new RegExp("".concat(d.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return nt(s)}).join(`
`);e.setAttribute(Y,""),e.innerHTML=i}};function cn(t){t()}function Vn(t,n){var e=typeof n=="function"?n:it;if(t.length===0)e();else{var a=cn;d.mutateApproach===ve&&(a=z.requestAnimationFrame||cn),a(function(){var r=fa(),o=Xt.begin("mutate");t.map(r),o(),e()})}}var Vt=!1;function qn(){Vt=!0}function _t(){Vt=!1}var ct=null;function un(t){if(!!tn&&!!d.observeMutations){var n=t.treeCallback,e=n===void 0?it:n,a=t.nodeCallback,r=a===void 0?it:a,o=t.pseudoElementsCallback,i=o===void 0?it:o,s=t.observeMutationsRoot,f=s===void 0?g:s;ct=new tn(function(u){if(!Vt){var c=F();X(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ln(m.addedNodes[0])&&(d.searchPseudoElements&&i(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&ln(m.target)&&~ke.indexOf(m.attributeName))if(m.attributeName==="class"&&oa(m.target)){var v=pt($t(m.target)),b=v.prefix,k=v.iconName;m.target.setAttribute(Ft,b||c),k&&m.target.setAttribute(Dt,k)}else sa(m.target)&&r(m.target)})}}),M&&ct.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ma(){!ct||ct.disconnect()}function da(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function va(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=pt($t(t));return r.prefix||(r.prefix=F()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ge(r.prefix,t.innerText)||Ht(r.prefix,St(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function pa(t){var n=X(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||tt()):(n["aria-hidden"]="true",n.focusable="false")),n}function ba(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=va(t),a=e.iconName,r=e.prefix,o=e.rest,i=pa(t),s=Et("parseNodeAttributes",{},t),f=n.styleParser?da(t):[];return l({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var ga=E.styles;function Kn(t){var n=d.autoReplaceSvg==="nest"?mn(t,{styleParser:!1}):mn(t);return~n.extra.classes.indexOf(_n)?_("generateLayersText",t,n):_("generateSvgReplacementMutation",t,n)}function dn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var e=g.documentElement.classList,a=function(m){return e.add("".concat(nn,"-").concat(m))},r=function(m){return e.remove("".concat(nn,"-").concat(m))},o=d.autoFetchSvg?Object.keys(Yt):Object.keys(ga);o.includes("fa")||o.push("fa");var i=[".".concat(_n,":not([").concat(Y,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Y,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=X(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Xt.begin("onTree"),u=s.reduce(function(c,m){try{var v=Kn(m);v&&c.push(v)}catch(b){Nn||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(v){Vn(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(v){f(),m(v)})})}function ha(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kn(t).then(function(e){e&&Vn([e],n)})}function ya(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Pt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Pt(r||{})),t(a,l(l({},e),{},{mask:r}))}}var xa=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?P:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,f=s===void 0?null:s,u=e.maskId,c=u===void 0?null:u,m=e.title,v=m===void 0?null:m,b=e.titleId,k=b===void 0?null:b,O=e.classes,h=O===void 0?[]:O,A=e.attributes,y=A===void 0?{}:A,x=e.styles,C=x===void 0?{}:x;if(!!n){var w=n.prefix,R=n.iconName,V=n.icon;return bt(l({type:"icon"},n),function(){return $("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?y["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(k||tt()):(y["aria-hidden"]="true",y.focusable="false")),Bt({icons:{main:It(V),mask:f?It(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:R,transform:l(l({},P),r),symbol:i,title:v,maskId:c,titleId:k,extra:{attributes:y,styles:C,classes:h}})})}},ka={mixout:function(){return{icon:ya(xa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=dn,e.nodeCallback=ha,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?g:a,o=e.callback,i=o===void 0?function(){}:o;return dn(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,c=a.mask,m=a.maskId,v=a.extra;return new Promise(function(b,k){Promise.all([Nt(r,s),c.iconName?Nt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var h=jt(O,2),A=h[0],y=h[1];b([e,Bt({icons:{main:A,mask:y},prefix:s,iconName:r,transform:f,symbol:u,maskId:m,title:o,titleId:i,extra:v,watchable:!0})])}).catch(k)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,f=dt(s);f.length>0&&(r.style=f);var u;return Wt(i)&&(u=_("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(u||o.icon),{children:a,attributes:r}}}},wa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return bt({type:"layer"},function(){$("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.familyPrefix,"-layers")].concat(mt(o)).join(" ")},children:i}]})}}}},Aa={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,u=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return bt({type:"counter",content:e},function(){return $("beforeDOMElementCreation",{content:e,params:a}),ea({content:e.toString(),title:o,extra:{attributes:u,styles:m,classes:["".concat(d.familyPrefix,"-layers-counter")].concat(mt(s))}})})}}}},Oa={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?P:r,i=a.title,s=i===void 0?null:i,f=a.classes,u=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,v=a.styles,b=v===void 0?{}:v;return bt({type:"text",content:e},function(){return $("beforeDOMElementCreation",{content:e,params:a}),sn({content:e,transform:l(l({},P),o),title:s,extra:{attributes:m,styles:b,classes:["".concat(d.familyPrefix,"-layers-text")].concat(mt(u))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(En){var u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/u,f=c.height/u}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,sn({content:e.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Sa=new RegExp('"',"ug"),vn=[1105920,1112319];function Ca(t){var n=t.replace(Sa,""),e=De(n,0),a=e>=vn[0]&&e<=vn[1],r=n.length===2?n[0]===n[1]:!1;return{value:St(r?n[0]:n),isSecondary:a||r}}function pn(t,n){var e="".concat(de).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=X(t.children),i=o.filter(function(R){return R.getAttribute(Ot)===n})[0],s=z.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(he),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ft[f[2].toLowerCase()]:ye[u],b=Ca(m),k=b.value,O=b.isSecondary,h=f[0].startsWith("FontAwesome"),A=Ht(v,k),y=A;if(h){var x=Be(k);x.iconName&&x.prefix&&(A=x.iconName,v=x.prefix)}if(A&&!O&&(!i||i.getAttribute(Ft)!==v||i.getAttribute(Dt)!==y)){t.setAttribute(e,y),i&&t.removeChild(i);var C=ba(),w=C.extra;w.attributes[Ot]=n,Nt(A,v).then(function(R){var V=Bt(l(l({},C),{},{icons:{main:R,mask:Gt()},prefix:v,iconName:y,extra:w,watchable:!0})),q=g.createElement("svg");n==="::before"?t.insertBefore(q,t.firstChild):t.appendChild(q),q.outerHTML=V.map(function(W){return nt(W)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Ea(t){return Promise.all([pn(t,"::before"),pn(t,"::after")])}function Pa(t){return t.parentNode!==document.head&&!~pe.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ot)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function bn(t){if(!!M)return new Promise(function(n,e){var a=X(t.querySelectorAll("*")).filter(Pa).map(Ea),r=Xt.begin("searchPseudoElements");qn(),Promise.all(a).then(function(){r(),_t(),n()}).catch(function(){r(),_t(),e()})})}var Ia={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=bn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?g:a;d.searchPseudoElements&&bn(r)}}},gn=!1,Na={mixout:function(){return{dom:{unwatch:function(){qn(),gn=!0}}}},hooks:function(){return{bootstrap:function(){un(Et("mutationObserverCallbacks",{}))},noAuto:function(){ma()},watch:function(e){var a=e.observeMutationsRoot;gn?_t():un(Et("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},hn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Ta={mixout:function(){return{parse:{transform:function(e){return hn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=hn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(u," ").concat(c)},v={transform:"translate(".concat(i/2*-1," -256)")},b={outer:s,inner:m,path:v};return{tag:"g",attributes:l({},b.outer),children:[{tag:"g",attributes:l({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:l(l({},a.icon.attributes),b.path)}]}]}}}},xt={x:0,y:0,width:"100%",height:"100%"};function yn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function _a(t){return t.tag==="g"?t.children:[t]}var Ma={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?pt(r.split(" ").map(function(i){return i.trim()})):Gt();return o.prefix||(o.prefix=F()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,f=e.transform,u=o.width,c=o.icon,m=i.width,v=i.icon,b=Te({transform:f,containerWidth:m,iconWidth:u}),k={tag:"rect",attributes:l(l({},xt),{},{fill:"white"})},O=c.children?{children:c.children.map(yn)}:{},h={tag:"g",attributes:l({},b.inner),children:[yn(l({tag:c.tag,attributes:l(l({},c.attributes),b.path)},O))]},A={tag:"g",attributes:l({},b.outer),children:[h]},y="mask-".concat(s||tt()),x="clip-".concat(s||tt()),C={tag:"mask",attributes:l(l({},xt),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,A]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:_a(v)},C]};return a.push(w,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(y,")")},xt)}),{children:a,attributes:r}}}},Ra={provides:function(n){var e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},La={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},ja=[Re,ka,wa,Aa,Oa,Ia,Na,Ta,Ma,Ra,La];qe(ja,{mixoutsTo:S});S.noAuto;S.config;S.library;S.dom;var Mt=S.parse;S.findIconDefinition;S.toHtml;var za=S.icon;S.layer;S.text;S.counter;var p={exports:{}},Fa="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Da=Fa,Ya=Da;function Qn(){}function Jn(){}Jn.resetWarningCache=Qn;var $a=function(){function t(a,r,o,i,s,f){if(f!==Ya){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function n(){return t}var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Jn,resetWarningCache:Qn};return e.PropTypes=e,e};p.exports=$a();function xn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function j(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?xn(Object(e),!0).forEach(function(a){G(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):xn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function ut(t){return ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ut(t)}function G(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Wa(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function Ua(t,n){if(t==null)return{};var e=Wa(t,n),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(e[a]=t[a]))}return e}function Rt(t){return Ha(t)||Ga(t)||Ba(t)||Xa()}function Ha(t){if(Array.isArray(t))return Lt(t)}function Ga(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ba(t,n){if(!!t){if(typeof t=="string")return Lt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Lt(t,n)}}function Lt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Xa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Va(t){var n,e=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,f=t.spin,u=t.spinPulse,c=t.spinReverse,m=t.pulse,v=t.fixedWidth,b=t.inverse,k=t.border,O=t.listItem,h=t.flip,A=t.size,y=t.rotation,x=t.pull,C=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":v,"fa-inverse":b,"fa-border":k,"fa-li":O,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},G(n,"fa-".concat(A),typeof A<"u"&&A!==null),G(n,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),G(n,"fa-pull-".concat(x),typeof x<"u"&&x!==null),G(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(C).map(function(w){return C[w]?w:null}).filter(function(w){return w})}function qa(t){return t=t-0,t===t}function Zn(t){return qa(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Ka=["style"];function Qa(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ja(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=Zn(e.slice(0,a)),o=e.slice(a+1).trim();return r.startsWith("webkit")?n[Qa(r)]=o:n[r]=o,n},{})}function te(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return te(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,u){var c=n.attributes[u];switch(u){case"class":f.attrs.className=c,delete n.attributes.class;break;case"style":f.attrs.style=Ja(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?f.attrs[u.toLowerCase()]=c:f.attrs[Zn(u)]=c}return f},{attrs:{}}),o=e.style,i=o===void 0?{}:o,s=Ua(e,Ka);return r.attrs.style=j(j({},r.attrs.style),i),t.apply(void 0,[n.tag,j(j({},r.attrs),s)].concat(Rt(a)))}var ne=!1;try{ne=!0}catch{}function Za(){if(!ne&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function kn(t){if(t&&ut(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Mt.icon)return Mt.icon(t);if(t===null)return null;if(t&&ut(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function kt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?G({},t,n):{}}var et=wn.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,o=t.className,i=t.title,s=t.titleId,f=t.maskId,u=kn(e),c=kt("classes",[].concat(Rt(Va(t)),Rt(o.split(" ")))),m=kt("transform",typeof t.transform=="string"?Mt.transform(t.transform):t.transform),v=kt("mask",kn(a)),b=za(u,j(j(j(j({},c),m),v),{},{symbol:r,title:i,titleId:s,maskId:f}));if(!b)return Za("Could not find icon",u),null;var k=b.abstract,O={ref:n};return Object.keys(t).forEach(function(h){et.defaultProps.hasOwnProperty(h)||(O[h]=t[h])}),tr(k[0],O)});et.displayName="FontAwesomeIcon";et.propTypes={beat:p.exports.bool,border:p.exports.bool,beatFade:p.exports.bool,bounce:p.exports.bool,className:p.exports.string,fade:p.exports.bool,flash:p.exports.bool,mask:p.exports.oneOfType([p.exports.object,p.exports.array,p.exports.string]),maskId:p.exports.string,fixedWidth:p.exports.bool,inverse:p.exports.bool,flip:p.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.exports.oneOfType([p.exports.object,p.exports.array,p.exports.string]),listItem:p.exports.bool,pull:p.exports.oneOf(["right","left"]),pulse:p.exports.bool,rotation:p.exports.oneOf([0,90,180,270]),shake:p.exports.bool,size:p.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.exports.bool,spinPulse:p.exports.bool,spinReverse:p.exports.bool,symbol:p.exports.oneOfType([p.exports.bool,p.exports.string]),title:p.exports.string,titleId:p.exports.string,transform:p.exports.oneOfType([p.exports.string,p.exports.object]),swapOpacity:p.exports.bool};et.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var tr=te.bind(null,wn.createElement);/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var nr={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]};function ir(){const[t,n]=ee.exports.useState(!1);function e(){window.innerWidth>700||n(!t)}return I.exports.jsx("nav",{id:"header",className:K.container,children:I.exports.jsxs("div",{className:t?K.links+" "+K.responsive:K.links,children:[I.exports.jsx("a",{href:"#home",onClick:()=>e(),children:"Home"}),I.exports.jsx("a",{href:"#about",onClick:()=>e(),children:"About"}),I.exports.jsx("a",{href:"#resume",onClick:()=>e(),children:"Resume"}),I.exports.jsx("a",{href:"#projects",onClick:()=>e(),children:"Projects"}),I.exports.jsx("a",{href:"#contact",onClick:()=>e(),children:"Contact"}),I.exports.jsx("button",{className:K.icon,onClick:()=>e(),children:I.exports.jsx(et,{icon:nr})})]})})}export{ir as default};

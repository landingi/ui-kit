!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports["@landingi/landingi-ui-kit"]=n(require("react")):t["@landingi/landingi-ui-kit"]=n(t.react)}(self,(function(t){return function(){var n,e={8679:function(t,n,e){"use strict";var o=e(9864),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function s(t){return o.isMemo(t)?a:u[t.$$typeof]||r}u[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[o.Memo]=a;var c=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;t.exports=function t(n,e,o){if("string"!=typeof e){if(h){var r=f(e);r&&r!==h&&t(n,r,o)}var a=l(e);d&&(a=a.concat(d(e)));for(var u=s(n),b=s(e),y=0;y<a.length;++y){var m=a[y];if(!(i[m]||o&&o[m]||b&&b[m]||u&&u[m])){var g=p(e,m);try{c(n,m,g)}catch(t){}}}}return n}},5697:function(t,n,e){t.exports=e(2703)()},7954:function(t,n,e){"use strict";var o,r=(o=e(8156))&&"object"==typeof o&&"default"in o?o.default:o,i=!1;"undefined"!=typeof window&&(i="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch);var a=i,u={borderRadius:"inherit",height:"100%",left:0,position:"absolute",top:0,width:"100%"};function s(t,n,e,o){return e*((t=t/o-1)*t*t*t*t+1)+n}var c=Math.sqrt(2),l=Math.cos,d=Math.max,p=Math.min;function f(t){return p(t.duration,Date.now()-t.mouseDown)}function h(t){return 0<t.mouseUp?Date.now()-t.mouseUp:0}function b(t){var n=t.duration,e=t.radius,o=.85*s(f(t),0,e,n),r=.15*s(h(t),0,e,n),i=.02*e*l(Date.now()/n);return d(0,o+r+i)}function y(t,n,e){return e||p(.6*d(t,n))}function m(t,n){return s(h(t),n,-n,t.duration)}function g(t,n){return p(m(t,n),s(f(t),0,.3,3*t.duration))}function v(t,n,e){return p(1,b(t)/n*2/c)*(e/2-t.x)}function w(t,n,e){return p(1,b(t)/n*2/c)*(e/2-t.y)}function _(t){return b(t)/t.radius}var O=function(t){var n=t.mouseUp,e=t.duration;return!n||Date.now()-n<e};function x(t){var n,e=[],o=!1,r={each:function(t,n){for(var o=0,r=e.length;o<r;o++)t.call(n,e[o])},play:function(){o||(o=!0,r.update())},stop:function(){o=!1,cancelAnimationFrame(n)},getTotalOpacity:function(t){for(var n=0,o=0,r=e.length;o<r;o++)n+=g(e[o],t);return n},update:function(){(e=e.filter(O)).length?n=requestAnimationFrame(r.update):r.stop(),t()},add:function(t){e.push(t),r.play()},release:function(t){for(var n=e.length-1;0<=n;n--)if(!e[n].mouseUp)return e[n].mouseUp=t}};return r}function B(){for(var t=arguments,n={},e=0;e<arguments.length;e++){var o=t[e];if(o)for(var r in o)n[r]=o[r]}return n}var k=2*Math.PI,P={background:!0,className:"ink",duration:1e3,opacity:.25,recenter:!0,hasTouch:a},S=function(t){function n(n){t.apply(this,arguments),this.state={color:"transparent",density:1,height:0,store:x(this.tick.bind(this)),width:0},this.touchEvents=this.touchEvents()}return t&&(n.__proto__=t),((n.prototype=Object.create(t&&t.prototype)).constructor=n).prototype.touchEvents=function(){return this.props.hasTouch?{onTouchStart:this.t.bind(this),onTouchEnd:this.n.bind(this),onTouchCancel:this.n.bind(this)}:{onMouseDown:this.t.bind(this),onMouseUp:this.n.bind(this),onMouseLeave:this.n.bind(this)}},n.prototype.tick=function(){var t=this.state,n=t.ctx,e=t.color,o=t.density,r=t.height,i=t.width,a=t.store;n.save(),n.scale(o,o),n.clearRect(0,0,i,r),n.fillStyle=e,this.props.background&&(n.globalAlpha=a.getTotalOpacity(this.props.opacity),n.fillRect(0,0,i,r)),a.each(this.makeBlot,this),n.restore()},n.prototype.makeBlot=function(t){var n=this.state,e=n.ctx,o=n.height,r=n.width,i=t.x,a=t.y,u=t.radius;if(e.globalAlpha=m(t,this.props.opacity),e.beginPath(),this.props.recenter){var s=Math.max(o,r);i+=v(t,s,r),a+=w(t,s,o)}e.arc(i,a,u*_(t),0,k),e.closePath(),e.fill()},n.prototype.componentWillUnmount=function(){this.state.store.stop()},n.prototype.pushBlot=function(t,n,e){var o=this,r=this.canvas;r.getDOMNode&&"function"==typeof r.getDOMNode&&(r=r.getDOMNode());var i=r.getBoundingClientRect(),a=i.top,u=i.bottom,s=i.left,c=i.right,l=window.getComputedStyle(r).color,d=this.state.ctx||r.getContext("2d"),p=function(t){return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}(d),f=u-a,h=c-s,b=y(f,h,this.props.radius);this.setState({color:l,ctx:d,density:p,height:f,width:h},(function(){o.state.store.add({duration:o.props.duration,mouseDown:t,mouseUp:0,radius:b,x:n-s,y:e-a})}))},n.prototype.setCanvas=function(t){this.canvas=t},n.prototype.render=function(){var t=this.state,n=t.density,e=t.height,o=t.width,i=this.props,a=i.className,s=i.style,c=B({className:a,ref:this.setCanvas.bind(this),height:e*n,width:o*n,onDragOver:this.n,style:B(u,s)},this.touchEvents);return r.createElement("canvas",c)},n.prototype.t=function(t){var n=t.button,e=t.ctrlKey,o=t.clientX,r=t.clientY,i=t.changedTouches,a=Date.now();if(i)for(var u=0;u<i.length;u++){var s=i[u],c=s.clientX,l=s.clientY;this.pushBlot(a,c,l)}else 0!==n||e||this.pushBlot(a,o,r)},n.prototype.n=function(){this.state.store.release(Date.now())},n}(r.PureComponent);S.defaultProps=P,t.exports=S},4806:function(t,n,e){"use strict";e.d(n,{_y:function(){return i}});var o=e(8156);e(8679);var r=o.createContext(null),i=(r.Consumer,r.Provider,r)},8986:function(t,n,e){"use strict";e.d(n,{default:function(){return f}});var o=e(8156),r=e.n(o),i=e(7954),a=e.n(i),u=e(5697),s=e.n(u),c=e(1886),l=e(8124),d=(0,c.W)({"text--truncate":"Button__text--truncate",button:"Button__button","button--primary":"Button__button--primary","button--alert":"Button__button--alert","button--secondary":"Button__button--secondary","button--hide":"Button__button--hide","button--tiny":"Button__button--tiny","button--small":"Button__button--small","button--medium":"Button__button--medium","button--large":"Button__button--large","button--fit-width":"Button__button--fit-width","button--dropdown":"Button__button--dropdown","button--dropdown-element":"Button__button--dropdown-element","button--transparent":"Button__button--transparent","button--transparent-blue":"Button__button--transparent-blue","button--tabs":"Button__button--tabs","button--icon":"Button__button--icon","button--svg":"Button__button--svg","button--switcher":"Button__button--switcher","button--center":"Button__button--center","button--left":"Button__button--left","button--right":"Button__button--right","button--input":"Button__button--input","button--action":"Button__button--action",link:"Button__link"}),p=function(t){var n=t.className,e=t.tag,o=t.title,i=t.type,u=t.href,s=t.size,c=t.variant,p=t.align,f=t.target,h=t.children,b=t.onClick,y=t.isLoading,m=t.isDisabled,g=t.hasBackgoundRipple,v=t.hasIcon,w=t.hide,_=t.buttonStyle,O=(t.id,t.fitWidth),x=d({"button--primary":"primary"===c,"button--secondary":"secondary"===c,"button--dropdown":"dropdown"===c,"button--transparent":"transparent"===c,"button--transparent-blue":"transparent-blue"===c,"button--dropdown-element":"dropdown-element"===c,"dropdown button--switcher":"switcher"===c,"button--switcher-brand":"switcher-brand"===c,"button--tabs":"tabs"===c,"button--alert":"alert"===c,"button--icon":"icon"===c,"button--action":"action"===c,"button--tiny":"tiny"===s,"button--small":"small"===s,"button--medium":"medium"===s,"button--large":"large"===s,"button--input":"input"===s,"button--center":"center"===p,"button--left":"left"===p,"button--right":"right"===p,"button--svg":!0===v,"button--hide":!0===w,"button--fit-width":!0===O});return r().createElement(e,{className:"button"===e?d("button",x,n):d(_?["button",x]:"link",n),disabled:m?"disabled":void 0,href:"a"===e?u:void 0,onClick:b,target:"a"===e?f:void 0,title:"a"===e?o:void 0,type:"button"===e?i:void 0},y&&r().createElement(l.default,null),!y&&r().createElement(r().Fragment,null,h),g&&r().createElement(a(),null))};p.displayName="Button",p.propTypes={tag:s().oneOfType([s().string,s().element]),children:s().node.isRequired,type:s().oneOf(["button","submit","reset"]),title:s().oneOfType([s().string,s().object]),target:s().oneOf(["_self","_blank","_parent","_top"]),size:s().oneOf(["tiny","small","medium","large","input"]),variant:s().oneOf(["primary","secondary","dropdown","transparent","icon","alert","clean","tabs","transparent-blue","dropdown-element","switcher-brand","switcher"]),align:s().oneOf(["left","center","right"]),className:s().oneOfType([s().string,s().array]),href:s().string,isDisabled:s().bool,isLoading:s().bool,onClick:s().func,hasBackgoundRipple:s().bool,hasIcon:s().bool,hide:s().bool,buttonStyle:s().bool,id:s().string},p.defaultProps={tag:"button",title:void 0,type:"button",href:void 0,target:void 0,className:"button",size:"medium",align:null,variant:"primary",isLoading:!1,isDisabled:!1,onClick:function(){},hasBackgoundRipple:!0,hasIcon:!1,hide:!1,buttonStyle:!1,fitWidth:!1,id:null};var f=p},3224:function(t,n,e){"use strict";function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var o,r,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(o=e.next()).done)&&(i.push(o.value),!n||i.length!==n);a=!0);}catch(t){u=!0,r=t}finally{try{a||null==e.return||e.return()}finally{if(u)throw r}}return i}}(t,n)||function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.r(n),e.d(n,{default:function(){return h}});var i=e(8156),a=e.n(i),u=e(5697),s=e.n(u),c=e(8986),l=e(7625),d=e(2106),p=(0,e(1886).W)({"text--truncate":"ShowPassword__text--truncate",showpassword:"ShowPassword__showpassword"}),f=function(t){var n=t.className,e=t.setHidden,o=t.hasLabel,u=r((0,i.useState)("eye"),2),s=u[0],f=u[1],h=r((0,i.useState)("word.show"),2),b=h[0],y=h[1],m=(0,i.useCallback)((function(){"eye"===s?(f("eye-slash"),e("text"),y("word.hide")):(f("eye"),e("password"),y("word.show"))}));return a().createElement("span",{className:p(n),onClick:m},o?a().createElement(c.default,{hasIcon:!0,size:"tiny",variant:"switcher-brand"},a().createElement(l.G,{icon:s}),a().createElement(d.Z,{id:b})):a().createElement(c.default,{variant:"icon"},a().createElement(l.G,{icon:s})))};f.displayName="ShowPassword",f.propTypes={className:s().oneOfType([s().string,s().array]),setHidden:s().func,hasLabel:s().bool},f.defaultProps={className:"showpassword",setHidden:function(){return null},hasLabel:!1};var h=f},8124:function(t,n,e){"use strict";e.d(n,{default:function(){return d}});var o=e(8156),r=e.n(o),i=e(5697),a=e.n(i),u=e(1886),s=e(7625),c=(0,u.W)({"text--truncate":"Spinner__text--truncate"}),l=function(t){var n=t.className;return r().createElement("div",{className:c(n)},r().createElement(s.G,{icon:"spinner",spin:!0}))};l.displayName="Spinner",l.propTypes={className:a().oneOfType([a().string,a().array])},l.defaultProps={className:"spinner__spin"};var d=l},1886:function(t,n,e){"use strict";e.d(n,{W:function(){return i}});var o=e(7166),r=e.n(o),i=function(t){return r().bind(t)}},8156:function(n){"use strict";n.exports=t}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var i=o[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,n=[],r.O=function(t,e,o,i){if(!e){var a=1/0;for(l=0;l<n.length;l++){e=n[l][0],o=n[l][1],i=n[l][2];for(var u=!0,s=0;s<e.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[s])}))?e.splice(s--,1):(u=!1,i<a&&(a=i));if(u){n.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[e,o,i]},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t={9910:0,5939:0,1483:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,i,a=e[0],u=e[1],s=e[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(s)var l=s(r)}for(n&&n(e);c<a.length;c++)i=a[c],r.o(t,i)&&t[i]&&t[i][0](),t[a[c]]=0;return r.O(l)},e=self.webpackChunk_landingi_landingi_ui_kit=self.webpackChunk_landingi_landingi_ui_kit||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var i=r.O(void 0,[5963,8580],(function(){return r(3224)}));return r.O(i)}()}));
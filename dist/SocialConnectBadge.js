!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports["@landingi/landingi-ui-kit"]=n(require("react")):t["@landingi/landingi-ui-kit"]=n(t.react)}(self,(function(t){return function(){var n,e={8679:function(t,n,e){"use strict";var o=e(9864),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function c(t){return o.isMemo(t)?a:u[t.$$typeof]||r}u[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[o.Memo]=a;var s=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,b=Object.prototype;t.exports=function t(n,e,o){if("string"!=typeof e){if(b){var r=f(e);r&&r!==b&&t(n,r,o)}var a=l(e);d&&(a=a.concat(d(e)));for(var u=c(n),h=c(e),g=0;g<a.length;++g){var m=a[g];if(!(i[m]||o&&o[m]||h&&h[m]||u&&u[m])){var y=p(e,m);try{s(n,m,y)}catch(t){}}}}return n}},5697:function(t,n,e){t.exports=e(2703)()},7954:function(t,n,e){"use strict";var o,r=(o=e(8156))&&"object"==typeof o&&"default"in o?o.default:o,i=!1;"undefined"!=typeof window&&(i="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch);var a=i,u={borderRadius:"inherit",height:"100%",left:0,position:"absolute",top:0,width:"100%"};function c(t,n,e,o){return e*((t=t/o-1)*t*t*t*t+1)+n}var s=Math.sqrt(2),l=Math.cos,d=Math.max,p=Math.min;function f(t){return p(t.duration,Date.now()-t.mouseDown)}function b(t){return 0<t.mouseUp?Date.now()-t.mouseUp:0}function h(t){var n=t.duration,e=t.radius,o=.85*c(f(t),0,e,n),r=.15*c(b(t),0,e,n),i=.02*e*l(Date.now()/n);return d(0,o+r+i)}function g(t,n,e){return e||p(.6*d(t,n))}function m(t,n){return c(b(t),n,-n,t.duration)}function y(t,n){return p(m(t,n),c(f(t),0,.3,3*t.duration))}function v(t,n,e){return p(1,h(t)/n*2/s)*(e/2-t.x)}function _(t,n,e){return p(1,h(t)/n*2/s)*(e/2-t.y)}function w(t){return h(t)/t.radius}var B=function(t){var n=t.mouseUp,e=t.duration;return!n||Date.now()-n<e};function O(t){var n,e=[],o=!1,r={each:function(t,n){for(var o=0,r=e.length;o<r;o++)t.call(n,e[o])},play:function(){o||(o=!0,r.update())},stop:function(){o=!1,cancelAnimationFrame(n)},getTotalOpacity:function(t){for(var n=0,o=0,r=e.length;o<r;o++)n+=y(e[o],t);return n},update:function(){(e=e.filter(B)).length?n=requestAnimationFrame(r.update):r.stop(),t()},add:function(t){e.push(t),r.play()},release:function(t){for(var n=e.length-1;0<=n;n--)if(!e[n].mouseUp)return e[n].mouseUp=t}};return r}function x(){for(var t=arguments,n={},e=0;e<arguments.length;e++){var o=t[e];if(o)for(var r in o)n[r]=o[r]}return n}var k=2*Math.PI,P={background:!0,className:"ink",duration:1e3,opacity:.25,recenter:!0,hasTouch:a},S=function(t){function n(n){t.apply(this,arguments),this.state={color:"transparent",density:1,height:0,store:O(this.tick.bind(this)),width:0},this.touchEvents=this.touchEvents()}return t&&(n.__proto__=t),((n.prototype=Object.create(t&&t.prototype)).constructor=n).prototype.touchEvents=function(){return this.props.hasTouch?{onTouchStart:this.t.bind(this),onTouchEnd:this.n.bind(this),onTouchCancel:this.n.bind(this)}:{onMouseDown:this.t.bind(this),onMouseUp:this.n.bind(this),onMouseLeave:this.n.bind(this)}},n.prototype.tick=function(){var t=this.state,n=t.ctx,e=t.color,o=t.density,r=t.height,i=t.width,a=t.store;n.save(),n.scale(o,o),n.clearRect(0,0,i,r),n.fillStyle=e,this.props.background&&(n.globalAlpha=a.getTotalOpacity(this.props.opacity),n.fillRect(0,0,i,r)),a.each(this.makeBlot,this),n.restore()},n.prototype.makeBlot=function(t){var n=this.state,e=n.ctx,o=n.height,r=n.width,i=t.x,a=t.y,u=t.radius;if(e.globalAlpha=m(t,this.props.opacity),e.beginPath(),this.props.recenter){var c=Math.max(o,r);i+=v(t,c,r),a+=_(t,c,o)}e.arc(i,a,u*w(t),0,k),e.closePath(),e.fill()},n.prototype.componentWillUnmount=function(){this.state.store.stop()},n.prototype.pushBlot=function(t,n,e){var o=this,r=this.canvas;r.getDOMNode&&"function"==typeof r.getDOMNode&&(r=r.getDOMNode());var i=r.getBoundingClientRect(),a=i.top,u=i.bottom,c=i.left,s=i.right,l=window.getComputedStyle(r).color,d=this.state.ctx||r.getContext("2d"),p=function(t){return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}(d),f=u-a,b=s-c,h=g(f,b,this.props.radius);this.setState({color:l,ctx:d,density:p,height:f,width:b},(function(){o.state.store.add({duration:o.props.duration,mouseDown:t,mouseUp:0,radius:h,x:n-c,y:e-a})}))},n.prototype.setCanvas=function(t){this.canvas=t},n.prototype.render=function(){var t=this.state,n=t.density,e=t.height,o=t.width,i=this.props,a=i.className,c=i.style,s=x({className:a,ref:this.setCanvas.bind(this),height:e*n,width:o*n,onDragOver:this.n,style:x(u,c)},this.touchEvents);return r.createElement("canvas",s)},n.prototype.t=function(t){var n=t.button,e=t.ctrlKey,o=t.clientX,r=t.clientY,i=t.changedTouches,a=Date.now();if(i)for(var u=0;u<i.length;u++){var c=i[u],s=c.clientX,l=c.clientY;this.pushBlot(a,s,l)}else 0!==n||e||this.pushBlot(a,o,r)},n.prototype.n=function(){this.state.store.release(Date.now())},n}(r.PureComponent);S.defaultProps=P,t.exports=S},4806:function(t,n,e){"use strict";e.d(n,{_y:function(){return i}});var o=e(8156);e(8679);var r=o.createContext(null),i=(r.Consumer,r.Provider,r)},8986:function(t,n,e){"use strict";e.d(n,{default:function(){return f}});var o=e(8156),r=e.n(o),i=e(7954),a=e.n(i),u=e(5697),c=e.n(u),s=e(1886),l=e(8124),d=(0,s.W)({"text--truncate":"Button__text--truncate",button:"Button__button","button--primary":"Button__button--primary","button--alert":"Button__button--alert","button--secondary":"Button__button--secondary","button--hide":"Button__button--hide","button--tiny":"Button__button--tiny","button--small":"Button__button--small","button--medium":"Button__button--medium","button--large":"Button__button--large","button--fit-width":"Button__button--fit-width","button--dropdown":"Button__button--dropdown","button--dropdown-element":"Button__button--dropdown-element","button--transparent":"Button__button--transparent","button--transparent-blue":"Button__button--transparent-blue","button--tabs":"Button__button--tabs","button--icon":"Button__button--icon","button--svg":"Button__button--svg","button--switcher":"Button__button--switcher","button--center":"Button__button--center","button--left":"Button__button--left","button--right":"Button__button--right","button--input":"Button__button--input","button--action":"Button__button--action",link:"Button__link"}),p=function(t){var n=t.className,e=t.tag,o=t.title,i=t.type,u=t.href,c=t.size,s=t.variant,p=t.align,f=t.target,b=t.children,h=t.onClick,g=t.isLoading,m=t.isDisabled,y=t.hasBackgoundRipple,v=t.hasIcon,_=t.hide,w=t.buttonStyle,B=(t.id,t.fitWidth),O=d({"button--primary":"primary"===s,"button--secondary":"secondary"===s,"button--dropdown":"dropdown"===s,"button--transparent":"transparent"===s,"button--transparent-blue":"transparent-blue"===s,"button--dropdown-element":"dropdown-element"===s,"dropdown button--switcher":"switcher"===s,"button--switcher-brand":"switcher-brand"===s,"button--tabs":"tabs"===s,"button--alert":"alert"===s,"button--icon":"icon"===s,"button--action":"action"===s,"button--tiny":"tiny"===c,"button--small":"small"===c,"button--medium":"medium"===c,"button--large":"large"===c,"button--input":"input"===c,"button--center":"center"===p,"button--left":"left"===p,"button--right":"right"===p,"button--svg":!0===v,"button--hide":!0===_,"button--fit-width":!0===B});return r().createElement(e,{className:"button"===e?d("button",O,n):d(w?["button",O]:"link",n),disabled:m?"disabled":void 0,href:"a"===e?u:void 0,onClick:h,target:"a"===e?f:void 0,title:"a"===e?o:void 0,type:"button"===e?i:void 0},g&&r().createElement(l.default,null),!g&&r().createElement(r().Fragment,null,b),y&&r().createElement(a(),null))};p.displayName="Button",p.propTypes={tag:c().oneOfType([c().string,c().element]),children:c().node.isRequired,type:c().oneOf(["button","submit","reset"]),title:c().oneOfType([c().string,c().object]),target:c().oneOf(["_self","_blank","_parent","_top"]),size:c().oneOf(["tiny","small","medium","large","input"]),variant:c().oneOf(["primary","secondary","dropdown","transparent","icon","alert","clean","tabs","transparent-blue","dropdown-element","switcher-brand","switcher"]),align:c().oneOf(["left","center","right"]),className:c().oneOfType([c().string,c().array]),href:c().string,isDisabled:c().bool,isLoading:c().bool,onClick:c().func,hasBackgoundRipple:c().bool,hasIcon:c().bool,hide:c().bool,buttonStyle:c().bool,id:c().string},p.defaultProps={tag:"button",title:void 0,type:"button",href:void 0,target:void 0,className:"button",size:"medium",align:null,variant:"primary",isLoading:!1,isDisabled:!1,onClick:function(){},hasBackgoundRipple:!0,hasIcon:!1,hide:!1,buttonStyle:!1,fitWidth:!1,id:null};var f=p},1915:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return f}});var o=e(8156),r=e.n(o),i=e(5697),a=e.n(i),u=e(1886),c=e(8986),s=e(7625),l=e(2106),d=(0,u.W)({"text--truncate":"SocialConnectBadge__text--truncate","social-connect-badge":"SocialConnectBadge__social-connect-badge","social-connect-badge-facebook--connect":"SocialConnectBadge__social-connect-badge-facebook--connect","social-connect-badge-facebook--disconnect":"SocialConnectBadge__social-connect-badge-facebook--disconnect","social-connect-badge-google--connect":"SocialConnectBadge__social-connect-badge-google--connect","social-connect-badge-google--disconnect":"SocialConnectBadge__social-connect-badge-google--disconnect"}),p=function(t){var n=t.className,e=t.variant,o=t.social;return r().createElement("div",{className:d(n,"social-connect-badge-".concat(o,"--").concat(e))},r().createElement(c.default,{hasIcon:!0,size:"medium"},r().createElement(s.G,{icon:["fab","".concat(o)]}),r().createElement("span",null,"connect"===e?r().createElement(l.Z,{id:"word.connect"}):r().createElement(l.Z,{id:"word.disconnect"}),r().createElement("span",null,o),r().createElement(l.Z,{id:"word.account"}))))};p.displayName="Social connect badge",p.propTypes={className:a().string,variant:a().oneOf(["connect","disconnect"]).isRequired,social:a().oneOf(["google","facebook"]).isRequired},p.defaultProps={className:"social-connect-badge"};var f=p},8124:function(t,n,e){"use strict";e.d(n,{default:function(){return d}});var o=e(8156),r=e.n(o),i=e(5697),a=e.n(i),u=e(1886),c=e(7625),s=(0,u.W)({"text--truncate":"Spinner__text--truncate"}),l=function(t){var n=t.className;return r().createElement("div",{className:s(n)},r().createElement(c.G,{icon:"spinner",spin:!0}))};l.displayName="Spinner",l.propTypes={className:a().oneOfType([a().string,a().array])},l.defaultProps={className:"spinner__spin"};var d=l},1886:function(t,n,e){"use strict";e.d(n,{W:function(){return i}});var o=e(7166),r=e.n(o),i=function(t){return r().bind(t)}},8156:function(n){"use strict";n.exports=t}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var i=o[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,n=[],r.O=function(t,e,o,i){if(!e){var a=1/0;for(l=0;l<n.length;l++){e=n[l][0],o=n[l][1],i=n[l][2];for(var u=!0,c=0;c<e.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[c])}))?e.splice(c--,1):(u=!1,i<a&&(a=i));if(u){n.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[e,o,i]},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t={2205:0,5939:0,1483:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,i,a=e[0],u=e[1],c=e[2],s=0;if(a.some((function(n){return 0!==t[n]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var l=c(r)}for(n&&n(e);s<a.length;s++)i=a[s],r.o(t,i)&&t[i]&&t[i][0](),t[a[s]]=0;return r.O(l)},e=self.webpackChunk_landingi_landingi_ui_kit=self.webpackChunk_landingi_landingi_ui_kit||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var i=r.O(void 0,[5963,8580],(function(){return r(1915)}));return r.O(i)}()}));
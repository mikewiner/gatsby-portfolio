(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/eHF":function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function a(e,t){var n=t.distance,i=t.left,a=t.right,o=t.up,r=t.down,s=t.top,c=t.bottom,d=t.big,u=t.mirror,p=t.opposite,f=(n?n.toString():0)+((i?1:0)|(a?2:0)|(s||r?4:0)|(c||o?8:0)|(u?16:0)|(p?32:0)|(e?64:0)|(d?128:0));if(h.hasOwnProperty(f))return h[f];var m=i||a||o||r||s||c,v=void 0,w=void 0;if(m){if(!u!=!(e&&p)){var y=[a,i,c,s,r,o];i=y[0],a=y[1],s=y[2],c=y[3],o=y[4],r=y[5]}var b=n||(d?"2000px":"100%");v=i?"-"+b:a?b:"0",w=r||s?"-"+b:o||c?b:"0"}return h[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+w+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),h[f]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,o=(e.out,e.forever),r=e.timeout,s=e.duration,c=void 0===s?l.defaults.duration:s,u=e.delay,h=void 0===u?l.defaults.delay:u,p=e.count,f=void 0===p?l.defaults.count:p,m=i(e,["children","out","forever","timeout","duration","delay","count"]),v={make:a,duration:void 0===r?c:r,delay:h,forever:o,count:f,style:{animationFillMode:"both"},reverse:m.left};return t?(0,d.default)(m,v,v,n):v}n("HAE/"),n("a1Th"),n("h7Nl"),n("Btvt"),n("nIY7"),n("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var r,s=n("17x9"),l=n("ar19"),c=n("eH+L"),d=(r=c)&&r.__esModule?r:{default:r},u={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},h={};o.propTypes=u,t.default=o,e.exports=t.default},"28nh":function(e,t,n){"use strict";n("KKXr"),n("bWfx"),n("2Spj"),n("91GP"),n("LK8F"),n("rGqo"),n("rE2o"),n("ioFf"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n("q1tI"),c=(i=l)&&i.__esModule?i:{default:i},d=n("17x9"),u=n("ar19"),h=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),p={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:h.isRequired,outEffect:(0,d.oneOfType)([h,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,u.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,a=n.forever,o=n.count,r=n.delay,s=n.duration;if(!a){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),r+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),a=this.isOn?this.getDimensionValue():0,o=void 0,r=void 0;if(t.collapseOnly)o=n.duration/3,r=n.delay;else{var s=i>>2,l=s>>1;o=s,r=n.delay+(this.isOn?0:i-s-l),e.style.animationDuration=i-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:a,transition:"height "+o+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,a=void 0;e.collapseOnly?a={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),a={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(a,e,n):a),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=i.duration,s=i.reverse,l=n.length,d=2*o;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),o=d/2);var h=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":a(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(s?h--:h++,0,l,o,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===a(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,a=i.style,o=i.className,s=i.children,l=this.props.disabled?o:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),d=r({},a,{opacity:1})):d=this.props.disabled?a:r({},a,this.state.style);var h=r({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:d},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,h,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),a=Math.min(n,window.innerHeight)*(u.globalHide?e.fraction:0);return i>a-window.innerHeight&&i<n-a}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);m.propTypes=p,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=f,m.displayName="RevealBase",t.default=m,e.exports=t.default},"2hOx":function(e,t,n){},"HAE/":function(e,t,n){var i=n("XKFU");i(i.S+i.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},KKax:function(e,t,n){e.exports=n.p+"static/Fake-resume-11d0258a93408316debfbf26d30415cd.pdf"},LbRr:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("q1tI"),a=n.n(i);function o(e){return a.a.createElement("h1",null,e.headerText)}},OGtf:function(e,t,n){var i=n("XKFU"),a=n("eeVq"),o=n("vhPU"),r=/"/g,s=function(e,t,n,i){var a=String(o(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(i).replace(r,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),i(i.P+i.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},RMg3:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("q1tI"),a=n.n(i),o=n("Wbzz");function r(){return a.a.createElement("header",{className:"pb5 white"},a.a.createElement("ul",{className:""},a.a.createElement("li",null,a.a.createElement(o.Link,{className:"br3",to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(o.Link,{className:"br3",to:"#about"},"About Me")),a.a.createElement("li",null,a.a.createElement(o.Link,{className:"br3",to:"#portfolio"},"Portfolio")),a.a.createElement("li",{className:"push"},a.a.createElement(o.Link,{className:"br3",to:"#contact"},"Contact"))))}},RXBc:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),o=n("crMl"),r=n.n(o),s=n("RMg3"),l=n("VvEo"),c=n("Zce4"),d=n("/eHF"),u=n.n(d),h=function(){var e={name:"Michael Winer",subtitle:"Developer, Snowboarder, Japanese etc",cta:"Find out more here"},t=e.title,n=e.name,i=e.subtitle,o=e.cta;return a.a.createElement(c.a,null,a.a.createElement(u.a,{duration:3e3,delay:1e3,distance:"30px"},a.a.createElement("h1",{className:"hero-title"},t||"Hi, my name is"," ",a.a.createElement("span",{className:"text-color-main"},n),a.a.createElement("br",null),i||"I'm the Unknown Developer.")),a.a.createElement(u.a,{duration:3e3,delay:2e3,distance:"30px"},a.a.createElement("p",{className:"hero-cta"},a.a.createElement("a",{className:"cta-btn cta-btn--hero",href:"#contact"},o||"Know more"))))},p=n("LbRr"),f=n("lX9O"),m=n.n(f),v="Hi my name is Michael, I am a developer, snowboarder, lover of japanese and japan. I’ve graduated from University of Guelph with a degree in Theoretical Physics and since then I have spent my time traveling, learning and exploring! I’ve lived in a lot of different places, like Toronto, Whistler, Fernie, Hokkaido, Okinawa, London and more! I’ve also tried my hand at many different jobs like Astrophysics Researcher, Tennis Instructor, English Teacher, Snowboard Instructor, Hostel Staff and more! If you would like to know more about my life’s adventures check out my Travel Blog ",w="https://mikebackpacker.wordpress.com";function y(){return a.a.createElement(c.a,{className:""},a.a.createElement("div",{className:"flex items-center"},a.a.createElement(u.a,{className:"",duration:8e3,delay:500,distance:"30px"},a.a.createElement("div",{className:"w-50 shadow-1 fl pr3"},a.a.createElement(p.a,{headerText:"I am Michael!"}),a.a.createElement("p",null,v,a.a.createElement("a",{href:w}," here!"))),a.a.createElement("div",{className:"ma3 mr0 w-50 fl"},a.a.createElement("img",{className:"shadow-2 tc",src:m.a,alt:"Profile",width:"300px"})))))}function b(){return a.a.createElement(c.a,null,a.a.createElement(u.a,{duration:3e3,delay:500,distance:"30px"},a.a.createElement("div",{className:"bg-white"},a.a.createElement(p.a,{headerText:"Contact"}),a.a.createElement("p",null,"Find me on github ",a.a.createElement("a",{href:"https://github.com/mikewiner"},"Click here.")),a.a.createElement("p",null,"Or my email winer.mike@gmail.com"))))}function E(){return a.a.createElement(c.a,{id:"portfolio",style:{color:"black"}},a.a.createElement(u.a,{duration:3e3,delay:500,distance:"30px"},a.a.createElement(p.a,{headerText:"Portfolio"}),a.a.createElement("p",{className:""},"You can find my portfolio at Github"),a.a.createElement("a",{href:"https://github.com/mikewiner"},"Click here.")))}var g=n("KKax"),O=n.n(g);n("2hOx"),t.default=function(){return a.a.createElement("div",{className:""},a.a.createElement(s.a,null),a.a.createElement("section",{id:"intro",className:"pa3 center"},a.a.createElement(c.a,null,a.a.createElement(u.a,{className:"jumbotron",duration:3e3,delay:500,distance:"30px"},a.a.createElement("div",{className:"flex items-center"},a.a.createElement("div",{className:"w-50 shadow-1"},a.a.createElement("h1",null,"Michael's Portfolio and Blog"),a.a.createElement("p",null,"Hello welcome to my site! Click my face for my ",a.a.createElement("b",null,"resume"))),a.a.createElement("div",{className:"w50 center"},a.a.createElement("a",{href:O.a,alt:"/resume"},a.a.createElement("img",{className:"shadow-2 b3 grow",src:r.a,alt:"Michael in Osaka",width:"250px"}))))))),a.a.createElement("section",{id:"hero",className:"pa3 ma3 center"},a.a.createElement(h,null)),a.a.createElement("section",{id:"about",className:"pa3 ma3 center"},a.a.createElement(y,null)),a.a.createElement("section",{id:"portfolio",className:"pa3 ma3 center"},a.a.createElement(E,null)),a.a.createElement("section",{id:"contact",className:"pa3 ma3 center"},a.a.createElement(b,null)),a.a.createElement(l.a,null))}},VvEo:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("q1tI"),a=n.n(i);function o(){return a.a.createElement("footer",null,a.a.createElement("a",{className:"tc link near-black hover-silver dib h2 w2 mr3",href:"https://github.com/mikewiner",title:"GitHub"},a.a.createElement("svg",{width:"28px",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},a.a.createElement("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"}))),a.a.createElement("a",{className:"tc link hover-silver near-black dib h2 w2 mr3",href:"https://www.instagram.com/michaellwiner/",title:"Instagram"},a.a.createElement("svg",{width:"28px",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},a.a.createElement("path",{d:"M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"}))))}},Zce4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("q1tI"),a=n.n(i);function o(e){return a.a.createElement("div",{className:"bg-white fl tc shadow-2 br2 pa3"},e.children)}},ar19:function(e,t,n){"use strict";function i(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function a(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",a,!0),i("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}n("eM6i"),n("V+eJ"),n("f3/d"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,a){var o=Math.log(i),r=(Math.log(a)-o)/(n-t);return Math.exp(o+r*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(m+h)+"{"+e+"}",n=p[e];return n?""+m+n:(f.insertRule(t,f.cssRules.length),p[e]=h,""+m+h++)},t.hideAll=a,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=r=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),h=1,p={},f=!1,m=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(c,1500),s||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},crMl:function(e,t,n){e.exports=n.p+"static/Mike-In-Osaka-67b8ff2ded68a2b7ba64dc0a3ae53a5e.jpg"},"eH+L":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}n("91GP"),n("HAE/"),n("bWfx"),Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),o.default.Children.count(i)<2?o.default.createElement(r.default,a({},e,{inEffect:t,outEffect:n,children:i})):(i=o.default.Children.map(i,(function(i){return o.default.createElement(r.default,a({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,i):o.default.createElement("span",null,i))};var o=i(n("q1tI")),r=i(n("28nh"));e.exports=t.default},h7Nl:function(e,t,n){var i=Date.prototype,a=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(i,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},lX9O:function(e,t,n){e.exports=n.p+"static/DevProPic1-1e73e51942f802455b5e22745696d109.jpg"},nIY7:function(e,t,n){"use strict";n("OGtf")("big",(function(e){return function(){return e(this,"big","","")}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-7b6490da3776e59d999b.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7003],{9307:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(7294);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a="undefined"!==typeof n.g&&"[object global]"==={}.toString.call(n.g);function u(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function s(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function c(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function l(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(c(r))return"https://vimeo.com/".concat(r);if(l(r))return r.replace("http:","https:");if(t)throw new TypeError("\u201c".concat(t,"\u201d is not a valid video id."));throw new TypeError("\u201c".concat(r,"\u201d is not a vimeo.com url."))}var d="undefined"!==typeof Array.prototype.indexOf,h="undefined"!==typeof window&&"undefined"!==typeof window.postMessage;if(!a&&(!d||!h))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var p="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),r(e.prototype,"get",(function(e){if(n(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:p);var y,v=(function(e){var t,n,r;r=function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(v){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)s(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function s(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(v){n.reject(v)}}function c(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i((function(){var r=new d(n);try{t.call(e,(function(){c.apply(r,arguments)}),(function(){l.apply(r,arguments)}))}catch(v){l.call(r,v)}})):(n.msg=e,n.state=1,n.chain.length>0&&i(u,n))}catch(v){l.call(new d(n),v)}}}function l(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function f(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function d(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&i(u,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){c.call(t,e)}),(function(e){l.call(t,e)}))}catch(v){l.call(t,v)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var y=e({},"constructor",p,!1);return p.prototype=y,e(y,"__NPO__",0,!1),e(p,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(p,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(p,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;f(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(p,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),r)}))})),p},(n=p)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])}(y={exports:{}},y.exports),y.exports),m=new WeakMap;function g(e,t,n){var r=m.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),m.set(e.element,r)}function w(e,t){return(m.get(e.element)||{})[t]||[]}function b(e,t,n){var r=m.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],m.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),m.set(e.element,r),r[t]&&0===r[t].length}function k(e,t){var n=m.get(e);m.set(t,n),m.delete(e)}var E=["autopause","autoplay","background","byline","color","controls","dnt","height","id","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return E.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function T(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!l(e))throw new TypeError("\u201c".concat(e,"\u201d is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return T(t,n),void o(new Error("\u201c".concat(e,"\u201d is not embeddable.")));r(t)}catch(i){o(i)}else o(new Error("\u201c".concat(e,"\u201d is not embeddable.")));else o(new Error("\u201c".concat(e,"\u201d was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}function _(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function N(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function F(e,t){var n,r=[];if((t=_(t)).event){if("error"===t.event)w(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),b(e,t.data.method,n)}));r=w(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=w(e,t);if(n.length<1)return!1;var r=n.shift();return b(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"===typeof t)return void t.call(e,n);t.resolve(n)}catch(r){}}))}var M=new WeakMap,x=new WeakMap,S={},j=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!==typeof document&&"string"===typeof t&&(t=document.getElementById(t)),!s(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var i=t.querySelector("iframe");i&&(t=i)}if("IFRAME"===t.nodeName&&!l(t.getAttribute("src")||""))throw new Error("The player element passed isn\u2019t a Vimeo embed.");if(M.has(t))return M.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var a=new v((function(e,o){if(n._onMessage=function(t){if(l(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=_(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void o(i)}var a=r&&"ready"===r.event,u=r&&"ping"===r.method;if(a||u)return n.element.setAttribute("data-ready","true"),void e();F(n,r)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=P(t,r);C(f(i),i,t).then((function(e){var r=T(e,t);return n.element=r,n._originalElement=t,k(t,r),M.set(n.element,n),e})).catch(o)}}));if(x.set(this,a),M.set(this.element,this),"IFRAME"===this.element.nodeName&&N(this,"ping"),S.isEnabled){var u=function(){return S.exit()};this.fullscreenchangeHandler=function(){S.isFullscreen?g(n,"event:exitFullscreen",u):b(n,"event:exitFullscreen",u),n.ready().then((function(){N(n,"fullscreenchange",S.isFullscreen)}))},S.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n,r;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new v((function(r,o){return t.ready().then((function(){g(t,e,{resolve:r,reject:o}),N(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new v((function(n,r){return e=u(e,"get"),t.ready().then((function(){g(t,e,{resolve:n,reject:r}),N(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new v((function(r,o){if(e=u(e,"set"),void 0===t||null===t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){g(n,e,{resolve:r,reject:o}),N(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!==typeof t)throw new TypeError("The callback must be a function.");0===w(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),g(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!==typeof t)throw new TypeError("The callback must be a function.");b(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=x.get(this)||new v((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return v.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return S.isEnabled?S.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return S.isEnabled?S.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return S.isEnabled?v.resolve(S.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new v((function(t){if(x.delete(e),M.delete(e.element),e._originalElement&&(M.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),S.isEnabled&&S.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&i(t.prototype,n),r&&i(t,r),e}();a||(S=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=P(e);C(f(t),t,e).then((function(t){return T(t,e)})).catch(n)}catch(r){n(r)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(l(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}());var I=j;function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O={play:"onPlay",pause:"onPause",ended:"onEnd",timeupdate:"onTimeUpdate",progress:"onProgress",seeked:"onSeeked",texttrackchange:"onTextTrackChange",cuechange:"onCueChange",cuepoint:"onCuePoint",volumechange:"onVolumeChange",playbackratechange:"onPlaybackRateChange",error:"onError",loaded:"onLoaded"},V=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).refContainer=n.refContainer.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,R(t,n);var i=o.prototype;return i.componentDidMount=function(){this.createPlayer()},i.componentDidUpdate=function(e){var t=this,n=Object.keys(this.props).filter((function(n){return t.props[n]!==e[n]}));this.updateProps(n)},i.componentWillUnmount=function(){this.player.destroy()},i.getInitialOptions=function(){return{id:this.props.video,width:this.props.width,height:this.props.height,autopause:this.props.autopause,autoplay:this.props.autoplay,byline:this.props.showByline,color:this.props.color,controls:this.props.controls,loop:this.props.loop,portrait:this.props.showPortrait,title:this.props.showTitle,muted:this.props.muted,background:this.props.background,responsive:this.props.responsive,dnt:this.props.dnt,speed:this.props.speed}},i.updateProps=function(e){var t=this,n=this.player;e.forEach((function(e){var r=t.props[e];switch(e){case"autopause":n.setAutopause(r);break;case"color":n.setColor(r);break;case"loop":n.setLoop(r);break;case"volume":n.setVolume(r);break;case"paused":n.getPaused().then((function(e){return r&&!e?n.pause():!r&&e?n.play():null}));break;case"width":case"height":n.element[e]=r;break;case"video":if(r){var o=t.props.start,i=n.loadVideo(r);"number"===typeof o&&i.then((function(){n.setCurrentTime(o)}))}else n.unload()}}))},i.createPlayer=function(){var e=this,t=this.props,n=t.start,r=t.volume;this.player=new I(this.container,this.getInitialOptions()),Object.keys(O).forEach((function(t){var n=O[t];e.player.on(t,(function(t){var r=e.props[n];r&&r(t)}))}));var o=this.props,i=o.onError,a=o.onReady;this.player.ready().then((function(){a&&a(e.player)}),(function(e){if(!i)throw e;i(e)})),"number"===typeof n&&this.player.setCurrentTime(n),"number"===typeof r&&this.updateProps(["volume"])},i.refContainer=function(e){this.container=e},i.render=function(){var e=this.props,t=e.id,n=e.className,o=e.style;return r.createElement("div",{id:t,className:n,style:o,ref:this.refContainer})},o}(r.Component);V.defaultProps={autopause:!0,autoplay:!1,showByline:!0,controls:!0,loop:!1,showPortrait:!0,showTitle:!0,muted:!1,background:!1,responsive:!1,dnt:!1,speed:!1};var A=V},552:function(e,t,n){"use strict";var r=n(7294),o=n(7298),i=n.n(o);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=["onReady","onStateChange","onPlaybackQualityChange","onPlaybackRateChange","onError","onApiChange"];var s=null;function c(){return s||(s=new Promise((function(e,t){"object"!==typeof window.YT||"function"!==typeof window.YT.ready?i()("https://www.youtube.com/iframe_api",(function(n){n?t(n):window.YT.ready((function(){e(window.YT)}))})):window.YT.ready((function(){e(window.YT)}))}))),s}var l=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).onPlayerReady=n.onPlayerReady.bind(a(n)),n.onPlayerStateChange=n.onPlayerStateChange.bind(a(n)),n.refContainer=n.refContainer.bind(a(n)),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=o.prototype;return i.componentDidMount=function(){this.createPlayer()},i.componentDidUpdate=function(e){var t=this,n=Object.keys(this.props).filter((function(n){return t.props[n]!==e[n]}));this.updateProps(n)},i.componentWillUnmount=function(){this.playerInstance&&this.playerInstance.destroy()},i.onPlayerReady=function(e){var t=this.props,n=t.volume,r=t.muted,o=t.suggestedQuality,i=t.playbackRate;"undefined"!==typeof n&&e.target.setVolume(100*n),"undefined"!==typeof r&&(r?e.target.mute():e.target.unMute()),"undefined"!==typeof o&&e.target.setPlaybackQuality(o),"undefined"!==typeof i&&e.target.setPlaybackRate(i),this.resolvePlayer(e.target)},i.onPlayerStateChange=function(e){var t=this.props,n=t.onCued,r=t.onBuffering,o=t.onPause,i=t.onPlaying,a=t.onEnd,u=YT.PlayerState;switch(e.data){case u.CUED:n(e);break;case u.BUFFERING:r(e);break;case u.PAUSED:o(e);break;case u.PLAYING:i(e);break;case u.ENDED:a(e)}},i.getPlayerParameters=function(){return{autoplay:this.props.autoplay,cc_load_policy:this.props.showCaptions?1:0,controls:this.props.controls?1:0,disablekb:this.props.disableKeyboard?1:0,fs:this.props.allowFullscreen?1:0,hl:this.props.lang,iv_load_policy:this.props.annotations?1:3,start:this.props.startSeconds,end:this.props.endSeconds,modestbranding:this.props.modestBranding?1:0,playsinline:this.props.playsInline?1:0,rel:this.props.showRelatedVideos?1:0,showinfo:this.props.showInfo?1:0}},i.getInitialOptions=function(){return{videoId:this.props.video,width:this.props.width,height:this.props.height,playerVars:this.getPlayerParameters(),events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}}},i.updateProps=function(e){var t=this;this.player.then((function(n){e.forEach((function(e){var r=t.props[e];switch(e){case"muted":r?n.mute():n.unMute();break;case"suggestedQuality":n.setPlaybackQuality(r);break;case"volume":n.setVolume(100*r);break;case"paused":r&&2!==n.getPlayerState()?n.pauseVideo():r||2!==n.getPlayerState()||n.playVideo();break;case"id":case"className":case"width":case"height":n.getIframe()[e]=r;break;case"video":if(r){var o=t.props,i={videoId:r,startSeconds:o.startSeconds||0,endSeconds:o.endSeconds};o.autoplay?n.loadVideoById(i):n.cueVideoById(i)}else n.stopVideo()}}))}))},i.createPlayer=function(){var e=this,t=this.props.volume;this.player=c().then((function(t){return new Promise((function(n){e.resolvePlayer=n;var r=new t.Player(e.container,e.getInitialOptions());e.playerInstance=r,u.forEach((function(t){r.addEventListener(t,(function(n){var r=e.props[t];r&&r(n)}))}))}))})),"number"===typeof t&&this.updateProps(["volume"])},i.refContainer=function(e){this.container=e},i.render=function(){var e=this.props,t=e.id,n=e.className,o=e.style;return(0,r.createElement)("div",{id:t,className:n,style:o,ref:this.refContainer})},o}(r.Component);l.defaultProps={autoplay:!1,showCaptions:!1,controls:!0,disableKeyboard:!1,allowFullscreen:!0,annotations:!0,modestBranding:!1,playsInline:!1,showRelatedVideos:!0,showInfo:!0,onCued:function(){},onBuffering:function(){},onPlaying:function(){},onPause:function(){},onEnd:function(){}},t.Z=l},6998:function(e){e.exports=function(e,t){if(void 0==t&&(t={fuzzy:!0}),/youtu\.?be/.test(e)){var n,r=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(n=0;n<r.length;++n)if(r[n].test(e))return r[n].exec(e)[1];if(t.fuzzy){var o=e.split(/[\/\&\?=#\.\s]/g);for(n=0;n<o.length;++n)if(/^[^#\&\?]{11}$/.test(o[n]))return o[n]}}return null}},7298:function(e){e.exports=function(e,t){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,t&&(r.onload=function(){r.onerror=r.onload=null,t(null,r)},r.onerror=function(){r.onerror=r.onload=null,t(new Error("Failed to load "+e),r)});n.appendChild(r)}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195],{7570:function(e,t){"use strict";t.Z=function(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var t="\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xf1\xe7\xb7/_,:;",r=0,o=t.length;r<o;r++)e=e.replace(new RegExp(t.charAt(r),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(r));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},8771:function(e,t,r){"use strict";var o=r(9713);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=i.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a(a({},o),e));var n=o=a(a({},o),t);if(n.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(n.suspense)return r(n);o.loadableGenerated&&delete(o=a(a({},o),o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,l(r,o);delete o.ssr}return r(o)};u(r(7294));var i=u(r(4860));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,r){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=((o=r(7294))&&o.__esModule?o:{default:o}).default.createContext(null);t.LoadableContext=n},4860:function(e,t,r){"use strict";var o=r(4575),n=r(3913),a=r(9713);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,d=(c=r(7294))&&c.__esModule?c:{default:c},_=r(7161),p=r(1083);var g=[],f=[],m=!1;function b(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var h=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return n(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function j(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=d.default.lazy(r.loader));var o=null;function n(){if(!o){var t=new h(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!m&&"function"===typeof r.webpack&&!r.suspense){var a=r.webpack();f.push((function(e){var t,r=l(a);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(-1!==e.indexOf(o))return n()}}catch(i){r.e(i)}finally{r.f()}}))}var i=r.suspense?function(e,t){return d.default.createElement(r.lazy,u(u({},e),{},{ref:t}))}:function(e,t){n();var a=d.default.useContext(p.LoadableContext),i=_.useSubscription(o);return d.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return!r.suspense&&n()},i.displayName="LoadableComponent",d.default.forwardRef(i)}(b,e)}function y(e,t){for(var r=[];e.length;){var o=e.pop();r.push(o(t))}return Promise.all(r).then((function(){if(e.length)return y(e,t)}))}j.preloadAll=function(){return new Promise((function(e,t){y(g).then(e,t)}))},j.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return m=!0,t()};y(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=j.preloadReady;var v=j;t.default=v},5573:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return j},default:function(){return y}});var o=r(4942),n=r(7294),a=r(5152),i=r(5030),u=r(1692),l=r(4711),s=r.n(l),c=r(7570),d=r(5893),_=function(e){var t=e._createdAt,r=e.slug,o=e.author,n=e.featured_image,a=e.tags,l=e.title,_=e.plaintextBody,p=e.estimatedReadingTime,g=a[0].label,f=_.length<=200?_:_.substr(0,_.lastIndexOf(" ",200)),m={internalLink_custom:"/blog".concat("/"==r.current.charAt(0)?r.current:"/".concat(r.current))},b={internalLink_custom:"/blog/author/".concat(o.slug.current)},h={internalLink_custom:"/blog/tag/".concat((0,c.Z)(g))},j=new Date(t);return j=j.toLocaleString("en-US",{day:"numeric",year:"numeric",month:"long"}),(0,d.jsx)("section",{className:"umoja-l-grid-section umoja-u-bg--white",children:(0,d.jsxs)("div",{className:"umoja-l-grid--12 umoja-l-grid-align--center",children:[(0,d.jsx)("div",{className:s().left,children:(0,d.jsx)(u.Z,{link:m,children:(0,d.jsx)(i.Z,{layout:"responsive",objectFit:"cover",src:n})})}),(0,d.jsxs)("div",{className:s().right,children:[(0,d.jsx)(u.Z,{link:h,className:s().tag,children:g}),(0,d.jsx)(u.Z,{link:m,children:(0,d.jsx)("h1",{children:l})}),(0,d.jsx)("p",{className:s().excerpt,children:"".concat(f,"...")}),(0,d.jsx)(u.Z,{link:b,className:s().author,children:o.name}),(0,d.jsxs)("p",{className:s().date,children:[j," | ","".concat(p," Min Read")]})]})]})})},p=r(9317),g=r.n(p),f=function(e){var t=e._createdAt,r=e.slug,o=e.author,n=e.featured_image,a=e.tags,l=e.title,s=e.estimatedReadingTime,_=e.hideAuthor,p=e.hideTag,f=a[0].label,m=r?r.current:"",b={},h={},j={internalLink_custom:"/blog".concat("/"==m.charAt(0)?m:"/".concat(m))};_||(b={internalLink_custom:"/blog/author/".concat(o.slug?o.slug.current:"")}),p||(h={internalLink_custom:"/blog/tag/".concat((0,c.Z)(f))});var y=new Date(t);return y=y.toLocaleString("en-US",{day:"numeric",year:"numeric",month:"long"}),(0,d.jsxs)("div",{className:g().postCard,children:[(0,d.jsx)(u.Z,{link:j,className:g().postCard_image,children:(0,d.jsx)(i.Z,{layout:"fill",objectFit:"cover",src:n})}),(0,d.jsxs)("div",{className:g().postCard_data,children:[!p&&(0,d.jsx)(u.Z,{className:g().postCard_tag,link:h,children:f}),(0,d.jsx)(u.Z,{link:j,children:(0,d.jsx)("h3",{children:l})}),!_&&(0,d.jsx)(u.Z,{link:b,className:g().postCard_author,children:o.name}),(0,d.jsxs)("p",{className:"".concat(g().postCard_date," ").concat(_?g().postCard_date__noAuthor:""),children:[y,s?" | ".concat(s," Min Read"):""]})]})]})};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(0,a.default)((function(){return r.e(4941).then(r.bind(r,4941))}),{loadableGenerated:{webpack:function(){return[4941]},modules:["blog.js -> ../components/Layout"]}}),j=!0,y=function(e){var t=e.posts,r=e.config,o=t[0],a=t.slice(1,13);return(0,d.jsxs)(h,{config:r,children:[(0,d.jsx)(_,b({},o)),(0,d.jsx)("section",{className:"umoja-l-grid-section umoja-u-bg--white",children:(0,d.jsx)("div",{className:"umoja-l-grid--12 umoja-l-grid-gap--row-1",children:a.map((function(e,t){return(0,n.createElement)(f,b(b({},e),{},{key:t}))}))})})]})}},2890:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(5573)}])},4711:function(e){e.exports={"umoja-u-pad-1":"blog-heroHome_umoja-u-pad-1__1aFj5","umoja-u-pad-t--0":"blog-heroHome_umoja-u-pad-t--0__2yGb2","umoja-u-pad-b--0":"blog-heroHome_umoja-u-pad-b--0__2hX2I","umoja-l-grid--12":"blog-heroHome_umoja-l-grid--12__1bVXB","umoja-l-grid--6":"blog-heroHome_umoja-l-grid--6__1a74F","umoja-l-page-width":"blog-heroHome_umoja-l-page-width__1__6H","umoja-l-grid-section":"blog-heroHome_umoja-l-grid-section__1Q-Q6","umoja-l-grid-gap--row-1":"blog-heroHome_umoja-l-grid-gap--row-1__1qo16","umoja-l-grid-gap--row-2":"blog-heroHome_umoja-l-grid-gap--row-2__2uHRT","umoja-l-grid-gap--row-3":"blog-heroHome_umoja-l-grid-gap--row-3__kGVSZ","umoja-l-grid-align--center":"blog-heroHome_umoja-l-grid-align--center__31sOt","umoja-l-grid-align--base":"blog-heroHome_umoja-l-grid-align--base__B8r-h",left:"blog-heroHome_left__3EMpN",right:"blog-heroHome_right__bxPqk",tag:"blog-heroHome_tag__1aSq3",excerpt:"blog-heroHome_excerpt__ts8bV",author:"blog-heroHome_author__3Cy_h"}},9317:function(e){e.exports={"umoja-u-pad-1":"blog-post_umoja-u-pad-1__ZAvSG","umoja-u-pad-t--0":"blog-post_umoja-u-pad-t--0__1dSml","umoja-u-pad-b--0":"blog-post_umoja-u-pad-b--0__2vsew","umoja-l-grid--12":"blog-post_umoja-l-grid--12__3v0BK","umoja-l-grid--6":"blog-post_umoja-l-grid--6__2dBVG","umoja-l-page-width":"blog-post_umoja-l-page-width__28dnW","umoja-l-grid-section":"blog-post_umoja-l-grid-section__2q_BC","umoja-l-grid-gap--row-1":"blog-post_umoja-l-grid-gap--row-1__3p43T","umoja-l-grid-gap--row-2":"blog-post_umoja-l-grid-gap--row-2__b05iT","umoja-l-grid-gap--row-3":"blog-post_umoja-l-grid-gap--row-3__lQ8_H","umoja-l-grid-align--center":"blog-post_umoja-l-grid-align--center__2jRjw","umoja-l-grid-align--base":"blog-post_umoja-l-grid-align--base__1l1Qp",postCard:"blog-post_postCard__i0O-O",postCard_image:"blog-post_postCard_image__3k8eA",postCard_data:"blog-post_postCard_data__2vfn3",postCard_tag:"blog-post_postCard_tag__9RTi-",postCard_author:"blog-post_postCard_author__Y7RjO",postCard_date:"blog-post_postCard_date__hrDMA",postCard_date__noAuthor:"blog-post_postCard_date__noAuthor__F9yyw"}},5152:function(e,t,r){e.exports=r(8771)}},function(e){e.O(0,[9774,9351,2888,179],(function(){return t=2890,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
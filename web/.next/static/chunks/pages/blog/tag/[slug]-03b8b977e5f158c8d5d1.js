(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9694],{1325:function(e,t,r){"use strict";var o=r(5030),a=r(1692),n=r(7570),i=r(9317),u=r.n(i),l=r(5893);t.Z=function(e){var t=e._createdAt,r=e.slug,i=e.author,s=e.featured_image,c=e.tags,d=e.title,g=e.estimatedReadingTime,p=e.hideAuthor,_=e.hideTag,f=c[0].label,m=r?r.current:"",b={},j={},h={internalLink_custom:"blog".concat("/"==m.charAt(0)?m:"/".concat(m))};p||(b={internalLink_custom:"blog/author/".concat(i.slug?i.slug.current:"")}),_||(j={internalLink_custom:"blog/tag/".concat((0,n.Z)(f))});var y=new Date(t);return y=y.toLocaleString("en-US",{day:"numeric",year:"numeric",month:"long"}),(0,l.jsxs)("div",{className:u().postCard,children:[(0,l.jsx)(a.Z,{link:h,className:u().postCard_image,children:(0,l.jsx)(o.Z,{layout:"fill",objectFit:"cover",src:s})}),(0,l.jsxs)("div",{className:u().postCard_data,children:[!_&&(0,l.jsx)(a.Z,{className:u().postCard_tag,link:j,children:f}),(0,l.jsx)(a.Z,{link:h,children:(0,l.jsx)("h3",{children:d})}),!p&&(0,l.jsx)(a.Z,{link:b,className:u().postCard_author,children:i.name}),(0,l.jsxs)("p",{className:"".concat(u().postCard_date," ").concat(p?u().postCard_date__noAuthor:""),children:[y,g?" | ".concat(g," Min Read"):""]})]})]})}},7570:function(e,t){"use strict";t.Z=function(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var t="\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xf1\xe7\xb7/_,:;",r=0,o=t.length;r<o;r++)e=e.replace(new RegExp(t.charAt(r),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(r));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},8771:function(e,t,r){"use strict";var o=r(9713);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=i.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=n(n({},o),e));var a=o=n(n({},o),t);if(a.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(a.suspense)return r(a);o.loadableGenerated&&delete(o=n(n({},o),o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,l(r,o);delete o.ssr}return r(o)};u(r(7294));var i=u(r(4860));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,r){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((o=r(7294))&&o.__esModule?o:{default:o}).default.createContext(null);t.LoadableContext=a},4860:function(e,t,r){"use strict";var o=r(4575),a=r(3913),n=r(9713);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,n=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw n}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,d=(c=r(7294))&&c.__esModule?c:{default:c},g=r(7161),p=r(1083);var _=[],f=[],m=!1;function b(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var j=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=d.default.lazy(r.loader));var o=null;function a(){if(!o){var t=new j(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!m&&"function"===typeof r.webpack&&!r.suspense){var n=r.webpack();f.push((function(e){var t,r=l(n);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(-1!==e.indexOf(o))return a()}}catch(i){r.e(i)}finally{r.f()}}))}var i=r.suspense?function(e,t){return d.default.createElement(r.lazy,u(u({},e),{},{ref:t}))}:function(e,t){a();var n=d.default.useContext(p.LoadableContext),i=g.useSubscription(o);return d.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),n&&Array.isArray(r.modules)&&r.modules.forEach((function(e){n(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return!r.suspense&&a()},i.displayName="LoadableComponent",d.default.forwardRef(i)}(b,e)}function y(e,t){for(var r=[];e.length;){var o=e.pop();r.push(o(t))}return Promise.all(r).then((function(){if(e.length)return y(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){y(_).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return m=!0,t()};y(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var v=h;t.default=v},6242:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return m}});var o=r(4942),a=r(7294),n=r(1163),i=r(2918),u=r(5152),l=r(4151),s=r(1325),c=r(3192),d=r.n(c),g=r(5893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=(0,u.default)((function(){return r.e(1776).then(r.bind(r,4941))}),{loadableGenerated:{webpack:function(){return[4941]},modules:["blog/tag/[slug].js -> ../../../components/Layout"]}}),m=!0;t.default=function(e){var t=e.data,r=void 0===t?{}:t,o=e.config,u=(0,n.useRouter)();if(void 0==(null===r||void 0===r?void 0:r.firstLoad)||!u.isFallback&&!r.slug)return(0,g.jsx)(i.default,{statusCode:404});var c=r.tagName,p=r.firstLoad,m=r.morePosts,b=r.pageConfig,j=(0,a.useState)(p),h=j[0],y=j[1],v=_(_({},o),b);return(0,g.jsxs)(f,{config:v,children:[(0,g.jsx)("section",{className:"umoja-l-grid-section umoja-u-bg--white",children:(0,g.jsx)("div",{className:"umoja-l-grid--12",children:(0,g.jsx)("div",{className:d().name,children:(0,g.jsx)("h1",{children:c})})})}),(0,g.jsx)("section",{className:"umoja-l-grid-section umoja-u-bg--white",children:(0,g.jsx)("div",{className:"umoja-l-grid--12 umoja-l-grid-gap--row-1",children:h.map((function(e,t){return(0,a.createElement)(s.Z,_(_({},e),{},{hideTag:!0,key:t}))}))})}),m.length>0&&(0,g.jsx)("section",{className:"umoja-l-grid-section umoja-l-grid-section--flat-top umoja-u-bg--white",children:(0,g.jsx)(l.Z,{type:"secondary",title:"Load More",onClick:function(){var e=h.concat(m.splice(0,12));y(e)}})})]})}},4545:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tag/[slug]",function(){return r(6242)}])},9317:function(e){e.exports={"umoja-u-pad-1":"blog-post_umoja-u-pad-1__ZAvSG","umoja-u-pad-t--0":"blog-post_umoja-u-pad-t--0__1dSml","umoja-u-pad-b--0":"blog-post_umoja-u-pad-b--0__2vsew","umoja-l-grid--12":"blog-post_umoja-l-grid--12__3v0BK","umoja-l-grid--6":"blog-post_umoja-l-grid--6__2dBVG","umoja-l-page-width":"blog-post_umoja-l-page-width__28dnW","umoja-l-grid-section":"blog-post_umoja-l-grid-section__2q_BC","umoja-l-grid-section--flat-top":"blog-post_umoja-l-grid-section--flat-top__1yRlp","umoja-l-grid-gap--row-1":"blog-post_umoja-l-grid-gap--row-1__3p43T","umoja-l-grid-gap--row-2":"blog-post_umoja-l-grid-gap--row-2__b05iT","umoja-l-grid-gap--row-3":"blog-post_umoja-l-grid-gap--row-3__lQ8_H","umoja-l-grid-align--center":"blog-post_umoja-l-grid-align--center__2jRjw","umoja-l-grid-align--base":"blog-post_umoja-l-grid-align--base__1l1Qp","umoja-l-grid-span--full":"blog-post_umoja-l-grid-span--full__38LJU",postCard:"blog-post_postCard__i0O-O",postCard_image:"blog-post_postCard_image__3k8eA",postCard_data:"blog-post_postCard_data__2vfn3",postCard_tag:"blog-post_postCard_tag__9RTi-",postCard_author:"blog-post_postCard_author__Y7RjO",postCard_date:"blog-post_postCard_date__hrDMA",postCard_date__noAuthor:"blog-post_postCard_date__noAuthor__F9yyw"}},3192:function(e){e.exports={"umoja-u-pad-1":"blog-tag_umoja-u-pad-1__1cWBi","umoja-u-pad-t--0":"blog-tag_umoja-u-pad-t--0__17HTN","umoja-u-pad-b--0":"blog-tag_umoja-u-pad-b--0__FyHAc","umoja-l-grid--12":"blog-tag_umoja-l-grid--12__UEJPc","umoja-l-grid--6":"blog-tag_umoja-l-grid--6__1PAVa","umoja-l-page-width":"blog-tag_umoja-l-page-width__2JP0C","umoja-l-grid-section":"blog-tag_umoja-l-grid-section__3Wv_M","umoja-l-grid-section--flat-top":"blog-tag_umoja-l-grid-section--flat-top__3vMNd","umoja-l-grid-gap--row-1":"blog-tag_umoja-l-grid-gap--row-1__2asTL","umoja-l-grid-gap--row-2":"blog-tag_umoja-l-grid-gap--row-2__NiBCj","umoja-l-grid-gap--row-3":"blog-tag_umoja-l-grid-gap--row-3__1B_8k","umoja-l-grid-align--center":"blog-tag_umoja-l-grid-align--center__3medT","umoja-l-grid-align--base":"blog-tag_umoja-l-grid-align--base__1Zv2y","umoja-l-grid-span--full":"blog-tag_umoja-l-grid-span--full__3APna",name:"blog-tag_name__-rmiA"}},5152:function(e,t,r){e.exports=r(8771)},2918:function(e,t,r){e.exports=r(3359)},1163:function(e,t,r){e.exports=r(4651)}},function(e){e.O(0,[9774,9351,2888,179],(function(){return t=4545,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
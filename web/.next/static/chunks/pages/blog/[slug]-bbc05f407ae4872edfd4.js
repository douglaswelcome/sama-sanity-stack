(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2492],{7845:function(e,t,o){"use strict";var r=o(5030),a=o(1692),n=o(7570),l=o(467),s=o.n(l),i=o(5893);t.Z=function(e){var t=e.posts,o=e.hideTag;return(0,i.jsx)(i.Fragment,{children:t.map((function(e){var t=e.tags[1]?e.tags[1]:e.tags[0];e.tags.length>1&&o&&t.value==o&&(t=e.tags.find((function(e){if(e.value!==o)return e})));var l=e.slug?e.slug.current:"",u={internalLink_custom:"blog".concat("/"==l.charAt(0)?l:"/".concat(l))},c={};return t&&(c={internalLink_custom:"blog/tag/".concat((0,n.Z)(t.value))}),(0,i.jsxs)("div",{className:s().post,children:[(0,i.jsx)(a.Z,{link:u,className:s().imgWrap,children:(0,i.jsx)(r.Z,{src:e.featured_image,layout:"fill",objectFit:"cover"})}),(0,i.jsxs)("div",{className:s().post_info,children:[(0,i.jsx)(a.Z,{link:u,children:(0,i.jsx)("h4",{children:e.title})}),t&&(0,i.jsx)(a.Z,{className:s().tag,link:c,children:t.label})]})]},e._id)}))})}},7570:function(e,t){"use strict";t.Z=function(e){e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var t="\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xf1\xe7\xb7/_,:;",o=0,r=t.length;o<r;o++)e=e.replace(new RegExp(t.charAt(o),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(o));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},8771:function(e,t,o){"use strict";var r=o(9713);function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t.default=function(e,t){var o=l.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=n(n({},r),e));var a=r=n(n({},r),t);if(a.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(a.suspense)return o(a);r.loadableGenerated&&delete(r=n(n({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,i(o,r);delete r.ssr}return o(r)};s(o(7294));var l=s(o(4860));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}},1083:function(e,t,o){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=o(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},4860:function(e,t,o){"use strict";var r=o(4575),a=o(3913),n=o(9713);function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){var o="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){o&&(e=o);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,s=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){s=!0,n=e},f:function(){try{l||null==o.return||o.return()}finally{if(s)throw n}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,d=(c=o(7294))&&c.__esModule?c:{default:c},_=o(7161),g=o(1083);var p=[],m=[],f=!1;function h(e){var t=e(),o={loading:!0,loaded:null,error:null};return o.promise=t.then((function(e){return o.loading=!1,o.loaded=e,e})).catch((function(e){throw o.loading=!1,o.error=e,e})),o}var b=function(){function e(t,o){r(this,e),this._loadFn=t,this._opts=o,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,o=this._opts;t.loading&&("number"===typeof o.delay&&(0===o.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),o.delay)),"number"===typeof o.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),o.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s(s({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function j(e){return function(e,t){var o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=d.default.lazy(o.loader));var r=null;function a(){if(!r){var t=new b(e,o);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!f&&"function"===typeof o.webpack&&!o.suspense){var n=o.webpack();m.push((function(e){var t,o=i(n);try{for(o.s();!(t=o.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return a()}}catch(l){o.e(l)}finally{o.f()}}))}var l=o.suspense?function(e,t){return d.default.createElement(o.lazy,s(s({},e),{},{ref:t}))}:function(e,t){a();var n=d.default.useContext(g.LoadableContext),l=_.useSubscription(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),n&&Array.isArray(o.modules)&&o.modules.forEach((function(e){n(e)})),d.default.useMemo((function(){return l.loading||l.error?d.default.createElement(o.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:r.retry}):l.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(l.loaded),e):null}),[e,l])};return l.preload=function(){return!o.suspense&&a()},l.displayName="LoadableComponent",d.default.forwardRef(l)}(h,e)}function w(e,t){for(var o=[];e.length;){var r=e.pop();o.push(r(t))}return Promise.all(o).then((function(){if(e.length)return w(e,t)}))}j.preloadAll=function(){return new Promise((function(e,t){w(p).then(e,t)}))},j.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var o=function(){return f=!0,t()};w(m,e).then(o,o)}))},window.__NEXT_PRELOADREADY=j.preloadReady;var y=j;t.default=y},6506:function(e,t,o){"use strict";o.r(t);var r=o(1664),a=o(5893);t.default=function(){return(0,a.jsx)("section",{className:"umoja-l-grid-section umoja-u-bg--charcoal2",children:(0,a.jsx)("div",{className:"umoja-l-grid--12",children:(0,a.jsxs)("div",{className:"umoja-l-grid-span--full",children:[(0,a.jsx)("h1",{children:"We're Sorry"}),(0,a.jsx)("div",{className:"divider-line divider-line--horizontal"}),(0,a.jsxs)("p",{children:["The page you are looking for has been moved or deleted. If you need any help, feel free to ",(0,a.jsx)(r.default,{href:"/company-contact",children:(0,a.jsx)("a",{children:"contact us"})})]})]})})})}},1881:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return O},default:function(){return k}});var r=o(4942),a=o(1163),n=o(6506),l=o(5152),s=o(5030),i=o(1692),u=o(3056),c=o.n(u),d=o(5893),_=function(e){var t=e._createdAt,o=e.author,r=e.featured_image,a=e.title,n=e.estimatedReadingTime,l={internalLink_custom:"blog/author/".concat(o.slug.current)},u=new Date(t);return u=u.toLocaleString("en-US",{day:"numeric",year:"numeric",month:"long"}),(0,d.jsx)("section",{className:"umoja-l-grid-section umoja-u-bg--white",children:(0,d.jsx)("div",{className:"umoja-l-grid--12 umoja-l-grid-align--center",children:(0,d.jsxs)("div",{className:c().wrap,children:[(0,d.jsxs)("div",{className:c().left,children:[(0,d.jsx)("h1",{children:a}),(0,d.jsx)(i.Z,{link:l,className:c().author,children:o.name}),(0,d.jsxs)("p",{className:c().date,children:[u," | ","".concat(n," Min Read")]})]}),(0,d.jsx)("div",{className:c().right,children:(0,d.jsx)(s.Z,{layout:"fill",objectFit:"cover",src:r})})]})})})},g=o(7570),p=o(7431),m=o.n(p),f=function(e){var t=e.author,o=e.tags,r={internalLink_custom:"blog/author/".concat(t.slug?t.slug.current:"")};return(0,d.jsx)("section",{className:"umoja-l-grid-section umoja-l-grid-section--flat-top umoja-u-bg--white",children:(0,d.jsxs)("div",{className:"umoja-l-grid--12",children:[(0,d.jsxs)("div",{className:m().tags,children:[(0,d.jsx)("h3",{className:m().intro,children:"Filed Under:"}),o.map((function(e,t){var o={internalLink_custom:"blog/tag/".concat((0,g.Z)(e.value))};return(0,d.jsx)(i.Z,{className:m().tag,link:o,children:e.label},t)}))]}),(0,d.jsxs)("div",{className:m().author,children:[(0,d.jsx)("h3",{className:m().intro,children:"Words by:"}),(0,d.jsxs)("div",{className:m().author_inner,children:[(0,d.jsx)("div",{className:m().author_headshot,children:(0,d.jsx)(s.Z,{layout:"responsive",objectFit:"cover",src:t.avatar})}),(0,d.jsxs)("div",{className:m().author_bio,children:[(0,d.jsx)(i.Z,{link:r,children:(0,d.jsx)("h4",{children:t.name})}),(0,d.jsx)("p",{children:t.bio})]})]})]})]})})},h=o(7845),b=o(4687),j=o(3647),w=o.n(j);function y(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?y(Object(o),!0).forEach((function(t){(0,r.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):y(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var x=(0,l.default)((function(){return o.e(1776).then(o.bind(o,4941))}),{loadableGenerated:{webpack:function(){return[4941]},modules:["blog/[slug].js -> ../../components/Layout"]}}),O=!0,k=function(e){var t=e.data,o=void 0===t?{}:t,r=e.config,l=(0,a.useRouter)(),s=null===o||void 0===o?void 0:o.post,i=v(v({},r),o.config);if(void 0==s||!l.isFallback&&!s.slug)return(0,d.jsx)(x,{config:i,children:(0,d.jsx)(n.default,{})});var u=s.tags,c=s.author,g=s.body,p=s.relatedPosts,m="https://www.sama.com/".concat(l.asPath);return(0,d.jsxs)(x,{config:i,children:[(0,d.jsx)(_,v({},s)),(0,d.jsx)("section",{className:"umoja-l-grid-section umoja-l-grid-section--flat-top umoja-u-bg--white",children:(0,d.jsxs)("div",{className:"umoja-l-grid--12 ".concat(w().body),children:[(0,d.jsx)("div",{className:w().share,children:(0,d.jsxs)("div",{className:w().share_track,children:[(0,d.jsx)("a",{className:"".concat(w().share_button," ").concat(w().share_button__facebook),href:"https://www.facebook.com/sharer/sharer.php?u=".concat(m)}),(0,d.jsx)("a",{className:"".concat(w().share_button," ").concat(w().share_button__twitter),href:"https://twitter.com/intent/tweet?text=Check%20out%20this%20great%20blog%20post%20I%20just%20read&url=".concat(m)}),(0,d.jsx)("a",{className:"".concat(w().share_button," ").concat(w().share_button__linkedin),href:"https://www.linkedin.com/shareArticle?mini=true&url=".concat(m,"&title=").concat(s.title,"&source=https://www.sama.com/&summary=Check%20out%20this%20great%20blog%20post%20I%20just%20read")})]})}),(0,d.jsx)(b.Z,{className:w().content,richText:g,align:"left"})]})}),(0,d.jsx)(f,{tags:u,author:c}),p&&(0,d.jsx)("section",{className:"umoja-l-grid-section umoja-l-grid-section--flat-top umoja-u-bg--white",children:(0,d.jsxs)("div",{className:"umoja-l-grid--12",children:[(0,d.jsx)("h3",{className:"".concat(w().relatedPosts),children:"Related Posts:"}),(0,d.jsx)(h.Z,{posts:p,hideTag:u[0].value})]})})]})}},4163:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return o(1881)}])},3056:function(e){e.exports={"umoja-u-pad-1":"blog-hero-post_umoja-u-pad-1__3cF7X","umoja-u-pad-t--0":"blog-hero-post_umoja-u-pad-t--0__1pBeY","umoja-u-pad-b--0":"blog-hero-post_umoja-u-pad-b--0__12Vgx","umoja-l-grid--12":"blog-hero-post_umoja-l-grid--12__f4c3N","umoja-l-grid--6":"blog-hero-post_umoja-l-grid--6__2QpXG","umoja-l-page-width":"blog-hero-post_umoja-l-page-width__13TlY","umoja-l-grid-section":"blog-hero-post_umoja-l-grid-section___zt30","umoja-l-grid-section--flat-top":"blog-hero-post_umoja-l-grid-section--flat-top__3qoeF","umoja-l-grid-gap--row-1":"blog-hero-post_umoja-l-grid-gap--row-1__1u5a-","umoja-l-grid-gap--row-2":"blog-hero-post_umoja-l-grid-gap--row-2__pZEZH","umoja-l-grid-gap--row-3":"blog-hero-post_umoja-l-grid-gap--row-3__ksMzS","umoja-l-grid-align--center":"blog-hero-post_umoja-l-grid-align--center__3iFB5","umoja-l-grid-align--base":"blog-hero-post_umoja-l-grid-align--base__2qx4M","umoja-l-grid-span--full":"blog-hero-post_umoja-l-grid-span--full__2vQIq",wrap:"blog-hero-post_wrap__1KbfB",left:"blog-hero-post_left__2zn39",tag:"blog-hero-post_tag__3to5n",author:"blog-hero-post_author__28uii",date:"blog-hero-post_date__hVvVU",right:"blog-hero-post_right__AAryF"}},7431:function(e){e.exports={"umoja-u-pad-1":"blog-post-footer_umoja-u-pad-1__3z3ae","umoja-u-pad-t--0":"blog-post-footer_umoja-u-pad-t--0__1kBQR","umoja-u-pad-b--0":"blog-post-footer_umoja-u-pad-b--0__3s-hT","umoja-l-grid--12":"blog-post-footer_umoja-l-grid--12__63KM2","umoja-l-grid--6":"blog-post-footer_umoja-l-grid--6__2uA5H","umoja-l-page-width":"blog-post-footer_umoja-l-page-width__1gxU0","umoja-l-grid-section":"blog-post-footer_umoja-l-grid-section__1KQ2u","umoja-l-grid-section--flat-top":"blog-post-footer_umoja-l-grid-section--flat-top__N2nQ6","umoja-l-grid-gap--row-1":"blog-post-footer_umoja-l-grid-gap--row-1__1orzu","umoja-l-grid-gap--row-2":"blog-post-footer_umoja-l-grid-gap--row-2__3kHIk","umoja-l-grid-gap--row-3":"blog-post-footer_umoja-l-grid-gap--row-3__1Ua73","umoja-l-grid-align--center":"blog-post-footer_umoja-l-grid-align--center__1PKR0","umoja-l-grid-align--base":"blog-post-footer_umoja-l-grid-align--base__bQQBc","umoja-l-grid-span--full":"blog-post-footer_umoja-l-grid-span--full__1tHhe",intro:"blog-post-footer_intro__1dGYr",tags:"blog-post-footer_tags__yEMl0",tag:"blog-post-footer_tag__UlZZ0",author:"blog-post-footer_author__1Qqrq",author_inner:"blog-post-footer_author_inner__1tFQc",author_headshot:"blog-post-footer_author_headshot__d-1KT",author_bio:"blog-post-footer_author_bio__2z8Kp",relatedPosts_header:"blog-post-footer_relatedPosts_header__1vFIN",relatedPosts_posts:"blog-post-footer_relatedPosts_posts__1UBJW"}},467:function(e){e.exports={"umoja-u-pad-1":"blog-smallCard-row_umoja-u-pad-1__36Que","umoja-u-pad-t--0":"blog-smallCard-row_umoja-u-pad-t--0__3-e16","umoja-u-pad-b--0":"blog-smallCard-row_umoja-u-pad-b--0__2-XOy","umoja-l-grid--12":"blog-smallCard-row_umoja-l-grid--12__3RB2R","umoja-l-grid--6":"blog-smallCard-row_umoja-l-grid--6__5yKPI","umoja-l-page-width":"blog-smallCard-row_umoja-l-page-width__L_DHG","umoja-l-grid-section":"blog-smallCard-row_umoja-l-grid-section__2W3t1","umoja-l-grid-section--flat-top":"blog-smallCard-row_umoja-l-grid-section--flat-top__2zdBc","umoja-l-grid-gap--row-1":"blog-smallCard-row_umoja-l-grid-gap--row-1__3E-Yf","umoja-l-grid-gap--row-2":"blog-smallCard-row_umoja-l-grid-gap--row-2__2np40","umoja-l-grid-gap--row-3":"blog-smallCard-row_umoja-l-grid-gap--row-3__dYRXR","umoja-l-grid-align--center":"blog-smallCard-row_umoja-l-grid-align--center__oFMPO","umoja-l-grid-align--base":"blog-smallCard-row_umoja-l-grid-align--base__1KT1y","umoja-l-grid-span--full":"blog-smallCard-row_umoja-l-grid-span--full__ky8nx",post:"blog-smallCard-row_post__in_Mm",imgWrap:"blog-smallCard-row_imgWrap__36jhQ",post_info:"blog-smallCard-row_post_info__3V7Qy",tag:"blog-smallCard-row_tag__33FrA"}},3647:function(e){e.exports={"umoja-u-pad-1":"blog-post_umoja-u-pad-1__2QD5S","umoja-u-pad-t--0":"blog-post_umoja-u-pad-t--0__1guH2","umoja-u-pad-b--0":"blog-post_umoja-u-pad-b--0__34f02","umoja-l-grid--12":"blog-post_umoja-l-grid--12__1miPx","umoja-l-grid--6":"blog-post_umoja-l-grid--6__2wQHg","umoja-l-page-width":"blog-post_umoja-l-page-width__2U7dL","umoja-l-grid-section":"blog-post_umoja-l-grid-section__1aSd1","umoja-l-grid-section--flat-top":"blog-post_umoja-l-grid-section--flat-top__MwmPn","umoja-l-grid-gap--row-1":"blog-post_umoja-l-grid-gap--row-1__2dJU6","umoja-l-grid-gap--row-2":"blog-post_umoja-l-grid-gap--row-2__3Fva5","umoja-l-grid-gap--row-3":"blog-post_umoja-l-grid-gap--row-3__3YWcx","umoja-l-grid-align--center":"blog-post_umoja-l-grid-align--center__o4H8X","umoja-l-grid-align--base":"blog-post_umoja-l-grid-align--base__10sTB","umoja-l-grid-span--full":"blog-post_umoja-l-grid-span--full__1NEcC",body:"blog-post_body__2CyGF",share:"blog-post_share__2sAqL",share_track:"blog-post_share_track__3nibH",share_button:"blog-post_share_button__2ZGXI",share_button__facebook:"blog-post_share_button__facebook__2V_7U",share_button__twitter:"blog-post_share_button__twitter__3lhXm",share_button__linkedin:"blog-post_share_button__linkedin__34so0",content:"blog-post_content__1Q3Gg",relatedPosts:"blog-post_relatedPosts__19WKQ"}},5152:function(e,t,o){e.exports=o(8771)},1163:function(e,t,o){e.exports=o(4651)}},function(e){e.O(0,[9774,9351,2888,179],(function(){return t=4163,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8313],{8771:function(e,r,t){"use strict";var a=t(9713);function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.default=function(e,r){var t=i.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=s(s({},a),e));var n=a=s(s({},a),r);if(n.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(n.suspense)return t(n);a.loadableGenerated&&delete(a=s(s({},a),a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,l(t,a);delete a.ssr}return t(a)};o(t(7294));var i=o(t(4860));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,r){return delete r.webpack,delete r.modules,e(r)}},1083:function(e,r,t){"use strict";var a;Object.defineProperty(r,"__esModule",{value:!0}),r.LoadableContext=void 0;var n=((a=t(7294))&&a.__esModule?a:{default:a}).default.createContext(null);r.LoadableContext=n},4860:function(e,r,t){"use strict";var a=t(4575),n=t(3913),s=t(9713);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"===typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e))||r&&e&&"number"===typeof e.length){t&&(e=t);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==t.return||t.return()}finally{if(o)throw s}}}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var u,d=(u=t(7294))&&u.__esModule?u:{default:u},_=t(7161),f=t(1083);var p=[],m=[],h=!1;function j(e){var r=e(),t={loading:!0,loaded:null,error:null};return t.promise=r.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}var v=function(){function e(r,t){a(this,e),this._loadFn=r,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return n(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var r=this._res,t=this._opts;r.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(r){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o(o({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var r=this;return this._callbacks.add(e),function(){r._callbacks.delete(e)}}}]),e}();function g(e){return function(e,r){var t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},r);t.suspense&&(t.lazy=d.default.lazy(t.loader));var a=null;function n(){if(!a){var r=new v(e,t);a={getCurrentValue:r.getCurrentValue.bind(r),subscribe:r.subscribe.bind(r),retry:r.retry.bind(r),promise:r.promise.bind(r)}}return a.promise()}if(!h&&"function"===typeof t.webpack&&!t.suspense){var s=t.webpack();m.push((function(e){var r,t=l(s);try{for(t.s();!(r=t.n()).done;){var a=r.value;if(-1!==e.indexOf(a))return n()}}catch(i){t.e(i)}finally{t.f()}}))}var i=t.suspense?function(e,r){return d.default.createElement(t.lazy,o(o({},e),{},{ref:r}))}:function(e,r){n();var s=d.default.useContext(f.LoadableContext),i=_.useSubscription(a);return d.default.useImperativeHandle(r,(function(){return{retry:a.retry}}),[]),s&&Array.isArray(t.modules)&&t.modules.forEach((function(e){s(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(t.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return!t.suspense&&n()},i.displayName="LoadableComponent",d.default.forwardRef(i)}(j,e)}function b(e,r){for(var t=[];e.length;){var a=e.pop();t.push(a(r))}return Promise.all(t).then((function(){if(e.length)return b(e,r)}))}g.preloadAll=function(){return new Promise((function(e,r){b(p).then(e,r)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(r){var t=function(){return h=!0,r()};b(m,e).then(t,t)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var y=g;r.default=y},3061:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return f}});var a=t(7294),n=t(267),s=t.n(n),i=t(5152),o=t(1202),l=t(5030),c=t(4537),u=t.n(c),d=t(5893),_=(0,i.default)((function(){return t.e(4941).then(t.bind(t,4941))}),{loadableGenerated:{webpack:function(){return[4941]},modules:["press.js -> ../components/Layout"]}}),f=!0;r.default=function(e){var r=e.featured,t=e.press,n=e.news,i=e.config,c=r[0];r=r.slice(1);var f=(0,o.J)(s(),c.background),p=(0,a.useState)(0),m=p[0],h=p[1],j=(0,a.useState)(""),v=j[0],g=j[1],b=function(e){var r=parseInt(e.target.getAttribute("data-at"));g(m>r?u()._slideLeft:""),h(r)};return(0,d.jsxs)(_,{config:i,children:[(0,d.jsx)("section",{className:"umoja-l-grid-section",children:(0,d.jsx)("div",{className:"umoja-l-grid--12",children:(0,d.jsxs)("div",{className:u().hero,children:[(0,d.jsx)("h1",{children:"Press & Media"}),(0,d.jsxs)("p",{children:["AI has a story to tell. For media inquiries, please contact us at ",(0,d.jsx)("a",{href:"mailto:press@sama.com",children:"press@sama.com"}),"."]})]})})}),(0,d.jsx)("section",{className:"umoja-l-grid-section umoja-u-bg--charcoal3",children:(0,d.jsxs)("div",{className:"umoja-l-grid--12",children:[(0,d.jsxs)("div",{className:u().featureHeadline,children:[(0,d.jsx)("h2",{className:"display-small",children:"Featured Press"}),(0,d.jsx)("div",{className:"divider-line divider-line--horizontal divider-line--negative"}),(0,d.jsx)("p",{children:"Great results gets you noticed. Read the latest news about Sama."})]}),(0,d.jsx)("div",{className:"".concat(u().featuredMain," ").concat(u().featuredArticle),children:(0,d.jsxs)("a",{href:c.article_url,className:u().featured_link,target:"_blank",rel:"noopener",style:{backgroundImage:"url(".concat(f.src,")")},children:[(0,d.jsx)("div",{className:u().featured_category,children:(0,d.jsx)("p",{children:c.type})}),(0,d.jsx)("h2",{className:u().featured_title,children:c.headline}),(0,d.jsx)("div",{className:u().featured_logo,children:(0,d.jsx)("div",{className:u().featured_logoWrap,children:(0,d.jsx)(l.Z,{layout:"fill",objectFit:"contain",src:c.publication_icon})})})]})}),(0,d.jsx)("div",{className:u().featuredSecondary,children:r.map((function(e,r){var t=(0,o.J)(s(),e.background);return(0,d.jsx)("div",{className:u().featuredArticle,children:(0,d.jsxs)("a",{href:e.article_url,className:u().featured_link,target:"_blank",rel:"noopener",style:{backgroundImage:"url(".concat(t.src,")")},children:[(0,d.jsx)("div",{className:u().featured_category,children:(0,d.jsx)("p",{children:e.type})}),(0,d.jsx)("h3",{className:u().featured_title,children:e.headline}),(0,d.jsx)("div",{className:u().featured_logo,children:(0,d.jsx)("div",{className:u().featured_logoWrap,children:(0,d.jsx)(l.Z,{layout:"fill",objectFit:"contain",src:e.publication_icon})})})]})},r)}))})]})}),(0,d.jsx)("section",{className:"umoja-l-grid-section umoja-u-bg--white",children:(0,d.jsxs)("div",{className:"".concat(u().tabs," umoja-l-grid--12"),children:[(0,d.jsx)("div",{className:u().nav,children:(0,d.jsxs)("div",{className:"".concat(u().navInner," ").concat(v),children:[(0,d.jsx)("h5",{className:"".concat(u().nav_item," ").concat(0==m?u().active:""),"data-at":0,onClick:b,children:"In the News"}),(0,d.jsx)("h5",{className:"".concat(u().nav_item," ").concat(1==m?u().active:""),"data-at":1,onClick:b,children:"Press Releases"})]})}),(0,d.jsxs)("div",{className:u().tabWrapper,children:[(0,d.jsx)("div",{className:"".concat(u().tab," ").concat(0==m?u().active:""),children:n.map((function(e,r){var t=new Date(e.date);return t=t.toLocaleString("en-US",{day:"numeric",year:"numeric",month:"long",hour:"numeric",minute:"numeric"}),(0,d.jsxs)("a",{href:e.article_url,className:u().pressArticle,target:"_blank",rel:"noopener",children:[(0,d.jsxs)("div",{className:u().pressArticle_title,children:[(0,d.jsx)("p",{children:t}),(0,d.jsx)("div",{className:"divider-line divider-line--horizontal"}),(0,d.jsx)("h5",{children:'"'.concat(e.headline,'"')})]}),(0,d.jsx)("div",{className:u().pressArticle_logo,children:(0,d.jsx)(l.Z,{layout:"fill",objectFit:"contain",src:e.publication_icon})})]},r)}))}),(0,d.jsx)("div",{className:"".concat(u().tab," ").concat(1==m?u().active:""),children:t.map((function(e,r){var t=new Date(e.date);return t=t.toLocaleString("en-US",{day:"numeric",year:"numeric",month:"long",hour:"numeric",minute:"numeric"}),(0,d.jsxs)("a",{href:e.article_url,className:u().pressArticle,target:"_blank",rel:"noopener",children:[(0,d.jsxs)("div",{className:u().pressArticle_title,children:[(0,d.jsx)("p",{children:t}),(0,d.jsx)("div",{className:"divider-line divider-line--horizontal"}),(0,d.jsx)("h5",{children:'"'.concat(e.headline,'"')})]}),(0,d.jsx)("div",{className:u().pressArticle_logo,children:(0,d.jsx)(l.Z,{layout:"fill",objectFit:"contain",src:e.publication_icon})})]},r)}))})]})]})})]})}},8373:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/press",function(){return t(3061)}])},4537:function(e){e.exports={"umoja-u-pad-1":"press_umoja-u-pad-1__VbmMl","umoja-u-pad-t--0":"press_umoja-u-pad-t--0__3jdmT","umoja-u-pad-b--0":"press_umoja-u-pad-b--0__3wQp6","umoja-l-grid--12":"press_umoja-l-grid--12__sPwmv","umoja-l-grid--6":"press_umoja-l-grid--6__3Bo_W","umoja-l-page-width":"press_umoja-l-page-width__3Nre3","umoja-l-grid-section":"press_umoja-l-grid-section__2PmpP","umoja-l-grid-gap--row-1":"press_umoja-l-grid-gap--row-1__K-v5J","umoja-l-grid-gap--row-2":"press_umoja-l-grid-gap--row-2__2uD8T","umoja-l-grid-gap--row-3":"press_umoja-l-grid-gap--row-3__QOLWq","umoja-l-grid-align--center":"press_umoja-l-grid-align--center__qll0r","umoja-l-grid-align--base":"press_umoja-l-grid-align--base__3GxPK",nav:"press_nav__QySSe",navInner:"press_navInner__Jrekx",_slideLeft:"press__slideLeft__3w0Rr",nav_item:"press_nav_item__3Awjp",active:"press_active__2Vr-s",tabWrapper:"press_tabWrapper__1j9hA",tab:"press_tab__27VMH",tabContent:"press_tabContent__3DcJq",imgWrap:"press_imgWrap__2TD4T",featured:"press_featured__r_me5",hero:"press_hero__1cwOJ",featureHeadline:"press_featureHeadline__2XFcB",featuredArticle:"press_featuredArticle__3lEg3",featuredMain:"press_featuredMain__1IPdI",featuredSecondary:"press_featuredSecondary__2jmaO",featured_link:"press_featured_link__33x8N",featured_title:"press_featured_title__3KLB_",featured_category:"press_featured_category__334TP",featured_logo:"press_featured_logo__1YOpU",featured_logoWrap:"press_featured_logoWrap__1Z-aJ",pressArticle:"press_pressArticle__1v5Lq",pressArticle_logo:"press_pressArticle_logo__2Dc-R"}},5152:function(e,r,t){e.exports=t(8771)}},function(e){e.O(0,[9774,9351,2888,179],(function(){return r=8373,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
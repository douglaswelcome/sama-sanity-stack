(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{4151:function(e,r,t){"use strict";t(7294);var n=t(1692),a=t(4591),o=t.n(a),i=t(5893);r.Z=function(e){var r=e.title,t=e.type,a=e.size,u=e.link,c="".concat(o().wrapper," ").concat(t?o()["_".concat(t)]:""," ").concat(a?o()["_".concat(a)]:""),l=(0,i.jsx)("button",{className:o().btn,children:(0,i.jsx)("h3",{className:o().text,children:r})});return u?(0,i.jsx)(n.Z,{className:c,link:u,children:l}):(0,i.jsx)("div",{className:c,children:l})}},425:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Z}});var n=t(5671),a=t(3144),o=t(7326),i=t(9340),u=t(2963),c=t(1120),l=t(4942),_=t(7294),s=t(1163),d=t(4934),p=t(9040),m=t.n(p),h=t(1664),g=t(5893),b=function(e){var r=e.url,t=e.title,n=(0,s.useRouter)().asPath,a="/"==n.charAt(0)?n.substring(1):n;if(r.internalLink||r.internalLink_custom){var o=r.internalLink?r.internalLink.slug.current:r.internalLink_custom,i=a===(o="/"==o.charAt(0)?o.substring(1):o)?"".concat(m().navLink," ").concat(m().navLink__active):"".concat(m().navLink);return(0,g.jsx)(h.default,{href:"/".concat(o),children:(0,g.jsx)("a",{className:i,children:t})})}return(0,g.jsx)("a",{href:r.externalUrl,className:m().navLink,target:"_blank",children:t})};function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,l.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v=function(e){var r=e.items,t=e.title;return(0,g.jsxs)("div",{className:m().dropDown_group,children:[(0,g.jsx)("p",{className:m().dropdown_group_label,children:t}),r.map((function(e){return(0,_.createElement)(b,f(f({},e),{},{key:e._key}))}))]})};function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){(0,l.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var k=function(e){var r=e.items,t=e.title,n=(0,s.useRouter)().asPath,a="/"==n.charAt(0)?n.substring(1):n,o=(0,_.useState)(!1),i=o[0],u=o[1],c=i?"".concat(m().navItem_label," ").concat(m().navItem_label__active):"".concat(m().navItem_label);return(0,_.useEffect)((function(){var e=r.map((function(e){var r=[];if(e.items)e.items.map((function(t){if(t.url.internalLink&&r.push(t.url.internalLink.slug.current),t.url.internalLink_custom){var n="/"==e.url.internalLink_custom.charAt(0)?e.url.internalLink_custom.substring(1):e.url.internalLink_custom;r.push(n)}}));else if(e.url.internalLink&&r.push(e.url.internalLink.slug.current),e.url.internalLink_custom){var t="/"==e.url.internalLink_custom.charAt(0)?e.url.internalLink_custom.substring(1):e.url.internalLink_custom;r.push(t)}return r})).some((function(e){return e==a}));u(e)})),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("p",{className:c,children:t}),(0,g.jsx)("div",{className:m().dropDown,children:r.map((function(e){return"navCat"==e._type?(0,_.createElement)(v,y(y({},e),{},{key:e._key})):(0,_.createElement)(b,y(y({},e),{},{key:e._key}))}))})]})},O=t(4151);function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){(0,l.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function N(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,c.Z)(e);if(r){var a=(0,c.Z)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return(0,u.Z)(this,t)}}var P=function(e){(0,i.Z)(t,e);var r=N(t);function t(){var e;(0,n.Z)(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return e=r.call.apply(r,[this].concat(i)),(0,l.Z)((0,o.Z)(e),"state",{showNav:!1}),(0,l.Z)((0,o.Z)(e),"handleMenuToggle",(function(){var r=e.state.showNav;e.setState({showNav:!r})})),e}return(0,a.Z)(t,[{key:"render",value:function(){var e=this.props,r=(e.title,e.navItems),t=e.logo,n=r.items,a=r.nav_cta,o=this.state.showNav;return(0,g.jsx)("header",{className:"".concat(m().outer," ").concat(o?m()._active:""),children:(0,g.jsxs)("nav",{className:"umoja-l-grid--12 ".concat(m().wrapper),children:[(0,g.jsx)(h.default,{href:"/",children:(0,g.jsx)("a",{className:m().logo,children:(0,g.jsx)(d.Z,{src:t.asset.url})})}),(0,g.jsx)("button",{className:m().hamburger,type:"button",onClick:this.handleMenuToggle,children:(0,g.jsx)("span",{className:m().hamburger_box,children:(0,g.jsx)("span",{className:m().hamburger_box_inner})})}),(0,g.jsx)("ul",{className:m().navBar,children:n.map((function(e){return(0,g.jsx)("li",{className:m().navItem,children:"navDropdownMenu"==e._type?(0,g.jsx)(k,L({},e)):(0,g.jsx)(b,L({},e))},e._key)}))}),a&&(0,g.jsx)("div",{className:m().cta,children:(0,g.jsx)(O.Z,L(L({},a),{},{size:"small"}))})]})})}}]),t}(_.Component),Z=(0,s.withRouter)(P)},1692:function(e,r,t){"use strict";var n=t(7294),a=t(1548),o=t(267),i=t.n(o),u=t(1664),c=t(5893);r.Z=function(e){var r=e.link,t=e.className,o=e.children,l=(0,n.useState)(r),_=l[0],s=l[1];if((0,n.useEffect)((function(){if(r&&r.internalLink&&i().fetch('*[_type == "page" && _id == "'.concat(r.internalLink._ref,'"][0]')).then((function(e){s(e.slug.current)})),r&&r.externalUrl&&s(r.externalUrl),r&&r.file){var e=(0,a.hn)(r.file,i().config());s(e.asset.url)}r&&r.internalLink_custom&&s(r.internalLink_custom)})),_)return(0,c.jsx)(c.Fragment,{children:r.internalLink||r.internalLink_custom?(0,c.jsx)(u.default,{href:"/".concat(_),children:(0,c.jsx)("a",{className:t,children:o})}):(0,c.jsx)("a",{href:_,target:"_blank",rel:"noopener",className:t,children:o})})}},4591:function(e){e.exports={"umoja-u-pad-1":"button_umoja-u-pad-1__378Rh","umoja-u-pad-t--0":"button_umoja-u-pad-t--0__TY9Xc","umoja-u-pad-b--0":"button_umoja-u-pad-b--0__2c-Un","umoja-l-grid--12":"button_umoja-l-grid--12__RgSB0","umoja-l-grid--6":"button_umoja-l-grid--6__3iPRr","umoja-l-page-width":"button_umoja-l-page-width__TBzfJ","umoja-l-grid-section":"button_umoja-l-grid-section__30hdz","umoja-l-grid-gap--row-1":"button_umoja-l-grid-gap--row-1__13k4Y","umoja-l-grid-gap--row-2":"button_umoja-l-grid-gap--row-2__3mbaT","umoja-l-grid-gap--row-3":"button_umoja-l-grid-gap--row-3__FBbl9","umoja-l-grid-align--center":"button_umoja-l-grid-align--center__7o5b6","umoja-l-grid-align--base":"button_umoja-l-grid-align--base__dSWXb",wrapper:"button_wrapper__3lRbv",btn:"button_btn__1qxP1",text:"button_text__3_sCS",_secondary:"button__secondary__1pZ5q",_arrow:"button__arrow__1eUJP",_small:"button__small__2kIwW"}},9040:function(e){e.exports={"umoja-u-pad-1":"header_umoja-u-pad-1__13p9W","umoja-u-pad-t--0":"header_umoja-u-pad-t--0__v1i98","umoja-u-pad-b--0":"header_umoja-u-pad-b--0__3hm7d","umoja-l-grid--12":"header_umoja-l-grid--12__2UhK9","umoja-l-grid--6":"header_umoja-l-grid--6__2oWO5","umoja-l-page-width":"header_umoja-l-page-width__2rMVR","umoja-l-grid-section":"header_umoja-l-grid-section__2URtG","umoja-l-grid-gap--row-1":"header_umoja-l-grid-gap--row-1__15idn","umoja-l-grid-gap--row-2":"header_umoja-l-grid-gap--row-2__3syxA","umoja-l-grid-gap--row-3":"header_umoja-l-grid-gap--row-3__28-vL","umoja-l-grid-align--center":"header_umoja-l-grid-align--center__3C5zd","umoja-l-grid-align--base":"header_umoja-l-grid-align--base__208hq",outer:"header_outer__yu9q7",wrapper:"header_wrapper__3Ghzm",logo:"header_logo__eiLSq",hamburger:"header_hamburger__1ZcbZ",hamburger_box:"header_hamburger_box__RZ7CY",hamburger_box_inner:"header_hamburger_box_inner__1PmWZ",navBar:"header_navBar__37eSJ",navItem:"header_navItem__1HiGN",navItem_label:"header_navItem_label__fN3Cy",dropDown:"header_dropDown__6NxUb",navItem_label__active:"header_navItem_label__active__3i-yQ",navLink:"header_navLink__1ARu5",navLink__active:"header_navLink__active__3cW9s",dropDown_group:"header_dropDown_group__2BZXC",dropdown_group_label:"header_dropdown_group_label__tmND8",cta:"header_cta__3J8I7",_active:"header__active__EeQyz"}},1163:function(e,r,t){e.exports=t(4651)}}]);
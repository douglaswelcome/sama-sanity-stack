(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{5964:function(e,a,r){"use strict";r.d(a,{Z:function(){return R}});var t=r(7294),n=r(9008),i=(r(2962),r(5671)),o=r(3144),l=r(7326),c=r(9340),s=r(6215),d=r(1120),_=r(4942),u=r(1163),h=r(4934),m=r(9040),g=r.n(m),j=r(1664),p=r(5893),f=function(e){var a=e.url,r=e.title,t=(0,u.useRouter)().asPath,n="/"==t.charAt(0)?t.substring(1):t;if(a.internalLink){var i=a.internalLink.slug.current,o=n===i?"".concat(g().navLink," ").concat(g().navLink__active):"".concat(g().navLink);return(0,p.jsx)(j.default,{href:{pathname:"/page",query:{slug:i}},as:"/".concat(i),children:(0,p.jsx)("a",{className:o,children:r})})}return(0,p.jsx)("a",{href:a.externalUrl,className:g().navLink,target:"_blank",children:r})};function b(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function v(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?b(Object(r),!0).forEach((function(a){(0,_.Z)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}var x=function(e){var a=e.items,r=e.title;return(0,p.jsxs)("div",{className:g().dropDown_group,children:[(0,p.jsx)("p",{className:g().dropdown_group_label,children:r}),a.map((function(e){return(0,t.createElement)(f,v(v({},e),{},{key:e._key}))}))]})};function w(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function y(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?w(Object(r),!0).forEach((function(a){(0,_.Z)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}var k=function(e){var a=e.items,r=e.title,n=(0,u.useRouter)().asPath,i="/"==n.charAt(0)?n.substring(1):n,o=(0,t.useState)(!1),l=o[0],c=o[1],s=l?"".concat(g().navItem_label," ").concat(g().navItem_label__active):"".concat(g().navItem_label);return(0,t.useEffect)((function(){var e=a.map((function(e){var a=[];return e.items?e.items.map((function(e){e.url.internalLink&&a.push(e.url.internalLink.slug.current)})):e.url.internalLink&&a.push(e.url.internalLink.slug.current),a})).some((function(e){return e==i}));c(e)})),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{className:s,children:r}),(0,p.jsx)("div",{className:g().dropDown,children:a.map((function(e){return"navCat"==e._type?(0,t.createElement)(x,y(y({},e),{},{key:e._key})):(0,t.createElement)(f,y(y({},e),{},{key:e._key}))}))})]})},N=r(4151);function O(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function Z(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?O(Object(r),!0).forEach((function(a){(0,_.Z)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function L(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=(0,d.Z)(e);if(a){var n=(0,d.Z)(this).constructor;r=Reflect.construct(t,arguments,n)}else r=t.apply(this,arguments);return(0,s.Z)(this,r)}}var P=function(e){(0,c.Z)(r,e);var a=L(r);function r(){var e;(0,i.Z)(this,r);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=a.call.apply(a,[this].concat(n)),(0,_.Z)((0,l.Z)(e),"state",{showNav:!1}),(0,_.Z)((0,l.Z)(e),"handleMenuToggle",(function(){var a=e.state.showNav;e.setState({showNav:!a})})),e}return(0,o.Z)(r,[{key:"render",value:function(){var e=this.props,a=(e.title,e.navItems),r=e.logo,t=a.items,n=a.nav_cta,i=this.state.showNav;return(0,p.jsx)("header",{className:"".concat(g().outer," ").concat(i?g()._active:""),children:(0,p.jsxs)("nav",{className:"umoja-l-grid--12 ".concat(g().wrapper),children:[(0,p.jsx)(j.default,{href:{pathname:"/",query:{slug:"/"}},as:"/",children:(0,p.jsx)("a",{className:g().logo,children:(0,p.jsx)(h.Z,{src:r.asset.url})})}),(0,p.jsx)("button",{className:g().hamburger,type:"button",onClick:this.handleMenuToggle,children:(0,p.jsx)("span",{className:g().hamburger_box,children:(0,p.jsx)("span",{className:g().hamburger_box_inner})})}),(0,p.jsx)("ul",{className:g().navBar,children:t.map((function(e){return(0,p.jsx)("li",{className:g().navItem,children:"navDropdownMenu"==e._type?(0,p.jsx)(k,Z({},e)):(0,p.jsx)(f,Z({},e))},e._key)}))}),n&&(0,p.jsx)("div",{className:g().cta,children:(0,p.jsx)(N.Z,Z(Z({},n),{},{size:"small"}))})]})})}}]),r}(t.Component),A=(0,u.withRouter)(P),D=r(4906),I=r.n(D),S=function(e){var a=e.navItems,r=e.logo,n=(0,t.useState)(0),i=n[0],o=n[1];return(0,t.useEffect)((function(){var e=(new Date).getFullYear();o(e)})),(0,p.jsx)("footer",{className:I().wrapper,children:(0,p.jsxs)("div",{className:"umoja-l-grid--12",children:[(0,p.jsxs)("div",{className:I().upper,children:[(0,p.jsxs)("div",{className:I().upper_left,children:[(0,p.jsx)("h4",{children:"Newsletter"}),(0,p.jsx)("p",{children:"Subscribe today and be the first to receive the latest from Sama."})]}),(0,p.jsx)("div",{className:I().upper_right,children:a.map((function(e){return(0,p.jsxs)("div",{className:I().nav,children:[(0,p.jsx)("p",{className:I().nav_head,children:e.title}),e.items.map((function(e){if(e.url){if(e.url.internalLink){var a=e.url.internalLink.slug.current;return(0,p.jsx)(j.default,{href:{pathname:"/page",query:{slug:a}},as:"/".concat(a),children:(0,p.jsx)("a",{className:I().nav_link,children:e.title})},e._key)}return(0,p.jsx)("a",{href:e.url.externalUrl,target:"_blank",className:I().nav_link,children:e.title},e._key)}}))]},e._key)}))})]}),(0,p.jsxs)("div",{className:I().middle,children:[(0,p.jsx)("div",{className:I().middle_left,children:(0,p.jsx)(j.default,{href:"/",children:(0,p.jsx)("a",{children:(0,p.jsx)(h.Z,{src:r.asset.url})})})}),(0,p.jsx)("div",{className:I().middle_right,children:(0,p.jsxs)("div",{className:I().social,children:[(0,p.jsx)("a",{href:"https://www.facebook.com/samaartificialintelligence",className:I().social_icon,target:"_blank",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 35.1 64.89",children:[(0,p.jsx)("title",{children:"facebook"}),(0,p.jsx)("g",{id:"fb3209c8-23d4-4288-984d-a2b8f32b7f0c","data-name":"Layer 2",children:(0,p.jsx)("g",{id:"ba1a815d-13f1-45f9-9321-18e9a3cfa5db","data-name":"Layer 1",children:(0,p.jsx)("path",{d:"M35.1,11.26V1.36A1.35,1.35,0,0,0,33.76,0H25.35A15.34,15.34,0,0,0,14,4.35C11.24,7.2,9.78,11.22,9.78,16v7.34H1.34A1.34,1.34,0,0,0,0,24.66V35.32a1.35,1.35,0,0,0,1.34,1.35H9.78V63.55a1.34,1.34,0,0,0,1.34,1.34h11a1.34,1.34,0,0,0,1.34-1.34V36.67h9.87a1.35,1.35,0,0,0,1.34-1.35V24.66a1.37,1.37,0,0,0-.7-1.18,1.47,1.47,0,0,0-.67-.16H23.49V17.1c0-1.72.25-2.69.84-3.37s1.88-1.13,3.77-1.13h5.66A1.34,1.34,0,0,0,35.1,11.26Z"})})})]})}),(0,p.jsx)("a",{href:"https://www.instagram.com/sama_ai_",className:I().social_icon,target:"_blank",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 57 57",children:[(0,p.jsx)("title",{children:"insta"}),(0,p.jsx)("g",{id:"ef02a3ef-c0d3-4be7-9d4e-2c42263777a3","data-name":"Layer 2",children:(0,p.jsxs)("g",{id:"a0a92778-6c5c-4e06-a08f-641546580dd0","data-name":"Layer 1",children:[(0,p.jsx)("circle",{cx:"28.5",cy:"28.5",r:"9.24"}),(0,p.jsx)("path",{d:"M41.57,0H15.43A15.45,15.45,0,0,0,0,15.43V41.57A15.45,15.45,0,0,0,15.43,57H41.57A15.45,15.45,0,0,0,57,41.57V15.43A15.45,15.45,0,0,0,41.57,0ZM28.5,42.74A14.24,14.24,0,1,1,42.74,28.5,14.26,14.26,0,0,1,28.5,42.74ZM44.46,17a5,5,0,1,1,5-5A5,5,0,0,1,44.46,17Z"})]})})]})}),(0,p.jsx)("a",{href:"https://twitter.com/SamaAI",className:I().social_icon,target:"_blank",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 62 51.19",children:[(0,p.jsx)("title",{children:"twitter"}),(0,p.jsx)("g",{id:"e7743e55-1863-47ad-a995-4b7f1f924f07","data-name":"Layer 2",children:(0,p.jsx)("g",{id:"ec8c6fd9-2f52-4507-9a24-804bc60dbc33","data-name":"Layer 1",children:(0,p.jsx)("path",{d:"M23.59,51.19c-10.35,0-18.53-1.81-22.44-5l-.07-.06L1,46.1a3.19,3.19,0,0,1-.84-3.35l0-.1a3.24,3.24,0,0,1,3-2,26.57,26.57,0,0,0,7.06-1,13.45,13.45,0,0,1-7.07-8.16,2.92,2.92,0,0,1,1-3.38,3.06,3.06,0,0,1,.88-.45,19.52,19.52,0,0,1-4-7.18l0-.08,0-.09a3,3,0,0,1,1.4-3.23,3,3,0,0,1,1.43-.4,15.15,15.15,0,0,1-1.14-3.49A14.59,14.59,0,0,1,4.24,3.47l.38-.77a2.15,2.15,0,0,1,3.44-.56l.7.7c5.53,5.81,10.49,8.56,19.06,10.44a15.17,15.17,0,0,1,4.1-8.75A14.39,14.39,0,0,1,42.19,0h0c2.84,0,6.36,1.62,8.49,2.77,1.83-.6,4-1.53,6.32-2.51a2.88,2.88,0,0,1,3.22.57,2.85,2.85,0,0,1,.62,3.11c-.17.47-.36.92-.57,1.36a3.07,3.07,0,0,1,.84.58,3.13,3.13,0,0,1,.78,2.92l0,.1a11.92,11.92,0,0,1-4.78,6.56C56.73,35.23,41.84,51.19,23.59,51.19Z"})})})]})}),(0,p.jsx)("a",{href:"https://www.linkedin.com/company/sama-ai/",className:I().social_icon,target:"_blank",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.71 60.79",children:[(0,p.jsx)("title",{children:"linkedin"}),(0,p.jsx)("g",{id:"bd073dff-b6ea-4cf0-bfeb-c3ce392ee6a5","data-name":"Layer 2",children:(0,p.jsxs)("g",{id:"f6b6eb77-7c10-4e27-a3d0-6f8b14e97f2e","data-name":"Layer 1",children:[(0,p.jsx)("path",{d:"M59.65,60.79l-12.35,0,0-19.36c0-4.62-.07-10.56-6.41-10.58s-7.44,5-7.45,10.21l0,19.7-12.36,0,.09-40.95,11.87,0v6.57h.16c1.66-3.13,5.7-6.42,11.73-6.41,12.51,0,14.81,8.28,14.79,19l-.05,21.85Z"}),(0,p.jsx)("path",{d:"M7.17,14.35a7.18,7.18,0,1,1,7.18-7.18A7.17,7.17,0,0,1,7.17,14.35Z"}),(0,p.jsx)("rect",{x:"0.98",y:"19.8",width:"12.39",height:"40.95"})]})})]})}),(0,p.jsx)("a",{href:"https://www.youtube.com/c/SamaAI",className:I().social_icon,target:"_blank",children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 65 44.63",children:[(0,p.jsx)("title",{children:"youtube"}),(0,p.jsx)("g",{id:"b03ac260-8029-40d4-832d-1f2d757db2d5","data-name":"Layer 2",children:(0,p.jsx)("g",{id:"eca1bfe4-f0ec-4c24-9169-be6d2f8b24b5","data-name":"Layer 1",children:(0,p.jsx)("path",{d:"M55,0H10A10,10,0,0,0,0,10V34.63a10,10,0,0,0,10,10H55a10,10,0,0,0,10-10V10A10,10,0,0,0,55,0ZM40.89,24.41,28.3,31.18a2.31,2.31,0,0,1-3.41-2V15.48a2.3,2.3,0,0,1,3.42-2l12.6,6.89a2.31,2.31,0,0,1,0,4.06Z"})})})]})})]})})]}),(0,p.jsxs)("div",{className:I().lower,children:[(0,p.jsxs)("div",{className:I().lower_left,children:[(0,p.jsx)(j.default,{href:"/terms-of-service",children:(0,p.jsx)("a",{className:I().nav_link,children:"Terms"})}),(0,p.jsx)(j.default,{href:"/privacy-policy",children:(0,p.jsx)("a",{className:I().nav_link,children:"Privacy"})}),(0,p.jsx)(j.default,{href:"/quality-and-information-policy",children:(0,p.jsx)("a",{className:I().nav_link,children:"Quality & Information"})})]}),(0,p.jsxs)("div",{className:I().lower_right,children:[(0,p.jsxs)("h6",{children:["Copyright \xa9 ",i," Sama Inc."]}),(0,p.jsx)("h6",{children:"All rights reserved."})]})]})]})})};var R=function(e){var a=e.config,r=e.children;if(!a)return console.error("Missing config"),(0,p.jsx)("div",{children:"Missing config"});var t=a.title,i=a.mainNav,o=a.footerNav,l=a.logo;return a.url,(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(n.default,{children:[(0,p.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width, viewport-fit=cover"}),(0,p.jsx)("title",{children:"Sama - Make Training Data Your Competitive Advantage"})]}),(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)(A,{title:t,navItems:i,logo:l}),(0,p.jsx)("main",{className:"content",children:r}),(0,p.jsx)(S,{navItems:o.items,logo:l})]})]})}},4151:function(e,a,r){"use strict";var t=r(7294),n=r(267),i=r.n(n),o=r(1664),l=r(4591),c=r.n(l),s=r(5893);a.Z=function(e){var a=e.title,r=e.type,n=e.size,l=e.link,d=(0,t.useState)(l),_=d[0],u=d[1];(0,t.useEffect)((function(){l&&l.internalLink&&i().fetch('*[_type == "page" && _id == "'.concat(l.internalLink._ref,'"][0]')).then((function(e){u(e.slug.current)}))}));var h="".concat(c().wrapper," ").concat(r?c()["_".concat(r)]:""," ").concat(n?c()["_".concat(n)]:""),m=(0,s.jsx)("button",{className:c().btn,children:(0,s.jsx)("h3",{className:c().text,children:a})});if(_)return(0,s.jsx)(s.Fragment,{children:_.externalUrl?(0,s.jsx)("a",{href:_.externalUrl,className:h,target:"_blank",rel:"noopener",children:m}):(0,s.jsx)(o.default,{href:_,children:(0,s.jsx)("a",{className:h,children:m})})})}},4591:function(e){e.exports={"umoja-u-pad-1":"button_umoja-u-pad-1__378Rh","umoja-u-pad-t--0":"button_umoja-u-pad-t--0__TY9Xc","umoja-u-pad-b--0":"button_umoja-u-pad-b--0__2c-Un","umoja-l-grid--12":"button_umoja-l-grid--12__RgSB0","umoja-l-grid--6":"button_umoja-l-grid--6__3iPRr","umoja-l-page-width":"button_umoja-l-page-width__TBzfJ","umoja-l-grid-section":"button_umoja-l-grid-section__30hdz","umoja-l-grid-gap--row-1":"button_umoja-l-grid-gap--row-1__13k4Y","umoja-l-grid-gap--row-2":"button_umoja-l-grid-gap--row-2__3mbaT","umoja-l-grid-gap--row-3":"button_umoja-l-grid-gap--row-3__FBbl9","umoja-l-grid-align--center":"button_umoja-l-grid-align--center__7o5b6","umoja-l-grid-align--base":"button_umoja-l-grid-align--base__dSWXb",wrapper:"button_wrapper__3lRbv",btn:"button_btn__1qxP1",text:"button_text__3_sCS",_secondary:"button__secondary__1pZ5q",_arrow:"button__arrow__1eUJP",_small:"button__small__2kIwW"}},4906:function(e){e.exports={"umoja-u-pad-1":"footer_umoja-u-pad-1__28dD1","umoja-u-pad-t--0":"footer_umoja-u-pad-t--0__2i4ME","umoja-u-pad-b--0":"footer_umoja-u-pad-b--0__2JR--","umoja-l-grid--12":"footer_umoja-l-grid--12__PV3JZ","umoja-l-grid--6":"footer_umoja-l-grid--6__1dRcY","umoja-l-page-width":"footer_umoja-l-page-width__2CarG","umoja-l-grid-section":"footer_umoja-l-grid-section__1LTFe","umoja-l-grid-gap--row-1":"footer_umoja-l-grid-gap--row-1__36rEV","umoja-l-grid-gap--row-2":"footer_umoja-l-grid-gap--row-2__20H7c","umoja-l-grid-gap--row-3":"footer_umoja-l-grid-gap--row-3__2oLN2","umoja-l-grid-align--center":"footer_umoja-l-grid-align--center__3elRt","umoja-l-grid-align--base":"footer_umoja-l-grid-align--base__15bJZ",wrapper:"footer_wrapper__2VAfJ",upper:"footer_upper__2a6XG",upper_right:"footer_upper_right__cpliC",nav_head:"footer_nav_head__1keQK",nav_link:"footer_nav_link__X1RNI",middle:"footer_middle__iiTSJ",middle_left:"footer_middle_left__3ff78",middle_right:"footer_middle_right__2b-lC",social:"footer_social__1NFfV",social_icon:"footer_social_icon__wI2OK",lower:"footer_lower__1z3Av",lower_left:"footer_lower_left__141hE",lower_right:"footer_lower_right__22vMw"}},9040:function(e){e.exports={"umoja-u-pad-1":"header_umoja-u-pad-1__13p9W","umoja-u-pad-t--0":"header_umoja-u-pad-t--0__v1i98","umoja-u-pad-b--0":"header_umoja-u-pad-b--0__3hm7d","umoja-l-grid--12":"header_umoja-l-grid--12__2UhK9","umoja-l-grid--6":"header_umoja-l-grid--6__2oWO5","umoja-l-page-width":"header_umoja-l-page-width__2rMVR","umoja-l-grid-section":"header_umoja-l-grid-section__2URtG","umoja-l-grid-gap--row-1":"header_umoja-l-grid-gap--row-1__15idn","umoja-l-grid-gap--row-2":"header_umoja-l-grid-gap--row-2__3syxA","umoja-l-grid-gap--row-3":"header_umoja-l-grid-gap--row-3__28-vL","umoja-l-grid-align--center":"header_umoja-l-grid-align--center__3C5zd","umoja-l-grid-align--base":"header_umoja-l-grid-align--base__208hq",outer:"header_outer__yu9q7",wrapper:"header_wrapper__3Ghzm",logo:"header_logo__eiLSq",hamburger:"header_hamburger__1ZcbZ",hamburger_box:"header_hamburger_box__RZ7CY",hamburger_box_inner:"header_hamburger_box_inner__1PmWZ",navBar:"header_navBar__37eSJ",navItem:"header_navItem__1HiGN",navItem_label:"header_navItem_label__fN3Cy",dropDown:"header_dropDown__6NxUb",navItem_label__active:"header_navItem_label__active__3i-yQ",navLink:"header_navLink__1ARu5",navLink__active:"header_navLink__active__3cW9s",dropDown_group:"header_dropDown_group__2BZXC",dropdown_group_label:"header_dropdown_group_label__tmND8",cta:"header_cta__3J8I7",_active:"header__active__EeQyz"}}}]);
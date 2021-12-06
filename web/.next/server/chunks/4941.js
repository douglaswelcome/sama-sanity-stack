"use strict";
exports.id = 4941;
exports.ids = [4941];
exports.modules = {

/***/ 4941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__.default)(() => Promise.all(/* import() */[__webpack_require__.e(7426), __webpack_require__.e(1664), __webpack_require__.e(3653), __webpack_require__.e(4151), __webpack_require__.e(425)]).then(__webpack_require__.bind(__webpack_require__, 425)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(425)],
    modules: ["../components/Layout.js -> " + './header/header']
  }
});
const Footer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__.default)(() => Promise.all(/* import() */[__webpack_require__.e(7426), __webpack_require__.e(1664), __webpack_require__.e(7851)]).then(__webpack_require__.bind(__webpack_require__, 3551)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3551)],
    modules: ["../components/Layout.js -> " + './footer/footer']
  }
});

function Layout(props) {
  const {
    config,
    children
  } = props;

  if (!config) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      children: "Missing config"
    });
  }

  const {
    title,
    mainNav,
    footerNav,
    logo,
    url
  } = config;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width, viewport-fit=cover"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("title", {
        children: "Sama - Make Training Data Your Competitive Advantage"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Header, {
        title: title,
        navItems: mainNav,
        logo: logo
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("main", {
        className: "content",
        children: children
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Footer, {
        navItems: footerNav.items,
        logo: logo
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ })

};
;
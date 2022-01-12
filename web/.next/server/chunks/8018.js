exports.id = 8018;
exports.ids = [8018];
exports.modules = {

/***/ 8018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bodystatic_headline_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6380);
/* harmony import */ var _bodystatic_headline_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_headline_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4151);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const bodystatic_headline = props => {
  const {
    preheadline,
    headline,
    subheadline,
    cta
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "bodystatic-headline umoja-l-grid--12",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      class: (_bodystatic_headline_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inner),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
        className: (_bodystatic_headline_module_scss__WEBPACK_IMPORTED_MODULE_3___default().__preheadline),
        children: preheadline
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
        className: (_bodystatic_headline_module_scss__WEBPACK_IMPORTED_MODULE_3___default().__headline),
        children: headline
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
        className: (_bodystatic_headline_module_scss__WEBPACK_IMPORTED_MODULE_3___default().__subheadline),
        children: subheadline
      }), cta && cta.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread({}, cta))]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_headline);

/***/ }),

/***/ 6380:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-headline_umoja-u-pad-1__1XYiW",
	"umoja-u-pad-t--0": "bodystatic-headline_umoja-u-pad-t--0__a6zvr",
	"umoja-u-pad-b--0": "bodystatic-headline_umoja-u-pad-b--0__1oNF4",
	"umoja-l-grid--12": "bodystatic-headline_umoja-l-grid--12__1a-R8",
	"umoja-l-grid--6": "bodystatic-headline_umoja-l-grid--6__762gI",
	"umoja-l-page-width": "bodystatic-headline_umoja-l-page-width__T2JlZ",
	"umoja-l-grid-section": "bodystatic-headline_umoja-l-grid-section__1gfgQ",
	"umoja-l-grid-gap--row-1": "bodystatic-headline_umoja-l-grid-gap--row-1__2dTbo",
	"umoja-l-grid-gap--row-2": "bodystatic-headline_umoja-l-grid-gap--row-2__2_igf",
	"umoja-l-grid-gap--row-3": "bodystatic-headline_umoja-l-grid-gap--row-3__e9KFU",
	"umoja-l-grid-align--center": "bodystatic-headline_umoja-l-grid-align--center__1z7h3",
	"umoja-l-grid-align--base": "bodystatic-headline_umoja-l-grid-align--base__30Rvf",
	"inner": "bodystatic-headline_inner__1hA1E",
	"__preheadline": "bodystatic-headline___preheadline__1GlVO"
};


/***/ })

};
;
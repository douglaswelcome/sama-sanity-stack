exports.id = 9472;
exports.ids = [9472];
exports.modules = {

/***/ 9472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4151);
/* harmony import */ var _bodystatic_headSubCta_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3635);
/* harmony import */ var _bodystatic_headSubCta_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_headSubCta_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const bodystatic_headSubCta = props => {
  const {
    bigheady,
    preheadline,
    headline,
    subheadline,
    button
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bodystatic-headSubCta umoja-l-grid--12 umoja-l-grid-gap--row-1",
    children: [preheadline && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
      className: (_bodystatic_headSubCta_module_scss__WEBPACK_IMPORTED_MODULE_3___default().preheadline),
      children: preheadline
    }), headline && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
      className: `${(_bodystatic_headSubCta_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headline)}${bigheady ? ' display-small' : ''}`,
      children: headline
    }), subheadline && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
      className: (_bodystatic_headSubCta_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subheadline),
      children: subheadline
    }), button && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_bodystatic_headSubCta_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cta),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread({}, button))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_headSubCta);

/***/ }),

/***/ 3635:
/***/ ((module) => {

// Exports
module.exports = {
	"preheadline": "bodystatic-headSubCta_preheadline__1vU_N",
	"headline": "bodystatic-headSubCta_headline__3tPhe",
	"subheadline": "bodystatic-headSubCta_subheadline__2tvb0",
	"cta": "bodystatic-headSubCta_cta__3EKCf"
};


/***/ })

};
;
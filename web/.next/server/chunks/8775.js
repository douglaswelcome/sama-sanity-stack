exports.id = 8775;
exports.ids = [8775];
exports.modules = {

/***/ 8775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4151);
/* harmony import */ var _bodystatic_splitTxtBtn_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4339);
/* harmony import */ var _bodystatic_splitTxtBtn_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_splitTxtBtn_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const bodystatic_splitTxtBtn = props => {
  const {
    headline,
    body,
    buttons
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bodystatic-splitTxtBtn umoja-l-grid--12",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_bodystatic_splitTxtBtn_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
        children: headline
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        children: body
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_bodystatic_splitTxtBtn_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_bodystatic_splitTxtBtn_module_scss__WEBPACK_IMPORTED_MODULE_3___default().buttons),
        children: buttons.map(button => {
          return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_button_button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread(_objectSpread({}, button), {}, {
            key: button._key
          }));
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_splitTxtBtn);

/***/ }),

/***/ 4339:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-splitTxtBtn_umoja-u-pad-1__3nhZl",
	"umoja-u-pad-t--0": "bodystatic-splitTxtBtn_umoja-u-pad-t--0__306Z6",
	"umoja-u-pad-b--0": "bodystatic-splitTxtBtn_umoja-u-pad-b--0__2nYYQ",
	"umoja-l-grid--12": "bodystatic-splitTxtBtn_umoja-l-grid--12__2W7g0",
	"umoja-l-grid--6": "bodystatic-splitTxtBtn_umoja-l-grid--6__3BFQ-",
	"umoja-l-page-width": "bodystatic-splitTxtBtn_umoja-l-page-width__2HglD",
	"umoja-l-grid-section": "bodystatic-splitTxtBtn_umoja-l-grid-section__3KoFB",
	"umoja-l-grid-section--flat-top": "bodystatic-splitTxtBtn_umoja-l-grid-section--flat-top__1zf3e",
	"umoja-l-grid-gap--row-1": "bodystatic-splitTxtBtn_umoja-l-grid-gap--row-1__1W6-d",
	"umoja-l-grid-gap--row-2": "bodystatic-splitTxtBtn_umoja-l-grid-gap--row-2__zf62-",
	"umoja-l-grid-gap--row-3": "bodystatic-splitTxtBtn_umoja-l-grid-gap--row-3__3oMST",
	"umoja-l-grid-align--center": "bodystatic-splitTxtBtn_umoja-l-grid-align--center__1xjkD",
	"umoja-l-grid-align--base": "bodystatic-splitTxtBtn_umoja-l-grid-align--base__D7nx4",
	"left": "bodystatic-splitTxtBtn_left__1GvQ7",
	"right": "bodystatic-splitTxtBtn_right__3xe-T",
	"buttons": "bodystatic-splitTxtBtn_buttons__2ELKN"
};


/***/ })

};
;
exports.id = 4151;
exports.ids = [4151];
exports.modules = {

/***/ 4151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1692);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3879);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Button = props => {
  const {
    title,
    type,
    size,
    link
  } = props;
  const wrapperClass = `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper)} ${type ? (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`_${type}`] : ''} ${size ? (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`_${size}`] : ''}`;

  const buttonInner = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
    className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
      className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
      children: title
    })
  });

  if (link) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      className: wrapperClass,
      link: link,
      children: buttonInner
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: wrapperClass,
      children: buttonInner
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 3879:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "button_umoja-u-pad-1__378Rh",
	"umoja-u-pad-t--0": "button_umoja-u-pad-t--0__TY9Xc",
	"umoja-u-pad-b--0": "button_umoja-u-pad-b--0__2c-Un",
	"umoja-l-grid--12": "button_umoja-l-grid--12__RgSB0",
	"umoja-l-grid--6": "button_umoja-l-grid--6__3iPRr",
	"umoja-l-page-width": "button_umoja-l-page-width__TBzfJ",
	"umoja-l-grid-section": "button_umoja-l-grid-section__30hdz",
	"umoja-l-grid-section--flat-top": "button_umoja-l-grid-section--flat-top__3-E46",
	"umoja-l-grid-gap--row-1": "button_umoja-l-grid-gap--row-1__13k4Y",
	"umoja-l-grid-gap--row-2": "button_umoja-l-grid-gap--row-2__3mbaT",
	"umoja-l-grid-gap--row-3": "button_umoja-l-grid-gap--row-3__FBbl9",
	"umoja-l-grid-align--center": "button_umoja-l-grid-align--center__7o5b6",
	"umoja-l-grid-align--base": "button_umoja-l-grid-align--base__dSWXb",
	"umoja-l-grid-span--full": "button_umoja-l-grid-span--full__4v1Sd",
	"wrapper": "button_wrapper__3lRbv",
	"btn": "button_btn__1qxP1",
	"text": "button_text__3_sCS",
	"_secondary": "button__secondary__1pZ5q",
	"_arrow": "button__arrow__1eUJP",
	"_small": "button__small__2kIwW"
};


/***/ })

};
;
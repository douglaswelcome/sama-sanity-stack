exports.id = 5970;
exports.ids = [5970];
exports.modules = {

/***/ 5970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var _bodystatic_bragBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5003);
/* harmony import */ var _bodystatic_bragBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_bragBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const bodystatic_bragBar = props => {
  const {
    logos,
    align_left
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: `${align_left ? (_bodystatic_bragBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().__left) : 'bodystatic-bragBar'} umoja-l-grid--12 umoja-l-grid-gap--row-1`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_bodystatic_bragBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logoRow),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_bodystatic_bragBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logos),
        children: logos.map(logo => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: (_bodystatic_bragBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
              src: logo,
              height: 70,
              width: 128
            })
          }, logo._key);
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_bragBar);

/***/ }),

/***/ 5003:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-bragBar_umoja-u-pad-1__3_3VN",
	"umoja-u-pad-t--0": "bodystatic-bragBar_umoja-u-pad-t--0__kWk1L",
	"umoja-u-pad-b--0": "bodystatic-bragBar_umoja-u-pad-b--0__3AUx9",
	"umoja-l-grid--12": "bodystatic-bragBar_umoja-l-grid--12__WUZT4",
	"umoja-l-grid--6": "bodystatic-bragBar_umoja-l-grid--6__HOveq",
	"umoja-l-page-width": "bodystatic-bragBar_umoja-l-page-width__1ujoM",
	"umoja-l-grid-section": "bodystatic-bragBar_umoja-l-grid-section__2YBV_",
	"umoja-l-grid-section--flat-top": "bodystatic-bragBar_umoja-l-grid-section--flat-top__2FzBF",
	"umoja-l-grid-gap--row-1": "bodystatic-bragBar_umoja-l-grid-gap--row-1__WKCXx",
	"umoja-l-grid-gap--row-2": "bodystatic-bragBar_umoja-l-grid-gap--row-2__1LO1g",
	"umoja-l-grid-gap--row-3": "bodystatic-bragBar_umoja-l-grid-gap--row-3__2PLRM",
	"umoja-l-grid-align--center": "bodystatic-bragBar_umoja-l-grid-align--center__2dEl6",
	"umoja-l-grid-align--base": "bodystatic-bragBar_umoja-l-grid-align--base__1pgG4",
	"logoRow": "bodystatic-bragBar_logoRow__2Ied5",
	"logos": "bodystatic-bragBar_logos__30ei1",
	"logo": "bodystatic-bragBar_logo__MviLs",
	"__left": "bodystatic-bragBar___left__ZKZfi"
};


/***/ })

};
;
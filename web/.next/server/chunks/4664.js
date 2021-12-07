exports.id = 4664;
exports.ids = [4664];
exports.modules = {

/***/ 4664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var _bodystatic_panelQuote_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(570);
/* harmony import */ var _bodystatic_panelQuote_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_panelQuote_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const bodystatic_panelQuote = props => {
  const {
    quote
  } = props;
  const citation = quote.author_title ? `${quote.quote_author}, ${quote.author_title}` : quote.quote_author;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "bodystatic-panelQuote umoja-l-grid--12",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_bodystatic_panelQuote_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inner),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_bodystatic_panelQuote_module_scss__WEBPACK_IMPORTED_MODULE_3___default().gradient)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_bodystatic_panelQuote_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          className: (_bodystatic_panelQuote_module_scss__WEBPACK_IMPORTED_MODULE_3___default().txt),
          children: quote.quote_text
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          className: (_bodystatic_panelQuote_module_scss__WEBPACK_IMPORTED_MODULE_3___default().author),
          children: citation
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_bodystatic_panelQuote_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imgWrap),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          src: quote.author_headshot,
          layout: "fill"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_panelQuote);

/***/ }),

/***/ 570:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-panelQuote_umoja-u-pad-1__1nVQ_",
	"umoja-u-pad-t--0": "bodystatic-panelQuote_umoja-u-pad-t--0__2OrBm",
	"umoja-u-pad-b--0": "bodystatic-panelQuote_umoja-u-pad-b--0__253Ur",
	"umoja-l-grid--12": "bodystatic-panelQuote_umoja-l-grid--12__720WI",
	"umoja-l-grid--6": "bodystatic-panelQuote_umoja-l-grid--6__1zXxD",
	"umoja-l-page-width": "bodystatic-panelQuote_umoja-l-page-width__2FCSr",
	"umoja-l-grid-section": "bodystatic-panelQuote_umoja-l-grid-section__1mxO2",
	"umoja-l-grid-section--flat-top": "bodystatic-panelQuote_umoja-l-grid-section--flat-top__3Lsbt",
	"umoja-l-grid-gap--row-1": "bodystatic-panelQuote_umoja-l-grid-gap--row-1__1nmwm",
	"umoja-l-grid-gap--row-2": "bodystatic-panelQuote_umoja-l-grid-gap--row-2__swzdu",
	"umoja-l-grid-gap--row-3": "bodystatic-panelQuote_umoja-l-grid-gap--row-3__2kb83",
	"umoja-l-grid-align--center": "bodystatic-panelQuote_umoja-l-grid-align--center__3OohM",
	"umoja-l-grid-align--base": "bodystatic-panelQuote_umoja-l-grid-align--base__2EoEQ",
	"inner": "bodystatic-panelQuote_inner__SQjXa",
	"gradient": "bodystatic-panelQuote_gradient__3ys9N",
	"content": "bodystatic-panelQuote_content__3i7BK",
	"txt": "bodystatic-panelQuote_txt__2dTyd",
	"author": "bodystatic-panelQuote_author__252XU",
	"imgWrap": "bodystatic-panelQuote_imgWrap__3V9PI"
};


/***/ })

};
;
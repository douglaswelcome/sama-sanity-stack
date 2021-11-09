exports.id = 136;
exports.ids = [136];
exports.modules = {

/***/ 136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1095);
/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_sanity_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bodystatic_flowRow_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8025);
/* harmony import */ var _bodystatic_flowRow_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_flowRow_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const bodystatic_flowRow = props => {
  const {
    items
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "bodystatic-flowRow umoja-l-grid--6",
    children: items.map((item, i) => {
      const imageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_1__.useNextSanityImage)((_client__WEBPACK_IMPORTED_MODULE_2___default()), item.image);
      let backgroundStyles = {};
      backgroundStyles.backgroundImage = `url(${imageProps.src})`;

      if (item.backgroundSize) {
        backgroundStyles.backgroundSize = `${item.backgroundSize}%`;
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: (_bodystatic_flowRow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().step),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_bodystatic_flowRow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
          style: backgroundStyles,
          children: i < 2 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: (_bodystatic_flowRow_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrow)
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
          children: item.title
        })]
      }, item._key);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_flowRow);

/***/ }),

/***/ 8025:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-flowRow_umoja-u-pad-1__2xeom",
	"umoja-u-pad-t--0": "bodystatic-flowRow_umoja-u-pad-t--0__2x06B",
	"umoja-u-pad-b--0": "bodystatic-flowRow_umoja-u-pad-b--0__2Cap3",
	"umoja-l-grid--12": "bodystatic-flowRow_umoja-l-grid--12__PX3z2",
	"umoja-l-grid--6": "bodystatic-flowRow_umoja-l-grid--6__3yItI",
	"umoja-l-page-width": "bodystatic-flowRow_umoja-l-page-width__2lqZV",
	"umoja-l-grid-section": "bodystatic-flowRow_umoja-l-grid-section__2D-oN",
	"umoja-l-grid-gap--row-1": "bodystatic-flowRow_umoja-l-grid-gap--row-1__1e1u5",
	"umoja-l-grid-gap--row-2": "bodystatic-flowRow_umoja-l-grid-gap--row-2__2lx4v",
	"umoja-l-grid-gap--row-3": "bodystatic-flowRow_umoja-l-grid-gap--row-3__2HOOB",
	"umoja-l-grid-align--center": "bodystatic-flowRow_umoja-l-grid-align--center__2vYiq",
	"umoja-l-grid-align--base": "bodystatic-flowRow_umoja-l-grid-align--base__3hoVN",
	"step": "bodystatic-flowRow_step__2nhT9",
	"image": "bodystatic-flowRow_image__2YV8P",
	"arrow": "bodystatic-flowRow_arrow__1MpII"
};


/***/ })

};
;
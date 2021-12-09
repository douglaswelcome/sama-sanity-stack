exports.id = 6242;
exports.ids = [6242];
exports.modules = {

/***/ 2942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var _components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4687);
/* harmony import */ var _bodystatic_panelColumns_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4724);
/* harmony import */ var _bodystatic_panelColumns_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_panelColumns_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const bodystatic_panelColumns = props => {
  const {
    panels
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "bodystatic-panelColumns umoja-l-grid--12",
    children: panels.map(panel => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: (_bodystatic_panelColumns_module_scss__WEBPACK_IMPORTED_MODULE_4___default().panel),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_bodystatic_panelColumns_module_scss__WEBPACK_IMPORTED_MODULE_4___default().panel_imgWrap),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            src: panel.image,
            layout: "responsive",
            objectFit: "cover"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: (_bodystatic_panelColumns_module_scss__WEBPACK_IMPORTED_MODULE_4___default().panel_copy),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
            children: panel.header
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            richText: panel.body.richText,
            align: panel.body.align
          })]
        })]
      });
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_panelColumns);

/***/ }),

/***/ 4724:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-panelColumns_umoja-u-pad-1__ifnDw",
	"umoja-u-pad-t--0": "bodystatic-panelColumns_umoja-u-pad-t--0__4844F",
	"umoja-u-pad-b--0": "bodystatic-panelColumns_umoja-u-pad-b--0__3Se1n",
	"umoja-l-grid--12": "bodystatic-panelColumns_umoja-l-grid--12__1kmiR",
	"umoja-l-grid--6": "bodystatic-panelColumns_umoja-l-grid--6__2RzIZ",
	"umoja-l-page-width": "bodystatic-panelColumns_umoja-l-page-width__1-lmB",
	"umoja-l-grid-section": "bodystatic-panelColumns_umoja-l-grid-section__seZR_",
	"umoja-l-grid-section--flat-top": "bodystatic-panelColumns_umoja-l-grid-section--flat-top__3q8Yi",
	"umoja-l-grid-gap--row-1": "bodystatic-panelColumns_umoja-l-grid-gap--row-1__2OCRu",
	"umoja-l-grid-gap--row-2": "bodystatic-panelColumns_umoja-l-grid-gap--row-2__t4qiE",
	"umoja-l-grid-gap--row-3": "bodystatic-panelColumns_umoja-l-grid-gap--row-3__6-ttf",
	"umoja-l-grid-align--center": "bodystatic-panelColumns_umoja-l-grid-align--center__iuig1",
	"umoja-l-grid-align--base": "bodystatic-panelColumns_umoja-l-grid-align--base__G7PEm",
	"umoja-l-grid-span--full": "bodystatic-panelColumns_umoja-l-grid-span--full__14awl",
	"panel": "bodystatic-panelColumns_panel__16_vX",
	"panel_imgWrap": "bodystatic-panelColumns_panel_imgWrap__1lzlt",
	"panel_copy": "bodystatic-panelColumns_panel_copy__22vMr"
};


/***/ })

};
;
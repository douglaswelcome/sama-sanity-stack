exports.id = 3046;
exports.ids = [3046];
exports.modules = {

/***/ 3046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1692);
/* harmony import */ var _bodystatic_galleryGrid_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4463);
/* harmony import */ var _bodystatic_galleryGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_galleryGrid_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const bodystatic_galleryGrid = props => {
  const {
    gridItems
  } = props;
  let className = `bodystatic-galleryGrid umoja-l-grid--6 umoja-l-grid-gap--row-2 ${gridItems.length == 4 ? (_bodystatic_galleryGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._four) : ''}`;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: className,
    children: gridItems.map(item => {
      if (item.link) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          link: item.link,
          className: `${(_bodystatic_galleryGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)} ${(_bodystatic_galleryGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item__link)}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: (_bodystatic_galleryGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imgWrap),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
              layout: "fill",
              objectFit: "cover",
              src: item.image
            })
          }), item.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
            children: item.title
          }), item.body && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            children: item.body
          })]
        }, item._key);
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: (_bodystatic_galleryGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: (_bodystatic_galleryGrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imgWrap),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
              layout: "fill",
              objectFit: "cover",
              src: item.image
            })
          }), item.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
            children: item.title
          }), item.body && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            children: item.body
          })]
        }, item._key);
      }
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_galleryGrid);

/***/ }),

/***/ 4463:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-galleryGrid_umoja-u-pad-1__rK05t",
	"umoja-u-pad-t--0": "bodystatic-galleryGrid_umoja-u-pad-t--0__XSDtk",
	"umoja-u-pad-b--0": "bodystatic-galleryGrid_umoja-u-pad-b--0__2h7kJ",
	"umoja-l-grid--12": "bodystatic-galleryGrid_umoja-l-grid--12__24nWF",
	"umoja-l-grid--6": "bodystatic-galleryGrid_umoja-l-grid--6__2KZ7s",
	"umoja-l-page-width": "bodystatic-galleryGrid_umoja-l-page-width__2mwUe",
	"umoja-l-grid-section": "bodystatic-galleryGrid_umoja-l-grid-section__1q1F5",
	"umoja-l-grid-section--flat-top": "bodystatic-galleryGrid_umoja-l-grid-section--flat-top__7hNyr",
	"umoja-l-grid-gap--row-1": "bodystatic-galleryGrid_umoja-l-grid-gap--row-1__1675w",
	"umoja-l-grid-gap--row-2": "bodystatic-galleryGrid_umoja-l-grid-gap--row-2__g9S0G",
	"umoja-l-grid-gap--row-3": "bodystatic-galleryGrid_umoja-l-grid-gap--row-3__176RQ",
	"umoja-l-grid-align--center": "bodystatic-galleryGrid_umoja-l-grid-align--center__TslZ5",
	"umoja-l-grid-align--base": "bodystatic-galleryGrid_umoja-l-grid-align--base__1Ym5u",
	"umoja-l-grid-span--full": "bodystatic-galleryGrid_umoja-l-grid-span--full__2G1Tb",
	"item": "bodystatic-galleryGrid_item__25uSd",
	"imgWrap": "bodystatic-galleryGrid_imgWrap__1kr4Z",
	"item__link": "bodystatic-galleryGrid_item__link__2d6ow",
	"_four": "bodystatic-galleryGrid__four__3BUSH"
};


/***/ })

};
;
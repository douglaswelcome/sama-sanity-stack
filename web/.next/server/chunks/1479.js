exports.id = 1479;
exports.ids = [1479];
exports.modules = {

/***/ 1479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4151);
/* harmony import */ var _hero_splittxtimg_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(849);
/* harmony import */ var _hero_splittxtimg_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hero_splittxtimg_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const hero_splittxtimg = props => {
  const {
    preheadline,
    heading,
    image,
    tagline,
    cta
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "hero-splittxtimg umoja-l-grid--12 umoja-l-grid-align--center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_hero_splittxtimg_module_scss__WEBPACK_IMPORTED_MODULE_4___default().copy),
      children: [preheadline && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
        className: (_hero_splittxtimg_module_scss__WEBPACK_IMPORTED_MODULE_4___default().preheadline),
        children: preheadline
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
        children: heading
      }), tagline && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
        children: tagline
      }), cta.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread({}, cta))]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_hero_splittxtimg_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imgWrapper),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        src: image,
        layout: "responsive",
        sizes: "(max-width: 500px) 100vh, 500px"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero_splittxtimg);

/***/ }),

/***/ 849:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "hero-splittxtimg_umoja-u-pad-1__3GALI",
	"umoja-u-pad-t--0": "hero-splittxtimg_umoja-u-pad-t--0__3EIC9",
	"umoja-u-pad-b--0": "hero-splittxtimg_umoja-u-pad-b--0__2LSx9",
	"umoja-l-grid--12": "hero-splittxtimg_umoja-l-grid--12__VECTB",
	"umoja-l-grid--6": "hero-splittxtimg_umoja-l-grid--6__3KC2U",
	"umoja-l-page-width": "hero-splittxtimg_umoja-l-page-width__2BmN6",
	"umoja-l-grid-section": "hero-splittxtimg_umoja-l-grid-section__3B7--",
	"umoja-l-grid-section--flat-top": "hero-splittxtimg_umoja-l-grid-section--flat-top__2YYss",
	"umoja-l-grid-gap--row-1": "hero-splittxtimg_umoja-l-grid-gap--row-1__2gxrc",
	"umoja-l-grid-gap--row-2": "hero-splittxtimg_umoja-l-grid-gap--row-2__7Mg-6",
	"umoja-l-grid-gap--row-3": "hero-splittxtimg_umoja-l-grid-gap--row-3__2FbAA",
	"umoja-l-grid-align--center": "hero-splittxtimg_umoja-l-grid-align--center__2H2zA",
	"umoja-l-grid-align--base": "hero-splittxtimg_umoja-l-grid-align--base__1L8B2",
	"umoja-l-grid-span--full": "hero-splittxtimg_umoja-l-grid-span--full__21ULu",
	"copy": "hero-splittxtimg_copy__28fs5",
	"preheadline": "hero-splittxtimg_preheadline__3Ikgm",
	"imgWrapper": "hero-splittxtimg_imgWrapper__XL8hm"
};


/***/ })

};
;
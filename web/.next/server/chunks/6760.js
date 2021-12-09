exports.id = 6760;
exports.ids = [6760];
exports.modules = {

/***/ 6760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4687);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4151);
/* harmony import */ var _hero_centertxt_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5336);
/* harmony import */ var _hero_centertxt_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hero_centertxt_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const hero_centertxt = props => {
  const {
    heading,
    tagline,
    cta
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "hero-centertxt umoja-l-grid--12",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_hero_centertxt_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
        children: heading
      }), tagline && tagline.richText ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        className: (_hero_centertxt_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tagline),
        richText: tagline.richText,
        align: tagline.align
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
        children: tagline
      }), cta && cta.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread({}, cta))]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero_centertxt);

/***/ }),

/***/ 5336:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "hero-centertxt_umoja-u-pad-1__3LOCH",
	"umoja-u-pad-t--0": "hero-centertxt_umoja-u-pad-t--0__22TMg",
	"umoja-u-pad-b--0": "hero-centertxt_umoja-u-pad-b--0__3VVkB",
	"umoja-l-grid--12": "hero-centertxt_umoja-l-grid--12__3jgPz",
	"umoja-l-grid--6": "hero-centertxt_umoja-l-grid--6__KSGxN",
	"umoja-l-page-width": "hero-centertxt_umoja-l-page-width__1yMe9",
	"umoja-l-grid-section": "hero-centertxt_umoja-l-grid-section__3CP18",
	"umoja-l-grid-section--flat-top": "hero-centertxt_umoja-l-grid-section--flat-top__35BaO",
	"umoja-l-grid-gap--row-1": "hero-centertxt_umoja-l-grid-gap--row-1__2fC2A",
	"umoja-l-grid-gap--row-2": "hero-centertxt_umoja-l-grid-gap--row-2__1EV_-",
	"umoja-l-grid-gap--row-3": "hero-centertxt_umoja-l-grid-gap--row-3__3109y",
	"umoja-l-grid-align--center": "hero-centertxt_umoja-l-grid-align--center__Q-X0b",
	"umoja-l-grid-align--base": "hero-centertxt_umoja-l-grid-align--base__2bS7H",
	"umoja-l-grid-span--full": "hero-centertxt_umoja-l-grid-span--full__3BKrt",
	"body": "hero-centertxt_body__2J6HW",
	"tagline": "hero-centertxt_tagline__2kA_Y"
};


/***/ })

};
;
exports.id = 613;
exports.ids = [613];
exports.modules = {

/***/ 613:
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
/* harmony import */ var _bodystatic_panelFeature_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4611);
/* harmony import */ var _bodystatic_panelFeature_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_panelFeature_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const bodystatic_panelFeature = props => {
  const {
    image_position,
    image,
    headline,
    body_text,
    button,
    awards
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `bodystatic-panelFeature ${image_position ? (_bodystatic_panelFeature_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._flipImage) : ''} umoja-l-grid--12 umoja-u-bg--charcoal3 container-lg`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_bodystatic_panelFeature_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imgWrap),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        src: image,
        layout: "fill"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_bodystatic_panelFeature_module_scss__WEBPACK_IMPORTED_MODULE_4___default().copy),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
        children: headline
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
        children: body_text
      }), awards && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_bodystatic_panelFeature_module_scss__WEBPACK_IMPORTED_MODULE_4___default().awards),
        children: awards.map(award => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            src: award,
            layout: "fixed",
            width: 110,
            height: 110
          }, award._key);
        })
      }), button.link && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread({}, button))]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_panelFeature);

/***/ }),

/***/ 4611:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-panelFeature_umoja-u-pad-1__23o3D",
	"umoja-u-pad-t--0": "bodystatic-panelFeature_umoja-u-pad-t--0__3W9NX",
	"umoja-u-pad-b--0": "bodystatic-panelFeature_umoja-u-pad-b--0__o1HNe",
	"umoja-l-grid--12": "bodystatic-panelFeature_umoja-l-grid--12__1VCEc",
	"umoja-l-grid--6": "bodystatic-panelFeature_umoja-l-grid--6__KdpZw",
	"umoja-l-page-width": "bodystatic-panelFeature_umoja-l-page-width__3Uq-S",
	"umoja-l-grid-section": "bodystatic-panelFeature_umoja-l-grid-section__1LcYr",
	"umoja-l-grid-section--flat-top": "bodystatic-panelFeature_umoja-l-grid-section--flat-top__2QKTp",
	"umoja-l-grid-gap--row-1": "bodystatic-panelFeature_umoja-l-grid-gap--row-1__3uY2j",
	"umoja-l-grid-gap--row-2": "bodystatic-panelFeature_umoja-l-grid-gap--row-2__3xYuU",
	"umoja-l-grid-gap--row-3": "bodystatic-panelFeature_umoja-l-grid-gap--row-3__1AuhY",
	"umoja-l-grid-align--center": "bodystatic-panelFeature_umoja-l-grid-align--center__1j9_z",
	"umoja-l-grid-align--base": "bodystatic-panelFeature_umoja-l-grid-align--base__2qt_c",
	"umoja-l-grid-span--full": "bodystatic-panelFeature_umoja-l-grid-span--full__pSCaa",
	"imgWrap": "bodystatic-panelFeature_imgWrap__3bLuv",
	"copy": "bodystatic-panelFeature_copy__1N0YX",
	"awards": "bodystatic-panelFeature_awards__gkWbO",
	"_flipImage": "bodystatic-panelFeature__flipImage__2DxQN"
};


/***/ })

};
;
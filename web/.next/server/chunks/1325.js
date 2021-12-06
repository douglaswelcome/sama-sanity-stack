exports.id = 1325;
exports.ids = [1325];
exports.modules = {

/***/ 2144:
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
/* harmony import */ var _hero_splittxtimg_tall_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(240);
/* harmony import */ var _hero_splittxtimg_tall_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hero_splittxtimg_tall_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const hero_splittxtimg_tall = props => {
  const {
    preheadline,
    heading,
    image,
    tagline,
    ctas
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "hero-splittxtimg-tall umoja-l-grid--12 umoja-l-grid-align--center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_hero_splittxtimg_tall_module_scss__WEBPACK_IMPORTED_MODULE_4___default().copyWrapper),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: (_hero_splittxtimg_tall_module_scss__WEBPACK_IMPORTED_MODULE_4___default().copy),
        children: [preheadline && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
          className: (_hero_splittxtimg_tall_module_scss__WEBPACK_IMPORTED_MODULE_4___default().preheadline),
          children: preheadline
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
          children: heading
        }), tagline && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
          children: tagline
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_hero_splittxtimg_tall_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttonRow),
          children: ctas.map(cta => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread({}, cta), cta._key);
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_hero_splittxtimg_tall_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageColumn),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_hero_splittxtimg_tall_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageGradient)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_hero_splittxtimg_tall_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageWrapper),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          src: image,
          layout: "responsive",
          objectFit: "cover"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero_splittxtimg_tall);

/***/ }),

/***/ 240:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "hero-splittxtimg-tall_umoja-u-pad-1__Nwtm8",
	"umoja-u-pad-t--0": "hero-splittxtimg-tall_umoja-u-pad-t--0__3cTuc",
	"umoja-u-pad-b--0": "hero-splittxtimg-tall_umoja-u-pad-b--0__WoW5X",
	"umoja-l-grid--12": "hero-splittxtimg-tall_umoja-l-grid--12__1Buha",
	"umoja-l-grid--6": "hero-splittxtimg-tall_umoja-l-grid--6__28iSN",
	"umoja-l-page-width": "hero-splittxtimg-tall_umoja-l-page-width__3vGZJ",
	"umoja-l-grid-section": "hero-splittxtimg-tall_umoja-l-grid-section__1yWgu",
	"umoja-l-grid-gap--row-1": "hero-splittxtimg-tall_umoja-l-grid-gap--row-1__1J5qD",
	"umoja-l-grid-gap--row-2": "hero-splittxtimg-tall_umoja-l-grid-gap--row-2__18dQI",
	"umoja-l-grid-gap--row-3": "hero-splittxtimg-tall_umoja-l-grid-gap--row-3__3iNcL",
	"umoja-l-grid-align--center": "hero-splittxtimg-tall_umoja-l-grid-align--center__zFD2r",
	"umoja-l-grid-align--base": "hero-splittxtimg-tall_umoja-l-grid-align--base__8h_p4",
	"copy": "hero-splittxtimg-tall_copy__AobDg",
	"copyWrapper": "hero-splittxtimg-tall_copyWrapper__2lq4W",
	"preheadline": "hero-splittxtimg-tall_preheadline__3F8XV",
	"buttonRow": "hero-splittxtimg-tall_buttonRow__3DjSU",
	"imageColumn": "hero-splittxtimg-tall_imageColumn__1xcXS",
	"imageWrapper": "hero-splittxtimg-tall_imageWrapper__2gTxY",
	"imageGradient": "hero-splittxtimg-tall_imageGradient__2engX"
};


/***/ })

};
;
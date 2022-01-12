exports.id = 6953;
exports.ids = [6953];
exports.modules = {

/***/ 6953:
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
/* harmony import */ var _components_dot_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);
/* harmony import */ var _hero_home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7445);
/* harmony import */ var _hero_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hero_home_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const hero_home = props => {
  const {
    heading,
    image,
    tagline,
    cta
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "hero-home umoja-l-grid--12",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_hero_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dots),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_dot_canvas__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (_hero_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().copy),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
        className: `${(_hero_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().headline)} display-small `,
        children: heading
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
        className: (_hero_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subheadline),
        children: tagline
      }), cta && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread({}, cta))]
    }), image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_hero_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().img),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_hero_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().imgWrapper),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          src: image,
          layout: "responsive",
          sizes: "(max-width: 800px) 100vh, 800px"
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero_home);

/***/ }),

/***/ 7445:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "hero-home_umoja-u-pad-1__16RBc",
	"umoja-u-pad-t--0": "hero-home_umoja-u-pad-t--0__1vHXv",
	"umoja-u-pad-b--0": "hero-home_umoja-u-pad-b--0__3jkdQ",
	"umoja-l-grid--12": "hero-home_umoja-l-grid--12__3Blff",
	"umoja-l-grid--6": "hero-home_umoja-l-grid--6__2iRI1",
	"umoja-l-page-width": "hero-home_umoja-l-page-width__lkmu4",
	"umoja-l-grid-section": "hero-home_umoja-l-grid-section__hza89",
	"umoja-l-grid-gap--row-1": "hero-home_umoja-l-grid-gap--row-1__OL6Sg",
	"umoja-l-grid-gap--row-2": "hero-home_umoja-l-grid-gap--row-2__3h_Fq",
	"umoja-l-grid-gap--row-3": "hero-home_umoja-l-grid-gap--row-3__3n0KD",
	"umoja-l-grid-align--center": "hero-home_umoja-l-grid-align--center__1xaO3",
	"umoja-l-grid-align--base": "hero-home_umoja-l-grid-align--base__no42m",
	"dots": "hero-home_dots__3dHTM",
	"copy": "hero-home_copy__QxXB-",
	"headline": "hero-home_headline__2r4c0",
	"subheadline": "hero-home_subheadline__2p0ls",
	"img": "hero-home_img__25RvM",
	"imgWrapper": "hero-home_imgWrapper__tSUfI"
};


/***/ })

};
;
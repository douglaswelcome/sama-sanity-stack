exports.id = 8360;
exports.ids = [8360];
exports.modules = {

/***/ 8360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var _bodystatic_iconList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5005);
/* harmony import */ var _bodystatic_iconList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_iconList_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const bodystatic_iconList = props => {
  const {
    icons
  } = props;
  let className = `bodystatic-iconList umoja-l-grid-align--base ${icons.length > 3 ? `umoja-l-grid--12` : `umoja-l-grid--6 ${(_bodystatic_iconList_module_scss__WEBPACK_IMPORTED_MODULE_3___default()._three)}`}`;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: className,
    children: icons.map(icon => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_bodystatic_iconList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon),
        children: [icon.icon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: (_bodystatic_iconList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().iconWrap),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            layout: "fixed",
            src: icon.icon,
            height: 48,
            width: 48
          })
        }), icon.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
          children: icon.title
        }), icon.body && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          children: icon.body
        })]
      }, icon._key);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_iconList);

/***/ }),

/***/ 5005:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-iconList_umoja-u-pad-1__wz52G",
	"umoja-u-pad-t--0": "bodystatic-iconList_umoja-u-pad-t--0__eotpn",
	"umoja-u-pad-b--0": "bodystatic-iconList_umoja-u-pad-b--0__1-KWR",
	"umoja-l-grid--12": "bodystatic-iconList_umoja-l-grid--12__1ea91",
	"umoja-l-grid--6": "bodystatic-iconList_umoja-l-grid--6__2EvXg",
	"umoja-l-page-width": "bodystatic-iconList_umoja-l-page-width__Vu7UY",
	"umoja-l-grid-section": "bodystatic-iconList_umoja-l-grid-section__ngA8V",
	"umoja-l-grid-section--flat-top": "bodystatic-iconList_umoja-l-grid-section--flat-top__c_3kc",
	"umoja-l-grid-gap--row-1": "bodystatic-iconList_umoja-l-grid-gap--row-1__3X0nf",
	"umoja-l-grid-gap--row-2": "bodystatic-iconList_umoja-l-grid-gap--row-2__utGfL",
	"umoja-l-grid-gap--row-3": "bodystatic-iconList_umoja-l-grid-gap--row-3__BKrOI",
	"umoja-l-grid-align--center": "bodystatic-iconList_umoja-l-grid-align--center__cU9_5",
	"umoja-l-grid-align--base": "bodystatic-iconList_umoja-l-grid-align--base__34N9s",
	"icon": "bodystatic-iconList_icon__1HhdM",
	"_three": "bodystatic-iconList__three__o8lHH"
};


/***/ })

};
;
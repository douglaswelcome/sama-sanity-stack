exports.id = 9059;
exports.ids = [9059];
exports.modules = {

/***/ 9059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4687);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5030);
/* harmony import */ var _bodystatic_iconCopy_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9846);
/* harmony import */ var _bodystatic_iconCopy_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_iconCopy_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const bodystatic_iconCopy = props => {
  const {
    center,
    responsive,
    icons
  } = props;
  let className = `bodystatic-iconCopy umoja-l-grid-align--base ${icons.length > 3 ? `umoja-l-grid--12` : `umoja-l-grid--6 ${(_bodystatic_iconCopy_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._three)}`}`;

  if (center) {
    className += ` ${(_bodystatic_iconCopy_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._center)}`;
  }

  if (responsive) {
    className += ` ${(_bodystatic_iconCopy_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._responsive)}`;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: className,
    children: icons.map(icon => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: (_bodystatic_iconCopy_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon),
        children: [icon.icon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_bodystatic_iconCopy_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconWrap),
          children: responsive ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            layout: "fill",
            objectFit: "contain",
            src: icon.icon
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            layout: "fixed",
            src: icon.icon,
            height: 48,
            width: 48
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
          children: icon.title
        }), icon.body && icon.body.richText ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          className: (_bodystatic_iconCopy_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),
          richText: icon.body.richText
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          children: icon.body
        })]
      }, icon._key);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_iconCopy);

/***/ }),

/***/ 9846:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-iconCopy_umoja-u-pad-1__2DluW",
	"umoja-u-pad-t--0": "bodystatic-iconCopy_umoja-u-pad-t--0__1VdK6",
	"umoja-u-pad-b--0": "bodystatic-iconCopy_umoja-u-pad-b--0__38K4r",
	"umoja-l-grid--12": "bodystatic-iconCopy_umoja-l-grid--12__3G_Q-",
	"umoja-l-grid--6": "bodystatic-iconCopy_umoja-l-grid--6__3JzOH",
	"umoja-l-page-width": "bodystatic-iconCopy_umoja-l-page-width__LQvd9",
	"umoja-l-grid-section": "bodystatic-iconCopy_umoja-l-grid-section__15PxD",
	"umoja-l-grid-section--flat-top": "bodystatic-iconCopy_umoja-l-grid-section--flat-top__3u3At",
	"umoja-l-grid-gap--row-1": "bodystatic-iconCopy_umoja-l-grid-gap--row-1__2mWkN",
	"umoja-l-grid-gap--row-2": "bodystatic-iconCopy_umoja-l-grid-gap--row-2__3my3U",
	"umoja-l-grid-gap--row-3": "bodystatic-iconCopy_umoja-l-grid-gap--row-3__36mCb",
	"umoja-l-grid-align--center": "bodystatic-iconCopy_umoja-l-grid-align--center__2kHqh",
	"umoja-l-grid-align--base": "bodystatic-iconCopy_umoja-l-grid-align--base__D0hzM",
	"icon": "bodystatic-iconCopy_icon__1AzsU",
	"body": "bodystatic-iconCopy_body__lxosP",
	"_center": "bodystatic-iconCopy__center__ZUlkU",
	"_responsive": "bodystatic-iconCopy__responsive__DqA13",
	"iconWrap": "bodystatic-iconCopy_iconWrap__2lArm",
	"_three": "bodystatic-iconCopy__three__x46IE"
};


/***/ })

};
;
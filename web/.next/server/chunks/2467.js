exports.id = 2467;
exports.ids = [2467];
exports.modules = {

/***/ 2467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var _bodystatic_leadTeam_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9334);
/* harmony import */ var _bodystatic_leadTeam_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_leadTeam_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const bodystatic_leadTeam = props => {
  const {
    avatars
  } = props;
  const lead = avatars[0];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bodystatic-leadTeam umoja-l-grid--12",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: `${(_bodystatic_leadTeam_module_scss__WEBPACK_IMPORTED_MODULE_3___default().row)} ${(_bodystatic_leadTeam_module_scss__WEBPACK_IMPORTED_MODULE_3___default().row__top)}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_bodystatic_leadTeam_module_scss__WEBPACK_IMPORTED_MODULE_3___default().avatar),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: (_bodystatic_leadTeam_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageWrap),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            src: lead.image,
            layout: "fill"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
          children: lead.name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
          children: lead.title
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_bodystatic_leadTeam_module_scss__WEBPACK_IMPORTED_MODULE_3___default().row),
      children: avatars.map((avatar, i) => {
        if (i == 0) return;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: (_bodystatic_leadTeam_module_scss__WEBPACK_IMPORTED_MODULE_3___default().avatar),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: (_bodystatic_leadTeam_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageWrap),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
              src: avatar.image,
              layout: "fill"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
            children: avatar.name
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
            children: avatar.title
          })]
        });
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_leadTeam);

/***/ }),

/***/ 9334:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "bodystatic-leadTeam_row__1TS4k",
	"row__top": "bodystatic-leadTeam_row__top__3NQkY",
	"avatar": "bodystatic-leadTeam_avatar__2edhP",
	"imageWrap": "bodystatic-leadTeam_imageWrap__1tGq4"
};


/***/ })

};
;
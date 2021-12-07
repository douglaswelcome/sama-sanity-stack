exports.id = 2833;
exports.ids = [2833];
exports.modules = {

/***/ 2833:
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
/* harmony import */ var _bodystatic_cardImg_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8506);
/* harmony import */ var _bodystatic_cardImg_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_cardImg_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const bodystatic_cardImg = props => {
  const {
    full_width,
    cards
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: `bodystatic_cardImg ${full_width ? (_bodystatic_cardImg_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._fullImages) : ''} umoja-l-grid--12`,
    children: cards.map((card, i) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: `${(_bodystatic_cardImg_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card)} ${cards.length > 3 ? (_bodystatic_cardImg_module_scss__WEBPACK_IMPORTED_MODULE_4___default()._four) : ''}`,
        children: [card.icon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_bodystatic_cardImg_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageWrap),
          children: full_width ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            layout: "fill",
            src: card.icon
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            layout: "fixed",
            src: card.icon,
            height: 48,
            width: 48
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
          children: card.title
        }), card.body && card.body.richText ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          className: (_bodystatic_cardImg_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),
          richText: card.body.richText
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
          children: card.body
        })]
      }, card._key);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_cardImg);

/***/ }),

/***/ 8506:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-cardImg_umoja-u-pad-1__23r61",
	"umoja-u-pad-t--0": "bodystatic-cardImg_umoja-u-pad-t--0__21snp",
	"umoja-u-pad-b--0": "bodystatic-cardImg_umoja-u-pad-b--0__2NxTx",
	"umoja-l-grid--12": "bodystatic-cardImg_umoja-l-grid--12__1Q2tc",
	"umoja-l-grid--6": "bodystatic-cardImg_umoja-l-grid--6__u0SSa",
	"umoja-l-page-width": "bodystatic-cardImg_umoja-l-page-width__DaR83",
	"umoja-l-grid-section": "bodystatic-cardImg_umoja-l-grid-section__2ts_S",
	"umoja-l-grid-section--flat-top": "bodystatic-cardImg_umoja-l-grid-section--flat-top__1KQl6",
	"umoja-l-grid-gap--row-1": "bodystatic-cardImg_umoja-l-grid-gap--row-1__3E52g",
	"umoja-l-grid-gap--row-2": "bodystatic-cardImg_umoja-l-grid-gap--row-2__10ze5",
	"umoja-l-grid-gap--row-3": "bodystatic-cardImg_umoja-l-grid-gap--row-3__pXDEN",
	"umoja-l-grid-align--center": "bodystatic-cardImg_umoja-l-grid-align--center__25BFU",
	"umoja-l-grid-align--base": "bodystatic-cardImg_umoja-l-grid-align--base__1eGNJ",
	"card": "bodystatic-cardImg_card__I6yK0",
	"body": "bodystatic-cardImg_body__192kF",
	"_four": "bodystatic-cardImg__four__15uIz"
};


/***/ })

};
;
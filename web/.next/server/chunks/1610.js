exports.id = 1610;
exports.ids = [1610];
exports.modules = {

/***/ 1610:
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
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5030);
/* harmony import */ var _bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8386);
/* harmony import */ var _bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const bodystatic_splitTxtQuote = props => {
  const {
    img_position,
    theme_color,
    heading,
    preheading,
    body,
    cta,
    quote,
    fullwidth_image
  } = props;
  const className = `bodystatic-splitTxtQuote umoja-l-grid--6 ${theme_color ? (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[`_${theme_color}`] : ''}`;
  const txtColClass = `${(_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default().copy)} ${img_position == 'left' ? (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._right) : (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._left)}`;
  const quoteColClass = `${(_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default().quote)} ${img_position == 'left' ? (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._left) : (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._right)}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: txtColClass,
      children: [preheading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
        className: (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default().preheading),
        children: preheading
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
        children: heading
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        className: (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default().body),
        richText: body.richText,
        align: body.align
      }), cta.link && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread({}, cta))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `${quoteColClass} ${fullwidth_image ? (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default().__imageFull) : ''}`,
      children: [quote.author_headshot && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default().imageWrap),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          src: quote.author_headshot,
          layout: "fill"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default().quote_content),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default().quote_icon),
          children: "\u201C"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          className: (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default().quote_text),
          children: quote.quote_text
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
          className: (_bodystatic_splitTxtQuote_module_scss__WEBPACK_IMPORTED_MODULE_5___default().quote_citation),
          children: [quote.quote_author, ", ", quote.author_title]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_splitTxtQuote);

/***/ }),

/***/ 8386:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-splitTxtQuote_umoja-u-pad-1__2_QMG",
	"umoja-u-pad-t--0": "bodystatic-splitTxtQuote_umoja-u-pad-t--0__1unwV",
	"umoja-u-pad-b--0": "bodystatic-splitTxtQuote_umoja-u-pad-b--0__hyCiw",
	"umoja-l-grid--12": "bodystatic-splitTxtQuote_umoja-l-grid--12__LvAc2",
	"umoja-l-grid--6": "bodystatic-splitTxtQuote_umoja-l-grid--6__2q-wC",
	"umoja-l-page-width": "bodystatic-splitTxtQuote_umoja-l-page-width__GjwJ2",
	"umoja-l-grid-section": "bodystatic-splitTxtQuote_umoja-l-grid-section__3pcdE",
	"umoja-l-grid-gap--row-1": "bodystatic-splitTxtQuote_umoja-l-grid-gap--row-1__38ONR",
	"umoja-l-grid-gap--row-2": "bodystatic-splitTxtQuote_umoja-l-grid-gap--row-2__2qdrV",
	"umoja-l-grid-gap--row-3": "bodystatic-splitTxtQuote_umoja-l-grid-gap--row-3__3Lwbj",
	"umoja-l-grid-align--center": "bodystatic-splitTxtQuote_umoja-l-grid-align--center__oQ7zS",
	"umoja-l-grid-align--base": "bodystatic-splitTxtQuote_umoja-l-grid-align--base__30l6l",
	"copy": "bodystatic-splitTxtQuote_copy__2pDca",
	"preheading": "bodystatic-splitTxtQuote_preheading__zD2v4",
	"body": "bodystatic-splitTxtQuote_body__65HD8",
	"quote": "bodystatic-splitTxtQuote_quote__1DtLp",
	"quote_content": "bodystatic-splitTxtQuote_quote_content__ivgOt",
	"quote_icon": "bodystatic-splitTxtQuote_quote_icon__3G9ZF",
	"quote_text": "bodystatic-splitTxtQuote_quote_text__3eIZh",
	"quote_citation": "bodystatic-splitTxtQuote_quote_citation__32O_X",
	"imageWrap": "bodystatic-splitTxtQuote_imageWrap__2KjxU",
	"__imageFull": "bodystatic-splitTxtQuote___imageFull__11xDM",
	"_left": "bodystatic-splitTxtQuote__left__1WLCp",
	"_right": "bodystatic-splitTxtQuote__right__1QdRd",
	"_green-yellow": "bodystatic-splitTxtQuote__green-yellow__3fvnM",
	"_purple": "bodystatic-splitTxtQuote__purple__1HTPP",
	"_green": "bodystatic-splitTxtQuote__green__2G6nn",
	"_red_orange": "bodystatic-splitTxtQuote__red_orange__gGDCZ",
	"_blue": "bodystatic-splitTxtQuote__blue__36bfP",
	"_pink_red": "bodystatic-splitTxtQuote__pink_red__3rlW6",
	"_blue_purple": "bodystatic-splitTxtQuote__blue_purple__1PH6L"
};


/***/ })

};
;
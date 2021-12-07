exports.id = 4687;
exports.ids = [4687];
exports.modules = {

/***/ 4687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4151);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2904);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _richText_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5173);
/* harmony import */ var _richText_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_richText_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const richText = props => {
  const {
    richText,
    align,
    className
  } = props;
  const {
    projectId,
    dataset
  } = _client__WEBPACK_IMPORTED_MODULE_3___default().config();
  const innerClass = className ? `${className} ${(_richText_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inner)}` : (_richText_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inner);
  const serializers = {
    marks: {
      button_link: ({
        mark,
        children
      }) => {
        const {
          style
        } = mark;
        const href = mark.internalLink ? mark.internalLink : mark.externalUrl;

        if (style) {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_button_button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            link: mark,
            type: style,
            title: children[0]
          });
        } else {
          let linkProps = {
            href: href
          };

          if (mark.externalUrl) {
            linkProps.target = "_blank";
            linkProps.rel = "noopener";
          }

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", _objectSpread(_objectSpread({}, linkProps), {}, {
            children: children
          }));
        }
      }
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_2___default()), {
    className: `${innerClass} ${align ? (_richText_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[`_${align}`] : ''}`,
    blocks: richText,
    projectId: projectId,
    serializers: serializers,
    dataset: dataset,
    renderContainerOnSingleChild: true
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (richText);

/***/ }),

/***/ 5173:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "richText_umoja-u-pad-1__2YNBX",
	"umoja-u-pad-t--0": "richText_umoja-u-pad-t--0__155qD",
	"umoja-u-pad-b--0": "richText_umoja-u-pad-b--0__ub03i",
	"umoja-l-grid--12": "richText_umoja-l-grid--12__3yFQE",
	"umoja-l-grid--6": "richText_umoja-l-grid--6__mOyRC",
	"umoja-l-page-width": "richText_umoja-l-page-width__WBf-t",
	"umoja-l-grid-section": "richText_umoja-l-grid-section__gTheM",
	"umoja-l-grid-section--flat-top": "richText_umoja-l-grid-section--flat-top__2RSv9",
	"umoja-l-grid-gap--row-1": "richText_umoja-l-grid-gap--row-1__3G9b6",
	"umoja-l-grid-gap--row-2": "richText_umoja-l-grid-gap--row-2__7pjoo",
	"umoja-l-grid-gap--row-3": "richText_umoja-l-grid-gap--row-3__1ykaM",
	"umoja-l-grid-align--center": "richText_umoja-l-grid-align--center__2vJWR",
	"umoja-l-grid-align--base": "richText_umoja-l-grid-align--base__3BDGB",
	"inner": "richText_inner__37NFR",
	"_center": "richText__center__2gWN8",
	"_right": "richText__right__1U7JT"
};


/***/ })

};
;
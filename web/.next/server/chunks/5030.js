"use strict";
exports.id = 5030;
exports.ids = [5030];
exports.modules = {

/***/ 5030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1095);
/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_sanity_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Image = props => {
  const {
    src,
    layout,
    sizes,
    objectFit,
    placeholder
  } = props;
  const imageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_1__.useNextSanityImage)((_client__WEBPACK_IMPORTED_MODULE_3___default()), src);
  const width = !props.width && layout != 'fill' ? imageProps.width : props.width;
  const height = !props.height && layout != 'fill' ? imageProps.height : props.height;
  const alt = src.alt ? src.alt : "";
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: sizes ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, imageProps), {}, {
      layout: layout,
      sizes: sizes,
      alt: alt,
      objectFit: objectFit,
      lazyBoundary: "20px",
      placeholder: placeholder
    })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, imageProps), {}, {
      layout: layout,
      width: width,
      height: height,
      alt: alt,
      lazyBoundary: "20px",
      objectFit: objectFit,
      placeholder: placeholder
    }))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ })

};
;
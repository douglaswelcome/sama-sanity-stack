exports.id = 3550;
exports.ids = [3550];
exports.modules = {

/***/ 3550:
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
/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3262);
/* harmony import */ var _bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const bodystatic_splitTxtImg = props => {
  const {
    img_position,
    theme_color,
    img_frame,
    heading,
    subheading,
    body,
    cta,
    image,
    video
  } = props;
  const className = `bodystatic-splitTxtImg umoja-l-grid--6 ${theme_color ? (_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[`_${theme_color}`] : ''}`;
  const txtColClass = `${(_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().copy)} ${img_position == 'left' ? (_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default()._right) : (_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default()._left)}`;
  const imgColClass = `${(_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().image)} ${img_position == 'left' ? (_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default()._left) : (_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default()._right)} ${img_frame ? (_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default()._frame) : ''}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: txtColClass,
      children: [subheading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
        className: (_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().subheading),
        children: subheading
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
        children: heading
      }), body && body.richText ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        className: (_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body),
        richText: body.richText,
        align: body.align
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
        children: body
      }), cta && cta.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread({}, cta))]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: imgColClass,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: (_bodystatic_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().imgWrap),
        children: [image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          src: image,
          layout: "responsive",
          objectFit: "cover"
        }), video && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_video__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          src: video
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_splitTxtImg);

/***/ }),

/***/ 3262:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-splitTxtImg_umoja-u-pad-1__1Od97",
	"umoja-u-pad-t--0": "bodystatic-splitTxtImg_umoja-u-pad-t--0__7Zv3P",
	"umoja-u-pad-b--0": "bodystatic-splitTxtImg_umoja-u-pad-b--0__1dn6K",
	"umoja-l-grid--12": "bodystatic-splitTxtImg_umoja-l-grid--12__2Xgbp",
	"umoja-l-grid--6": "bodystatic-splitTxtImg_umoja-l-grid--6__9bc8v",
	"umoja-l-page-width": "bodystatic-splitTxtImg_umoja-l-page-width__2B7Iv",
	"umoja-l-grid-section": "bodystatic-splitTxtImg_umoja-l-grid-section__3nt4g",
	"umoja-l-grid-gap--row-1": "bodystatic-splitTxtImg_umoja-l-grid-gap--row-1__15qsl",
	"umoja-l-grid-gap--row-2": "bodystatic-splitTxtImg_umoja-l-grid-gap--row-2__2EWRv",
	"umoja-l-grid-gap--row-3": "bodystatic-splitTxtImg_umoja-l-grid-gap--row-3__Mb58H",
	"umoja-l-grid-align--center": "bodystatic-splitTxtImg_umoja-l-grid-align--center__4t6No",
	"umoja-l-grid-align--base": "bodystatic-splitTxtImg_umoja-l-grid-align--base__1T3yW",
	"container-lg": "bodystatic-splitTxtImg_container-lg__1t2KJ",
	"image": "bodystatic-splitTxtImg_image__10Maa",
	"container-med": "bodystatic-splitTxtImg_container-med__X9DCL",
	"container-sm": "bodystatic-splitTxtImg_container-sm__RZ3G0",
	"copy": "bodystatic-splitTxtImg_copy__2mTza",
	"subheading": "bodystatic-splitTxtImg_subheading__2LASO",
	"body": "bodystatic-splitTxtImg_body__2xaPa",
	"_left": "bodystatic-splitTxtImg__left__uZGrN",
	"_right": "bodystatic-splitTxtImg__right__2aVan",
	"_frame": "bodystatic-splitTxtImg__frame__3AIqT",
	"imgWrap": "bodystatic-splitTxtImg_imgWrap__27x8W",
	"_green-yellow": "bodystatic-splitTxtImg__green-yellow__2w2Wk",
	"_purple": "bodystatic-splitTxtImg__purple__1N8Oc",
	"_green": "bodystatic-splitTxtImg__green__3L_Q_",
	"_red_orange": "bodystatic-splitTxtImg__red_orange__PIlef",
	"_blue": "bodystatic-splitTxtImg__blue__2Dsml",
	"_pink_red": "bodystatic-splitTxtImg__pink_red__11RCw",
	"_blue_purple": "bodystatic-splitTxtImg__blue_purple__P_RWI"
};


/***/ })

};
;
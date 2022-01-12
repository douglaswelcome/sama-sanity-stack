exports.id = 5589;
exports.ids = [5589];
exports.modules = {

/***/ 5589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9484);
/* harmony import */ var _sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bodystatic_vidCenter_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(932);
/* harmony import */ var _bodystatic_vidCenter_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_vidCenter_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const bodystatic_vidCenter = props => {
  const {
    video
  } = props;
  const videoPath = (0,_sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__.getFile)(video, _client__WEBPACK_IMPORTED_MODULE_2___default().config());
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "bodystatic-vidCenter container-lg umoja-l-grid--12",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_bodystatic_vidCenter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().videoWrapper),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("video", {
        className: (_bodystatic_vidCenter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().video),
        autoPlay: "autoplay",
        loop: "loop",
        playsInline: "playsinline",
        muted: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("source", {
          src: videoPath.asset.url,
          type: `video/${videoPath.asset.extension}`
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_vidCenter);

/***/ }),

/***/ 932:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-vidCenter_umoja-u-pad-1__2fORc",
	"umoja-u-pad-t--0": "bodystatic-vidCenter_umoja-u-pad-t--0__n-0HV",
	"umoja-u-pad-b--0": "bodystatic-vidCenter_umoja-u-pad-b--0__2qql4",
	"umoja-l-grid--12": "bodystatic-vidCenter_umoja-l-grid--12__3w1xn",
	"umoja-l-grid--6": "bodystatic-vidCenter_umoja-l-grid--6__18aP4",
	"umoja-l-page-width": "bodystatic-vidCenter_umoja-l-page-width__2kQwc",
	"umoja-l-grid-section": "bodystatic-vidCenter_umoja-l-grid-section__QfVkz",
	"umoja-l-grid-section--flat-top": "bodystatic-vidCenter_umoja-l-grid-section--flat-top__3tiF0",
	"umoja-l-grid-gap--row-1": "bodystatic-vidCenter_umoja-l-grid-gap--row-1__1er4L",
	"umoja-l-grid-gap--row-2": "bodystatic-vidCenter_umoja-l-grid-gap--row-2__1kg0w",
	"umoja-l-grid-gap--row-3": "bodystatic-vidCenter_umoja-l-grid-gap--row-3__1FnG_",
	"umoja-l-grid-align--center": "bodystatic-vidCenter_umoja-l-grid-align--center__3gSB-",
	"umoja-l-grid-align--base": "bodystatic-vidCenter_umoja-l-grid-align--base__35FYC",
	"umoja-l-grid-span--full": "bodystatic-vidCenter_umoja-l-grid-span--full__1Ljny",
	"container-lg": "bodystatic-vidCenter_container-lg__1IA6b",
	"videoWrapper": "bodystatic-vidCenter_videoWrapper__3AzT4",
	"container-med": "bodystatic-vidCenter_container-med__2T-UY",
	"container-sm": "bodystatic-vidCenter_container-sm__2DAUr",
	"video": "bodystatic-vidCenter_video__24ohu"
};


/***/ })

};
;
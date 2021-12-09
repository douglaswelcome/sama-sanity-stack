"use strict";
exports.id = 32;
exports.ids = [32];
exports.modules = {

/***/ 32:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3062);
/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _u_wave_react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9525);
/* harmony import */ var _u_wave_react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_u_wave_react_youtube__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4885);
/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(get_youtube_id__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const Video = props => {
  const {
    src,
    className,
    autoPlay,
    loop,
    playsInline,
    muted
  } = props;

  if (src.embed) {
    const {
      type,
      url
    } = src.embed;

    if (type == 'vimeo') {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_1___default()), {
        video: url,
        autoplay: autoPlay,
        loop: loop,
        className: className,
        muted: muted,
        responsive: true
      });
    } else if (type == 'youtube') {
      const id = get_youtube_id__WEBPACK_IMPORTED_MODULE_3___default()(url);
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_u_wave_react_youtube__WEBPACK_IMPORTED_MODULE_2___default()), {
        video: id,
        autoplay: autoPlay,
        className: className,
        muted: muted,
        playsInline: playsInline
      });
    }
  }

  const videoPath = getFile(video, _client__WEBPACK_IMPORTED_MODULE_4___default().config());
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("video", {
    className: className,
    autoPlay: autoPlay,
    loop: loop,
    playsInline: playsInline,
    muted: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("source", {
      src: videoPath.asset.url,
      type: `video/${videoPath.asset.extension}`
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

/***/ })

};
;
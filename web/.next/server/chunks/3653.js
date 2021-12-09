exports.id = 3653;
exports.ids = [3653];
exports.modules = {

/***/ 1692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9484);
/* harmony import */ var _sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Link = props => {
  const {
    link,
    className,
    children
  } = props;
  const {
    0: linkUrl,
    1: setUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(link);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (link && link.internalLink) {
      _client__WEBPACK_IMPORTED_MODULE_2___default().fetch(`*[_type == "page" && _id == "${link.internalLink._ref}"][0]`).then(page => {
        setUrl(page.slug.current);
      });
    }

    if (link && link.externalUrl) {
      setUrl(link.externalUrl);
    }

    if (link && link.file) {
      const filePath = (0,_sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__.getFile)(link.file, _client__WEBPACK_IMPORTED_MODULE_2___default().config());
      setUrl(filePath.asset.url);
    }

    if (link && link.internalLink_custom) {
      setUrl(link.internalLink_custom);
    }
  });

  if (linkUrl) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: link.internalLink || link.internalLink_custom ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: `/${linkUrl}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
          className: className,
          children: children
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
        href: linkUrl,
        target: "_blank",
        rel: "noopener",
        className: className,
        children: children
      })
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;
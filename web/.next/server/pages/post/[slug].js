(() => {
var exports = {};
exports.id = 6515;
exports.ids = [6515];
exports.modules = {

/***/ 267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const sanityClient = __webpack_require__(8809);

const client = sanityClient({
  projectId: '76e3r62u',
  // you can find this in sanity.json
  dataset: 'production',
  apiVersion: '2021-10-06',
  useCdn: true // `false` if you want to ensure fresh data

});
module.exports = client;

/***/ }),

/***/ 6851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Post = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("article", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
      children: props.slug.current
    })
  });
};

Post.getInitialProps = async function (context) {
  const {
    slug = ""
  } = context.query;
  return await _client__WEBPACK_IMPORTED_MODULE_0___default().fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, {
    slug
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ 8809:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6851));
module.exports = __webpack_exports__;

})();
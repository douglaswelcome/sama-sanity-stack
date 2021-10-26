"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4645);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5964);
/* harmony import */ var _components_RenderSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5171);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const Index = props => {
  const {
    page,
    config
  } = props;
  const {
    sections
  } = page;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    config: config,
    children: sections && sections.map(section => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_RenderSection__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        modules: section.modules,
        background_color: section.background_color
      }, section._key);
    })
  });
};

async function getStaticProps() {
  const home = await _client__WEBPACK_IMPORTED_MODULE_0___default().fetch(_libs_queries__WEBPACK_IMPORTED_MODULE_1__/* .indexQuery */ .zl);
  const sections = home === null || home === void 0 ? void 0 : home.sections;
  sections.map(section => {
    let {
      modules
    } = section;
    modules.map((module, i) => {
      if (module.ref_modules) {
        let refs = module.ref_modules;
        modules.splice(i, 1, ...refs);
      }
    });
  });
  return {
    props: {
      page: home
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ 9484:
/***/ ((module) => {

module.exports = require("@sanity/asset-utils");

/***/ }),

/***/ 2904:
/***/ ((module) => {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ 8809:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 5768:
/***/ ((module) => {

module.exports = require("lottie-web");

/***/ }),

/***/ 1095:
/***/ ((module) => {

module.exports = require("next-sanity-image");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7051:
/***/ ((module) => {

module.exports = require("react-inlinesvg");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,854], () => (__webpack_exec__(6124)));
module.exports = __webpack_exports__;

})();
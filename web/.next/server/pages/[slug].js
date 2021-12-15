(() => {
var exports = {};
exports.id = 6219;
exports.ids = [6219,2197];
exports.modules = {

/***/ 1103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6506);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4645);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Layout = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__.default)(() => __webpack_require__.e(/* import() */ 4941).then(__webpack_require__.bind(__webpack_require__, 4941)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4941)],
    modules: ["[slug].js -> " + '../components/Layout']
  }
});
const RenderSection = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__.default)(() => __webpack_require__.e(/* import() */ 6446).then(__webpack_require__.bind(__webpack_require__, 6446)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6446)],
    modules: ["[slug].js -> " + '../components/RenderSection']
  }
});

const Page = ({
  data = {},
  config
}) => {
  var _data$page, _data$page2, _data$page3;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const slug = data === null || data === void 0 ? void 0 : (_data$page = data.page) === null || _data$page === void 0 ? void 0 : _data$page.slug;
  const sections = data === null || data === void 0 ? void 0 : (_data$page2 = data.page) === null || _data$page2 === void 0 ? void 0 : _data$page2.sections;

  const pageConfig = _objectSpread(_objectSpread({}, config), (_data$page3 = data.page) === null || _data$page3 === void 0 ? void 0 : _data$page3.config);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Layout, {
    config: pageConfig,
    children: data.page == undefined || !router.isFallback && !slug ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_404__WEBPACK_IMPORTED_MODULE_1__.default, {}) : sections && sections.map(section => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(RenderSection, {
      modules: section.modules,
      background_color: section.background_color
    }, section._key))
  });
};

async function getStaticProps({
  params
}) {
  const {
    page
  } = await _client__WEBPACK_IMPORTED_MODULE_2___default().fetch(_libs_queries__WEBPACK_IMPORTED_MODULE_3__/* .pageQuery */ .JR, {
    slug: params.slug
  });
  const sections = page === null || page === void 0 ? void 0 : page.sections;

  if (sections) {
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
  }

  return {
    props: {
      data: {
        page
      }
    }
  };
}
async function getStaticPaths() {
  const paths = await _client__WEBPACK_IMPORTED_MODULE_2___default().fetch(_libs_queries__WEBPACK_IMPORTED_MODULE_3__/* .pageSlugsQuery */ .A3);
  return {
    paths: paths.map(slug => ({
      params: {
        slug
      }
    })),
    fallback: true
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ 9484:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/asset-utils");

/***/ }),

/***/ 2904:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ 8809:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 3062:
/***/ ((module) => {

"use strict";
module.exports = require("@u-wave/react-vimeo");

/***/ }),

/***/ 9525:
/***/ ((module) => {

"use strict";
module.exports = require("@u-wave/react-youtube");

/***/ }),

/***/ 4885:
/***/ ((module) => {

"use strict";
module.exports = require("get-youtube-id");

/***/ }),

/***/ 5768:
/***/ ((module) => {

"use strict";
module.exports = require("lottie-web");

/***/ }),

/***/ 1095:
/***/ ((module) => {

"use strict";
module.exports = require("next-sanity-image");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7051:
/***/ ((module) => {

"use strict";
module.exports = require("react-inlinesvg");

/***/ }),

/***/ 5508:
/***/ ((module) => {

"use strict";
module.exports = require("react-map-gl");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7426,1664,5152,4645,6506], () => (__webpack_exec__(1103)));
module.exports = __webpack_exports__;

})();
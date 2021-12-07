(() => {
var exports = {};
exports.id = 9694;
exports.ids = [9694];
exports.modules = {

/***/ 6242:
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
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8354);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4645);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var _components_blog_blog_postCard_blog_postCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1325);
/* harmony import */ var _blog_tag_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8805);
/* harmony import */ var _blog_tag_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blog_tag_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Layout = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__.default)(() => __webpack_require__.e(/* import() */ 4941).then(__webpack_require__.bind(__webpack_require__, 4941)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4941)],
    modules: ["blog/tag/[slug].js -> " + '../../../components/Layout']
  }
});






const PostTag = ({
  data = {},
  config
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const posts = data === null || data === void 0 ? void 0 : data.posts;

  if (posts == undefined || !router.isFallback && !data.slug) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_error__WEBPACK_IMPORTED_MODULE_1___default()), {
      statusCode: 404
    });
  }

  const firstPosts = posts.slice(0, 12);
  const tagName = data === null || data === void 0 ? void 0 : data.tagName;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Layout, {
    config: config,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "umoja-l-grid--12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (_blog_tag_module_scss__WEBPACK_IMPORTED_MODULE_8___default().name),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
            children: tagName
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "umoja-l-grid--12 umoja-l-grid-gap--row-1",
        children: firstPosts.map((post, i) => {
          return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_7__.createElement)(_components_blog_blog_postCard_blog_postCard__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, _objectSpread(_objectSpread({}, post), {}, {
            hideTag: true,
            key: i
          }));
        })
      })
    })]
  });
};

async function getStaticProps({
  params
}) {
  const tag = await (0,_libs_queries__WEBPACK_IMPORTED_MODULE_3__/* .getPostsByTagSlug */ .x8)(params.slug);
  const {
    posts
  } = await _client__WEBPACK_IMPORTED_MODULE_2___default().fetch(_libs_queries__WEBPACK_IMPORTED_MODULE_3__/* .postsByTagQuery */ .Ki, {
    tag: tag.tag
  });
  return {
    props: {
      data: {
        posts,
        slug: params.slug,
        tagName: tag.tag
      }
    }
  };
}
async function getStaticPaths() {
  const paths = await (0,_libs_queries__WEBPACK_IMPORTED_MODULE_3__/* .getAllPostSlugs */ .bz)();
  return {
    paths: paths.map(slug => ({
      params: {
        slug
      }
    })),
    fallback: true
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTag);

/***/ }),

/***/ 8805:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "blog-tag_umoja-u-pad-1__1cWBi",
	"umoja-u-pad-t--0": "blog-tag_umoja-u-pad-t--0__17HTN",
	"umoja-u-pad-b--0": "blog-tag_umoja-u-pad-b--0__FyHAc",
	"umoja-l-grid--12": "blog-tag_umoja-l-grid--12__UEJPc",
	"umoja-l-grid--6": "blog-tag_umoja-l-grid--6__1PAVa",
	"umoja-l-page-width": "blog-tag_umoja-l-page-width__2JP0C",
	"umoja-l-grid-section": "blog-tag_umoja-l-grid-section__3Wv_M",
	"umoja-l-grid-section--flat-top": "blog-tag_umoja-l-grid-section--flat-top__3vMNd",
	"umoja-l-grid-gap--row-1": "blog-tag_umoja-l-grid-gap--row-1__2asTL",
	"umoja-l-grid-gap--row-2": "blog-tag_umoja-l-grid-gap--row-2__NiBCj",
	"umoja-l-grid-gap--row-3": "blog-tag_umoja-l-grid-gap--row-3__1B_8k",
	"umoja-l-grid-align--center": "blog-tag_umoja-l-grid-align--center__3medT",
	"umoja-l-grid-align--base": "blog-tag_umoja-l-grid-align--base__1Zv2y",
	"name": "blog-tag_name__-rmiA"
};


/***/ }),

/***/ 9484:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/asset-utils");

/***/ }),

/***/ 8809:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

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

/***/ 8354:
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

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

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7426,1664,5675,5152,3653,5030,4645,1768], () => (__webpack_exec__(6242)));
module.exports = __webpack_exports__;

})();
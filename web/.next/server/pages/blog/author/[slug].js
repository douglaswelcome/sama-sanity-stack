(() => {
var exports = {};
exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 6085:
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
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5030);
/* harmony import */ var _components_blog_blog_postCard_blog_postCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1325);
/* harmony import */ var _blog_author_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2488);
/* harmony import */ var _blog_author_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blog_author_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Layout = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__.default)(() => __webpack_require__.e(/* import() */ 4941).then(__webpack_require__.bind(__webpack_require__, 4941)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4941)],
    modules: ["blog/author/[slug].js -> " + '../../../components/Layout']
  }
});





const PostAuthor = ({
  data = {},
  config
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const author = data === null || data === void 0 ? void 0 : data.author;

  if (author == undefined || !router.isFallback && !author.slug) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_error__WEBPACK_IMPORTED_MODULE_1___default()), {
      statusCode: 404
    });
  }

  const {
    avatar,
    name,
    bio,
    posts
  } = author;
  const firstPosts = posts.slice(0, 12);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Layout, {
    config: config,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "umoja-l-grid--12",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: (_blog_author_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headshot),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            layout: "responsive",
            objectFit: "cover",
            src: avatar
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (_blog_author_module_scss__WEBPACK_IMPORTED_MODULE_9___default().copy),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            className: (_blog_author_module_scss__WEBPACK_IMPORTED_MODULE_9___default().intro),
            children: "Words by:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h1", {
            children: name
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            className: (_blog_author_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bio),
            children: bio
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "umoja-l-grid--12 umoja-l-grid-gap--row-1",
        children: firstPosts.map((post, i) => {
          return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_8__.createElement)(_components_blog_blog_postCard_blog_postCard__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, _objectSpread(_objectSpread({}, post), {}, {
            hideAuthor: true,
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
  const {
    author
  } = await _client__WEBPACK_IMPORTED_MODULE_2___default().fetch(_libs_queries__WEBPACK_IMPORTED_MODULE_3__/* .authorQuery */ .by, {
    slug: params.slug
  });
  return {
    props: {
      data: {
        author
      }
    }
  };
}
async function getStaticPaths() {
  const paths = await _client__WEBPACK_IMPORTED_MODULE_2___default().fetch(_libs_queries__WEBPACK_IMPORTED_MODULE_3__/* .authorPostsQuery */ .I9);
  return {
    paths: paths.map(slug => ({
      params: {
        slug
      }
    })),
    fallback: true
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostAuthor);

/***/ }),

/***/ 2488:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "blog-author_umoja-u-pad-1__2px-V",
	"umoja-u-pad-t--0": "blog-author_umoja-u-pad-t--0__11jzJ",
	"umoja-u-pad-b--0": "blog-author_umoja-u-pad-b--0__2fjSI",
	"umoja-l-grid--12": "blog-author_umoja-l-grid--12__8bemE",
	"umoja-l-grid--6": "blog-author_umoja-l-grid--6__15wvV",
	"umoja-l-page-width": "blog-author_umoja-l-page-width__1SWRB",
	"umoja-l-grid-section": "blog-author_umoja-l-grid-section__lWZRu",
	"umoja-l-grid-gap--row-1": "blog-author_umoja-l-grid-gap--row-1__2fh27",
	"umoja-l-grid-gap--row-2": "blog-author_umoja-l-grid-gap--row-2__36m_J",
	"umoja-l-grid-gap--row-3": "blog-author_umoja-l-grid-gap--row-3__1JW1H",
	"umoja-l-grid-align--center": "blog-author_umoja-l-grid-align--center__q8eaY",
	"umoja-l-grid-align--base": "blog-author_umoja-l-grid-align--base__vG50I",
	"headshot": "blog-author_headshot__14bF2",
	"copy": "blog-author_copy__Q1Si8",
	"intro": "blog-author_intro__3nDS5",
	"bio": "blog-author_bio__dDQEk"
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
var __webpack_exports__ = __webpack_require__.X(0, [7426,1664,5675,5152,3653,5030,4645,1768], () => (__webpack_exec__(6085)));
module.exports = __webpack_exports__;

})();
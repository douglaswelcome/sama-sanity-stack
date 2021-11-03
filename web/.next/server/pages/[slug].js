"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 8414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: ./client.js
var client = __webpack_require__(267);
var client_default = /*#__PURE__*/__webpack_require__.n(client);
// EXTERNAL MODULE: ./libs/queries.js
var queries = __webpack_require__(4645);
// EXTERNAL MODULE: ./components/Layout.js + 5 modules
var Layout = __webpack_require__(5964);
// EXTERNAL MODULE: ./components/RenderSection.js + 26 modules
var RenderSection = __webpack_require__(4033);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/[slug].js








const Page = ({
  data = {},
  config
}) => {
  var _data$page, _data$page2;

  const router = (0,router_.useRouter)();
  const slug = data === null || data === void 0 ? void 0 : (_data$page = data.page) === null || _data$page === void 0 ? void 0 : _data$page.slug;
  const sections = data === null || data === void 0 ? void 0 : (_data$page2 = data.page) === null || _data$page2 === void 0 ? void 0 : _data$page2.sections;

  if (!router.isFallback && !slug) {
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      statusCode: 404
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    config: config,
    children: sections && sections.map(section => {
      return /*#__PURE__*/jsx_runtime_.jsx(RenderSection/* default */.Z, {
        modules: section.modules,
        background_color: section.background_color
      }, section._key);
    })
  });
};

async function getStaticProps({
  params
}) {
  const {
    page
  } = await client_default().fetch(queries/* pageQuery */.JR, {
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
  const paths = await client_default().fetch(queries/* pageSlugsQuery */.A3);
  return {
    paths: paths.map(slug => ({
      params: {
        slug
      }
    })),
    fallback: true
  };
}
/* harmony default export */ const _slug_ = (Page);

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
var __webpack_exports__ = __webpack_require__.X(0, [61,82], () => (__webpack_exec__(8414)));
module.exports = __webpack_exports__;

})();
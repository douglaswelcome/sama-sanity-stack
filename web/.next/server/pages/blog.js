(() => {
var exports = {};
exports.id = 9195;
exports.ids = [9195];
exports.modules = {

/***/ 9148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./client.js
var client = __webpack_require__(267);
var client_default = /*#__PURE__*/__webpack_require__.n(client);
// EXTERNAL MODULE: ./libs/queries.js
var queries = __webpack_require__(4645);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
// EXTERNAL MODULE: ./components/link.js
var components_link = __webpack_require__(1692);
// EXTERNAL MODULE: ./components/blog/blog_heroHome/blog-heroHome.module.scss
var blog_heroHome_module = __webpack_require__(8779);
var blog_heroHome_module_default = /*#__PURE__*/__webpack_require__.n(blog_heroHome_module);
// EXTERNAL MODULE: ./libs/slugify.js
var slugify = __webpack_require__(7570);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/blog/blog_heroHome/blog_heroHome.js







const BlogHeroHome = props => {
  const {
    _createdAt,
    slug,
    author,
    featured_image,
    tags,
    title,
    plaintextBody,
    estimatedReadingTime
  } = props;
  const tag = tags[0].label;
  const excerpt = plaintextBody.length <= 200 ? plaintextBody : plaintextBody.substr(0, plaintextBody.lastIndexOf(' ', 200));
  let postSlug = {
    internalLink_custom: `/blog${slug.current.charAt(0) == '/' ? slug.current : `/${slug.current}`}`
  };
  const authorSlug = {
    internalLink_custom: `/blog/author/${author.slug.current}`
  };
  const tagSlug = {
    internalLink_custom: `/blog/tag/${(0,slugify/* default */.Z)(tag)}`
  };
  let date = new Date(_createdAt);
  date = date.toLocaleString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long'
  });
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "umoja-l-grid-section umoja-u-bg--white",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "umoja-l-grid--12 umoja-l-grid-align--center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (blog_heroHome_module_default()).left,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_link/* default */.Z, {
          link: postSlug,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
            layout: "responsive",
            objectFit: "cover",
            src: featured_image
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blog_heroHome_module_default()).right,
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_link/* default */.Z, {
          link: tagSlug,
          className: (blog_heroHome_module_default()).tag,
          children: tag
        }), /*#__PURE__*/jsx_runtime_.jsx(components_link/* default */.Z, {
          link: postSlug,
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: title
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (blog_heroHome_module_default()).excerpt,
          children: `${excerpt}...`
        }), /*#__PURE__*/jsx_runtime_.jsx(components_link/* default */.Z, {
          link: authorSlug,
          className: (blog_heroHome_module_default()).author,
          children: author.name
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (blog_heroHome_module_default()).date,
          children: [date, " | ", `${estimatedReadingTime} Min Read`]
        })]
      })]
    })
  });
};

/* harmony default export */ const blog_heroHome = (BlogHeroHome);
// EXTERNAL MODULE: ./components/blog/blog_postCard/blog_postCard.js
var blog_postCard = __webpack_require__(1325);
;// CONCATENATED MODULE: ./pages/blog.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Layout = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 4941).then(__webpack_require__.bind(__webpack_require__, 4941)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4941)],
    modules: ["blog.js -> " + '../components/Layout']
  }
});






const Blog = props => {
  const {
    posts,
    config
  } = props;
  const topPost = posts[0];
  const firstPosts = posts.slice(1, 13);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    config: config,
    children: [/*#__PURE__*/jsx_runtime_.jsx(blog_heroHome, _objectSpread({}, topPost)), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--white",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "umoja-l-grid--12 umoja-l-grid-gap--row-1",
        children: firstPosts.map((post, i) => {
          return /*#__PURE__*/(0,external_react_.createElement)(blog_postCard/* default */.Z, _objectSpread(_objectSpread({}, post), {}, {
            key: i
          }));
        })
      })
    })]
  });
};

async function getStaticProps() {
  const posts = await client_default().fetch(queries/* postsQuery */.Vs);
  return {
    props: {
      posts: posts
    }
  };
}
/* harmony default export */ const blog = (Blog);

/***/ }),

/***/ 8779:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "blog-heroHome_umoja-u-pad-1__1aFj5",
	"umoja-u-pad-t--0": "blog-heroHome_umoja-u-pad-t--0__2yGb2",
	"umoja-u-pad-b--0": "blog-heroHome_umoja-u-pad-b--0__2hX2I",
	"umoja-l-grid--12": "blog-heroHome_umoja-l-grid--12__1bVXB",
	"umoja-l-grid--6": "blog-heroHome_umoja-l-grid--6__1a74F",
	"umoja-l-page-width": "blog-heroHome_umoja-l-page-width__1__6H",
	"umoja-l-grid-section": "blog-heroHome_umoja-l-grid-section__1Q-Q6",
	"umoja-l-grid-section--flat-top": "blog-heroHome_umoja-l-grid-section--flat-top__GGTuw",
	"umoja-l-grid-gap--row-1": "blog-heroHome_umoja-l-grid-gap--row-1__1qo16",
	"umoja-l-grid-gap--row-2": "blog-heroHome_umoja-l-grid-gap--row-2__2uHRT",
	"umoja-l-grid-gap--row-3": "blog-heroHome_umoja-l-grid-gap--row-3__kGVSZ",
	"umoja-l-grid-align--center": "blog-heroHome_umoja-l-grid-align--center__31sOt",
	"umoja-l-grid-align--base": "blog-heroHome_umoja-l-grid-align--base__B8r-h",
	"left": "blog-heroHome_left__3EMpN",
	"right": "blog-heroHome_right__bxPqk",
	"tag": "blog-heroHome_tag__1aSq3",
	"excerpt": "blog-heroHome_excerpt__ts8bV",
	"author": "blog-heroHome_author__3Cy_h"
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7426,1664,5675,5152,3653,5030,4645,1768], () => (__webpack_exec__(9148)));
module.exports = __webpack_exports__;

})();
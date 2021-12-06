(() => {
var exports = {};
exports.id = 2492;
exports.ids = [2492];
exports.modules = {

/***/ 1881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(8354);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
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
// EXTERNAL MODULE: ./components/blog/blog_heroPost/blog-hero-post.module.scss
var blog_hero_post_module = __webpack_require__(2188);
var blog_hero_post_module_default = /*#__PURE__*/__webpack_require__.n(blog_hero_post_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/blog/blog_heroPost/blog_heroPost.js






const BlogHeroPost = props => {
  const {
    _createdAt,
    author,
    featured_image,
    title,
    estimatedReadingTime
  } = props;
  const authorSlug = {
    internalLink_custom: `blog/author/${author.slug.current}`
  };
  let date = new Date(_createdAt);
  date = date.toLocaleString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long'
  });
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "umoja-l-grid-section umoja-u-bg--white",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "umoja-l-grid--12 umoja-l-grid-align--center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (blog_hero_post_module_default()).wrap,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (blog_hero_post_module_default()).left,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx(components_link/* default */.Z, {
            link: authorSlug,
            className: (blog_hero_post_module_default()).author,
            children: author.name
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: (blog_hero_post_module_default()).date,
            children: [date, " | ", `${estimatedReadingTime} Min Read`]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (blog_hero_post_module_default()).right,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
            layout: "fill",
            objectFit: "cover",
            src: featured_image
          })
        })]
      })
    })
  });
};

/* harmony default export */ const blog_heroPost = (BlogHeroPost);
// EXTERNAL MODULE: ./libs/slugify.js
var slugify = __webpack_require__(7570);
// EXTERNAL MODULE: ./components/blog/blog_postFooter/blog-post-footer.module.scss
var blog_post_footer_module = __webpack_require__(2651);
var blog_post_footer_module_default = /*#__PURE__*/__webpack_require__.n(blog_post_footer_module);
;// CONCATENATED MODULE: ./components/blog/blog_postFooter/blog_postFooter.js








const BlogPostFooter = props => {
  const {
    author,
    tags
  } = props;
  const authorSlug = {
    internalLink_custom: `blog/author/${author.slug ? author.slug.current : ''}`
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--white",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "umoja-l-grid--12",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (blog_post_footer_module_default()).tags,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: (blog_post_footer_module_default()).intro,
            children: "Filed Under:"
          }), tags.map((tag, i) => {
            const tagSlug = {
              internalLink_custom: `blog/tag/${(0,slugify/* default */.Z)(tag.value)}`
            };
            return /*#__PURE__*/jsx_runtime_.jsx(components_link/* default */.Z, {
              className: (blog_post_footer_module_default()).tag,
              link: tagSlug,
              children: tag.label
            }, i);
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (blog_post_footer_module_default()).author,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: (blog_post_footer_module_default()).intro,
            children: "Words by:"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (blog_post_footer_module_default()).author_inner,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (blog_post_footer_module_default()).author_headshot,
              children: /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
                layout: "responsive",
                objectFit: "cover",
                src: author.avatar
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (blog_post_footer_module_default()).author_bio,
              children: [/*#__PURE__*/jsx_runtime_.jsx(components_link/* default */.Z, {
                link: authorSlug,
                children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                  children: author.name
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: author.bio
              })]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--white",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "umoja-l-grid--12",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: `${(blog_post_footer_module_default()).intro} ${(blog_post_footer_module_default()).relatedPosts_header}`,
          children: "Related Posts:"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `umoja-l-grid--12 ${(blog_post_footer_module_default()).posts}`
        })]
      })
    })]
  });
};

/* harmony default export */ const blog_postFooter = (BlogPostFooter);
// EXTERNAL MODULE: ./components/richText_field/richText_field.js
var richText_field = __webpack_require__(4687);
// EXTERNAL MODULE: ./pages/blog/blog-post.module.scss
var blog_post_module = __webpack_require__(8059);
var blog_post_module_default = /*#__PURE__*/__webpack_require__.n(blog_post_module);
;// CONCATENATED MODULE: ./pages/blog/[slug].js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Layout = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 4941).then(__webpack_require__.bind(__webpack_require__, 4941)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4941)],
    modules: ["blog/[slug].js -> " + '../../components/Layout']
  }
});




const Post = ({
  data = {},
  config
}) => {
  const router = (0,router_.useRouter)();
  const post = data === null || data === void 0 ? void 0 : data.post;

  if (post == undefined || !router.isFallback && !post.slug) {
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      statusCode: 404
    });
  }

  const {
    tags,
    author,
    body
  } = post;
  const hostname =  false ? 0 : '';
  const shareUrl = `https://www.sama.com/${router.asPath}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    config: config,
    children: [/*#__PURE__*/jsx_runtime_.jsx(blog_heroPost, _objectSpread({}, post)), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--white",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `umoja-l-grid--12 ${(blog_post_module_default()).body}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (blog_post_module_default()).share,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (blog_post_module_default()).share_track,
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `${(blog_post_module_default()).share_button} ${(blog_post_module_default()).share_button__facebook}`,
              href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `${(blog_post_module_default()).share_button} ${(blog_post_module_default()).share_button__twitter}`,
              href: `https://twitter.com/intent/tweet?text=Check%20out%20this%20great%20blog%20post%20I%20just%20read&url=${shareUrl}`
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: `${(blog_post_module_default()).share_button} ${(blog_post_module_default()).share_button__linkedin}`,
              href: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${post.title}&source=https://www.sama.com/&summary=Check%20out%20this%20great%20blog%20post%20I%20just%20read`
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(richText_field/* default */.Z, {
          className: (blog_post_module_default()).content,
          richText: body,
          align: "left"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(blog_postFooter, {
      tags: tags,
      author: author
    })]
  });
};

async function getStaticProps({
  params
}) {
  const {
    post
  } = await client_default().fetch(queries/* postQuery */.HF, {
    slug: params.slug
  });
  return {
    props: {
      data: {
        post
      }
    }
  };
}
async function getStaticPaths() {
  const paths = await client_default().fetch(queries/* postSlugsQuery */.Pk);
  return {
    paths: paths.map(slug => ({
      params: {
        slug
      }
    })),
    fallback: true
  };
}
/* harmony default export */ const _slug_ = (Post);

/***/ }),

/***/ 2188:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "blog-hero-post_umoja-u-pad-1__3cF7X",
	"umoja-u-pad-t--0": "blog-hero-post_umoja-u-pad-t--0__1pBeY",
	"umoja-u-pad-b--0": "blog-hero-post_umoja-u-pad-b--0__12Vgx",
	"umoja-l-grid--12": "blog-hero-post_umoja-l-grid--12__f4c3N",
	"umoja-l-grid--6": "blog-hero-post_umoja-l-grid--6__2QpXG",
	"umoja-l-page-width": "blog-hero-post_umoja-l-page-width__13TlY",
	"umoja-l-grid-section": "blog-hero-post_umoja-l-grid-section___zt30",
	"umoja-l-grid-gap--row-1": "blog-hero-post_umoja-l-grid-gap--row-1__1u5a-",
	"umoja-l-grid-gap--row-2": "blog-hero-post_umoja-l-grid-gap--row-2__pZEZH",
	"umoja-l-grid-gap--row-3": "blog-hero-post_umoja-l-grid-gap--row-3__ksMzS",
	"umoja-l-grid-align--center": "blog-hero-post_umoja-l-grid-align--center__3iFB5",
	"umoja-l-grid-align--base": "blog-hero-post_umoja-l-grid-align--base__2qx4M",
	"wrap": "blog-hero-post_wrap__1KbfB",
	"left": "blog-hero-post_left__2zn39",
	"tag": "blog-hero-post_tag__3to5n",
	"author": "blog-hero-post_author__28uii",
	"date": "blog-hero-post_date__hVvVU",
	"right": "blog-hero-post_right__AAryF"
};


/***/ }),

/***/ 2651:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "blog-post-footer_umoja-u-pad-1__3z3ae",
	"umoja-u-pad-t--0": "blog-post-footer_umoja-u-pad-t--0__1kBQR",
	"umoja-u-pad-b--0": "blog-post-footer_umoja-u-pad-b--0__3s-hT",
	"umoja-l-grid--12": "blog-post-footer_umoja-l-grid--12__63KM2",
	"umoja-l-grid--6": "blog-post-footer_umoja-l-grid--6__2uA5H",
	"umoja-l-page-width": "blog-post-footer_umoja-l-page-width__1gxU0",
	"umoja-l-grid-section": "blog-post-footer_umoja-l-grid-section__1KQ2u",
	"umoja-l-grid-gap--row-1": "blog-post-footer_umoja-l-grid-gap--row-1__1orzu",
	"umoja-l-grid-gap--row-2": "blog-post-footer_umoja-l-grid-gap--row-2__3kHIk",
	"umoja-l-grid-gap--row-3": "blog-post-footer_umoja-l-grid-gap--row-3__1Ua73",
	"umoja-l-grid-align--center": "blog-post-footer_umoja-l-grid-align--center__1PKR0",
	"umoja-l-grid-align--base": "blog-post-footer_umoja-l-grid-align--base__bQQBc",
	"intro": "blog-post-footer_intro__1dGYr",
	"tags": "blog-post-footer_tags__yEMl0",
	"tag": "blog-post-footer_tag__UlZZ0",
	"author": "blog-post-footer_author__1Qqrq",
	"author_inner": "blog-post-footer_author_inner__1tFQc",
	"author_headshot": "blog-post-footer_author_headshot__d-1KT",
	"author_bio": "blog-post-footer_author_bio__2z8Kp",
	"relatedPosts_header": "blog-post-footer_relatedPosts_header__1vFIN",
	"relatedPosts_posts": "blog-post-footer_relatedPosts_posts__1UBJW"
};


/***/ }),

/***/ 8059:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "blog-post_umoja-u-pad-1__2QD5S",
	"umoja-u-pad-t--0": "blog-post_umoja-u-pad-t--0__1guH2",
	"umoja-u-pad-b--0": "blog-post_umoja-u-pad-b--0__34f02",
	"umoja-l-grid--12": "blog-post_umoja-l-grid--12__1miPx",
	"umoja-l-grid--6": "blog-post_umoja-l-grid--6__2wQHg",
	"umoja-l-page-width": "blog-post_umoja-l-page-width__2U7dL",
	"umoja-l-grid-section": "blog-post_umoja-l-grid-section__1aSd1",
	"umoja-l-grid-gap--row-1": "blog-post_umoja-l-grid-gap--row-1__2dJU6",
	"umoja-l-grid-gap--row-2": "blog-post_umoja-l-grid-gap--row-2__3Fva5",
	"umoja-l-grid-gap--row-3": "blog-post_umoja-l-grid-gap--row-3__3YWcx",
	"umoja-l-grid-align--center": "blog-post_umoja-l-grid-align--center__o4H8X",
	"umoja-l-grid-align--base": "blog-post_umoja-l-grid-align--base__10sTB",
	"body": "blog-post_body__2CyGF",
	"share": "blog-post_share__2sAqL",
	"share_track": "blog-post_share_track__3nibH",
	"share_button": "blog-post_share_button__2ZGXI",
	"share_button__facebook": "blog-post_share_button__facebook__2V_7U",
	"share_button__twitter": "blog-post_share_button__twitter__3lhXm",
	"share_button__linkedin": "blog-post_share_button__linkedin__34so0",
	"content": "blog-post_content__1Q3Gg"
};


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7426,1664,5675,5152,3653,5030,4151,4687,4645], () => (__webpack_exec__(1881)));
module.exports = __webpack_exports__;

})();
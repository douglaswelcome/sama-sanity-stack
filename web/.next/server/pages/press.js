(() => {
var exports = {};
exports.id = 8313;
exports.ids = [8313];
exports.modules = {

/***/ 3061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4645);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1095);
/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_sanity_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5030);
/* harmony import */ var _press_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8405);
/* harmony import */ var _press_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_press_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Layout = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => __webpack_require__.e(/* import() */ 4941).then(__webpack_require__.bind(__webpack_require__, 4941)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4941)],
    modules: ["press.js -> " + '../components/Layout']
  }
});





const Press = props => {
  let {
    featured,
    press,
    news
  } = props;
  const featuredMain = featured[0];
  featured = featured.slice(1);
  const featuredMainBackground = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((_client__WEBPACK_IMPORTED_MODULE_1___default()), featuredMain.background);
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: tabDir,
    1: setTabDir
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const config = _objectSpread(_objectSpread({}, props.config), props.pageConfig);

  const handleClick = e => {
    const active = parseInt(e.target.getAttribute('data-at'));

    if (activeTab > active) {
      setTabDir((_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default()._slideLeft));
    } else {
      setTabDir('');
    }

    setActiveTab(active);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Layout, {
    config: config,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("section", {
      className: "umoja-l-grid-section",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "umoja-l-grid--12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().hero),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
            children: "Press & Media"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            children: ["AI has a story to tell. For media inquiries, please contact us at ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
              href: "mailto:press@sama.com",
              children: "press@sama.com"
            }), "."]
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--charcoal3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "umoja-l-grid--12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featureHeadline),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h2", {
            className: "display-small",
            children: "Featured Press"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "divider-line divider-line--horizontal divider-line--negative"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            children: "Great results gets you noticed. Read the latest news about Sama."
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: `${(_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featuredMain)} ${(_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featuredArticle)}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
            href: featuredMain.article_url,
            className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featured_link),
            target: "_blank",
            rel: "noopener",
            style: {
              backgroundImage: `url(${featuredMainBackground.src})`
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featured_category),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                children: featuredMain.type
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h2", {
              className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featured_title),
              children: featuredMain.headline
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featured_logo),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featured_logoWrap),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                  layout: "fill",
                  objectFit: "contain",
                  src: featuredMain.publication_icon
                })
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featuredSecondary),
          children: featured.map((feature, i) => {
            const featureBackground = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((_client__WEBPACK_IMPORTED_MODULE_1___default()), feature.background);
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featuredArticle),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                href: feature.article_url,
                className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featured_link),
                target: "_blank",
                rel: "noopener",
                style: {
                  backgroundImage: `url(${featureBackground.src})`
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featured_category),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    children: feature.type
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h3", {
                  className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featured_title),
                  children: feature.headline
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featured_logo),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().featured_logoWrap),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                      layout: "fill",
                      objectFit: "contain",
                      src: feature.publication_icon
                    })
                  })
                })]
              })
            }, i);
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: `${(_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().tabs)} umoja-l-grid--12`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().nav),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: `${(_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().navInner)} ${tabDir}`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h5", {
              className: `${(_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().nav_item)} ${0 == activeTab ? (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().active) : ''}`,
              "data-at": 0,
              onClick: handleClick,
              children: "In the News"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h5", {
              className: `${(_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().nav_item)} ${1 == activeTab ? (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().active) : ''}`,
              "data-at": 1,
              onClick: handleClick,
              children: "Press Releases"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().tabWrapper),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: `${(_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().tab)} ${0 == activeTab ? (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().active) : ''}`,
            children: news.map((article, i) => {
              let date = new Date(article.date);
              date = date.toLocaleString('en-US', {
                day: 'numeric',
                year: 'numeric',
                month: 'long',
                hour: 'numeric',
                minute: 'numeric'
              });
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                href: article.article_url,
                className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().pressArticle),
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().pressArticle_title),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    children: date
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "divider-line divider-line--horizontal"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h5", {
                    children: `"${article.headline}"`
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().pressArticle_logo),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                    layout: "fill",
                    objectFit: "contain",
                    src: article.publication_icon
                  })
                })]
              }, i);
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: `${(_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().tab)} ${1 == activeTab ? (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().active) : ''}`,
            children: press.map((article, i) => {
              let date = new Date(article.date);
              date = date.toLocaleString('en-US', {
                day: 'numeric',
                year: 'numeric',
                month: 'long',
                hour: 'numeric',
                minute: 'numeric'
              });
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                href: article.article_url,
                className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().pressArticle),
                target: "_blank",
                rel: "noopener",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().pressArticle_title),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    children: date
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "divider-line divider-line--horizontal"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h5", {
                    children: `"${article.headline}"`
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                  className: (_press_module_scss__WEBPACK_IMPORTED_MODULE_7___default().pressArticle_logo),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                    layout: "fill",
                    objectFit: "contain",
                    src: article.publication_icon
                  })
                })]
              }, i);
            })
          })]
        })]
      })
    })]
  });
};

async function getStaticProps() {
  const featured = await _client__WEBPACK_IMPORTED_MODULE_1___default().fetch(_libs_queries__WEBPACK_IMPORTED_MODULE_2__/* .pressFeaturedQuery */ .ad);
  const press = await _client__WEBPACK_IMPORTED_MODULE_1___default().fetch(_libs_queries__WEBPACK_IMPORTED_MODULE_2__/* .pressQuery */ .d9);
  const news = await _client__WEBPACK_IMPORTED_MODULE_1___default().fetch(_libs_queries__WEBPACK_IMPORTED_MODULE_2__/* .pressNewsQuery */ .X6);
  return {
    props: {
      featured: featured,
      press: press,
      news: news,
      pageConfig: {
        title: "Sama Press & Media | Training Data, AI and Impact Sourcing Insights",
        description: "Ethical AI Has a Story to Tell. Read the Latest News About Sama."
      }
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Press);

/***/ }),

/***/ 8405:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "press_umoja-u-pad-1__VbmMl",
	"umoja-u-pad-t--0": "press_umoja-u-pad-t--0__3jdmT",
	"umoja-u-pad-b--0": "press_umoja-u-pad-b--0__3wQp6",
	"umoja-l-grid--12": "press_umoja-l-grid--12__sPwmv",
	"umoja-l-grid--6": "press_umoja-l-grid--6__3Bo_W",
	"umoja-l-page-width": "press_umoja-l-page-width__3Nre3",
	"umoja-l-grid-section": "press_umoja-l-grid-section__2PmpP",
	"umoja-l-grid-section--flat-top": "press_umoja-l-grid-section--flat-top__22UKg",
	"umoja-l-grid-gap--row-1": "press_umoja-l-grid-gap--row-1__K-v5J",
	"umoja-l-grid-gap--row-2": "press_umoja-l-grid-gap--row-2__2uD8T",
	"umoja-l-grid-gap--row-3": "press_umoja-l-grid-gap--row-3__QOLWq",
	"umoja-l-grid-align--center": "press_umoja-l-grid-align--center__qll0r",
	"umoja-l-grid-align--base": "press_umoja-l-grid-align--base__3GxPK",
	"umoja-l-grid-span--full": "press_umoja-l-grid-span--full__w8Dc5",
	"nav": "press_nav__QySSe",
	"navInner": "press_navInner__Jrekx",
	"_slideLeft": "press__slideLeft__3w0Rr",
	"nav_item": "press_nav_item__3Awjp",
	"active": "press_active__2Vr-s",
	"tabWrapper": "press_tabWrapper__1j9hA",
	"tab": "press_tab__27VMH",
	"tabContent": "press_tabContent__3DcJq",
	"imgWrap": "press_imgWrap__2TD4T",
	"featured": "press_featured__r_me5",
	"hero": "press_hero__1cwOJ",
	"featureHeadline": "press_featureHeadline__2XFcB",
	"featuredArticle": "press_featuredArticle__3lEg3",
	"featuredMain": "press_featuredMain__1IPdI",
	"featuredSecondary": "press_featuredSecondary__2jmaO",
	"featured_link": "press_featured_link__33x8N",
	"featured_title": "press_featured_title__3KLB_",
	"featured_category": "press_featured_category__334TP",
	"featured_logo": "press_featured_logo__1YOpU",
	"featured_logoWrap": "press_featured_logoWrap__1Z-aJ",
	"pressArticle": "press_pressArticle__1v5Lq",
	"pressArticle_logo": "press_pressArticle_logo__2Dc-R"
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
var __webpack_exports__ = __webpack_require__.X(0, [7426,5675,5152,5030,4645], () => (__webpack_exec__(3061)));
module.exports = __webpack_exports__;

})();
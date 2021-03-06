(() => {
var exports = {};
exports.id = 7695;
exports.ids = [7695];
exports.modules = {

/***/ 3513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ events),
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
// EXTERNAL MODULE: ./components/event/event.module.scss
var event_module = __webpack_require__(8719);
var event_module_default = /*#__PURE__*/__webpack_require__.n(event_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/event/event.js




const Event = props => {
  const {
    datetime,
    time_zone,
    type,
    location,
    name,
    lightMode
  } = props;
  let date = new Date(datetime);
  date = date.toLocaleString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric'
  });
  let catClass = 'category__sunshine';

  switch (type) {
    case 'Conference':
      catClass = 'category__greenBlue';
      break;

    case 'Webinar':
      catClass = 'category__blue';
      break;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${(event_module_default()).event} ${lightMode ? (event_module_default()).event__light : ''}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(event_module_default()).category} ${(event_module_default())[catClass]}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (event_module_default()).category_name,
        children: type
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "divider-line divider-line--horizontal"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: (event_module_default()).date,
      children: [`${date} ${time_zone ? time_zone : ''}`, /*#__PURE__*/jsx_runtime_.jsx("br", {}), location]
    })]
  });
};

/* harmony default export */ const event_event = (Event);
// EXTERNAL MODULE: ./modules/hero_centertxt/hero_centertxt.js
var hero_centertxt = __webpack_require__(6760);
// EXTERNAL MODULE: ./pages/events.module.scss
var events_module = __webpack_require__(1672);
var events_module_default = /*#__PURE__*/__webpack_require__.n(events_module);
;// CONCATENATED MODULE: ./pages/events.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Layout = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 4941).then(__webpack_require__.bind(__webpack_require__, 4941)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4941)],
    modules: ["events.js -> " + '../components/Layout']
  }
});







const Events = props => {
  const {
    upcoming,
    past,
    featured
  } = props;
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,external_react_.useState)(0);
  const {
    0: tabDir,
    1: setTabDir
  } = (0,external_react_.useState)('');

  const config = _objectSpread(_objectSpread({}, props.config), props.pageConfig);

  const handleClick = e => {
    const active = parseInt(e.target.getAttribute('data-at'));

    if (activeTab > active) {
      setTabDir((events_module_default())._slideLeft);
    } else {
      setTabDir('');
    }

    setActiveTab(active);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    config: config,
    children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "umoja-l-grid-section",
      children: /*#__PURE__*/jsx_runtime_.jsx(hero_centertxt.default, {
        heading: "Events",
        tagline: "Sama sponsored events, conferences, and webinars."
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "umoja-l-grid-section",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(events_module_default()).featured} umoja-l-grid--12`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Featured Events"
        }), featured.map((event, i) => {
          return /*#__PURE__*/(0,external_react_.createElement)(event_event, _objectSpread(_objectSpread({}, event), {}, {
            key: i
          }));
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "umoja-l-grid-section umoja-u-bg--white",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(events_module_default()).tabs} umoja-l-grid--12`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (events_module_default()).nav,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${(events_module_default()).navInner} ${tabDir}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: `${(events_module_default()).nav_item} ${0 == activeTab ? (events_module_default()).active : ''}`,
              "data-at": 0,
              onClick: handleClick,
              children: "Upcoming Events"
            }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: `${(events_module_default()).nav_item} ${1 == activeTab ? (events_module_default()).active : ''}`,
              "data-at": 1,
              onClick: handleClick,
              children: "Past Events"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (events_module_default()).tabWrapper,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${(events_module_default()).tab} ${0 == activeTab ? (events_module_default()).active : ''}`,
            children: upcoming.map((event, i) => {
              return /*#__PURE__*/(0,external_react_.createElement)(event_event, _objectSpread(_objectSpread({}, event), {}, {
                lightMode: true,
                key: i
              }));
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${(events_module_default()).tab} ${1 == activeTab ? (events_module_default()).active : ''}`,
            children: past.map((event, i) => {
              return /*#__PURE__*/(0,external_react_.createElement)(event_event, _objectSpread(_objectSpread({}, event), {}, {
                lightMode: true,
                key: i
              }));
            })
          })]
        })]
      })
    })]
  });
};

async function getStaticProps() {
  const upcoming = await client_default().fetch(queries/* eventsUpcomingQuery */._D);
  const past = await client_default().fetch(queries/* eventsPastQuery */.oM);
  const featured = await client_default().fetch(queries/* eventsFeaturedQuery */.Dp);
  return {
    props: {
      upcoming: upcoming,
      past: past,
      featured: featured,
      pageConfig: {
        title: "Sama Events | Training Data, AI and Impact Sourcing Insights"
      }
    }
  };
}
/* harmony default export */ const events = (Events);

/***/ }),

/***/ 8719:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "event_umoja-u-pad-1__1ilQf",
	"umoja-u-pad-t--0": "event_umoja-u-pad-t--0__2lijd",
	"umoja-u-pad-b--0": "event_umoja-u-pad-b--0__27-ct",
	"umoja-l-grid--12": "event_umoja-l-grid--12__1BMKn",
	"umoja-l-grid--6": "event_umoja-l-grid--6__2i6fC",
	"umoja-l-page-width": "event_umoja-l-page-width__2fJa4",
	"umoja-l-grid-section": "event_umoja-l-grid-section__310DM",
	"umoja-l-grid-section--flat-top": "event_umoja-l-grid-section--flat-top__16Yt2",
	"umoja-l-grid-gap--row-1": "event_umoja-l-grid-gap--row-1__2y6j9",
	"umoja-l-grid-gap--row-2": "event_umoja-l-grid-gap--row-2__3GGxD",
	"umoja-l-grid-gap--row-3": "event_umoja-l-grid-gap--row-3__pKeHQ",
	"umoja-l-grid-align--center": "event_umoja-l-grid-align--center__2vrb2",
	"umoja-l-grid-align--base": "event_umoja-l-grid-align--base__1XnSw",
	"umoja-l-grid-span--full": "event_umoja-l-grid-span--full__3gOT6",
	"event": "event_event__XD-7i",
	"event__light": "event_event__light__3ny67",
	"category": "event_category__1hmd0",
	"category_name": "event_category_name__OGF76",
	"category__blue": "event_category__blue__vHGOG",
	"category__greenBlue": "event_category__greenBlue__3VT6e"
};


/***/ }),

/***/ 1672:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "events_umoja-u-pad-1__1R-qW",
	"umoja-u-pad-t--0": "events_umoja-u-pad-t--0__3lkxj",
	"umoja-u-pad-b--0": "events_umoja-u-pad-b--0__2ICUv",
	"umoja-l-grid--12": "events_umoja-l-grid--12__2_ZAT",
	"umoja-l-grid--6": "events_umoja-l-grid--6__2rxpl",
	"umoja-l-page-width": "events_umoja-l-page-width__B53bJ",
	"umoja-l-grid-section": "events_umoja-l-grid-section__UKx__",
	"umoja-l-grid-section--flat-top": "events_umoja-l-grid-section--flat-top__uMJ54",
	"umoja-l-grid-gap--row-1": "events_umoja-l-grid-gap--row-1__u4Rw5",
	"umoja-l-grid-gap--row-2": "events_umoja-l-grid-gap--row-2__2GPnk",
	"umoja-l-grid-gap--row-3": "events_umoja-l-grid-gap--row-3__KUmWJ",
	"umoja-l-grid-align--center": "events_umoja-l-grid-align--center__38_10",
	"umoja-l-grid-align--base": "events_umoja-l-grid-align--base__1g68m",
	"umoja-l-grid-span--full": "events_umoja-l-grid-span--full__30wkB",
	"nav": "events_nav__17MTY",
	"navInner": "events_navInner__3cJIc",
	"_slideLeft": "events__slideLeft__3jJec",
	"nav_item": "events_nav_item__2Cw8T",
	"active": "events_active__2fp-B",
	"tabWrapper": "events_tabWrapper__3x4rv",
	"tab": "events_tab__2m5wV",
	"tabContent": "events_tabContent__3sqhk",
	"imgWrap": "events_imgWrap__3FOb2",
	"featured": "events_featured__2MRoN"
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
var __webpack_exports__ = __webpack_require__.X(0, [7426,5675,1664,5152,5030,3653,4151,4687,4645,6760], () => (__webpack_exec__(3513)));
module.exports = __webpack_exports__;

})();
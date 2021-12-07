exports.id = 615;
exports.ids = [615];
exports.modules = {

/***/ 615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9484);
/* harmony import */ var _sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1095);
/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_sanity_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(277);
/* harmony import */ var _bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const bodymove_stickySideScroll = props => {
  const {
    heading,
    description,
    items
  } = props;
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isPinned,
    1: setPinned
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const headerHeight = document.querySelector(`.${(_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header)}`).getBoundingClientRect().height;
    const sideTabs = document.querySelector('.bodymove_stickySideScroll').style;
    sideTabs.setProperty('--headerHeight', headerHeight + "px");
    buildObserver();
  });

  const buildObserver = () => {
    let observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0.66, 1.0]
    };
    const tabObserver = new IntersectionObserver(intersectionCallback, observerOptions);

    function intersectionCallback(entries) {
      entries.forEach(function (entry) {
        const current = parseInt(entry.target.getAttribute('data-at')); //first tab gets triggered when sticky scroll is activated
        //other tabs when they're 1/2 in viewport

        const visibilityTrigger = current == 0 ? 1.0 : 0.66;

        if (entry.intersectionRatio >= visibilityTrigger) {
          if (current !== activeTab) {
            setActiveTab(current);
            document.querySelector(`.${(_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title)}[data-at="${current}"]`).classList.add((_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title__active));
          }
        }
      });
    }

    document.querySelectorAll(`.${(_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content)}`).forEach(tab => {
      tabObserver.observe(tab);

      if (window.innerWidth < 800) {
        tabObserver.disconnect();
      }
    }); //prevent header and nav overalapping at end of sticky

    let headerObserverOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    function headerObserverCallback(entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio >= 1 && !isPinned) {
          setPinned(true);
        } else if (entry.intersectionRatio < 1 && isPinned) {
          setPinned(false);
        }
      });
    }

    const headerObserver = new IntersectionObserver(headerObserverCallback, headerObserverOptions);
    headerObserver.observe(document.querySelector(`.${(_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav)}`));
  };

  const handleTabChange = (e, index) => {
    e.preventDefault();
    setActiveTab(index);
    document.querySelectorAll(`.${(_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content)}`)[index].scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  const className = `bodymove_stickySideScroll umoja-l-grid--12 ${isPinned ? (_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._pinned) : ''}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
        children: heading
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        children: description
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().left),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("ul", {
          className: (_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav_items),
          children: items.map((item, i) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
              className: (_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
              "data-at": i,
              onClick: e => handleTabChange(e, i),
              children: item.title
            }, item._key);
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().right),
      children: items.map((item, i) => {
        const itemClass = `${(_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content)} ${activeTab == i ? (_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._active) : ''}`;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: itemClass,
          "data-at": i,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: (_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content_inner),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
              children: item.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
              children: item.text
            })]
          })
        }, item._key);
      })
    }), items.map((item, i) => {
      const mediaClass = `${(_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default().media)} ${activeTab == i ? (_bodymove_stickySideScroll_module_scss__WEBPACK_IMPORTED_MODULE_5___default()._active) : ''}`;

      if (item.video) {
        const videoPath = (0,_sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__.getFile)(item.video, _client__WEBPACK_IMPORTED_MODULE_2___default().config());
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("video", {
          "data-at": i,
          className: mediaClass,
          autoPlay: true,
          loop: true,
          playsInline: true,
          muted: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("source", {
            src: videoPath.asset.url,
            type: `video/${videoPath.asset.extension}`
          })
        }, item._key);
      } else {
        const imageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_3__.useNextSanityImage)((_client__WEBPACK_IMPORTED_MODULE_2___default()), item.image);
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
          className: mediaClass,
          src: imageProps.src,
          alt: imageProps.alt
        }, item._key);
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodymove_stickySideScroll);

/***/ }),

/***/ 277:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodymove-stickySideScroll_umoja-u-pad-1__n4Ef1",
	"umoja-u-pad-t--0": "bodymove-stickySideScroll_umoja-u-pad-t--0__3l26z",
	"umoja-u-pad-b--0": "bodymove-stickySideScroll_umoja-u-pad-b--0__29rFs",
	"umoja-l-grid--12": "bodymove-stickySideScroll_umoja-l-grid--12__7fsaM",
	"umoja-l-grid--6": "bodymove-stickySideScroll_umoja-l-grid--6__36bjH",
	"umoja-l-page-width": "bodymove-stickySideScroll_umoja-l-page-width__1Ax9L",
	"umoja-l-grid-section": "bodymove-stickySideScroll_umoja-l-grid-section__N6uoe",
	"umoja-l-grid-section--flat-top": "bodymove-stickySideScroll_umoja-l-grid-section--flat-top__1IhFG",
	"umoja-l-grid-gap--row-1": "bodymove-stickySideScroll_umoja-l-grid-gap--row-1__ZVH3W",
	"umoja-l-grid-gap--row-2": "bodymove-stickySideScroll_umoja-l-grid-gap--row-2__37s1Y",
	"umoja-l-grid-gap--row-3": "bodymove-stickySideScroll_umoja-l-grid-gap--row-3__1lYJj",
	"umoja-l-grid-align--center": "bodymove-stickySideScroll_umoja-l-grid-align--center__p-W9m",
	"umoja-l-grid-align--base": "bodymove-stickySideScroll_umoja-l-grid-align--base__6FZt9",
	"header": "bodymove-stickySideScroll_header__6_XVC",
	"left": "bodymove-stickySideScroll_left__3iwLt",
	"nav": "bodymove-stickySideScroll_nav__3NWN5",
	"nav_items": "bodymove-stickySideScroll_nav_items__dJukS",
	"title": "bodymove-stickySideScroll_title__ycubs",
	"title__active": "bodymove-stickySideScroll_title__active__1HOr9",
	"right": "bodymove-stickySideScroll_right__2-JbF",
	"content": "bodymove-stickySideScroll_content__1gpw9",
	"side-tab__content_inner": "bodymove-stickySideScroll_side-tab__content_inner__2j7fZ",
	"media": "bodymove-stickySideScroll_media__2UI3D",
	"_active": "bodymove-stickySideScroll__active__gK4-l",
	"_pinned": "bodymove-stickySideScroll__pinned__HpOSj",
	"content_inner": "bodymove-stickySideScroll_content_inner__3TOSy"
};


/***/ })

};
;
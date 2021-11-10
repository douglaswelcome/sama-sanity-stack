exports.id = 4747;
exports.ids = [4747];
exports.modules = {

/***/ 4747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sanity_asset_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9484);
/* harmony import */ var _sanity_asset_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_asset_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5030);
/* harmony import */ var _components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4687);
/* harmony import */ var _bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(991);
/* harmony import */ var _bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const bodystatic_tabs = props => {
  const {
    tabs
  } = props;
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: tabDir,
    1: setTabDir
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const handleClick = e => {
    const active = parseInt(e.target.getAttribute('data-at'));

    if (activeTab > active) {
      setTabDir((_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default()._slideLeft));
    } else {
      setTabDir('');
    }

    setActiveTab(active);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "bodystatic-tabs umoja-l-grid--12",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: (_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().nav),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: `${(_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navInner)} ${tabDir}`,
        children: tabs.map((tab, i) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h5", {
            className: `${(_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().nav_item)} ${i == activeTab ? (_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active) : ''}`,
            "data-at": i,
            onClick: handleClick,
            children: tab.title
          }, tab._key);
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: (_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabWrapper),
      children: tabs.map((tab, i) => {
        let media;

        if (tab.video) {
          const videoPath = (0,_sanity_asset_utils__WEBPACK_IMPORTED_MODULE_2__.getFile)(tab.video, _client__WEBPACK_IMPORTED_MODULE_1___default().config());
          media = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("video", {
            className: (_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().video),
            autoPlay: "autoplay",
            loop: "loop",
            playsInline: "playsinline",
            muted: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("source", {
              src: videoPath.asset.url,
              type: `video/${videoPath.asset.extension}`
            })
          });
        }

        if (tab.image) {
          media = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: (_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().imgWrap),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
              src: tab.image,
              layout: "responsive",
              objectFit: "cover"
            })
          });
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: `${(_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tab)} ${i == activeTab ? (_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active) : ''}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {
            children: tab.title
          }), media, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            className: (_bodystatic_tabs_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tabContent),
            richText: tab.body.richText,
            align: tab.body.align
          })]
        }, tab._key);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_tabs);

/***/ }),

/***/ 991:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-tabs_umoja-u-pad-1__2-ORQ",
	"umoja-u-pad-t--0": "bodystatic-tabs_umoja-u-pad-t--0__7bnac",
	"umoja-u-pad-b--0": "bodystatic-tabs_umoja-u-pad-b--0__VX4K8",
	"umoja-l-grid--12": "bodystatic-tabs_umoja-l-grid--12__7XkT6",
	"umoja-l-grid--6": "bodystatic-tabs_umoja-l-grid--6__2PxEG",
	"umoja-l-page-width": "bodystatic-tabs_umoja-l-page-width__3sEKm",
	"umoja-l-grid-section": "bodystatic-tabs_umoja-l-grid-section__1uFWk",
	"umoja-l-grid-gap--row-1": "bodystatic-tabs_umoja-l-grid-gap--row-1__2qX1V",
	"umoja-l-grid-gap--row-2": "bodystatic-tabs_umoja-l-grid-gap--row-2__EHXUs",
	"umoja-l-grid-gap--row-3": "bodystatic-tabs_umoja-l-grid-gap--row-3__13_89",
	"umoja-l-grid-align--center": "bodystatic-tabs_umoja-l-grid-align--center__1-RdD",
	"umoja-l-grid-align--base": "bodystatic-tabs_umoja-l-grid-align--base__2e1Nd",
	"nav": "bodystatic-tabs_nav__1-UBP",
	"navInner": "bodystatic-tabs_navInner__iKy65",
	"_slideLeft": "bodystatic-tabs__slideLeft__1Bq19",
	"nav_item": "bodystatic-tabs_nav_item__DDVOA",
	"active": "bodystatic-tabs_active__2-Hns",
	"tabWrapper": "bodystatic-tabs_tabWrapper__36Oah",
	"tab": "bodystatic-tabs_tab__3CcWj",
	"tabContent": "bodystatic-tabs_tabContent__38szV",
	"imgWrap": "bodystatic-tabs_imgWrap___3qu-"
};


/***/ })

};
;
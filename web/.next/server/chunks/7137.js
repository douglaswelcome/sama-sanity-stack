exports.id = 7137;
exports.ids = [7137];
exports.modules = {

/***/ 7137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4687);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5030);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4151);
/* harmony import */ var _bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(394);
/* harmony import */ var _bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const bodymove_accordion = props => {
  const {
    panels
  } = props;
  const {
    0: activePanel,
    1: setActivePanel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const handlePanelChange = e => {
    const current = document.querySelector(`.${(_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel__active)}`);
    const active = parseInt(e.currentTarget.getAttribute('data-at'));

    if (current) {
      const openPanel = current.querySelector(`.${(_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel_body)}`);
      openPanel.style.maxHeight = 0;

      if (active == parseInt(current.getAttribute('data-at'))) {
        setActivePanel(null);
        return;
      }
    }

    const panelBody = e.currentTarget.querySelector(`.${(_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel_body)}`);
    setActivePanel(active);
    panelBody.style.maxHeight = `${panelBody.scrollHeight}px`;
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "bodymove-accordion umoja-l-grid--12",
    children: panels.map((panel, i) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: `umoja-l-grid--12 ${(_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel)} ${activePanel == i ? (_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel__active) : ''}`,
        onClick: handlePanelChange,
        "data-at": i,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: (_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel_head),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
            children: panel.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: (_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel_toggle)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: (_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel_body),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: (_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel_body_left),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
              className: (_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().body),
              richText: panel.body_copy.richText,
              align: panel.body_copy.align
            }), panel.cta && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
              className: (_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel_cta),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                link: panel.cta_url,
                type: "arrow",
                title: panel.cta
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: (_bodymove_accordion_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel_body_right),
            children: panel.image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
              src: panel.image,
              layout: "responsive",
              objectFit: "cover"
            })
          })]
        })]
      }, i);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodymove_accordion);

/***/ }),

/***/ 394:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodymove-accordion_umoja-u-pad-1__2tVUw",
	"umoja-u-pad-t--0": "bodymove-accordion_umoja-u-pad-t--0__3y19S",
	"umoja-u-pad-b--0": "bodymove-accordion_umoja-u-pad-b--0__1pxTX",
	"panel_body": "bodymove-accordion_panel_body__miQMs",
	"umoja-l-grid--12": "bodymove-accordion_umoja-l-grid--12__2xuvJ",
	"umoja-l-grid--6": "bodymove-accordion_umoja-l-grid--6__12ErC",
	"umoja-l-page-width": "bodymove-accordion_umoja-l-page-width__2QhLA",
	"umoja-l-grid-section": "bodymove-accordion_umoja-l-grid-section__3fm7t",
	"umoja-l-grid-section--flat-top": "bodymove-accordion_umoja-l-grid-section--flat-top__12EjK",
	"umoja-l-grid-gap--row-1": "bodymove-accordion_umoja-l-grid-gap--row-1__3he49",
	"umoja-l-grid-gap--row-2": "bodymove-accordion_umoja-l-grid-gap--row-2__3B-uJ",
	"umoja-l-grid-gap--row-3": "bodymove-accordion_umoja-l-grid-gap--row-3__3AVqk",
	"umoja-l-grid-align--center": "bodymove-accordion_umoja-l-grid-align--center__2xsUg",
	"umoja-l-grid-align--base": "bodymove-accordion_umoja-l-grid-align--base__2Vm3Q",
	"umoja-l-grid-span--full": "bodymove-accordion_umoja-l-grid-span--full__3zlfv",
	"panel": "bodymove-accordion_panel__2rYms",
	"panel_head": "bodymove-accordion_panel_head__CRvac",
	"panel_toggle": "bodymove-accordion_panel_toggle__1Foy5",
	"panel_body_left": "bodymove-accordion_panel_body_left__1W1ha",
	"panel_body_right": "bodymove-accordion_panel_body_right__1OiS_",
	"panel_cta": "bodymove-accordion_panel_cta__2RdX5",
	"panel__active": "bodymove-accordion_panel__active__26CC-"
};


/***/ })

};
;
exports.id = 4895;
exports.ids = [4895];
exports.modules = {

/***/ 4895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var _components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4687);
/* harmony import */ var _bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9610);
/* harmony import */ var _bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const bodymove_panel = props => {
  const {
    title,
    slides
  } = props;
  const {
    0: activeSlide,
    1: setActiveSlide
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const handleClick = e => {
    const active = parseInt(e.currentTarget.getAttribute('data-at'));
    setActiveSlide(active);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "bodymove-panel",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: `${(_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().panels)} umoja-l-grid--12`,
      children: [title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
        className: (_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carouselTitle__mobile),
        children: title
      }), slides.map((slide, i) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: `${(_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().panel)} ${i == activeSlide ? (_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : ''}`,
          "data-at": i,
          children: [title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
            className: (_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().carouselTitle),
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().panel_content),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
              children: slide.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
              className: (_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().panel_body),
              richText: slide.body.richText,
              align: slide.body.align
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: (_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageWrap),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
              src: slide.image,
              layout: "fill",
              objectFit: "cover"
            })
          })]
        }, slide._key);
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: `${(_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().slidePanel)} ${(_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().slidePanel__left)} ${activeSlide == 0 ? (_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().slidePanel__hide) : ''}`,
        onClick: handleClick,
        "data-at": activeSlide - 1
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: `${(_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().slidePanel)} ${(_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().slidePanel__right)} ${activeSlide == slides.length - 1 ? (_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().slidePanel__hide) : ''}`,
        onClick: handleClick,
        "data-at": activeSlide + 1
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav),
      children: slides.map((slide, i) => {
        const slideNum = i + 1;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
          className: `${(_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_item)} ${i == activeSlide ? (_bodymove_panel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : ''}`,
          "data-at": i,
          onClick: handleClick,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            children: `0${slideNum}`
          }), " ", slide.title]
        }, slide._key);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodymove_panel);

/***/ }),

/***/ 9610:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodymove-panel_umoja-u-pad-1__1QAgy",
	"umoja-u-pad-t--0": "bodymove-panel_umoja-u-pad-t--0__3JMJ5",
	"umoja-u-pad-b--0": "bodymove-panel_umoja-u-pad-b--0__3T7lY",
	"umoja-l-grid--12": "bodymove-panel_umoja-l-grid--12__1BCWH",
	"umoja-l-grid--6": "bodymove-panel_umoja-l-grid--6__v0t2W",
	"umoja-l-page-width": "bodymove-panel_umoja-l-page-width__12_PJ",
	"umoja-l-grid-section": "bodymove-panel_umoja-l-grid-section__Qvthc",
	"umoja-l-grid-section--flat-top": "bodymove-panel_umoja-l-grid-section--flat-top__2k3ez",
	"umoja-l-grid-gap--row-1": "bodymove-panel_umoja-l-grid-gap--row-1__1sN8c",
	"umoja-l-grid-gap--row-2": "bodymove-panel_umoja-l-grid-gap--row-2__1iV2F",
	"umoja-l-grid-gap--row-3": "bodymove-panel_umoja-l-grid-gap--row-3__2Be-g",
	"umoja-l-grid-align--center": "bodymove-panel_umoja-l-grid-align--center__1sVv6",
	"umoja-l-grid-align--base": "bodymove-panel_umoja-l-grid-align--base__2lUl6",
	"umoja-l-grid-span--full": "bodymove-panel_umoja-l-grid-span--full__3G5XQ",
	"panels": "bodymove-panel_panels__1TvDI",
	"carouselTitle__mobile": "bodymove-panel_carouselTitle__mobile__2EZ82",
	"panel": "bodymove-panel_panel__2Dt_i",
	"panel_body": "bodymove-panel_panel_body__2qaww",
	"active": "bodymove-panel_active__23UAt",
	"imageWrap": "bodymove-panel_imageWrap__3UjlD",
	"panel_content": "bodymove-panel_panel_content__7MM3f",
	"slidePanel": "bodymove-panel_slidePanel__1hZQn",
	"slidePanel__left": "bodymove-panel_slidePanel__left__2Jg5G",
	"slidePanel__right": "bodymove-panel_slidePanel__right__odLv-",
	"slidePanel__hide": "bodymove-panel_slidePanel__hide__zhnaL",
	"nav": "bodymove-panel_nav__2Acnz",
	"nav_item": "bodymove-panel_nav_item__32EzF"
};


/***/ })

};
;
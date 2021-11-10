exports.id = 5044;
exports.ids = [5044];
exports.modules = {

/***/ 5044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4151);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5030);
/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4687);
/* harmony import */ var _bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4384);
/* harmony import */ var _bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const bodymove_splitTxtImg = props => {
  const {
    slides
  } = props;
  const {
    0: activeSlide,
    1: setActiveSlide
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: slideDir,
    1: setSlideDir
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const handleClick = e => {
    const active = parseInt(e.target.getAttribute('data-at'));
    document.querySelector(`.${(_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carousel_slides)}`).style.left = 100 * active * -1 + '%';
    setActiveSlide(active);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "bodymove-splitTxtImg umoja-l-grid--12 umoja-l-grid-gap--row-2 umoja-l-grid-align--center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().topNav),
      children: slides.map((slide, i) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          className: `${(_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().topNav_item)} ${i == activeSlide ? (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active) : ''}`,
          "data-at": i,
          onClick: handleClick,
          children: slide.preheading ? slide.preheading : slide.title
        }, slide._key);
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: `${(_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carouselNav)} ${(_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carouselNav__left)} ${activeSlide == 0 ? (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carouselNav__hide) : ''}`,
      onClick: handleClick,
      "data-at": activeSlide - 1
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carousel),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carousel_slides),
        children: slides.map((slide, i) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: `${(_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carousel_slide)} ${i == activeSlide ? (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().active) : ''} umoja-l-grid--6`,
            "data-at": i,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carousel_slide_left),
              children: [slide.preheading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
                children: slide.preheading
              }), slide.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
                children: slide.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                children: slide.body
              }), slide.cta.title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_button_button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread({}, slide.cta))]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carousel_slide_right),
              children: [slide.bullets && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().list),
                children: slide.bullets.map((bullet, i) => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().list_item),
                    children: [bullet.icon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                      src: bullet.icon,
                      layout: "fixed",
                      width: 28,
                      height: 28
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().list_item_copy),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
                        children: bullet.title
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                        className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().list_item_body),
                        richText: bullet.body.richText,
                        align: bullet.body.align
                      })]
                    })]
                  }, bullet._key);
                })
              }), slide.image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().imgWrap),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                  src: image,
                  layout: "responsive",
                  objectFit: "cover"
                })
              }), slide.video && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().imgWrap),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_video__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                  src: video
                })
              })]
            })]
          }, slide._key);
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      class: `${(_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carouselNav)} ${(_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carouselNav__right)} ${activeSlide == slides.length - 1 ? (_bodymove_splitTxtImg_module_scss__WEBPACK_IMPORTED_MODULE_6___default().carouselNav__hide) : ''}`,
      onClick: handleClick,
      "data-at": activeSlide + 1
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodymove_splitTxtImg);

/***/ }),

/***/ 4384:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodymove-splitTxtImg_umoja-u-pad-1__1B04L",
	"umoja-u-pad-t--0": "bodymove-splitTxtImg_umoja-u-pad-t--0__Tq_bH",
	"umoja-u-pad-b--0": "bodymove-splitTxtImg_umoja-u-pad-b--0__1n1jB",
	"umoja-l-grid--12": "bodymove-splitTxtImg_umoja-l-grid--12__18tgJ",
	"umoja-l-grid--6": "bodymove-splitTxtImg_umoja-l-grid--6__1agId",
	"umoja-l-page-width": "bodymove-splitTxtImg_umoja-l-page-width__33ItS",
	"umoja-l-grid-section": "bodymove-splitTxtImg_umoja-l-grid-section__3WT5H",
	"umoja-l-grid-gap--row-1": "bodymove-splitTxtImg_umoja-l-grid-gap--row-1__2Gv7i",
	"umoja-l-grid-gap--row-2": "bodymove-splitTxtImg_umoja-l-grid-gap--row-2__1-rx9",
	"umoja-l-grid-gap--row-3": "bodymove-splitTxtImg_umoja-l-grid-gap--row-3__2ku9w",
	"umoja-l-grid-align--center": "bodymove-splitTxtImg_umoja-l-grid-align--center__381c_",
	"umoja-l-grid-align--base": "bodymove-splitTxtImg_umoja-l-grid-align--base__1m5Nq",
	"topNav": "bodymove-splitTxtImg_topNav__EOdBc",
	"topNav_item": "bodymove-splitTxtImg_topNav_item__BPbgz",
	"active": "bodymove-splitTxtImg_active__3Jhju",
	"carouselNav": "bodymove-splitTxtImg_carouselNav__3nu7k",
	"carouselNav__left": "bodymove-splitTxtImg_carouselNav__left__1xeR6",
	"carouselNav__right": "bodymove-splitTxtImg_carouselNav__right__4g47x",
	"carouselNav__hide": "bodymove-splitTxtImg_carouselNav__hide__2iQxN",
	"carousel": "bodymove-splitTxtImg_carousel__2flDW",
	"carousel_slides": "bodymove-splitTxtImg_carousel_slides__34AtJ",
	"carousel_slide": "bodymove-splitTxtImg_carousel_slide__KbR4L",
	"carousel_slide_left": "bodymove-splitTxtImg_carousel_slide_left__9qD6s",
	"carousel_slide_right": "bodymove-splitTxtImg_carousel_slide_right__1dZ17",
	"list": "bodymove-splitTxtImg_list__3lQn2",
	"list_item": "bodymove-splitTxtImg_list_item__1_nRx",
	"list_item_body": "bodymove-splitTxtImg_list_item_body__3l_8R"
};


/***/ })

};
;
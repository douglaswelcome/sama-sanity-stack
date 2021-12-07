exports.id = 7845;
exports.ids = [7845];
exports.modules = {

/***/ 7845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5030);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1692);
/* harmony import */ var _libs_slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7570);
/* harmony import */ var _blog_smallCard_row_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9188);
/* harmony import */ var _blog_smallCard_row_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blog_smallCard_row_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);








const BlogSmallCardRow = props => {
  const {
    posts,
    hideTag
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: posts.map(post => {
      let tag = post.tags[1];

      if (hideTag && tag.value == hideTag) {
        tag = post.tags.find((o, i) => {
          if (o.value !== hideTag) {
            return o;
          }
        });
      }

      const slugURL = post.slug ? post.slug.current : '';
      let postSlug = {
        internalLink_custom: `blog${slugURL.charAt(0) == '/' ? slugURL : `/${slugURL}`}`
      };
      let tagSlug = {};

      if (tag) {
        tagSlug = {
          internalLink_custom: `blog/tag/${(0,_libs_slugify__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(tag.value)}`
        };
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_blog_smallCard_row_module_scss__WEBPACK_IMPORTED_MODULE_4___default().post),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          link: postSlug,
          className: (_blog_smallCard_row_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imgWrap),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_image__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            src: post.featured_image,
            layout: "fill",
            objectFit: "cover"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: (_blog_smallCard_row_module_scss__WEBPACK_IMPORTED_MODULE_4___default().post_info),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            link: postSlug,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h4", {
              children: post.title
            })
          }), tag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            className: (_blog_smallCard_row_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tag),
            link: tagSlug,
            children: tag.label
          })]
        })]
      }, post._id);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSmallCardRow);

/***/ }),

/***/ 9188:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "blog-smallCard-row_umoja-u-pad-1__36Que",
	"umoja-u-pad-t--0": "blog-smallCard-row_umoja-u-pad-t--0__3-e16",
	"umoja-u-pad-b--0": "blog-smallCard-row_umoja-u-pad-b--0__2-XOy",
	"umoja-l-grid--12": "blog-smallCard-row_umoja-l-grid--12__3RB2R",
	"umoja-l-grid--6": "blog-smallCard-row_umoja-l-grid--6__5yKPI",
	"umoja-l-page-width": "blog-smallCard-row_umoja-l-page-width__L_DHG",
	"umoja-l-grid-section": "blog-smallCard-row_umoja-l-grid-section__2W3t1",
	"umoja-l-grid-section--flat-top": "blog-smallCard-row_umoja-l-grid-section--flat-top__2zdBc",
	"umoja-l-grid-gap--row-1": "blog-smallCard-row_umoja-l-grid-gap--row-1__3E-Yf",
	"umoja-l-grid-gap--row-2": "blog-smallCard-row_umoja-l-grid-gap--row-2__2np40",
	"umoja-l-grid-gap--row-3": "blog-smallCard-row_umoja-l-grid-gap--row-3__dYRXR",
	"umoja-l-grid-align--center": "blog-smallCard-row_umoja-l-grid-align--center__oFMPO",
	"umoja-l-grid-align--base": "blog-smallCard-row_umoja-l-grid-align--base__1KT1y",
	"umoja-l-grid-span--full": "blog-smallCard-row_umoja-l-grid-span--full__ky8nx",
	"post": "blog-smallCard-row_post__in_Mm",
	"imgWrap": "blog-smallCard-row_imgWrap__36jhQ",
	"post_info": "blog-smallCard-row_post_info__3V7Qy",
	"tag": "blog-smallCard-row_tag__33FrA"
};


/***/ })

};
;
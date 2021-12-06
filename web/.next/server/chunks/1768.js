exports.id = 1768;
exports.ids = [1768];
exports.modules = {

/***/ 1325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5030);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1692);
/* harmony import */ var _libs_slugify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7570);
/* harmony import */ var _blog_post_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8288);
/* harmony import */ var _blog_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blog_post_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);







const BlogPost = props => {
  const {
    _createdAt,
    slug,
    author,
    featured_image,
    tags,
    title,
    estimatedReadingTime,
    hideAuthor,
    hideTag
  } = props;
  const tag = tags[0].label;
  const slugURL = slug ? slug.current : '';
  let authorSlug = {};
  let tagSlug = {};
  let postSlug = {
    internalLink_custom: `/blog${slugURL.charAt(0) == '/' ? slugURL : `/${slugURL}`}`
  };

  if (!hideAuthor) {
    authorSlug = {
      internalLink_custom: `/blog/author/${author.slug ? author.slug.current : ''}`
    };
  }

  if (!hideTag) {
    tagSlug = {
      internalLink_custom: `/blog/tag/${(0,_libs_slugify__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(tag)}`
    };
  }

  let date = new Date(_createdAt);
  date = date.toLocaleString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_blog_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCard),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      link: postSlug,
      className: (_blog_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCard_image),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_image__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        layout: "fill",
        objectFit: "cover",
        src: featured_image
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_blog_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCard_data),
      children: [!hideTag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        className: (_blog_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCard_tag),
        link: tagSlug,
        children: tag
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        link: postSlug,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
          children: title
        })
      }), !hideAuthor && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        link: authorSlug,
        className: (_blog_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCard_author),
        children: author.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        className: `${(_blog_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCard_date)} ${hideAuthor ? (_blog_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postCard_date__noAuthor) : ''}`,
        children: [date, estimatedReadingTime ? ` | ${estimatedReadingTime} Min Read` : '']
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

/***/ }),

/***/ 8288:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "blog-post_umoja-u-pad-1__ZAvSG",
	"umoja-u-pad-t--0": "blog-post_umoja-u-pad-t--0__1dSml",
	"umoja-u-pad-b--0": "blog-post_umoja-u-pad-b--0__2vsew",
	"umoja-l-grid--12": "blog-post_umoja-l-grid--12__3v0BK",
	"umoja-l-grid--6": "blog-post_umoja-l-grid--6__2dBVG",
	"umoja-l-page-width": "blog-post_umoja-l-page-width__28dnW",
	"umoja-l-grid-section": "blog-post_umoja-l-grid-section__2q_BC",
	"umoja-l-grid-gap--row-1": "blog-post_umoja-l-grid-gap--row-1__3p43T",
	"umoja-l-grid-gap--row-2": "blog-post_umoja-l-grid-gap--row-2__b05iT",
	"umoja-l-grid-gap--row-3": "blog-post_umoja-l-grid-gap--row-3__lQ8_H",
	"umoja-l-grid-align--center": "blog-post_umoja-l-grid-align--center__2jRjw",
	"umoja-l-grid-align--base": "blog-post_umoja-l-grid-align--base__1l1Qp",
	"postCard": "blog-post_postCard__i0O-O",
	"postCard_image": "blog-post_postCard_image__3k8eA",
	"postCard_data": "blog-post_postCard_data__2vfn3",
	"postCard_tag": "blog-post_postCard_tag__9RTi-",
	"postCard_author": "blog-post_postCard_author__Y7RjO",
	"postCard_date": "blog-post_postCard_date__hrDMA",
	"postCard_date__noAuthor": "blog-post_postCard_date__noAuthor__F9yyw"
};


/***/ })

};
;
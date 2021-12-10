exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-inlinesvg"
var external_react_inlinesvg_ = __webpack_require__(7051);
var external_react_inlinesvg_default = /*#__PURE__*/__webpack_require__.n(external_react_inlinesvg_);
// EXTERNAL MODULE: ./components/header/header.module.scss
var header_module = __webpack_require__(9248);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/header/navLink.js






const NavLink = props => {
  const {
    url,
    title
  } = props;
  const {
    asPath
  } = (0,router_.useRouter)();
  const currentSlug = asPath.charAt(0) == '/' ? asPath.substring(1) : asPath;

  if (url.internalLink || url.internalLink_custom) {
    let slug = url.internalLink ? url.internalLink.slug.current : url.internalLink_custom;
    slug = slug.charAt(0) == '/' ? slug.substring(1) : slug;
    const active = currentSlug === slug ? true : false;
    const className = active ? `${(header_module_default()).navLink} ${(header_module_default()).navLink__active}` : `${(header_module_default()).navLink}`;
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/${slug}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: className,
        children: title
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: url.externalUrl,
    className: (header_module_default()).navLink,
    target: "_blank",
    children: title
  });
};

/* harmony default export */ const navLink = (NavLink);
;// CONCATENATED MODULE: ./components/header/navDropdownGroup.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const NavDropDownGroup = props => {
  const {
    items,
    title
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (header_module_default()).dropDown_group,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (header_module_default()).dropdown_group_label,
      children: title
    }), items.map(item => {
      return /*#__PURE__*/(0,external_react_.createElement)(navLink, _objectSpread(_objectSpread({}, item), {}, {
        key: item._key
      }));
    })]
  });
};

/* harmony default export */ const navDropdownGroup = (NavDropDownGroup);
;// CONCATENATED MODULE: ./components/header/navDropdown.js
function navDropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function navDropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { navDropdown_ownKeys(Object(source), true).forEach(function (key) { navDropdown_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { navDropdown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function navDropdown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const NavDropDown = props => {
  const {
    items,
    title
  } = props;
  const {
    asPath
  } = (0,router_.useRouter)();
  const currentSlug = asPath.charAt(0) == '/' ? asPath.substring(1) : asPath;
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(false);
  console.log(active);
  const className = active ? `${(header_module_default()).navItem_label} ${(header_module_default()).navItem_label__active}` : `${(header_module_default()).navItem_label}`;
  (0,external_react_.useEffect)(() => {
    const subLinks = items.map(item => {
      let subItems = []; //check for grouped links

      if (item.items) {
        item.items.map(groupedItem => {
          if (groupedItem.url.internalLink) {
            subItems.push(groupedItem.url.internalLink.slug.current);
          }

          if (groupedItem.url.internalLink_custom) {
            const internalLinkCustom = item.url.internalLink_custom.charAt(0) == '/' ? item.url.internalLink_custom.substring(1) : item.url.internalLink_custom;
            subItems.push(internalLinkCustom);
          }
        });
      } else {
        if (item.url.internalLink) {
          subItems.push(item.url.internalLink.slug.current);
        }

        if (item.url.internalLink_custom) {
          const internalLinkCustom = item.url.internalLink_custom.charAt(0) == '/' ? item.url.internalLink_custom.substring(1) : item.url.internalLink_custom;
          subItems.push(internalLinkCustom);
        }
      }

      return subItems;
    });
    const isActive = subLinks.some(item => {
      return item == currentSlug;
    });
    setActive(isActive);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: className,
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (header_module_default()).dropDown,
      children: items.map(item => {
        if (item._type == 'navCat') {
          return /*#__PURE__*/(0,external_react_.createElement)(navDropdownGroup, navDropdown_objectSpread(navDropdown_objectSpread({}, item), {}, {
            key: item._key
          }));
        } else {
          return /*#__PURE__*/(0,external_react_.createElement)(navLink, navDropdown_objectSpread(navDropdown_objectSpread({}, item), {}, {
            key: item._key
          }));
        }
      })
    })]
  });
};

/* harmony default export */ const navDropdown = (NavDropDown);
// EXTERNAL MODULE: ./components/button/button.js
var button_button = __webpack_require__(4151);
;// CONCATENATED MODULE: ./components/header/header.js
function header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_ownKeys(Object(source), true).forEach(function (key) { header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class Header extends external_react_.Component {
  constructor(...args) {
    super(...args);

    header_defineProperty(this, "state", {
      showNav: false
    });

    header_defineProperty(this, "handleMenuToggle", () => {
      const {
        showNav
      } = this.state;
      this.setState({
        showNav: !showNav
      });
    });
  }

  render() {
    const {
      title = 'Missing title',
      navItems,
      logo
    } = this.props;
    const {
      items,
      nav_cta
    } = navItems;
    const {
      showNav
    } = this.state;
    return /*#__PURE__*/jsx_runtime_.jsx("header", {
      className: `${(header_module_default()).outer} ${showNav ? (header_module_default())._active : ''}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: `umoja-l-grid--12 ${(header_module_default()).wrapper}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: (header_module_default()).logo,
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_inlinesvg_default()), {
              src: logo.asset.url
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (header_module_default()).hamburger,
          type: "button",
          onClick: this.handleMenuToggle,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (header_module_default()).hamburger_box,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (header_module_default()).hamburger_box_inner
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: (header_module_default()).navBar,
          children: items.map(item => {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: (header_module_default()).navItem,
              children: item._type == 'navDropdownMenu' ? /*#__PURE__*/jsx_runtime_.jsx(navDropdown, header_objectSpread({}, item)) : /*#__PURE__*/jsx_runtime_.jsx(navLink, header_objectSpread({}, item))
            }, item._key);
          })
        }), nav_cta && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (header_module_default()).cta,
          children: /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, header_objectSpread(header_objectSpread({}, nav_cta), {}, {
            size: "small"
          }))
        })]
      })
    });
  }

}

/* harmony default export */ const header = ((0,router_.withRouter)(Header));

/***/ }),

/***/ 9248:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "header_umoja-u-pad-1__13p9W",
	"umoja-u-pad-t--0": "header_umoja-u-pad-t--0__v1i98",
	"umoja-u-pad-b--0": "header_umoja-u-pad-b--0__3hm7d",
	"umoja-l-grid--12": "header_umoja-l-grid--12__2UhK9",
	"umoja-l-grid--6": "header_umoja-l-grid--6__2oWO5",
	"umoja-l-page-width": "header_umoja-l-page-width__2rMVR",
	"umoja-l-grid-section": "header_umoja-l-grid-section__2URtG",
	"umoja-l-grid-section--flat-top": "header_umoja-l-grid-section--flat-top__1xggz",
	"umoja-l-grid-gap--row-1": "header_umoja-l-grid-gap--row-1__15idn",
	"umoja-l-grid-gap--row-2": "header_umoja-l-grid-gap--row-2__3syxA",
	"umoja-l-grid-gap--row-3": "header_umoja-l-grid-gap--row-3__28-vL",
	"umoja-l-grid-align--center": "header_umoja-l-grid-align--center__3C5zd",
	"umoja-l-grid-align--base": "header_umoja-l-grid-align--base__208hq",
	"umoja-l-grid-span--full": "header_umoja-l-grid-span--full__YhfZI",
	"outer": "header_outer__yu9q7",
	"wrapper": "header_wrapper__3Ghzm",
	"logo": "header_logo__eiLSq",
	"hamburger": "header_hamburger__1ZcbZ",
	"hamburger_box": "header_hamburger_box__RZ7CY",
	"hamburger_box_inner": "header_hamburger_box_inner__1PmWZ",
	"navBar": "header_navBar__37eSJ",
	"navItem": "header_navItem__1HiGN",
	"navItem_label": "header_navItem_label__fN3Cy",
	"dropDown": "header_dropDown__6NxUb",
	"navItem_label__active": "header_navItem_label__active__3i-yQ",
	"navLink": "header_navLink__1ARu5",
	"navLink__active": "header_navLink__active__3cW9s",
	"dropDown_group": "header_dropDown_group__2BZXC",
	"dropdown_group_label": "header_dropdown_group_label__tmND8",
	"cta": "header_cta__3J8I7",
	"_active": "header__active__EeQyz"
};


/***/ })

};
;
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const sanityClient = __webpack_require__(8809);

const client = sanityClient({
  projectId: '76e3r62u',
  // you can find this in sanity.json
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data

});
module.exports = client;

/***/ }),

/***/ 5964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
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

  if (url.internalLink) {
    const slug = url.internalLink.slug.current;
    const active = currentSlug === slug ? true : false;
    const className = active ? `${(header_module_default()).navLink} ${(header_module_default()).navLink__active}` : `${(header_module_default()).navLink}`;
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: {
        pathname: '/page',
        query: {
          slug: slug
        }
      },
      as: `/${slug}`,
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
  const className = active ? `${(header_module_default()).navItem_label} ${(header_module_default()).navItem_label__active}` : `${(header_module_default()).navItem_label}`;
  (0,external_react_.useEffect)(() => {
    const subLinks = items.map(item => {
      let subItems = []; //check for grouped links

      if (item.items) {
        item.items.map(groupedItem => {
          if (groupedItem.url.internalLink) {
            subItems.push(groupedItem.url.internalLink.slug.current);
          }
        });
      } else {
        if (item.url.internalLink) {
          subItems.push(item.url.internalLink.slug.current);
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
// EXTERNAL MODULE: ./components/footer/footer.module.scss
var footer_module = __webpack_require__(1146);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/footer/footer.js







const Footer = props => {
  const {
    navItems,
    logo
  } = props;
  const {
    0: copyright,
    1: setCopyright
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    const year = new Date().getFullYear();
    setCopyright(year);
  });
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: (footer_module_default()).wrapper,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "umoja-l-grid--12",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).upper,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (footer_module_default()).upper_left,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Newsletter"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Subscribe today and be the first to receive the latest from Sama."
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (footer_module_default()).upper_right,
          children: navItems.map(item => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (footer_module_default()).nav,
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: (footer_module_default()).nav_head,
                children: item.title
              }), item.items.map(footerItem => {
                if (footerItem.url) {
                  if (footerItem.url.internalLink) {
                    const slug = footerItem.url.internalLink.slug.current;
                    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: {
                        pathname: '/page',
                        query: {
                          slug: slug
                        }
                      },
                      as: `/${slug}`,
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: (footer_module_default()).nav_link,
                        children: footerItem.title
                      })
                    }, footerItem._key);
                  } else {
                    return /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: footerItem.url.externalUrl,
                      target: "_blank",
                      className: (footer_module_default()).nav_link,
                      children: footerItem.title
                    }, footerItem._key);
                  }
                }
              })]
            }, item._key);
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).middle,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (footer_module_default()).middle_left,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_inlinesvg_default()), {
                src: logo.asset.url
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (footer_module_default()).middle_right,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (footer_module_default()).social,
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.facebook.com/samaartificialintelligence",
              className: (footer_module_default()).social_icon,
              target: "_blank",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 35.1 64.89",
                children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
                  children: "facebook"
                }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                  id: "fb3209c8-23d4-4288-984d-a2b8f32b7f0c",
                  "data-name": "Layer 2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                    id: "ba1a815d-13f1-45f9-9321-18e9a3cfa5db",
                    "data-name": "Layer 1",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M35.1,11.26V1.36A1.35,1.35,0,0,0,33.76,0H25.35A15.34,15.34,0,0,0,14,4.35C11.24,7.2,9.78,11.22,9.78,16v7.34H1.34A1.34,1.34,0,0,0,0,24.66V35.32a1.35,1.35,0,0,0,1.34,1.35H9.78V63.55a1.34,1.34,0,0,0,1.34,1.34h11a1.34,1.34,0,0,0,1.34-1.34V36.67h9.87a1.35,1.35,0,0,0,1.34-1.35V24.66a1.37,1.37,0,0,0-.7-1.18,1.47,1.47,0,0,0-.67-.16H23.49V17.1c0-1.72.25-2.69.84-3.37s1.88-1.13,3.77-1.13h5.66A1.34,1.34,0,0,0,35.1,11.26Z"
                    })
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.instagram.com/sama_ai_",
              className: (footer_module_default()).social_icon,
              target: "_blank",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 57 57",
                children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
                  children: "insta"
                }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                  id: "ef02a3ef-c0d3-4be7-9d4e-2c42263777a3",
                  "data-name": "Layer 2",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
                    id: "a0a92778-6c5c-4e06-a08f-641546580dd0",
                    "data-name": "Layer 1",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
                      cx: "28.5",
                      cy: "28.5",
                      r: "9.24"
                    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M41.57,0H15.43A15.45,15.45,0,0,0,0,15.43V41.57A15.45,15.45,0,0,0,15.43,57H41.57A15.45,15.45,0,0,0,57,41.57V15.43A15.45,15.45,0,0,0,41.57,0ZM28.5,42.74A14.24,14.24,0,1,1,42.74,28.5,14.26,14.26,0,0,1,28.5,42.74ZM44.46,17a5,5,0,1,1,5-5A5,5,0,0,1,44.46,17Z"
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://twitter.com/SamaAI",
              className: (footer_module_default()).social_icon,
              target: "_blank",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 62 51.19",
                children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
                  children: "twitter"
                }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                  id: "e7743e55-1863-47ad-a995-4b7f1f924f07",
                  "data-name": "Layer 2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                    id: "ec8c6fd9-2f52-4507-9a24-804bc60dbc33",
                    "data-name": "Layer 1",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M23.59,51.19c-10.35,0-18.53-1.81-22.44-5l-.07-.06L1,46.1a3.19,3.19,0,0,1-.84-3.35l0-.1a3.24,3.24,0,0,1,3-2,26.57,26.57,0,0,0,7.06-1,13.45,13.45,0,0,1-7.07-8.16,2.92,2.92,0,0,1,1-3.38,3.06,3.06,0,0,1,.88-.45,19.52,19.52,0,0,1-4-7.18l0-.08,0-.09a3,3,0,0,1,1.4-3.23,3,3,0,0,1,1.43-.4,15.15,15.15,0,0,1-1.14-3.49A14.59,14.59,0,0,1,4.24,3.47l.38-.77a2.15,2.15,0,0,1,3.44-.56l.7.7c5.53,5.81,10.49,8.56,19.06,10.44a15.17,15.17,0,0,1,4.1-8.75A14.39,14.39,0,0,1,42.19,0h0c2.84,0,6.36,1.62,8.49,2.77,1.83-.6,4-1.53,6.32-2.51a2.88,2.88,0,0,1,3.22.57,2.85,2.85,0,0,1,.62,3.11c-.17.47-.36.92-.57,1.36a3.07,3.07,0,0,1,.84.58,3.13,3.13,0,0,1,.78,2.92l0,.1a11.92,11.92,0,0,1-4.78,6.56C56.73,35.23,41.84,51.19,23.59,51.19Z"
                    })
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.linkedin.com/company/sama-ai/",
              className: (footer_module_default()).social_icon,
              target: "_blank",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 59.71 60.79",
                children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
                  children: "linkedin"
                }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                  id: "bd073dff-b6ea-4cf0-bfeb-c3ce392ee6a5",
                  "data-name": "Layer 2",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
                    id: "f6b6eb77-7c10-4e27-a3d0-6f8b14e97f2e",
                    "data-name": "Layer 1",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M59.65,60.79l-12.35,0,0-19.36c0-4.62-.07-10.56-6.41-10.58s-7.44,5-7.45,10.21l0,19.7-12.36,0,.09-40.95,11.87,0v6.57h.16c1.66-3.13,5.7-6.42,11.73-6.41,12.51,0,14.81,8.28,14.79,19l-.05,21.85Z"
                    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M7.17,14.35a7.18,7.18,0,1,1,7.18-7.18A7.17,7.17,0,0,1,7.17,14.35Z"
                    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
                      x: "0.98",
                      y: "19.8",
                      width: "12.39",
                      height: "40.95"
                    })]
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.youtube.com/c/SamaAI",
              className: (footer_module_default()).social_icon,
              target: "_blank",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 65 44.63",
                children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
                  children: "youtube"
                }), /*#__PURE__*/jsx_runtime_.jsx("g", {
                  id: "b03ac260-8029-40d4-832d-1f2d757db2d5",
                  "data-name": "Layer 2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                    id: "eca1bfe4-f0ec-4c24-9169-be6d2f8b24b5",
                    "data-name": "Layer 1",
                    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "M55,0H10A10,10,0,0,0,0,10V34.63a10,10,0,0,0,10,10H55a10,10,0,0,0,10-10V10A10,10,0,0,0,55,0ZM40.89,24.41,28.3,31.18a2.31,2.31,0,0,1-3.41-2V15.48a2.3,2.3,0,0,1,3.42-2l12.6,6.89a2.31,2.31,0,0,1,0,4.06Z"
                    })
                  })
                })]
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).lower,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (footer_module_default()).lower_left,
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/terms-of-service",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (footer_module_default()).nav_link,
              children: "Terms"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/privacy-policy",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (footer_module_default()).nav_link,
              children: "Privacy"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/quality-and-information-policy",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (footer_module_default()).nav_link,
              children: "Quality & Information"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (footer_module_default()).lower_right,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
            children: ["Copyright \xA9 ", copyright, " Sama Inc."]
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            children: "All rights reserved."
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./components/Layout.js









function Layout(props) {
  const {
    config,
    children
  } = props;

  if (!config) {
    console.error('Missing config');
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "Missing config"
    });
  }

  const {
    title,
    mainNav,
    footerNav,
    logo,
    url
  } = config;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width, viewport-fit=cover"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Sama - Make Training Data Your Competitive Advantage"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(header, {
        title: title,
        navItems: mainNav,
        logo: logo
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: "content",
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(footer, {
        navItems: footerNav.items,
        logo: logo
      })]
    })]
  });
}

/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 4151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3879);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const Button = props => {
  const {
    title,
    type,
    size,
    link
  } = props;
  const {
    0: buttonLink,
    1: setButtonLink
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(link);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (link && link.internalLink) {
      _client__WEBPACK_IMPORTED_MODULE_1___default().fetch(`*[_type == "page" && _id == "${link.internalLink._ref}"][0]`).then(page => {
        setButtonLink(page.slug.current);
      });
    }
  });
  const wrapperClass = `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper)} ${type ? (_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[`_${type}`] : ''} ${size ? (_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[`_${size}`] : ''}`;

  const buttonInner = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
    className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btn),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
      className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
      children: title
    })
  });

  if (buttonLink) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: buttonLink.externalUrl ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
        href: buttonLink.externalUrl,
        className: wrapperClass,
        target: "_blank",
        rel: "noopener",
        children: buttonInner
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: buttonLink,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          className: wrapperClass,
          children: buttonInner
        })
      })
    });
  } else {
    /*#__PURE__*/
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: wrapperClass,
      children: buttonInner
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 3879:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "button_umoja-u-pad-1__378Rh",
	"umoja-u-pad-t--0": "button_umoja-u-pad-t--0__TY9Xc",
	"umoja-u-pad-b--0": "button_umoja-u-pad-b--0__2c-Un",
	"umoja-l-grid--12": "button_umoja-l-grid--12__RgSB0",
	"umoja-l-grid--6": "button_umoja-l-grid--6__3iPRr",
	"umoja-l-page-width": "button_umoja-l-page-width__TBzfJ",
	"umoja-l-grid-section": "button_umoja-l-grid-section__30hdz",
	"umoja-l-grid-gap--row-1": "button_umoja-l-grid-gap--row-1__13k4Y",
	"umoja-l-grid-gap--row-2": "button_umoja-l-grid-gap--row-2__3mbaT",
	"umoja-l-grid-gap--row-3": "button_umoja-l-grid-gap--row-3__FBbl9",
	"umoja-l-grid-align--center": "button_umoja-l-grid-align--center__7o5b6",
	"umoja-l-grid-align--base": "button_umoja-l-grid-align--base__dSWXb",
	"wrapper": "button_wrapper__3lRbv",
	"btn": "button_btn__1qxP1",
	"text": "button_text__3_sCS",
	"_secondary": "button__secondary__1pZ5q",
	"_arrow": "button__arrow__1eUJP",
	"_small": "button__small__2kIwW"
};


/***/ }),

/***/ 1146:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "footer_umoja-u-pad-1__28dD1",
	"umoja-u-pad-t--0": "footer_umoja-u-pad-t--0__2i4ME",
	"umoja-u-pad-b--0": "footer_umoja-u-pad-b--0__2JR--",
	"umoja-l-grid--12": "footer_umoja-l-grid--12__PV3JZ",
	"umoja-l-grid--6": "footer_umoja-l-grid--6__1dRcY",
	"umoja-l-page-width": "footer_umoja-l-page-width__2CarG",
	"umoja-l-grid-section": "footer_umoja-l-grid-section__1LTFe",
	"umoja-l-grid-gap--row-1": "footer_umoja-l-grid-gap--row-1__36rEV",
	"umoja-l-grid-gap--row-2": "footer_umoja-l-grid-gap--row-2__20H7c",
	"umoja-l-grid-gap--row-3": "footer_umoja-l-grid-gap--row-3__2oLN2",
	"umoja-l-grid-align--center": "footer_umoja-l-grid-align--center__3elRt",
	"umoja-l-grid-align--base": "footer_umoja-l-grid-align--base__15bJZ",
	"wrapper": "footer_wrapper__2VAfJ",
	"upper": "footer_upper__2a6XG",
	"upper_right": "footer_upper_right__cpliC",
	"nav_head": "footer_nav_head__1keQK",
	"nav_link": "footer_nav_link__X1RNI",
	"middle": "footer_middle__iiTSJ",
	"middle_left": "footer_middle_left__3ff78",
	"middle_right": "footer_middle_right__2b-lC",
	"social": "footer_social__1NFfV",
	"social_icon": "footer_social_icon__wI2OK",
	"lower": "footer_lower__1z3Av",
	"lower_left": "footer_lower_left__141hE",
	"lower_right": "footer_lower_right__22vMw"
};


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
	"umoja-l-grid-gap--row-1": "header_umoja-l-grid-gap--row-1__15idn",
	"umoja-l-grid-gap--row-2": "header_umoja-l-grid-gap--row-2__3syxA",
	"umoja-l-grid-gap--row-3": "header_umoja-l-grid-gap--row-3__28-vL",
	"umoja-l-grid-align--center": "header_umoja-l-grid-align--center__3C5zd",
	"umoja-l-grid-align--base": "header_umoja-l-grid-align--base__208hq",
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


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;
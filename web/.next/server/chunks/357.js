exports.id = 357;
exports.ids = [357];
exports.modules = {

/***/ 267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const sanityClient = __webpack_require__(8809);

const client = sanityClient({
  projectId: '76e3r62u',
  // you can find this in sanity.json
  dataset: 'production',
  apiVersion: '2021-10-06',
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

/***/ 1898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_RenderSection)
});

// NAMESPACE OBJECT: ./modules/index.js
var modules_namespaceObject = {};
__webpack_require__.r(modules_namespaceObject);
__webpack_require__.d(modules_namespaceObject, {
  "bodymove_featureWindow": () => (bodymove_featureWindow_bodymove_featureWindow),
  "bodymove_stickySideScroll": () => (bodymove_stickySideScroll_bodymove_stickySideScroll),
  "bodystatic_bragBar": () => (bodystatic_bragBar_bodystatic_bragBar),
  "bodystatic_cardImg": () => (bodystatic_cardImg_bodystatic_cardImg),
  "bodystatic_display": () => (bodystatic_display_bodystatic_display),
  "bodystatic_iconCopy": () => (bodystatic_iconCopy_bodystatic_iconCopy),
  "bodystatic_panelAvatarQuote": () => (bodystatic_panelAvatarQuote_bodystatic_panelAvatarQuote),
  "bodystatic_panelFeature": () => (bodystatic_panelFeature_bodystatic_panelFeature),
  "bodystatic_panelQuote": () => (bodystatic_panelQuote_bodystatic_panelQuote),
  "bodystatic_richTxt": () => (bodystatic_richTxt_bodystatic_richTxt),
  "bodystatic_splitTxtBtn": () => (bodystatic_splitTxtBtn_bodystatic_splitTxtBtn),
  "bodystatic_splitTxtImg": () => (bodystatic_splitTxtImg_bodystatic_splitTxtImg),
  "bodystatic_tabs": () => (bodystatic_tabs_bodystatic_tabs),
  "bodystatic_videoDivide": () => (bodystatic_videoDivide_bodystatic_videoDivide),
  "hero_centertxt": () => (hero_centertxt_hero_centertxt),
  "hero_home": () => (hero_home_hero_home),
  "hero_splittxtimg": () => (hero_splittxtimg_hero_splittxtimg)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next-sanity-image"
var external_next_sanity_image_ = __webpack_require__(1095);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./client.js
var client = __webpack_require__(267);
var client_default = /*#__PURE__*/__webpack_require__.n(client);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/image.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Image = props => {
  const {
    src,
    layout,
    width,
    height,
    sizes
  } = props;
  const imageProps = (0,external_next_sanity_image_.useNextSanityImage)((client_default()), src);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: sizes ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread(_objectSpread({}, imageProps), {}, {
      layout: layout,
      sizes: sizes,
      alt: src.alt
    })) : /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread(_objectSpread({}, imageProps), {}, {
      layout: layout,
      width: width,
      height: height,
      alt: src.alt
    }))
  });
};

/* harmony default export */ const components_image = (Image);
// EXTERNAL MODULE: ./components/button/button.js
var button_button = __webpack_require__(4151);
;// CONCATENATED MODULE: ./components/dot_canvas.js
function dot_canvas_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function dot_canvas_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dot_canvas_ownKeys(Object(source), true).forEach(function (key) { dot_canvas_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dot_canvas_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function dot_canvas_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const DotCanvas = props => {
  const canvasRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    function getDocumentWidth() {
      return canvas.clientWidth;
    }

    ;

    function getDocumentHeight() {
      return canvas.clientHeight;
    }

    ;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let vw = getDocumentWidth();
    let vh = getDocumentHeight();

    function drawDots() {
      let r = 4,
          cw = 44,
          ch = 44;

      for (let x = 20; x < vw; x += cw) {
        for (let y = 20; y < vh; y += ch) {
          const circle = new Path2D();
          circle.arc(x - r / 2, y - r / 2, r, 0, 2 * Math.PI);
          context.fillStyle = '#fff';
          context.fill(circle);
        }
      }
    }

    drawDots(); //fix it on resize

    function resizeCanvas() {
      canvas.width = vw;
      canvas.height = vh;
      drawDots();
    }

    function onResize() {
      vw = getDocumentWidth();
      vh = getDocumentHeight();
      resizeCanvas();
    }

    resizeCanvas(); // resize the canvas to fill the browser window

    window.addEventListener('resize', onResize, false);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("canvas", dot_canvas_objectSpread({
    ref: canvasRef
  }, props));
};

/* harmony default export */ const dot_canvas = (DotCanvas);
// EXTERNAL MODULE: ./modules/hero_home/hero-home.module.scss
var hero_home_module = __webpack_require__(7445);
var hero_home_module_default = /*#__PURE__*/__webpack_require__.n(hero_home_module);
;// CONCATENATED MODULE: ./modules/hero_home/hero_home.js
function hero_home_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function hero_home_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hero_home_ownKeys(Object(source), true).forEach(function (key) { hero_home_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hero_home_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hero_home_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const hero_home = props => {
  const {
    heading,
    image,
    tagline,
    cta
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "hero-home umoja-l-grid--12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (hero_home_module_default()).dots,
      children: /*#__PURE__*/jsx_runtime_.jsx(dot_canvas, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (hero_home_module_default()).copy,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "display-small",
        children: heading
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "divider-line divider-line--horizontal divider-line--negative"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (hero_home_module_default()).subheadline,
        children: tagline
      }), cta && /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, hero_home_objectSpread({}, cta))]
    }), image && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (hero_home_module_default()).img,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (hero_home_module_default()).imgWrapper,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
          src: image,
          layout: "responsive",
          sizes: "(max-width: 800px) 100vh, 800px"
        })
      })
    })]
  });
};

/* harmony default export */ const hero_home_hero_home = (hero_home);
// EXTERNAL MODULE: ./modules/bodystatic_bragBar/bodystatic-bragBar.module.scss
var bodystatic_bragBar_module = __webpack_require__(5003);
var bodystatic_bragBar_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_bragBar_module);
;// CONCATENATED MODULE: ./modules/bodystatic_bragBar/bodystatic_bragBar.js





const bodystatic_bragBar = props => {
  const {
    logos,
    align_left
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${align_left ? (bodystatic_bragBar_module_default()).__left : 'bodystatic-bragBar'} umoja-l-grid--12 umoja-l-grid-gap--row-1`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_bragBar_module_default()).logoRow,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_bragBar_module_default()).logos,
        children: logos.map(logo => {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (bodystatic_bragBar_module_default()).logo,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
              src: logo,
              height: 70,
              width: 128
            })
          }, logo._key);
        })
      })
    })
  });
};

/* harmony default export */ const bodystatic_bragBar_bodystatic_bragBar = (bodystatic_bragBar);
// EXTERNAL MODULE: ./modules/bodystatic_iconCopy/bodystatic-iconCopy.module.scss
var bodystatic_iconCopy_module = __webpack_require__(9846);
var bodystatic_iconCopy_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_iconCopy_module);
;// CONCATENATED MODULE: ./modules/bodystatic_iconCopy/bodystatic_iconCopy.js






const bodystatic_iconCopy = props => {
  const {
    center,
    responsive,
    icons
  } = props;
  let className = `bodystatic-iconCopy umoja-l-grid-align--base ${icons.length > 3 ? `umoja-l-grid--12` : `umoja-l-grid--6 ${(bodystatic_iconCopy_module_default())._three}`}`;

  if (center) {
    className += ` ${(bodystatic_iconCopy_module_default())._center}`;
  }

  if (responsive) {
    className += ` ${(bodystatic_iconCopy_module_default())._responsive}`;
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: className,
    children: icons.map(icon => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_iconCopy_module_default()).icon,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (bodystatic_iconCopy_module_default()).iconWrap,
          children: responsive ? /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            layout: "fill",
            src: icon.icon
          }) : /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            layout: "fixed",
            src: icon.icon,
            height: 48,
            width: 48
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: icon.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: icon.body
        })]
      }, icon._key);
    })
  });
};

/* harmony default export */ const bodystatic_iconCopy_bodystatic_iconCopy = (bodystatic_iconCopy);
;// CONCATENATED MODULE: ./libs/useIntersection.js


const useIntersection = (ref, rootMargin, repeat) => {
  const {
    0: isIntersecting,
    1: setIntersecting
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, {
      rootMargin
    });
    observer.observe(ref.current); // Remove the observer as soon as the component is unmounted

    return () => {
      observer.disconnect();
    };
  }, []);
  return isIntersecting;
};

/* harmony default export */ const libs_useIntersection = (useIntersection);
// EXTERNAL MODULE: external "lottie-web"
var external_lottie_web_ = __webpack_require__(5768);
var external_lottie_web_default = /*#__PURE__*/__webpack_require__.n(external_lottie_web_);
// EXTERNAL MODULE: external "@sanity/asset-utils"
var asset_utils_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/lottie_animation.js






const LottieAnimation = props => {
  const {
    id,
    type,
    loop,
    autoplay,
    json,
    style,
    active,
    inView
  } = props;
  const jsonPath = (0,asset_utils_.getFile)(json, client_default().config());
  const {
    0: loaded,
    1: setLoaded
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (active && inView) {
      if (!loaded) {
        external_lottie_web_default().loadAnimation({
          container: document.querySelector(`#${id}`),
          path: jsonPath.asset.url,
          renderer: type,
          loop: loop,
          autoplay: autoplay
        });
        setLoaded(true);
      } else {
        external_lottie_web_default().play();
      }
    } else if (active && !inView) {
      external_lottie_web_default().pause();
    }
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: id,
    style: style
  });
};

/* harmony default export */ const lottie_animation = (LottieAnimation);
// EXTERNAL MODULE: ./modules/bodymove_featureWindow/bodymove-featureWindow.module.scss
var bodymove_featureWindow_module = __webpack_require__(6120);
var bodymove_featureWindow_module_default = /*#__PURE__*/__webpack_require__.n(bodymove_featureWindow_module);
;// CONCATENATED MODULE: ./modules/bodymove_featureWindow/bodymove_featureWindow.js
function bodymove_featureWindow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bodymove_featureWindow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bodymove_featureWindow_ownKeys(Object(source), true).forEach(function (key) { bodymove_featureWindow_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bodymove_featureWindow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bodymove_featureWindow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const bodymove_featureWindow = props => {
  const {
    features
  } = props;
  const {
    0: activeFeature,
    1: setActiveFeature
  } = (0,external_react_.useState)('feature0');
  const ref = (0,external_react_.useRef)();
  const inViewport = libs_useIntersection(ref, '-50%', false);

  const handleFeatureChange = e => {
    setActiveFeature(e.currentTarget.id);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    ref: ref,
    className: "bodymove-featureWindow umoja-l-grid--12",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (bodymove_featureWindow_module_default()).wrapper,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodymove_featureWindow_module_default()).sidebar,
        children: features.map((feature, i) => {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: `feature${i}`,
            className: `${(bodymove_featureWindow_module_default()).selector} ${activeFeature == `feature${i}` ? (bodymove_featureWindow_module_default()).selector__active : ''}`,
            onClick: handleFeatureChange,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: feature.title
            })
          }, feature._key);
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodymove_featureWindow_module_default()).divider
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodymove_featureWindow_module_default()).window,
        children: features.map((feature, i) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${(bodymove_featureWindow_module_default()).detailWrapper} ${activeFeature == `feature${i}` ? (bodymove_featureWindow_module_default()).detailWrapper__active : ''}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: feature.description
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (bodymove_featureWindow_module_default()).img,
              children: [feature.animation && /*#__PURE__*/jsx_runtime_.jsx(lottie_animation, bodymove_featureWindow_objectSpread(bodymove_featureWindow_objectSpread({}, feature.animation), {}, {
                active: activeFeature == `feature${i}` ? true : false,
                inView: inViewport
              })), feature.image && /*#__PURE__*/jsx_runtime_.jsx(components_image, {
                src: feature.image,
                layout: "fill"
              })]
            })]
          }, feature._key);
        })
      })]
    })
  });
};

/* harmony default export */ const bodymove_featureWindow_bodymove_featureWindow = (bodymove_featureWindow);
// EXTERNAL MODULE: ./modules/bodystatic_panelAvatarQuote/bodystatic-panelAvatarQuote.module.scss
var bodystatic_panelAvatarQuote_module = __webpack_require__(5824);
var bodystatic_panelAvatarQuote_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_panelAvatarQuote_module);
;// CONCATENATED MODULE: ./modules/bodystatic_panelAvatarQuote/bodystatic_panelAvatarQuote.js






const bodystatic_panelAvatarQuote = props => {
  const {
    quote,
    company_logo
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic-panelAvatarQuote umoja-l-grid--12",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (bodystatic_panelAvatarQuote_module_default()).front,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_panelAvatarQuote_module_default()).icon,
        children: "\u201C"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_panelAvatarQuote_module_default()).body,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (bodystatic_panelAvatarQuote_module_default()).logoWrapper,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            src: company_logo,
            layout: "fill",
            objectPosition: "left"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (bodystatic_panelAvatarQuote_module_default()).quoteText,
          children: quote.quote_text
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_panelAvatarQuote_module_default()).authorBlock,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (bodystatic_panelAvatarQuote_module_default()).headshotWrapper,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
              src: quote.author_headshot,
              layout: "fill"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (bodystatic_panelAvatarQuote_module_default()).authorText,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (bodystatic_panelAvatarQuote_module_default()).author,
              children: quote.quote_author
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (bodystatic_panelAvatarQuote_module_default()).authorTitle,
              children: quote.author_title
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const bodystatic_panelAvatarQuote_bodystatic_panelAvatarQuote = (bodystatic_panelAvatarQuote);
// EXTERNAL MODULE: ./modules/bodystatic_panelFeature/bodystatic-panelFeature.module.scss
var bodystatic_panelFeature_module = __webpack_require__(4611);
var bodystatic_panelFeature_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_panelFeature_module);
;// CONCATENATED MODULE: ./modules/bodystatic_panelFeature/bodystatic_panelFeature.js
function bodystatic_panelFeature_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bodystatic_panelFeature_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bodystatic_panelFeature_ownKeys(Object(source), true).forEach(function (key) { bodystatic_panelFeature_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bodystatic_panelFeature_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bodystatic_panelFeature_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const bodystatic_panelFeature = props => {
  const {
    image_position,
    image,
    headline,
    body_text,
    button,
    awards
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `bodystatic-panelFeature ${image_position ? (bodystatic_panelFeature_module_default())._flipImage : ''} umoja-l-grid--12 umoja-u-bg--charcoal3`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_panelFeature_module_default()).imgWrap,
      children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
        src: image,
        layout: "fill"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (bodystatic_panelFeature_module_default()).copy,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: headline
      }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
        children: body_text
      }), awards && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_panelFeature_module_default()).awards,
        children: awards.map(award => {
          return /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            src: award,
            layout: "fixed",
            width: 110,
            height: 110
          }, award._key);
        })
      }), button.link && /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, bodystatic_panelFeature_objectSpread({}, button))]
    })]
  });
};

/* harmony default export */ const bodystatic_panelFeature_bodystatic_panelFeature = (bodystatic_panelFeature);
// EXTERNAL MODULE: ./modules/bodystatic_panelQuote/bodystatic-panelQuote.module.scss
var bodystatic_panelQuote_module = __webpack_require__(570);
var bodystatic_panelQuote_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_panelQuote_module);
;// CONCATENATED MODULE: ./modules/bodystatic_panelQuote/bodystatic_panelQuote.js






const bodystatic_panelQuote = props => {
  const {
    quote
  } = props;
  const citation = quote.author_title ? `${quote.quote_author}, ${quote.author_title}` : quote.quote_author;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic-panelQuote umoja-l-grid--12",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (bodystatic_panelQuote_module_default()).inner,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_panelQuote_module_default()).gradient
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_panelQuote_module_default()).content,
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (bodystatic_panelQuote_module_default()).txt,
          children: quote.quote_text
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (bodystatic_panelQuote_module_default()).author,
          children: citation
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_panelQuote_module_default()).imgWrap,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
          src: quote.author_headshot,
          layout: "fill"
        })
      })]
    })
  });
};

/* harmony default export */ const bodystatic_panelQuote_bodystatic_panelQuote = (bodystatic_panelQuote);
// EXTERNAL MODULE: ./modules/bodystatic_splitTxtBtn/bodystatic-splitTxtBtn.module.scss
var bodystatic_splitTxtBtn_module = __webpack_require__(4339);
var bodystatic_splitTxtBtn_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_splitTxtBtn_module);
;// CONCATENATED MODULE: ./modules/bodystatic_splitTxtBtn/bodystatic_splitTxtBtn.js
function bodystatic_splitTxtBtn_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bodystatic_splitTxtBtn_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bodystatic_splitTxtBtn_ownKeys(Object(source), true).forEach(function (key) { bodystatic_splitTxtBtn_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bodystatic_splitTxtBtn_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bodystatic_splitTxtBtn_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const bodystatic_splitTxtBtn = props => {
  const {
    headline,
    body,
    buttons
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodystatic-splitTxtBtn umoja-l-grid--12",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (bodystatic_splitTxtBtn_module_default()).left,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: headline
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: body
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_splitTxtBtn_module_default()).right,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_splitTxtBtn_module_default()).buttons,
        children: buttons.map(button => {
          return /*#__PURE__*/(0,external_react_.createElement)(button_button/* default */.Z, bodystatic_splitTxtBtn_objectSpread(bodystatic_splitTxtBtn_objectSpread({}, button), {}, {
            key: button._key
          }));
        })
      })
    })]
  });
};

/* harmony default export */ const bodystatic_splitTxtBtn_bodystatic_splitTxtBtn = (bodystatic_splitTxtBtn);
// EXTERNAL MODULE: external "@sanity/block-content-to-react"
var block_content_to_react_ = __webpack_require__(2904);
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_);
// EXTERNAL MODULE: ./components/richText_field/richText.module.scss
var richText_module = __webpack_require__(5173);
var richText_module_default = /*#__PURE__*/__webpack_require__.n(richText_module);
;// CONCATENATED MODULE: ./components/richText_field/richText_field.js
function richText_field_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function richText_field_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { richText_field_ownKeys(Object(source), true).forEach(function (key) { richText_field_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { richText_field_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function richText_field_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const richText = props => {
  const {
    align,
    richText,
    className
  } = props;
  const {
    projectId,
    dataset
  } = client_default().config();
  const innerClass = className ? `${className} ${(richText_module_default()).inner}` : (richText_module_default()).inner;
  const serializers = {
    marks: {
      button_link: ({
        mark,
        children
      }) => {
        const {
          style
        } = mark;
        const href = mark.internalLink ? mark.internalLink.slug.current : mark.externalUrl;

        if (style) {
          return /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, {
            link: mark,
            type: style,
            title: children[0]
          });
        } else {
          let linkProps = {
            href: href
          };

          if (mark.externalUrl) {
            linkProps.target = "_blank";
            linkProps.rel = "noopener";
          }

          return /*#__PURE__*/jsx_runtime_.jsx("a", richText_field_objectSpread(richText_field_objectSpread({}, linkProps), {}, {
            href: href,
            children: children
          }));
        }
      }
    }
  };
  return /*#__PURE__*/jsx_runtime_.jsx((block_content_to_react_default()), {
    className: `${innerClass} ${align ? (richText_module_default())[`_${align}`] : ''}`,
    blocks: richText,
    projectId: projectId,
    serializers: serializers,
    dataset: dataset,
    renderContainerOnSingleChild: true
  });
};

/* harmony default export */ const richText_field = (richText);
;// CONCATENATED MODULE: ./modules/bodystatic_richTxt/bodystatic_richTxt.js




const bodystatic_richTxt = props => {
  const {
    align,
    richText
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic_richTxt umoja-l-grid--12",
    children: /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
      richText: richText,
      align: align
    })
  });
};

/* harmony default export */ const bodystatic_richTxt_bodystatic_richTxt = (bodystatic_richTxt);
// EXTERNAL MODULE: ./modules/hero_splittxtimg/hero-splittxtimg.module.scss
var hero_splittxtimg_module = __webpack_require__(849);
var hero_splittxtimg_module_default = /*#__PURE__*/__webpack_require__.n(hero_splittxtimg_module);
;// CONCATENATED MODULE: ./modules/hero_splittxtimg/hero_splittxtimg.js
function hero_splittxtimg_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function hero_splittxtimg_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hero_splittxtimg_ownKeys(Object(source), true).forEach(function (key) { hero_splittxtimg_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hero_splittxtimg_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hero_splittxtimg_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const hero_splittxtimg = props => {
  const {
    page_title,
    heading,
    image,
    tagline,
    cta
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "hero-splittxtimg umoja-l-grid--12 umoja-l-grid-align--center",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (hero_splittxtimg_module_default()).copy,
      children: [page_title && /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (hero_splittxtimg_module_default()).pageTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: heading
      }), tagline && /*#__PURE__*/jsx_runtime_.jsx("h5", {
        children: tagline
      }), cta && /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, hero_splittxtimg_objectSpread({}, cta))]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (hero_splittxtimg_module_default()).imgWrapper,
      children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
        src: image,
        layout: "responsive",
        sizes: "(max-width: 500px) 100vh, 500px"
      })
    })]
  });
};

/* harmony default export */ const hero_splittxtimg_hero_splittxtimg = (hero_splittxtimg);
// EXTERNAL MODULE: ./modules/hero_centertxt/hero-centertxt.module.scss
var hero_centertxt_module = __webpack_require__(5336);
var hero_centertxt_module_default = /*#__PURE__*/__webpack_require__.n(hero_centertxt_module);
;// CONCATENATED MODULE: ./modules/hero_centertxt/hero_centertxt.js
function hero_centertxt_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function hero_centertxt_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hero_centertxt_ownKeys(Object(source), true).forEach(function (key) { hero_centertxt_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hero_centertxt_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hero_centertxt_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const hero_centertxt = props => {
  const {
    heading,
    tagline,
    cta
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "hero-centertxt umoja-l-grid--12",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (hero_centertxt_module_default()).body,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: heading
      }), tagline && /*#__PURE__*/jsx_runtime_.jsx("h5", {
        children: tagline
      }), cta && /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, hero_centertxt_objectSpread({}, cta))]
    })
  });
};

/* harmony default export */ const hero_centertxt_hero_centertxt = (hero_centertxt);
// EXTERNAL MODULE: ./modules/bodymove_stickySideScroll/bodymove-stickySideScroll.module.scss
var bodymove_stickySideScroll_module = __webpack_require__(277);
var bodymove_stickySideScroll_module_default = /*#__PURE__*/__webpack_require__.n(bodymove_stickySideScroll_module);
;// CONCATENATED MODULE: ./modules/bodymove_stickySideScroll/bodymove_stickySideScroll.js








const bodymove_stickySideScroll = props => {
  const {
    heading,
    description,
    items
  } = props;
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,external_react_.useState)(false);
  const {
    0: isPinned,
    1: setPinned
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const headerHeight = document.querySelector(`.${(bodymove_stickySideScroll_module_default()).header}`).getBoundingClientRect().height;
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
            document.querySelector(`.${(bodymove_stickySideScroll_module_default()).title}[data-at="${current}"]`).classList.add((bodymove_stickySideScroll_module_default()).title__active);
          }
        }
      });
    }

    document.querySelectorAll(`.${(bodymove_stickySideScroll_module_default()).content}`).forEach(tab => {
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
    headerObserver.observe(document.querySelector(`.${(bodymove_stickySideScroll_module_default()).nav}`));
  };

  const handleTabChange = (e, index) => {
    e.preventDefault();
    setActiveTab(index);
    document.querySelectorAll(`.${(bodymove_stickySideScroll_module_default()).content}`)[index].scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  const className = `bodymove_stickySideScroll umoja-l-grid--12 ${isPinned ? (bodymove_stickySideScroll_module_default())._pinned : ''}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (bodymove_stickySideScroll_module_default()).header,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: heading
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: description
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodymove_stickySideScroll_module_default()).left,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodymove_stickySideScroll_module_default()).nav,
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: (bodymove_stickySideScroll_module_default()).nav_items,
          children: items.map((item, i) => {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: (bodymove_stickySideScroll_module_default()).title,
              "data-at": i,
              onClick: e => handleTabChange(e, i),
              children: item.title
            }, item._key);
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodymove_stickySideScroll_module_default()).right,
      children: items.map((item, i) => {
        const itemClass = `${(bodymove_stickySideScroll_module_default()).content} ${activeTab == i ? (bodymove_stickySideScroll_module_default())._active : ''}`;
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: itemClass,
          "data-at": i,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (bodymove_stickySideScroll_module_default()).content_inner,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: item.title
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: item.text
            })]
          })
        }, item._key);
      })
    }), items.map((item, i) => {
      const mediaClass = `${(bodymove_stickySideScroll_module_default()).media} ${activeTab == i ? (bodymove_stickySideScroll_module_default())._active : ''}`;

      if (item.video) {
        const videoPath = (0,asset_utils_.getFile)(item.video, client_default().config());
        return /*#__PURE__*/jsx_runtime_.jsx("video", {
          "data-at": i,
          className: mediaClass,
          autoPlay: true,
          loop: true,
          playsInline: true,
          muted: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("source", {
            src: videoPath.asset.url,
            type: `video/${videoPath.asset.extension}`
          })
        }, item._key);
      } else {
        return /*#__PURE__*/jsx_runtime_.jsx(components_image, {
          layout: "fill",
          src: item.image
        }, item._key);
      }
    })]
  });
};

/* harmony default export */ const bodymove_stickySideScroll_bodymove_stickySideScroll = (bodymove_stickySideScroll);
// EXTERNAL MODULE: ./modules/bodystatic_videoDivide/bodystatic-videoDivide.module.scss
var bodystatic_videoDivide_module = __webpack_require__(474);
var bodystatic_videoDivide_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_videoDivide_module);
;// CONCATENATED MODULE: ./modules/bodystatic_videoDivide/bodystatic_videoDivide.js







const bodystatic_videoDivide = props => {
  const {
    video
  } = props;
  const videoPath = (0,asset_utils_.getFile)(video, client_default().config());
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodystatic-videoDivide umoja-l-grid--12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_videoDivide_module_default()).videoWrapper,
      children: /*#__PURE__*/jsx_runtime_.jsx("video", {
        className: (bodystatic_videoDivide_module_default()).video,
        autoPlay: "autoplay",
        loop: "loop",
        playsInline: "playsinline",
        muted: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("source", {
          src: videoPath.asset.url,
          type: `video/${videoPath.asset.extension}`
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_videoDivide_module_default()).bg1
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_videoDivide_module_default()).bg2
    })]
  });
};

/* harmony default export */ const bodystatic_videoDivide_bodystatic_videoDivide = (bodystatic_videoDivide);
// EXTERNAL MODULE: ./modules/bodystatic_cardImg/bodystatic-cardImg.module.scss
var bodystatic_cardImg_module = __webpack_require__(8506);
var bodystatic_cardImg_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_cardImg_module);
;// CONCATENATED MODULE: ./modules/bodystatic_cardImg/bodystatic_cardImg.js






const bodystatic_cardImg = props => {
  const {
    full_width,
    cards
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `bodystatic_cardImg ${full_width ? (bodystatic_cardImg_module_default())._fullImages : ''} umoja-l-grid--12`,
    children: cards.map((card, i) => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(bodystatic_cardImg_module_default()).card} ${cards.length > 3 ? (bodystatic_cardImg_module_default())._four : ''}`,
        children: [card.icon && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (bodystatic_cardImg_module_default()).imageWrap,
          children: full_width ? /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            layout: "fill",
            src: card.icon
          }) : /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            layout: "fixed",
            src: card.icon,
            height: 48,
            width: 48
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: card.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: card.body
        })]
      }, card._key);
    })
  });
};

/* harmony default export */ const bodystatic_cardImg_bodystatic_cardImg = (bodystatic_cardImg);
// EXTERNAL MODULE: ./modules/bodystatic_display/bodystatic-display.module.scss
var bodystatic_display_module = __webpack_require__(7409);
var bodystatic_display_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_display_module);
;// CONCATENATED MODULE: ./modules/bodystatic_display/bodystatic_display.js




const bodystatic_display = props => {
  const {
    text
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic-display umoja-l-grid--12",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_display_module_default()).inner,
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: text
      })
    })
  });
};

/* harmony default export */ const bodystatic_display_bodystatic_display = (bodystatic_display);
// EXTERNAL MODULE: ./modules/bodystatic_splitTxtImg/bodystatic-splitTxtImg.module.scss
var bodystatic_splitTxtImg_module = __webpack_require__(3262);
var bodystatic_splitTxtImg_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_splitTxtImg_module);
;// CONCATENATED MODULE: ./modules/bodystatic_splitTxtImg/bodystatic_splitTxtImg.js
function bodystatic_splitTxtImg_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bodystatic_splitTxtImg_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bodystatic_splitTxtImg_ownKeys(Object(source), true).forEach(function (key) { bodystatic_splitTxtImg_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bodystatic_splitTxtImg_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bodystatic_splitTxtImg_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const bodystatic_splitTxtImg = props => {
  const {
    img_position,
    theme_color,
    img_frame,
    heading,
    subheading,
    body,
    cta,
    image
  } = props;
  const className = `bodystatic-splitTxtImg umoja-l-grid--6 ${theme_color ? (bodystatic_splitTxtImg_module_default())[`_${theme_color}`] : ''}`;
  const txtColClass = `${(bodystatic_splitTxtImg_module_default()).copy} ${img_position == 'left' ? (bodystatic_splitTxtImg_module_default())._right : (bodystatic_splitTxtImg_module_default())._left}`;
  const imgColClass = `${(bodystatic_splitTxtImg_module_default()).image} ${img_position == 'left' ? (bodystatic_splitTxtImg_module_default())._left : (bodystatic_splitTxtImg_module_default())._right} ${img_frame ? (bodystatic_splitTxtImg_module_default())._frame : ''}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: txtColClass,
      children: [subheading && /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: (bodystatic_splitTxtImg_module_default()).subheading,
        children: subheading
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: heading
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: body
      }), cta.link && /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, bodystatic_splitTxtImg_objectSpread({}, cta))]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: imgColClass,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_splitTxtImg_module_default()).imgWrap,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
          src: image,
          layout: "responsive",
          width: "100%",
          height: "100%",
          objectFit: "cover"
        })
      })
    })]
  });
};

/* harmony default export */ const bodystatic_splitTxtImg_bodystatic_splitTxtImg = (bodystatic_splitTxtImg);
// EXTERNAL MODULE: ./modules/bodystatic_tabs/bodystatic-tabs.module.scss
var bodystatic_tabs_module = __webpack_require__(991);
var bodystatic_tabs_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_tabs_module);
;// CONCATENATED MODULE: ./modules/bodystatic_tabs/bodystatic_tabs.js









const bodystatic_tabs = props => {
  const {
    tabs
  } = props;
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,external_react_.useState)(0);
  const {
    0: tabHeight,
    1: setTabHeight
  } = (0,external_react_.useState)('100%');
  const {
    0: tabDir,
    1: setTabDir
  } = (0,external_react_.useState)('');
  (0,external_react_.useEffect)(() => {
    if (window.innerWidth < 800) return;
    const tabsEl = Array.from(document.querySelectorAll(`.${(bodystatic_tabs_module_default()).tab}`));
    let tabHeight = 0;
    tabsEl.map(tab => {
      if (tab.offsetHeight > tabHeight) {
        tabHeight = tab.offsetHeight;
      }
    });
    setTabHeight(`${tabHeight}px`);
  });

  const handleClick = e => {
    const active = parseInt(e.target.getAttribute('data-at'));

    if (activeTab > active) {
      setTabDir((bodystatic_tabs_module_default())._slideLeft);
    } else {
      setTabDir('');
    }

    setActiveTab(active);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodystatic-tabs umoja-l-grid--12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_tabs_module_default()).nav,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(bodystatic_tabs_module_default()).navInner} ${tabDir}`,
        children: tabs.map((tab, i) => {
          return /*#__PURE__*/jsx_runtime_.jsx("h5", {
            className: `${(bodystatic_tabs_module_default()).nav_item} ${i == activeTab ? (bodystatic_tabs_module_default()).active : ''}`,
            "data-at": i,
            onClick: handleClick,
            children: tab.title
          }, tab._key);
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_tabs_module_default()).tabWrapper,
      style: {
        height: tabHeight
      },
      children: tabs.map((tab, i) => {
        let media;

        if (tab.video) {
          const videoPath = (0,asset_utils_.getFile)(tab.video, client_default().config());
          media = /*#__PURE__*/jsx_runtime_.jsx("video", {
            className: (bodystatic_tabs_module_default()).video,
            autoPlay: "autoplay",
            loop: "loop",
            playsInline: "playsinline",
            muted: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("source", {
              src: videoPath.asset.url,
              type: `video/${videoPath.asset.extension}`
            })
          });
        }

        if (tab.image) {
          /*#__PURE__*/
          jsx_runtime_.jsx(components_image, {
            src: tab.image,
            layout: "fill"
          });
        }

        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${(bodystatic_tabs_module_default()).tab} ${i == activeTab ? (bodystatic_tabs_module_default()).active : ''}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: tab.title
          }), media, /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
            className: (bodystatic_tabs_module_default()).tabContent,
            richText: tab.body.richText,
            align: tab.body.align
          })]
        }, tab._key);
      })
    })]
  });
};

/* harmony default export */ const bodystatic_tabs_bodystatic_tabs = (bodystatic_tabs);
;// CONCATENATED MODULE: ./modules/index.js

















;// CONCATENATED MODULE: ./components/RenderSection.js
function RenderSection_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function RenderSection_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RenderSection_ownKeys(Object(source), true).forEach(function (key) { RenderSection_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RenderSection_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function RenderSection_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function resolveModule(module) {
  const moduleName = module._type;
  const section = modules_namespaceObject[moduleName];

  if (section) {
    return section;
  }

  return null;
}

function RenderSection(props) {
  const {
    modules,
    background_color
  } = props;
  const className = background_color ? `umoja-l-grid-section ${background_color}` : "umoja-l-grid-section";
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: className,
    children: modules.map(module => {
      const SectionComponent = resolveModule(module);

      if (!SectionComponent) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: ["Missing section ", module._type]
        }, module._key);
      }

      return /*#__PURE__*/(0,external_react_.createElement)(SectionComponent, RenderSection_objectSpread(RenderSection_objectSpread({}, module), {}, {
        key: module._key
      }));
    })
  });
}

/* harmony default export */ const components_RenderSection = (RenderSection);

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
      children: link.externalUrl ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
        href: buttonLink,
        className: wrapperClass,
        target: "_blank",
        rel: "noopener",
        children: buttonInner
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: `/${buttonLink}`,
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

/***/ 4645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zl": () => (/* binding */ indexQuery),
/* harmony export */   "JR": () => (/* binding */ pageQuery),
/* harmony export */   "A3": () => (/* binding */ pageSlugsQuery)
/* harmony export */ });
const homeID = `*[_id == "global-config"][0].frontpage->_id`;
const pageFields = `
title,
"slug": slug.current,
"sections": sections[]{
    _key,
    background_color,
    "modules": modules.modules[]{
        ...,
        "align": richText.align,
        "richText": 
           richText.richText[]{
            ...,
            markDefs[]{
                ...,
                internalLink->{
                    slug
                }
            }
        }
    }
}
`;
const indexQuery = `
*[_type == "page" && _id == ${homeID}][0] {
  ${pageFields}
}`;
const pageQuery = `{
    "page": *[_type == "page" && slug.current == $slug && _id != ${homeID}][0] {
        ${pageFields}
    }
}`;
const pageSlugsQuery = `
*[_type == "page" && defined(slug.current)][].slug.current
`;

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

/***/ 5173:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "richText_umoja-u-pad-1__2YNBX",
	"umoja-u-pad-t--0": "richText_umoja-u-pad-t--0__155qD",
	"umoja-u-pad-b--0": "richText_umoja-u-pad-b--0__ub03i",
	"umoja-l-grid--12": "richText_umoja-l-grid--12__3yFQE",
	"umoja-l-grid--6": "richText_umoja-l-grid--6__mOyRC",
	"umoja-l-page-width": "richText_umoja-l-page-width__WBf-t",
	"umoja-l-grid-section": "richText_umoja-l-grid-section__gTheM",
	"umoja-l-grid-gap--row-1": "richText_umoja-l-grid-gap--row-1__3G9b6",
	"umoja-l-grid-gap--row-2": "richText_umoja-l-grid-gap--row-2__7pjoo",
	"umoja-l-grid-gap--row-3": "richText_umoja-l-grid-gap--row-3__1ykaM",
	"umoja-l-grid-align--center": "richText_umoja-l-grid-align--center__2vJWR",
	"umoja-l-grid-align--base": "richText_umoja-l-grid-align--base__3BDGB",
	"inner": "richText_inner__37NFR",
	"_center": "richText__center__2gWN8",
	"_right": "richText__right__1U7JT"
};


/***/ }),

/***/ 6120:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodymove-featureWindow_umoja-u-pad-1__36Cya",
	"umoja-u-pad-t--0": "bodymove-featureWindow_umoja-u-pad-t--0__2srSl",
	"umoja-u-pad-b--0": "bodymove-featureWindow_umoja-u-pad-b--0__1HUPL",
	"umoja-l-grid--12": "bodymove-featureWindow_umoja-l-grid--12__i73nL",
	"umoja-l-grid--6": "bodymove-featureWindow_umoja-l-grid--6__1-37Y",
	"umoja-l-page-width": "bodymove-featureWindow_umoja-l-page-width__1EL4W",
	"umoja-l-grid-section": "bodymove-featureWindow_umoja-l-grid-section__2-xsl",
	"umoja-l-grid-gap--row-1": "bodymove-featureWindow_umoja-l-grid-gap--row-1__39DBz",
	"umoja-l-grid-gap--row-2": "bodymove-featureWindow_umoja-l-grid-gap--row-2__1WomY",
	"umoja-l-grid-gap--row-3": "bodymove-featureWindow_umoja-l-grid-gap--row-3__15KJO",
	"umoja-l-grid-align--center": "bodymove-featureWindow_umoja-l-grid-align--center__3RpS2",
	"umoja-l-grid-align--base": "bodymove-featureWindow_umoja-l-grid-align--base__13C-Y",
	"wrapper": "bodymove-featureWindow_wrapper__2aGnW",
	"sidebar": "bodymove-featureWindow_sidebar__2U_km",
	"selector": "bodymove-featureWindow_selector__3XJ3b",
	"selector__active": "bodymove-featureWindow_selector__active__1EIvm",
	"divider": "bodymove-featureWindow_divider__2BXXH",
	"window": "bodymove-featureWindow_window__2llAs",
	"detailWrapper": "bodymove-featureWindow_detailWrapper__3aQKr",
	"detailWrapper__active": "bodymove-featureWindow_detailWrapper__active__3757h",
	"img": "bodymove-featureWindow_img__2rePi"
};


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


/***/ }),

/***/ 5003:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-bragBar_umoja-u-pad-1__3_3VN",
	"umoja-u-pad-t--0": "bodystatic-bragBar_umoja-u-pad-t--0__kWk1L",
	"umoja-u-pad-b--0": "bodystatic-bragBar_umoja-u-pad-b--0__3AUx9",
	"umoja-l-grid--12": "bodystatic-bragBar_umoja-l-grid--12__WUZT4",
	"umoja-l-grid--6": "bodystatic-bragBar_umoja-l-grid--6__HOveq",
	"umoja-l-page-width": "bodystatic-bragBar_umoja-l-page-width__1ujoM",
	"umoja-l-grid-section": "bodystatic-bragBar_umoja-l-grid-section__2YBV_",
	"umoja-l-grid-gap--row-1": "bodystatic-bragBar_umoja-l-grid-gap--row-1__WKCXx",
	"umoja-l-grid-gap--row-2": "bodystatic-bragBar_umoja-l-grid-gap--row-2__1LO1g",
	"umoja-l-grid-gap--row-3": "bodystatic-bragBar_umoja-l-grid-gap--row-3__2PLRM",
	"umoja-l-grid-align--center": "bodystatic-bragBar_umoja-l-grid-align--center__2dEl6",
	"umoja-l-grid-align--base": "bodystatic-bragBar_umoja-l-grid-align--base__1pgG4",
	"logoRow": "bodystatic-bragBar_logoRow__2Ied5",
	"logos": "bodystatic-bragBar_logos__30ei1",
	"logo": "bodystatic-bragBar_logo__MviLs",
	"__left": "bodystatic-bragBar___left__ZKZfi"
};


/***/ }),

/***/ 8506:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-cardImg_umoja-u-pad-1__23r61",
	"umoja-u-pad-t--0": "bodystatic-cardImg_umoja-u-pad-t--0__21snp",
	"umoja-u-pad-b--0": "bodystatic-cardImg_umoja-u-pad-b--0__2NxTx",
	"umoja-l-grid--12": "bodystatic-cardImg_umoja-l-grid--12__1Q2tc",
	"umoja-l-grid--6": "bodystatic-cardImg_umoja-l-grid--6__u0SSa",
	"umoja-l-page-width": "bodystatic-cardImg_umoja-l-page-width__DaR83",
	"umoja-l-grid-section": "bodystatic-cardImg_umoja-l-grid-section__2ts_S",
	"umoja-l-grid-gap--row-1": "bodystatic-cardImg_umoja-l-grid-gap--row-1__3E52g",
	"umoja-l-grid-gap--row-2": "bodystatic-cardImg_umoja-l-grid-gap--row-2__10ze5",
	"umoja-l-grid-gap--row-3": "bodystatic-cardImg_umoja-l-grid-gap--row-3__pXDEN",
	"umoja-l-grid-align--center": "bodystatic-cardImg_umoja-l-grid-align--center__25BFU",
	"umoja-l-grid-align--base": "bodystatic-cardImg_umoja-l-grid-align--base__1eGNJ",
	"card": "bodystatic-cardImg_card__I6yK0",
	"_four": "bodystatic-cardImg__four__15uIz"
};


/***/ }),

/***/ 7409:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-display_umoja-u-pad-1__3qJDR",
	"umoja-u-pad-t--0": "bodystatic-display_umoja-u-pad-t--0__2RQOQ",
	"umoja-u-pad-b--0": "bodystatic-display_umoja-u-pad-b--0__3gGno",
	"umoja-l-grid--12": "bodystatic-display_umoja-l-grid--12__3R4fZ",
	"umoja-l-grid--6": "bodystatic-display_umoja-l-grid--6__165f3",
	"umoja-l-page-width": "bodystatic-display_umoja-l-page-width__2CqwS",
	"umoja-l-grid-section": "bodystatic-display_umoja-l-grid-section__nlMnD",
	"umoja-l-grid-gap--row-1": "bodystatic-display_umoja-l-grid-gap--row-1__dFFny",
	"umoja-l-grid-gap--row-2": "bodystatic-display_umoja-l-grid-gap--row-2__2USnm",
	"umoja-l-grid-gap--row-3": "bodystatic-display_umoja-l-grid-gap--row-3__uS-4F",
	"umoja-l-grid-align--center": "bodystatic-display_umoja-l-grid-align--center__1kRd8",
	"umoja-l-grid-align--base": "bodystatic-display_umoja-l-grid-align--base__1crcK",
	"inner": "bodystatic-display_inner__2eG6s"
};


/***/ }),

/***/ 9846:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-iconCopy_umoja-u-pad-1__2DluW",
	"umoja-u-pad-t--0": "bodystatic-iconCopy_umoja-u-pad-t--0__1VdK6",
	"umoja-u-pad-b--0": "bodystatic-iconCopy_umoja-u-pad-b--0__38K4r",
	"umoja-l-grid--12": "bodystatic-iconCopy_umoja-l-grid--12__3G_Q-",
	"umoja-l-grid--6": "bodystatic-iconCopy_umoja-l-grid--6__3JzOH",
	"umoja-l-page-width": "bodystatic-iconCopy_umoja-l-page-width__LQvd9",
	"umoja-l-grid-section": "bodystatic-iconCopy_umoja-l-grid-section__15PxD",
	"umoja-l-grid-gap--row-1": "bodystatic-iconCopy_umoja-l-grid-gap--row-1__2mWkN",
	"umoja-l-grid-gap--row-2": "bodystatic-iconCopy_umoja-l-grid-gap--row-2__3my3U",
	"umoja-l-grid-gap--row-3": "bodystatic-iconCopy_umoja-l-grid-gap--row-3__36mCb",
	"umoja-l-grid-align--center": "bodystatic-iconCopy_umoja-l-grid-align--center__2kHqh",
	"umoja-l-grid-align--base": "bodystatic-iconCopy_umoja-l-grid-align--base__D0hzM",
	"icon": "bodystatic-iconCopy_icon__1AzsU",
	"iconWrap": "bodystatic-iconCopy_iconWrap__2lArm",
	"_center": "bodystatic-iconCopy__center__ZUlkU",
	"_responsive": "bodystatic-iconCopy__responsive__DqA13",
	"_three": "bodystatic-iconCopy__three__x46IE"
};


/***/ }),

/***/ 5824:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-panelAvatarQuote_umoja-u-pad-1__1L0Cv",
	"umoja-u-pad-t--0": "bodystatic-panelAvatarQuote_umoja-u-pad-t--0__2Dags",
	"umoja-u-pad-b--0": "bodystatic-panelAvatarQuote_umoja-u-pad-b--0__2HN9S",
	"umoja-l-grid--12": "bodystatic-panelAvatarQuote_umoja-l-grid--12__1ZKCk",
	"umoja-l-grid--6": "bodystatic-panelAvatarQuote_umoja-l-grid--6__By1gN",
	"umoja-l-page-width": "bodystatic-panelAvatarQuote_umoja-l-page-width__3mY9W",
	"umoja-l-grid-section": "bodystatic-panelAvatarQuote_umoja-l-grid-section__3SSPJ",
	"umoja-l-grid-gap--row-1": "bodystatic-panelAvatarQuote_umoja-l-grid-gap--row-1__3_aVl",
	"umoja-l-grid-gap--row-2": "bodystatic-panelAvatarQuote_umoja-l-grid-gap--row-2__1uxF6",
	"umoja-l-grid-gap--row-3": "bodystatic-panelAvatarQuote_umoja-l-grid-gap--row-3__181b0",
	"umoja-l-grid-align--center": "bodystatic-panelAvatarQuote_umoja-l-grid-align--center__qAF5y",
	"umoja-l-grid-align--base": "bodystatic-panelAvatarQuote_umoja-l-grid-align--base__2XvTk",
	"front": "bodystatic-panelAvatarQuote_front__TQ9qB",
	"icon": "bodystatic-panelAvatarQuote_icon__2EHAp",
	"body": "bodystatic-panelAvatarQuote_body__3SDGY",
	"logoWrapper": "bodystatic-panelAvatarQuote_logoWrapper__rPcvd",
	"quoteText": "bodystatic-panelAvatarQuote_quoteText__2oxUA",
	"authorBlock": "bodystatic-panelAvatarQuote_authorBlock__2wT9G",
	"authorText": "bodystatic-panelAvatarQuote_authorText__elqVO",
	"author": "bodystatic-panelAvatarQuote_author__3QNtR",
	"authorTitle": "bodystatic-panelAvatarQuote_authorTitle__8tzsE",
	"headshotWrapper": "bodystatic-panelAvatarQuote_headshotWrapper__1fHfJ"
};


/***/ }),

/***/ 4611:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-panelFeature_umoja-u-pad-1__23o3D",
	"umoja-u-pad-t--0": "bodystatic-panelFeature_umoja-u-pad-t--0__3W9NX",
	"umoja-u-pad-b--0": "bodystatic-panelFeature_umoja-u-pad-b--0__o1HNe",
	"umoja-l-grid--12": "bodystatic-panelFeature_umoja-l-grid--12__1VCEc",
	"umoja-l-grid--6": "bodystatic-panelFeature_umoja-l-grid--6__KdpZw",
	"umoja-l-page-width": "bodystatic-panelFeature_umoja-l-page-width__3Uq-S",
	"umoja-l-grid-section": "bodystatic-panelFeature_umoja-l-grid-section__1LcYr",
	"umoja-l-grid-gap--row-1": "bodystatic-panelFeature_umoja-l-grid-gap--row-1__3uY2j",
	"umoja-l-grid-gap--row-2": "bodystatic-panelFeature_umoja-l-grid-gap--row-2__3xYuU",
	"umoja-l-grid-gap--row-3": "bodystatic-panelFeature_umoja-l-grid-gap--row-3__1AuhY",
	"umoja-l-grid-align--center": "bodystatic-panelFeature_umoja-l-grid-align--center__1j9_z",
	"umoja-l-grid-align--base": "bodystatic-panelFeature_umoja-l-grid-align--base__2qt_c",
	"imgWrap": "bodystatic-panelFeature_imgWrap__3bLuv",
	"copy": "bodystatic-panelFeature_copy__1N0YX",
	"awards": "bodystatic-panelFeature_awards__gkWbO",
	"_flipImage": "bodystatic-panelFeature__flipImage__2DxQN"
};


/***/ }),

/***/ 570:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-panelQuote_umoja-u-pad-1__1nVQ_",
	"umoja-u-pad-t--0": "bodystatic-panelQuote_umoja-u-pad-t--0__2OrBm",
	"umoja-u-pad-b--0": "bodystatic-panelQuote_umoja-u-pad-b--0__253Ur",
	"umoja-l-grid--12": "bodystatic-panelQuote_umoja-l-grid--12__720WI",
	"umoja-l-grid--6": "bodystatic-panelQuote_umoja-l-grid--6__1zXxD",
	"umoja-l-page-width": "bodystatic-panelQuote_umoja-l-page-width__2FCSr",
	"umoja-l-grid-section": "bodystatic-panelQuote_umoja-l-grid-section__1mxO2",
	"umoja-l-grid-gap--row-1": "bodystatic-panelQuote_umoja-l-grid-gap--row-1__1nmwm",
	"umoja-l-grid-gap--row-2": "bodystatic-panelQuote_umoja-l-grid-gap--row-2__swzdu",
	"umoja-l-grid-gap--row-3": "bodystatic-panelQuote_umoja-l-grid-gap--row-3__2kb83",
	"umoja-l-grid-align--center": "bodystatic-panelQuote_umoja-l-grid-align--center__3OohM",
	"umoja-l-grid-align--base": "bodystatic-panelQuote_umoja-l-grid-align--base__2EoEQ",
	"inner": "bodystatic-panelQuote_inner__SQjXa",
	"gradient": "bodystatic-panelQuote_gradient__3ys9N",
	"content": "bodystatic-panelQuote_content__3i7BK",
	"txt": "bodystatic-panelQuote_txt__2dTyd",
	"author": "bodystatic-panelQuote_author__252XU",
	"imgWrap": "bodystatic-panelQuote_imgWrap__3V9PI"
};


/***/ }),

/***/ 4339:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-splitTxtBtn_umoja-u-pad-1__3nhZl",
	"umoja-u-pad-t--0": "bodystatic-splitTxtBtn_umoja-u-pad-t--0__306Z6",
	"umoja-u-pad-b--0": "bodystatic-splitTxtBtn_umoja-u-pad-b--0__2nYYQ",
	"umoja-l-grid--12": "bodystatic-splitTxtBtn_umoja-l-grid--12__2W7g0",
	"umoja-l-grid--6": "bodystatic-splitTxtBtn_umoja-l-grid--6__3BFQ-",
	"umoja-l-page-width": "bodystatic-splitTxtBtn_umoja-l-page-width__2HglD",
	"umoja-l-grid-section": "bodystatic-splitTxtBtn_umoja-l-grid-section__3KoFB",
	"umoja-l-grid-gap--row-1": "bodystatic-splitTxtBtn_umoja-l-grid-gap--row-1__1W6-d",
	"umoja-l-grid-gap--row-2": "bodystatic-splitTxtBtn_umoja-l-grid-gap--row-2__zf62-",
	"umoja-l-grid-gap--row-3": "bodystatic-splitTxtBtn_umoja-l-grid-gap--row-3__3oMST",
	"umoja-l-grid-align--center": "bodystatic-splitTxtBtn_umoja-l-grid-align--center__1xjkD",
	"umoja-l-grid-align--base": "bodystatic-splitTxtBtn_umoja-l-grid-align--base__D7nx4",
	"left": "bodystatic-splitTxtBtn_left__1GvQ7",
	"right": "bodystatic-splitTxtBtn_right__3xe-T",
	"buttons": "bodystatic-splitTxtBtn_buttons__2ELKN"
};


/***/ }),

/***/ 3262:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-splitTxtImg_umoja-u-pad-1__1Od97",
	"umoja-u-pad-t--0": "bodystatic-splitTxtImg_umoja-u-pad-t--0__7Zv3P",
	"umoja-u-pad-b--0": "bodystatic-splitTxtImg_umoja-u-pad-b--0__1dn6K",
	"umoja-l-grid--12": "bodystatic-splitTxtImg_umoja-l-grid--12__2Xgbp",
	"umoja-l-grid--6": "bodystatic-splitTxtImg_umoja-l-grid--6__9bc8v",
	"umoja-l-page-width": "bodystatic-splitTxtImg_umoja-l-page-width__2B7Iv",
	"umoja-l-grid-section": "bodystatic-splitTxtImg_umoja-l-grid-section__3nt4g",
	"umoja-l-grid-gap--row-1": "bodystatic-splitTxtImg_umoja-l-grid-gap--row-1__15qsl",
	"umoja-l-grid-gap--row-2": "bodystatic-splitTxtImg_umoja-l-grid-gap--row-2__2EWRv",
	"umoja-l-grid-gap--row-3": "bodystatic-splitTxtImg_umoja-l-grid-gap--row-3__Mb58H",
	"umoja-l-grid-align--center": "bodystatic-splitTxtImg_umoja-l-grid-align--center__4t6No",
	"umoja-l-grid-align--base": "bodystatic-splitTxtImg_umoja-l-grid-align--base__1T3yW",
	"copy": "bodystatic-splitTxtImg_copy__2mTza",
	"subheading": "bodystatic-splitTxtImg_subheading__2LASO",
	"image": "bodystatic-splitTxtImg_image__10Maa",
	"_left": "bodystatic-splitTxtImg__left__uZGrN",
	"_right": "bodystatic-splitTxtImg__right__2aVan",
	"_frame": "bodystatic-splitTxtImg__frame__3AIqT",
	"imgWrap": "bodystatic-splitTxtImg_imgWrap__27x8W",
	"_green-yellow": "bodystatic-splitTxtImg__green-yellow__2w2Wk",
	"_purple": "bodystatic-splitTxtImg__purple__1N8Oc",
	"_green": "bodystatic-splitTxtImg__green__3L_Q_",
	"_red_orange": "bodystatic-splitTxtImg__red_orange__PIlef",
	"_blue": "bodystatic-splitTxtImg__blue__2Dsml",
	"_pink_red": "bodystatic-splitTxtImg__pink_red__11RCw",
	"_blue_purple": "bodystatic-splitTxtImg__blue_purple__P_RWI"
};


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
	"tabContent": "bodystatic-tabs_tabContent__38szV"
};


/***/ }),

/***/ 474:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-videoDivide_umoja-u-pad-1__VCmMC",
	"umoja-u-pad-t--0": "bodystatic-videoDivide_umoja-u-pad-t--0__2yOWZ",
	"umoja-u-pad-b--0": "bodystatic-videoDivide_umoja-u-pad-b--0__3-N8I",
	"umoja-l-grid--12": "bodystatic-videoDivide_umoja-l-grid--12__13mjY",
	"umoja-l-grid--6": "bodystatic-videoDivide_umoja-l-grid--6__1jw9u",
	"umoja-l-page-width": "bodystatic-videoDivide_umoja-l-page-width__1bL6e",
	"umoja-l-grid-section": "bodystatic-videoDivide_umoja-l-grid-section__1GH7M",
	"umoja-l-grid-gap--row-1": "bodystatic-videoDivide_umoja-l-grid-gap--row-1__MMHJc",
	"umoja-l-grid-gap--row-2": "bodystatic-videoDivide_umoja-l-grid-gap--row-2__3AfrX",
	"umoja-l-grid-gap--row-3": "bodystatic-videoDivide_umoja-l-grid-gap--row-3__Q-lQv",
	"umoja-l-grid-align--center": "bodystatic-videoDivide_umoja-l-grid-align--center__1ktc3",
	"umoja-l-grid-align--base": "bodystatic-videoDivide_umoja-l-grid-align--base__20xiS",
	"videoWrapper": "bodystatic-videoDivide_videoWrapper__2ziuJ",
	"video": "bodystatic-videoDivide_video__YK_ab",
	"bg1": "bodystatic-videoDivide_bg1__2c8ao",
	"bg2": "bodystatic-videoDivide_bg2__2mUNh"
};


/***/ }),

/***/ 5336:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "hero-centertxt_umoja-u-pad-1__3LOCH",
	"umoja-u-pad-t--0": "hero-centertxt_umoja-u-pad-t--0__22TMg",
	"umoja-u-pad-b--0": "hero-centertxt_umoja-u-pad-b--0__3VVkB",
	"umoja-l-grid--12": "hero-centertxt_umoja-l-grid--12__3jgPz",
	"umoja-l-grid--6": "hero-centertxt_umoja-l-grid--6__KSGxN",
	"umoja-l-page-width": "hero-centertxt_umoja-l-page-width__1yMe9",
	"umoja-l-grid-section": "hero-centertxt_umoja-l-grid-section__3CP18",
	"umoja-l-grid-gap--row-1": "hero-centertxt_umoja-l-grid-gap--row-1__2fC2A",
	"umoja-l-grid-gap--row-2": "hero-centertxt_umoja-l-grid-gap--row-2__1EV_-",
	"umoja-l-grid-gap--row-3": "hero-centertxt_umoja-l-grid-gap--row-3__3109y",
	"umoja-l-grid-align--center": "hero-centertxt_umoja-l-grid-align--center__Q-X0b",
	"umoja-l-grid-align--base": "hero-centertxt_umoja-l-grid-align--base__2bS7H",
	"body": "hero-centertxt_body__2J6HW"
};


/***/ }),

/***/ 7445:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "hero-home_umoja-u-pad-1__16RBc",
	"umoja-u-pad-t--0": "hero-home_umoja-u-pad-t--0__1vHXv",
	"umoja-u-pad-b--0": "hero-home_umoja-u-pad-b--0__3jkdQ",
	"umoja-l-grid--12": "hero-home_umoja-l-grid--12__3Blff",
	"umoja-l-grid--6": "hero-home_umoja-l-grid--6__2iRI1",
	"umoja-l-page-width": "hero-home_umoja-l-page-width__lkmu4",
	"umoja-l-grid-section": "hero-home_umoja-l-grid-section__hza89",
	"umoja-l-grid-gap--row-1": "hero-home_umoja-l-grid-gap--row-1__OL6Sg",
	"umoja-l-grid-gap--row-2": "hero-home_umoja-l-grid-gap--row-2__3h_Fq",
	"umoja-l-grid-gap--row-3": "hero-home_umoja-l-grid-gap--row-3__3n0KD",
	"umoja-l-grid-align--center": "hero-home_umoja-l-grid-align--center__1xaO3",
	"umoja-l-grid-align--base": "hero-home_umoja-l-grid-align--base__no42m",
	"dots": "hero-home_dots__3dHTM",
	"copy": "hero-home_copy__QxXB-",
	"subheadline": "hero-home_subheadline__2p0ls",
	"img": "hero-home_img__25RvM",
	"imgWrapper": "hero-home_imgWrapper__tSUfI"
};


/***/ }),

/***/ 849:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "hero-splittxtimg_umoja-u-pad-1__3GALI",
	"umoja-u-pad-t--0": "hero-splittxtimg_umoja-u-pad-t--0__3EIC9",
	"umoja-u-pad-b--0": "hero-splittxtimg_umoja-u-pad-b--0__2LSx9",
	"umoja-l-grid--12": "hero-splittxtimg_umoja-l-grid--12__VECTB",
	"umoja-l-grid--6": "hero-splittxtimg_umoja-l-grid--6__3KC2U",
	"umoja-l-page-width": "hero-splittxtimg_umoja-l-page-width__2BmN6",
	"umoja-l-grid-section": "hero-splittxtimg_umoja-l-grid-section__3B7--",
	"umoja-l-grid-gap--row-1": "hero-splittxtimg_umoja-l-grid-gap--row-1__2gxrc",
	"umoja-l-grid-gap--row-2": "hero-splittxtimg_umoja-l-grid-gap--row-2__7Mg-6",
	"umoja-l-grid-gap--row-3": "hero-splittxtimg_umoja-l-grid-gap--row-3__2FbAA",
	"umoja-l-grid-align--center": "hero-splittxtimg_umoja-l-grid-align--center__2H2zA",
	"umoja-l-grid-align--base": "hero-splittxtimg_umoja-l-grid-align--base__1L8B2",
	"copy": "hero-splittxtimg_copy__28fs5",
	"pageTitle": "hero-splittxtimg_pageTitle__2CUHj",
	"imgWrapper": "hero-splittxtimg_imgWrapper__XL8hm"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;
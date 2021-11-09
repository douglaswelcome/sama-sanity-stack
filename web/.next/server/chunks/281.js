exports.id = 281;
exports.ids = [281];
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

/***/ 4151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1692);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3879);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Button = props => {
  const {
    title,
    type,
    size,
    link
  } = props;
  const wrapperClass = `${(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper)} ${type ? (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`_${type}`] : ''} ${size ? (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`_${size}`] : ''}`;

  const buttonInner = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
    className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
      className: (_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
      children: title
    })
  });

  if (link) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      className: wrapperClass,
      link: link,
      children: buttonInner
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: wrapperClass,
      children: buttonInner
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 1692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9484);
/* harmony import */ var _sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Link = props => {
  const {
    link,
    className,
    children
  } = props;
  const {
    0: linkUrl,
    1: setUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(link);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (link && link.internalLink) {
      _client__WEBPACK_IMPORTED_MODULE_2___default().fetch(`*[_type == "page" && _id == "${link.internalLink._ref}"][0]`).then(page => {
        setUrl(page.slug.current);
      });
    }

    if (link && link.externalUrl) {
      setUrl(link.externalUrl);
    }

    if (link && link.file) {
      const filePath = (0,_sanity_asset_utils__WEBPACK_IMPORTED_MODULE_1__.getFile)(link.file, _client__WEBPACK_IMPORTED_MODULE_2___default().config());
      setUrl(filePath.asset.url);
    }

    if (link && link.internalLink_custom) {
      setUrl(link.internalLink_custom);
    }
  });

  if (linkUrl) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: link.internalLink || link.internalLink_custom ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: `/${linkUrl}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
          className: className,
          children: children
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
        href: linkUrl,
        target: "_blank",
        rel: "noopener",
        className: className,
        children: children
      })
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ }),

/***/ 4645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zl": () => (/* binding */ indexQuery),
/* harmony export */   "JR": () => (/* binding */ pageQuery),
/* harmony export */   "A3": () => (/* binding */ pageSlugsQuery),
/* harmony export */   "oM": () => (/* binding */ eventsPastQuery),
/* harmony export */   "_D": () => (/* binding */ eventsUpcomingQuery),
/* harmony export */   "Dp": () => (/* binding */ eventsFeaturedQuery)
/* harmony export */ });
const homeID = `*[_id == "global-config"][0].frontpage->_id`;
const pageFields = `
title,
"slug": slug.current,
"sections": sections[]{
    _key,
    background_color,
    "modules": modules.modules[]{
        _type == "reusable_modules_module" => module_ref->.module{
            "ref_modules": modules[]{
                ...
            }
        },
        _type != "reusable_modules_module" => {
            ...
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
const eventsPastQuery = `
*[_type == "event" && datetime < now()]| order(datetime desc)
`;
const eventsUpcomingQuery = `
*[_type == "event" && datetime > now()]| order(datetime asc)
`;
const eventsFeaturedQuery = `
*[_type == "event" && datetime > now() && featured == true][0..2]| order(datetime asc)
`;

/***/ }),

/***/ 7857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bodymove_featureWindow": () => (/* reexport */ bodymove_featureWindow_bodymove_featureWindow),
  "bodymove_map": () => (/* reexport */ bodymove_map_bodymove_map),
  "bodymove_panel": () => (/* reexport */ bodymove_panel_bodymove_panel),
  "bodymove_sfMap": () => (/* reexport */ bodymove_sfMap_bodymove_sfMap),
  "bodymove_splitTxtImg": () => (/* reexport */ bodymove_splitTxtImg_bodymove_splitTxtImg),
  "bodymove_stickySideScroll": () => (/* reexport */ bodymove_stickySideScroll_bodymove_stickySideScroll),
  "bodystatic_bragBar": () => (/* reexport */ bodystatic_bragBar_bodystatic_bragBar),
  "bodystatic_cardImg": () => (/* reexport */ bodystatic_cardImg_bodystatic_cardImg),
  "bodystatic_centerPanel": () => (/* reexport */ bodystatic_centerPanel_bodystatic_centerPanel),
  "bodystatic_display": () => (/* reexport */ bodystatic_display_bodystatic_display),
  "bodystatic_flowCompare": () => (/* reexport */ bodystatic_flowCompare_bodystatic_flowCompare),
  "bodystatic_flowRow": () => (/* reexport */ bodystatic_flowRow_bodystatic_flowRow),
  "bodystatic_galleryGrid": () => (/* reexport */ bodystatic_galleryGrid_bodystatic_galleryGrid),
  "bodystatic_headSubCta": () => (/* reexport */ bodystatic_headSubCta_bodystatic_headSubCta),
  "bodystatic_iconCopy": () => (/* reexport */ bodystatic_iconCopy_bodystatic_iconCopy),
  "bodystatic_iconList": () => (/* reexport */ bodystatic_iconList_bodystatic_iconList),
  "bodystatic_leadTeam": () => (/* reexport */ bodystatic_leadTeam_bodystatic_leadTeam),
  "bodystatic_panelAvatarQuote": () => (/* reexport */ bodystatic_panelAvatarQuote_bodystatic_panelAvatarQuote),
  "bodystatic_panelAvatarTxt": () => (/* reexport */ bodystatic_panelAvatarTxt_bodystatic_panelAvatarTxt),
  "bodystatic_panelColumns": () => (/* reexport */ bodystatic_panelColumns_bodystatic_panelColumns),
  "bodystatic_panelFeature": () => (/* reexport */ bodystatic_panelFeature_bodystatic_panelFeature),
  "bodystatic_panelQuote": () => (/* reexport */ bodystatic_panelQuote_bodystatic_panelQuote),
  "bodystatic_punchyTxt": () => (/* reexport */ bodystatic_punchyTxt_bodystatic_punchyTxt),
  "bodystatic_richTxt": () => (/* reexport */ bodystatic_richTxt_bodystatic_richTxt),
  "bodystatic_splitTxtBtn": () => (/* reexport */ bodystatic_splitTxtBtn_bodystatic_splitTxtBtn),
  "bodystatic_splitTxtImg": () => (/* reexport */ bodystatic_splitTxtImg_bodystatic_splitTxtImg),
  "bodystatic_splitTxtQuote": () => (/* reexport */ bodystatic_splitTxtQuote_bodystatic_splitTxtQuote),
  "bodystatic_table": () => (/* reexport */ bodystatic_table_bodystatic_table),
  "bodystatic_tabs": () => (/* reexport */ bodystatic_tabs_bodystatic_tabs),
  "bodystatic_timeline": () => (/* reexport */ bodystatic_timeline_bodystatic_timeline),
  "bodystatic_vidCenter": () => (/* reexport */ bodystatic_vidCenter_bodystatic_vidCenter),
  "hero_centertxt": () => (/* reexport */ hero_centertxt_hero_centertxt),
  "hero_home": () => (/* reexport */ hero_home_hero_home),
  "hero_splittxtimg": () => (/* reexport */ hero_splittxtimg_hero_splittxtimg),
  "hero_splittxtimg_tall": () => (/* reexport */ hero_splittxtimg_tall_hero_splittxtimg_tall)
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
    sizes,
    objectFit,
    placeholder
  } = props;
  const imageProps = (0,external_next_sanity_image_.useNextSanityImage)((client_default()), src);
  const width = !props.width && layout != 'fill' ? imageProps.width : props.width;
  const height = !props.height && layout != 'fill' ? imageProps.height : props.height;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: sizes ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread(_objectSpread({}, imageProps), {}, {
      layout: layout,
      sizes: sizes,
      alt: src.alt,
      objectFit: objectFit,
      placeholder: placeholder
    })) : /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread(_objectSpread({}, imageProps), {}, {
      layout: layout,
      width: width,
      height: height,
      alt: src.alt,
      objectFit: objectFit,
      placeholder: placeholder
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
        className: `${(hero_home_module_default()).headline} display-small `,
        children: heading
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
    richText,
    align,
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
        const href = mark.internalLink ? mark.internalLink : mark.externalUrl;

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
        children: [icon.icon && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (bodystatic_iconCopy_module_default()).iconWrap,
          children: responsive ? /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            layout: "fill",
            objectFit: "contain",
            src: icon.icon
          }) : /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            layout: "fixed",
            src: icon.icon,
            height: 48,
            width: 48
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: icon.title
        }), icon.body && icon.body.richText ? /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
          className: (bodystatic_iconCopy_module_default()).body,
          richText: icon.body.richText
        }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
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
    className: `bodystatic-panelFeature ${image_position ? (bodystatic_panelFeature_module_default())._flipImage : ''} umoja-l-grid--12 umoja-u-bg--charcoal3 container-lg`,
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
;// CONCATENATED MODULE: ./modules/bodystatic_richTxt/bodystatic_richTxt.js




const bodystatic_richTxt = props => {
  const {
    richText,
    align
  } = props.richText;
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
    preheadline,
    heading,
    image,
    tagline,
    cta
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "hero-splittxtimg umoja-l-grid--12 umoja-l-grid-align--center",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (hero_splittxtimg_module_default()).copy,
      children: [preheadline && /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: (hero_splittxtimg_module_default()).preheadline,
        children: preheadline
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: heading
      }), tagline && /*#__PURE__*/jsx_runtime_.jsx("h5", {
        children: tagline
      }), cta.title && /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, hero_splittxtimg_objectSpread({}, cta))]
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
// EXTERNAL MODULE: ./modules/hero_splittxtimg_tall/hero-splittxtimg-tall.module.scss
var hero_splittxtimg_tall_module = __webpack_require__(240);
var hero_splittxtimg_tall_module_default = /*#__PURE__*/__webpack_require__.n(hero_splittxtimg_tall_module);
;// CONCATENATED MODULE: ./modules/hero_splittxtimg_tall/hero_splittxtimg_tall.js
function hero_splittxtimg_tall_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function hero_splittxtimg_tall_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hero_splittxtimg_tall_ownKeys(Object(source), true).forEach(function (key) { hero_splittxtimg_tall_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hero_splittxtimg_tall_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hero_splittxtimg_tall_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const hero_splittxtimg_tall = props => {
  const {
    preheadline,
    heading,
    image,
    tagline,
    ctas
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "hero-splittxtimg-tall umoja-l-grid--12 umoja-l-grid-align--center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (hero_splittxtimg_tall_module_default()).copyWrapper,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (hero_splittxtimg_tall_module_default()).copy,
        children: [preheadline && /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: (hero_splittxtimg_tall_module_default()).preheadline,
          children: preheadline
        }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: heading
        }), tagline && /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: tagline
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (hero_splittxtimg_tall_module_default()).buttonRow,
          children: ctas.map(cta => {
            return /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, hero_splittxtimg_tall_objectSpread({}, cta), cta._key);
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (hero_splittxtimg_tall_module_default()).imageColumn,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (hero_splittxtimg_tall_module_default()).imageGradient
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (hero_splittxtimg_tall_module_default()).imageWrapper,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
          src: image,
          layout: "responsive",
          objectFit: "cover"
        })
      })]
    })]
  });
};

/* harmony default export */ const hero_splittxtimg_tall_hero_splittxtimg_tall = (hero_splittxtimg_tall);
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
      }), tagline && tagline.richText ? /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
        className: (hero_centertxt_module_default()).tagline,
        richText: tagline.richText,
        align: tagline.align
      }) : /*#__PURE__*/jsx_runtime_.jsx("h5", {
        children: tagline
      }), cta && cta.title && /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, hero_centertxt_objectSpread({}, cta))]
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
        const imageProps = (0,external_next_sanity_image_.useNextSanityImage)((client_default()), item.image);
        return /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: mediaClass,
          src: imageProps.src,
          alt: imageProps.alt
        }, item._key);
      }
    })]
  });
};

/* harmony default export */ const bodymove_stickySideScroll_bodymove_stickySideScroll = (bodymove_stickySideScroll);
// EXTERNAL MODULE: ./modules/bodystatic_vidCenter/bodystatic-vidCenter.module.scss
var bodystatic_vidCenter_module = __webpack_require__(932);
var bodystatic_vidCenter_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_vidCenter_module);
;// CONCATENATED MODULE: ./modules/bodystatic_vidCenter/bodystatic_vidCenter.js






const bodystatic_vidCenter = props => {
  const {
    video
  } = props;
  const videoPath = (0,asset_utils_.getFile)(video, client_default().config());
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic-vidCenter container-lg umoja-l-grid--12",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_vidCenter_module_default()).videoWrapper,
      children: /*#__PURE__*/jsx_runtime_.jsx("video", {
        className: (bodystatic_vidCenter_module_default()).video,
        autoPlay: "autoplay",
        loop: "loop",
        playsInline: "playsinline",
        muted: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("source", {
          src: videoPath.asset.url,
          type: `video/${videoPath.asset.extension}`
        })
      })
    })
  });
};

/* harmony default export */ const bodystatic_vidCenter_bodystatic_vidCenter = (bodystatic_vidCenter);
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
        }), card.body && card.body.richText ? /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
          className: (bodystatic_cardImg_module_default()).body,
          richText: card.body.richText
        }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
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
// EXTERNAL MODULE: external "@u-wave/react-vimeo"
var react_vimeo_ = __webpack_require__(3062);
var react_vimeo_default = /*#__PURE__*/__webpack_require__.n(react_vimeo_);
// EXTERNAL MODULE: external "@u-wave/react-youtube"
var react_youtube_ = __webpack_require__(9525);
var react_youtube_default = /*#__PURE__*/__webpack_require__.n(react_youtube_);
// EXTERNAL MODULE: external "get-youtube-id"
var external_get_youtube_id_ = __webpack_require__(4885);
var external_get_youtube_id_default = /*#__PURE__*/__webpack_require__.n(external_get_youtube_id_);
;// CONCATENATED MODULE: ./components/video.js







const Video = props => {
  const {
    src,
    className,
    autoPlay,
    loop,
    playsInline,
    muted
  } = props;

  if (src.embed) {
    const {
      type,
      url
    } = src.embed;

    if (type == 'vimeo') {
      return /*#__PURE__*/jsx_runtime_.jsx((react_vimeo_default()), {
        video: url,
        autoplay: autoPlay,
        loop: loop,
        className: className,
        muted: muted,
        responsive: true
      });
    } else if (type == 'youtube') {
      const id = external_get_youtube_id_default()(url);
      return /*#__PURE__*/jsx_runtime_.jsx((react_youtube_default()), {
        video: id,
        autoplay: autoPlay,
        className: className,
        muted: muted,
        playsInline: playsInline
      });
    }
  }

  const videoPath = getFile(video, client_default().config());
  return /*#__PURE__*/jsx_runtime_.jsx("video", {
    className: className,
    autoPlay: autoPlay,
    loop: loop,
    playsInline: playsInline,
    muted: true,
    children: /*#__PURE__*/jsx_runtime_.jsx("source", {
      src: videoPath.asset.url,
      type: `video/${videoPath.asset.extension}`
    })
  });
};

/* harmony default export */ const components_video = (Video);
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
    image,
    video
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
      }), body && body.richText ? /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
        className: (bodystatic_splitTxtImg_module_default()).body,
        richText: body.richText,
        align: body.align
      }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: body
      }), cta.link && /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, bodystatic_splitTxtImg_objectSpread({}, cta))]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: imgColClass,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_splitTxtImg_module_default()).imgWrap,
        children: [image && /*#__PURE__*/jsx_runtime_.jsx(components_image, {
          src: image,
          layout: "responsive",
          objectFit: "cover"
        }), video && /*#__PURE__*/jsx_runtime_.jsx(components_video, {
          src: video
        })]
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
    0: tabDir,
    1: setTabDir
  } = (0,external_react_.useState)('');

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
          media = /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (bodystatic_tabs_module_default()).imgWrap,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
              src: tab.image,
              layout: "responsive",
              objectFit: "cover"
            })
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
// EXTERNAL MODULE: ./modules/bodystatic_iconList/bodystatic-iconList.module.scss
var bodystatic_iconList_module = __webpack_require__(5005);
var bodystatic_iconList_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_iconList_module);
;// CONCATENATED MODULE: ./modules/bodystatic_iconList/bodystatic_iconList.js






const bodystatic_iconList = props => {
  const {
    icons
  } = props;
  let className = `bodystatic-iconList umoja-l-grid-align--base ${icons.length > 3 ? `umoja-l-grid--12` : `umoja-l-grid--6 ${(bodystatic_iconList_module_default())._three}`}`;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: className,
    children: icons.map(icon => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_iconList_module_default()).icon,
        children: [icon.icon && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (bodystatic_iconList_module_default()).iconWrap,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            layout: "fixed",
            src: icon.icon,
            height: 48,
            width: 48
          })
        }), icon.title && /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: icon.title
        }), icon.body && /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: icon.body
        })]
      }, icon._key);
    })
  });
};

/* harmony default export */ const bodystatic_iconList_bodystatic_iconList = (bodystatic_iconList);
// EXTERNAL MODULE: ./modules/bodystatic_centerPanel/bodystatic-centerPanel.module.scss
var bodystatic_centerPanel_module = __webpack_require__(152);
var bodystatic_centerPanel_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_centerPanel_module);
;// CONCATENATED MODULE: ./modules/bodystatic_centerPanel/bodystatic_centerPanel.js






const bodystatic_centerPanel = props => {
  const {
    body_copy,
    heading
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic-centerPanel umoja-l-grid--12",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (bodystatic_centerPanel_module_default()).panel,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: heading
      }), /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
        richText: body_copy.richText,
        align: body_copy.align
      })]
    })
  });
};

/* harmony default export */ const bodystatic_centerPanel_bodystatic_centerPanel = (bodystatic_centerPanel);
// EXTERNAL MODULE: ./modules/bodystatic_headSubCta/bodystatic-headSubCta.module.scss
var bodystatic_headSubCta_module = __webpack_require__(3635);
var bodystatic_headSubCta_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_headSubCta_module);
;// CONCATENATED MODULE: ./modules/bodystatic_headSubCta/bodystatic_headSubCta.js
function bodystatic_headSubCta_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bodystatic_headSubCta_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bodystatic_headSubCta_ownKeys(Object(source), true).forEach(function (key) { bodystatic_headSubCta_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bodystatic_headSubCta_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bodystatic_headSubCta_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const bodystatic_headSubCta = props => {
  const {
    bigheady,
    preheadline,
    headline,
    subheadline,
    button
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodystatic-headSubCta umoja-l-grid--12 umoja-l-grid-gap--row-1",
    children: [preheadline && /*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: (bodystatic_headSubCta_module_default()).preheadline,
      children: preheadline
    }), headline && /*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: `${(bodystatic_headSubCta_module_default()).headline}${bigheady ? ' display-small' : ''}`,
      children: headline
    }), subheadline && /*#__PURE__*/jsx_runtime_.jsx("h5", {
      className: (bodystatic_headSubCta_module_default()).subheadline,
      children: subheadline
    }), button && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_headSubCta_module_default()).cta,
      children: /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, bodystatic_headSubCta_objectSpread({}, button))
    })]
  });
};

/* harmony default export */ const bodystatic_headSubCta_bodystatic_headSubCta = (bodystatic_headSubCta);
// EXTERNAL MODULE: ./components/link.js
var components_link = __webpack_require__(1692);
// EXTERNAL MODULE: ./modules/bodystatic_galleryGrid/bodystatic-galleryGrid.module.scss
var bodystatic_galleryGrid_module = __webpack_require__(4463);
var bodystatic_galleryGrid_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_galleryGrid_module);
;// CONCATENATED MODULE: ./modules/bodystatic_galleryGrid/bodystatic_galleryGrid.js







const bodystatic_galleryGrid = props => {
  const {
    gridItems
  } = props;
  let className = `bodystatic-galleryGrid umoja-l-grid--6 umoja-l-grid-gap--row-2 ${gridItems.length == 4 ? (bodystatic_galleryGrid_module_default())._four : ''}`;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: className,
    children: gridItems.map(item => {
      if (item.link) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_link/* default */.Z, {
          link: item.link,
          className: `${(bodystatic_galleryGrid_module_default()).item} ${(bodystatic_galleryGrid_module_default()).item__link}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (bodystatic_galleryGrid_module_default()).imgWrap,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
              layout: "fill",
              objectFit: "cover",
              src: item.image
            })
          }), item.title && /*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: item.title
          }), item.body && /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: item.body
          })]
        }, item._key);
      } else {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_galleryGrid_module_default()).item,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (bodystatic_galleryGrid_module_default()).imgWrap,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
              layout: "fill",
              objectFit: "cover",
              src: item.image
            })
          }), item.title && /*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: item.title
          }), item.body && /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: item.body
          })]
        }, item._key);
      }
    })
  });
};

/* harmony default export */ const bodystatic_galleryGrid_bodystatic_galleryGrid = (bodystatic_galleryGrid);
// EXTERNAL MODULE: ./modules/bodystatic_flowCompare/bodystatic-flowCompare.module.scss
var bodystatic_flowCompare_module = __webpack_require__(3786);
var bodystatic_flowCompare_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_flowCompare_module);
;// CONCATENATED MODULE: ./modules/bodystatic_flowCompare/bodystatic_flowCompare.js






const bodystatic_flowCompare = props => {
  const {
    item1_title,
    item1_content,
    item2_title,
    item2_content,
    con_pretitle,
    con_title,
    con_content
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodystatic-flowCompare",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(bodystatic_flowCompare_module_default()).row} umoja-l-grid--12`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_flowCompare_module_default()).item,
        children: [item1_title && /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: item1_title
        }), /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
          className: (bodystatic_flowCompare_module_default()).itemContent,
          richText: item1_content.richText,
          align: item1_content.align
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(bodystatic_flowCompare_module_default()).gradient} ${(bodystatic_flowCompare_module_default()).gradient__topRight}`
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(bodystatic_flowCompare_module_default()).row} ${(bodystatic_flowCompare_module_default()).vs} umoja-l-grid--12`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(bodystatic_flowCompare_module_default()).gradient} ${(bodystatic_flowCompare_module_default()).gradient__topLeft}`
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_flowCompare_module_default()).vs_circle,
        children: "VS"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(bodystatic_flowCompare_module_default()).gradient} ${(bodystatic_flowCompare_module_default()).gradient__bottomRight}`
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(bodystatic_flowCompare_module_default()).row} umoja-l-grid--12`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(bodystatic_flowCompare_module_default()).gradient} ${(bodystatic_flowCompare_module_default()).gradient__bottomLeft}`
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(bodystatic_flowCompare_module_default()).item} ${(bodystatic_flowCompare_module_default()).item__right}`,
        children: [item2_title && /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: item2_title
        }), /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
          className: (bodystatic_flowCompare_module_default()).itemContent,
          richText: item2_content.richText,
          align: item2_content.align
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(bodystatic_flowCompare_module_default()).row} ${(bodystatic_flowCompare_module_default()).vs} ${(bodystatic_flowCompare_module_default()).arrow} umoja-l-grid--12`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(bodystatic_flowCompare_module_default()).gradient} ${(bodystatic_flowCompare_module_default()).gradient__topLeft}`
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_flowCompare_module_default()).vs_circle,
        children: "VS"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(bodystatic_flowCompare_module_default()).gradient} ${(bodystatic_flowCompare_module_default()).gradient__bottomRight}`
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(bodystatic_flowCompare_module_default()).row} umoja-l-grid--12`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_flowCompare_module_default()).conclusion,
        children: [con_pretitle && /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: con_pretitle
        }), con_title && /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: con_title
        }), /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
          className: (bodystatic_flowCompare_module_default()).itemContent,
          richText: con_content.richText,
          align: con_content.align
        })]
      })
    })]
  });
};

/* harmony default export */ const bodystatic_flowCompare_bodystatic_flowCompare = (bodystatic_flowCompare);
// EXTERNAL MODULE: ./modules/bodymove_splitTxtImg/bodymove-splitTxtImg.module.scss
var bodymove_splitTxtImg_module = __webpack_require__(4384);
var bodymove_splitTxtImg_module_default = /*#__PURE__*/__webpack_require__.n(bodymove_splitTxtImg_module);
;// CONCATENATED MODULE: ./modules/bodymove_splitTxtImg/bodymove_splitTxtImg.js
function bodymove_splitTxtImg_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bodymove_splitTxtImg_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bodymove_splitTxtImg_ownKeys(Object(source), true).forEach(function (key) { bodymove_splitTxtImg_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bodymove_splitTxtImg_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bodymove_splitTxtImg_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const bodymove_splitTxtImg = props => {
  const {
    slides
  } = props;
  const {
    0: activeSlide,
    1: setActiveSlide
  } = (0,external_react_.useState)(0);
  const {
    0: slideDir,
    1: setSlideDir
  } = (0,external_react_.useState)('');

  const handleClick = e => {
    const active = parseInt(e.target.getAttribute('data-at'));
    document.querySelector(`.${(bodymove_splitTxtImg_module_default()).carousel_slides}`).style.left = 100 * active * -1 + '%';
    setActiveSlide(active);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodymove-splitTxtImg umoja-l-grid--12 umoja-l-grid-gap--row-2 umoja-l-grid-align--center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodymove_splitTxtImg_module_default()).topNav,
      children: slides.map((slide, i) => {
        return /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: `${(bodymove_splitTxtImg_module_default()).topNav_item} ${i == activeSlide ? (bodymove_splitTxtImg_module_default()).active : ''}`,
          "data-at": i,
          onClick: handleClick,
          children: slide.preheading ? slide.preheading : slide.title
        }, slide._key);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(bodymove_splitTxtImg_module_default()).carouselNav} ${(bodymove_splitTxtImg_module_default()).carouselNav__left} ${activeSlide == 0 ? (bodymove_splitTxtImg_module_default()).carouselNav__hide : ''}`,
      onClick: handleClick,
      "data-at": activeSlide - 1
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodymove_splitTxtImg_module_default()).carousel,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodymove_splitTxtImg_module_default()).carousel_slides,
        children: slides.map((slide, i) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${(bodymove_splitTxtImg_module_default()).carousel_slide} ${i == activeSlide ? (bodymove_splitTxtImg_module_default()).active : ''} umoja-l-grid--6`,
            "data-at": i,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (bodymove_splitTxtImg_module_default()).carousel_slide_left,
              children: [slide.preheading && /*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: slide.preheading
              }), slide.title && /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: slide.title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: slide.body
              }), slide.cta.title && /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, bodymove_splitTxtImg_objectSpread({}, slide.cta))]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (bodymove_splitTxtImg_module_default()).carousel_slide_right,
              children: [slide.bullets && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (bodymove_splitTxtImg_module_default()).list,
                children: slide.bullets.map((bullet, i) => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (bodymove_splitTxtImg_module_default()).list_item,
                    children: [bullet.icon && /*#__PURE__*/jsx_runtime_.jsx(components_image, {
                      src: bullet.icon,
                      layout: "fixed",
                      width: 28,
                      height: 28
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: (bodymove_splitTxtImg_module_default()).list_item_copy,
                      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                        children: bullet.title
                      }), /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
                        className: (bodymove_splitTxtImg_module_default()).list_item_body,
                        richText: bullet.body.richText,
                        align: bullet.body.align
                      })]
                    })]
                  }, bullet._key);
                })
              }), slide.image && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (bodymove_splitTxtImg_module_default()).imgWrap,
                children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
                  src: image,
                  layout: "responsive",
                  objectFit: "cover"
                })
              }), slide.video && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (bodymove_splitTxtImg_module_default()).imgWrap,
                children: /*#__PURE__*/jsx_runtime_.jsx(components_video, {
                  src: video
                })
              })]
            })]
          }, slide._key);
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: `${(bodymove_splitTxtImg_module_default()).carouselNav} ${(bodymove_splitTxtImg_module_default()).carouselNav__right} ${activeSlide == slides.length - 1 ? (bodymove_splitTxtImg_module_default()).carouselNav__hide : ''}`,
      onClick: handleClick,
      "data-at": activeSlide + 1
    })]
  });
};

/* harmony default export */ const bodymove_splitTxtImg_bodymove_splitTxtImg = (bodymove_splitTxtImg);
// EXTERNAL MODULE: ./modules/bodystatic_table/bodystatic-table.module.scss
var bodystatic_table_module = __webpack_require__(1083);
var bodystatic_table_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_table_module);
;// CONCATENATED MODULE: ./modules/bodystatic_table/bodystatic_table.js








const bodystatic_table = props => {
  const {
    columns,
    rows
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic-table",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      className: (bodystatic_table_module_default()).table,
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/jsx_runtime_.jsx("tr", {
          children: columns.map(column => {
            if (column.empty_head) {
              return /*#__PURE__*/jsx_runtime_.jsx("th", {}, column._key);
            } else {
              return /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: column.icon ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: `${(bodystatic_table_module_default()).row_cell_list} ${(bodystatic_table_module_default()).row_cell_list__large}`,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(components_image, {
                    src: column.icon,
                    layout: "responsive",
                    objectFit: "contain"
                  }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
                    children: column.header
                  }), col.subheader && /*#__PURE__*/jsx_runtime_.jsx("h5", {
                    children: column.subheader
                  })]
                }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                    children: column.header
                  }), column.subheader && /*#__PURE__*/jsx_runtime_.jsx("h5", {
                    children: column.subheader
                  })]
                })
              }, column._key);
            }
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: rows.map(row => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            className: (bodystatic_table_module_default()).row,
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
                children: row.header
              })
            }), row.cells.map(cell => {
              return /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: cell.bullets ? cell.bullets.map(bullet => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (bodystatic_table_module_default()).row_cell_list,
                    children: [/*#__PURE__*/jsx_runtime_.jsx(components_image, {
                      src: bullet.icon,
                      layout: "fixed",
                      width: 28,
                      height: 28
                    }), /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
                      className: (bodystatic_table_module_default()).row_cell_list_content,
                      richText: bullet.body.richText,
                      align: bullet.body.align
                    })]
                  }, bullet._key);
                }) : /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
                  richText: cell.body.richText,
                  align: cell.body.align
                })
              }, cell._key);
            })]
          }, row._key);
        })
      })]
    })
  });
};

/* harmony default export */ const bodystatic_table_bodystatic_table = (bodystatic_table);
// EXTERNAL MODULE: ./modules/bodystatic_panelColumns/bodystatic-panelColumns.module.scss
var bodystatic_panelColumns_module = __webpack_require__(4724);
var bodystatic_panelColumns_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_panelColumns_module);
;// CONCATENATED MODULE: ./modules/bodystatic_panelColumns/bodystatic_panelColumns.js







const bodystatic_panelColumns = props => {
  const {
    panels
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic-panelColumns umoja-l-grid--12",
    children: panels.map(panel => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_panelColumns_module_default()).panel,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (bodystatic_panelColumns_module_default()).panel_imgWrap,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            src: panel.image,
            layout: "responsive",
            objectFit: "cover"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_panelColumns_module_default()).panel_copy,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: panel.header
          }), /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
            richText: panel.body.richText,
            align: panel.body.align
          })]
        })]
      });
    })
  });
};

/* harmony default export */ const bodystatic_panelColumns_bodystatic_panelColumns = (bodystatic_panelColumns);
// EXTERNAL MODULE: ./modules/bodystatic_timeline/bodystatic-timeline.module.scss
var bodystatic_timeline_module = __webpack_require__(3653);
var bodystatic_timeline_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_timeline_module);
;// CONCATENATED MODULE: ./modules/bodystatic_timeline/bodystatic_timeline.js






const bodystatic_timeline = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic-timeline umoja-l-grid--12",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (bodystatic_timeline_module_default()).wrapper,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_timeline_module_default()).row,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${(bodystatic_timeline_module_default()).center} ${(bodystatic_timeline_module_default()).bookends} ${(bodystatic_timeline_module_default()).bookends_top}`
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__left}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2008"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Founded by Leila Janah and driven by the belief that \u201CTalent is equally distributed, but opportunity is not.\u201D"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Developed our first relationships with partner delivery centers and focused on data entry, sentiment analysis and data transcription."
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__right}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2009"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Built version one of SamaHub, our technology platform."
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__left}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2012"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "First deep learning image annotation projects. Images used by Microsoft to build out Xbox Kinect technology."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Launched enhanced data annotation platform features on SamaHub."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "First large scale product classification project with WalmartLabs."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Partnered with Oxfam to assist youth in Northern Uganda affected by civil war. by opening a delivery center in Gulu."
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__right}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2013"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Helped nearly 5,000 people lift themselves out of poverty."
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__left}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2014"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "First video annotation and 3D annotation projects for Microsoft."
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__right}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2015"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Opened our first owned and operated center in Nairobi, Kenya."
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__left}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2017"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Launched European operations with first office in The Hague."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Opened an office in Costa Rica."
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__right}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2018"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Achieved ISO 9001 certification for Nairobi Delivery Center."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Celebrated 10 years, having helped lift 10K+ people out of poverty."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Adopted a hybrid business structure enabling the company to attract investment capital to fuel growth."
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__left}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2019"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Helped over 50,000 people have meaningful income and move out of poverty."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Opened office in Kampala, Uganda and Montreal."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Announced Series A funding."
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__right}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2020"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Annotated over 1.5B points"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Won AI Breakthrough Awards for Best Image Processing Solution"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Made Inc. Magazine\u2019s Annual List of America\u2019s Fastest-Growing 5,000 Private Companies"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Became the first AI company to receive B Corp Certification"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Published a Randomized Control Trial"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: (bodystatic_timeline_module_default()).year,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: `${(bodystatic_timeline_module_default()).ball_wrapper} ${(bodystatic_timeline_module_default()).ball_wrapper__left}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                class: (bodystatic_timeline_module_default()).ball
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "2021"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_timeline_module_default()).row,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).center
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: (bodystatic_timeline_module_default()).copy,
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Samasource becomes Sama, representing our vision to take on the most ambitious AI projects and deliver high-quality, accurate training data"
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const bodystatic_timeline_bodystatic_timeline = (bodystatic_timeline);
// EXTERNAL MODULE: ./modules/bodystatic_panelAvatarTxt/bodystatic-panelAvatarTxt.module.scss
var bodystatic_panelAvatarTxt_module = __webpack_require__(4024);
var bodystatic_panelAvatarTxt_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_panelAvatarTxt_module);
;// CONCATENATED MODULE: ./modules/bodystatic_panelAvatarTxt/bodystatic_panelAvatarTxt.js








const bodystatic_panelAvatarTxt = props => {
  const {
    text,
    header,
    subheader,
    image
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodystatic-panelAvatarTxt umoja-l-grid--12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_panelAvatarTxt_module_default()).dotPanel,
      children: /*#__PURE__*/jsx_runtime_.jsx(dot_canvas, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_panelAvatarTxt_module_default()).bottomPanel
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (bodystatic_panelAvatarTxt_module_default()).topPanel,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_panelAvatarTxt_module_default()).imageWrap,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
          src: image,
          layout: "fill",
          objectFit: "contain"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_panelAvatarTxt_module_default()).name,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: header
        }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: subheader
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "divider-line divider-line--horizontal divider-line--charcoal"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_panelAvatarTxt_module_default()).body,
        children: /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
          richText: text.richText,
          align: text.align
        })
      })]
    })]
  });
};

/* harmony default export */ const bodystatic_panelAvatarTxt_bodystatic_panelAvatarTxt = (bodystatic_panelAvatarTxt);
// EXTERNAL MODULE: ./modules/bodystatic_leadTeam/bodystatic-leadTeam.module.scss
var bodystatic_leadTeam_module = __webpack_require__(9334);
var bodystatic_leadTeam_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_leadTeam_module);
;// CONCATENATED MODULE: ./modules/bodystatic_leadTeam/bodystatic_leadTeam.js






const bodystatic_leadTeam = props => {
  const {
    avatars
  } = props;
  const lead = avatars[0];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodystatic-leadTeam umoja-l-grid--12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(bodystatic_leadTeam_module_default()).row} ${(bodystatic_leadTeam_module_default()).row__top}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_leadTeam_module_default()).avatar,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (bodystatic_leadTeam_module_default()).imageWrap,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
            src: lead.image,
            layout: "fill"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: lead.name
        }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: lead.title
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_leadTeam_module_default()).row,
      children: avatars.map((avatar, i) => {
        if (i == 0) return;
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (bodystatic_leadTeam_module_default()).avatar,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (bodystatic_leadTeam_module_default()).imageWrap,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
              src: avatar.image,
              layout: "fill"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: avatar.name
          }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
            children: avatar.title
          })]
        });
      })
    })]
  });
};

/* harmony default export */ const bodystatic_leadTeam_bodystatic_leadTeam = (bodystatic_leadTeam);
// EXTERNAL MODULE: ./modules/bodystatic_flowRow/bodystatic-flowRow.module.scss
var bodystatic_flowRow_module = __webpack_require__(8025);
var bodystatic_flowRow_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_flowRow_module);
;// CONCATENATED MODULE: ./modules/bodystatic_flowRow/bodystatic_flowRow.js







const bodystatic_flowRow = props => {
  const {
    items
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic-flowRow umoja-l-grid--6",
    children: items.map((item, i) => {
      const imageProps = (0,external_next_sanity_image_.useNextSanityImage)((client_default()), item.image);
      let backgroundStyles = {};
      backgroundStyles.backgroundImage = `url(${imageProps.src})`;

      if (item.backgroundSize) {
        backgroundStyles.backgroundSize = `${item.backgroundSize}%`;
      }

      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_flowRow_module_default()).step,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (bodystatic_flowRow_module_default()).image,
          style: backgroundStyles,
          children: i < 2 && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (bodystatic_flowRow_module_default()).arrow
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
          children: item.title
        })]
      }, item._key);
    })
  });
};

/* harmony default export */ const bodystatic_flowRow_bodystatic_flowRow = (bodystatic_flowRow);
// EXTERNAL MODULE: ./modules/bodystatic_splitTxtQuote/bodystatic-splitTxtQuote.module.scss
var bodystatic_splitTxtQuote_module = __webpack_require__(8386);
var bodystatic_splitTxtQuote_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_splitTxtQuote_module);
;// CONCATENATED MODULE: ./modules/bodystatic_splitTxtQuote/bodystatic_splitTxtQuote.js
function bodystatic_splitTxtQuote_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bodystatic_splitTxtQuote_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bodystatic_splitTxtQuote_ownKeys(Object(source), true).forEach(function (key) { bodystatic_splitTxtQuote_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bodystatic_splitTxtQuote_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bodystatic_splitTxtQuote_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const bodystatic_splitTxtQuote = props => {
  const {
    img_position,
    theme_color,
    heading,
    preheading,
    body,
    cta,
    quote,
    fullwidth_image
  } = props;
  const className = `bodystatic-splitTxtQuote umoja-l-grid--6 ${theme_color ? (bodystatic_splitTxtQuote_module_default())[`_${theme_color}`] : ''}`;
  const txtColClass = `${(bodystatic_splitTxtQuote_module_default()).copy} ${img_position == 'left' ? (bodystatic_splitTxtQuote_module_default())._right : (bodystatic_splitTxtQuote_module_default())._left}`;
  const quoteColClass = `${(bodystatic_splitTxtQuote_module_default()).quote} ${img_position == 'left' ? (bodystatic_splitTxtQuote_module_default())._left : (bodystatic_splitTxtQuote_module_default())._right}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: txtColClass,
      children: [preheading && /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: (bodystatic_splitTxtQuote_module_default()).preheading,
        children: preheading
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: heading
      }), /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
        className: (bodystatic_splitTxtQuote_module_default()).body,
        richText: body.richText,
        align: body.align
      }), cta.link && /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, bodystatic_splitTxtQuote_objectSpread({}, cta))]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${quoteColClass} ${fullwidth_image ? (bodystatic_splitTxtQuote_module_default()).__imageFull : ''}`,
      children: [quote.author_headshot && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodystatic_splitTxtQuote_module_default()).imageWrap,
        children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
          src: quote.author_headshot,
          layout: "fill"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (bodystatic_splitTxtQuote_module_default()).quote_content,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (bodystatic_splitTxtQuote_module_default()).quote_icon,
          children: "\u201C"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (bodystatic_splitTxtQuote_module_default()).quote_text,
          children: quote.quote_text
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (bodystatic_splitTxtQuote_module_default()).quote_citation,
          children: [quote.quote_author, ", ", quote.author_title]
        })]
      })]
    })]
  });
};

/* harmony default export */ const bodystatic_splitTxtQuote_bodystatic_splitTxtQuote = (bodystatic_splitTxtQuote);
// EXTERNAL MODULE: ./modules/bodymove_panel/bodymove-panel.module.scss
var bodymove_panel_module = __webpack_require__(9610);
var bodymove_panel_module_default = /*#__PURE__*/__webpack_require__.n(bodymove_panel_module);
;// CONCATENATED MODULE: ./modules/bodymove_panel/bodymove_panel.js







const bodymove_panel = props => {
  const {
    title,
    slides
  } = props;
  const {
    0: activeSlide,
    1: setActiveSlide
  } = (0,external_react_.useState)(0);

  const handleClick = e => {
    const active = parseInt(e.currentTarget.getAttribute('data-at'));
    setActiveSlide(active);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodymove-panel",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(bodymove_panel_module_default()).panels} umoja-l-grid--12`,
      children: [title && /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (bodymove_panel_module_default()).carouselTitle__mobile,
        children: title
      }), slides.map((slide, i) => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${(bodymove_panel_module_default()).panel} ${i == activeSlide ? (bodymove_panel_module_default()).active : ''}`,
          "data-at": i,
          children: [title && /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: (bodymove_panel_module_default()).carouselTitle,
            children: title
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (bodymove_panel_module_default()).panel_content,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: slide.title
            }), /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
              className: (bodymove_panel_module_default()).panel_body,
              richText: slide.body.richText,
              align: slide.body.align
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (bodymove_panel_module_default()).imageWrap,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
              src: slide.image,
              layout: "fill",
              objectFit: "cover"
            })
          })]
        }, slide._key);
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(bodymove_panel_module_default()).slidePanel} ${(bodymove_panel_module_default()).slidePanel__left} ${activeSlide == 0 ? (bodymove_panel_module_default()).slidePanel__hide : ''}`,
        onClick: handleClick,
        "data-at": activeSlide - 1
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(bodymove_panel_module_default()).slidePanel} ${(bodymove_panel_module_default()).slidePanel__right} ${activeSlide == slides.length - 1 ? (bodymove_panel_module_default()).slidePanel__hide : ''}`,
        onClick: handleClick,
        "data-at": activeSlide + 1
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodymove_panel_module_default()).nav,
      children: slides.map((slide, i) => {
        const slideNum = i + 1;
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
          className: `${(bodymove_panel_module_default()).nav_item} ${i == activeSlide ? (bodymove_panel_module_default()).active : ''}`,
          "data-at": i,
          onClick: handleClick,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: `0${slideNum}`
          }), " ", slide.title]
        }, slide._key);
      })
    })]
  });
};

/* harmony default export */ const bodymove_panel_bodymove_panel = (bodymove_panel);
// EXTERNAL MODULE: ./modules/bodystatic_punchyTxt/bodystatic-punchyTxt.module.scss
var bodystatic_punchyTxt_module = __webpack_require__(9242);
var bodystatic_punchyTxt_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_punchyTxt_module);
;// CONCATENATED MODULE: ./modules/bodystatic_punchyTxt/bodystatic_punchyTxt.js





const bodystatic_punchyTxt = props => {
  const {
    header,
    subheader
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodystatic-punchyTxt umoja-l-grid--12 umoja-l-grid-align--center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: `${(bodystatic_punchyTxt_module_default()).header} display-small`,
      children: header
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(bodystatic_punchyTxt_module_default()).dividerLine} divider-line`
    }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
      className: (bodystatic_punchyTxt_module_default()).subheader,
      children: subheader
    })]
  });
};

/* harmony default export */ const bodystatic_punchyTxt_bodystatic_punchyTxt = (bodystatic_punchyTxt);
// EXTERNAL MODULE: external "react-map-gl"
var external_react_map_gl_ = __webpack_require__(5508);
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_);
// EXTERNAL MODULE: ./modules/bodymove_map/bodymove-map.module.scss
var bodymove_map_module = __webpack_require__(9119);
var bodymove_map_module_default = /*#__PURE__*/__webpack_require__.n(bodymove_map_module);
;// CONCATENATED MODULE: ./modules/bodymove_map/bodymove_map.js
function bodymove_map_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bodymove_map_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bodymove_map_ownKeys(Object(source), true).forEach(function (key) { bodymove_map_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bodymove_map_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bodymove_map_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const bodymove_map = props => {
  const {
    title
  } = props;
  const {
    0: viewport,
    1: setViewport
  } = (0,external_react_.useState)(null);
  var data = [{
    coordinates: {
      longitude: -122.419532,
      latitude: 37.764734
    },
    properties: {
      city: "San Francisco",
      title: "HQ",
      FTE: "43"
    }
  }, {
    coordinates: {
      longitude: -83.9874039433637,
      latitude: 9.906011565912822
    },
    properties: {
      city: "San Jose",
      title: "R&D",
      FTE: "9"
    }
  }, {
    coordinates: {
      longitude: -73.56379755158342,
      latitude: 45.50312031084303
    },
    properties: {
      city: "Montreal",
      labelPosition: "right",
      title: "R&D",
      FTE: "16"
    }
  }, {
    coordinates: {
      longitude: 4.305060384762361,
      latitude: 52.07142235997321
    },
    properties: {
      city: "The Hague",
      labelPosition: "top-left",
      title: "Sales",
      FTE: "5"
    }
  }, {
    coordinates: {
      longitude: 32.291478511978895,
      latitude: 2.7722345953181695
    },
    properties: {
      city: "Gulu",
      labelPosition: "top-right",
      title: "Delivery",
      FTE: "2912 (Continental Africa)"
    }
  }, {
    coordinates: {
      longitude: 32.68958859888505,
      latitude: 0.4338761325135939
    },
    properties: {
      city: "Kampala",
      title: "Delivery",
      FTE: "2912 (Continental Africa)"
    }
  }, {
    coordinates: {
      longitude: 36.84447621185204,
      latitude: -1.209846650427977
    },
    properties: {
      city: "Nairobi",
      labelPosition: "right",
      title: "Delivery",
      FTE: "2912 (Continental Africa)"
    }
  }];
  (0,external_react_.useEffect)(() => {
    if (viewport == null) {
      const homeZoom = window.innerWidth <= 816 ? 0 : 1.4;
      const lat = window.innerWidth <= 816 ? 27.193714 : 45.50884;
      const long = window.innerWidth <= 816 ? -41.758265 : -73.58781;
      setViewport({
        width: '100%',
        height: 600,
        latitude: lat,
        longitude: long,
        zoom: homeZoom
      });
    }
  });

  const goToOffice = e => {
    const index = parseInt(e.currentTarget.getAttribute('data-at'));
    const office = data[index];
    setViewport(bodymove_map_objectSpread(bodymove_map_objectSpread({}, viewport), {}, {
      longitude: office.coordinates.longitude,
      latitude: office.coordinates.latitude,
      zoom: 14,
      transitionDuration: 500,
      transitionInterpolator: new external_react_map_gl_.FlyToInterpolator()
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodymove-map umoja-l-grid--12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: (bodymove_map_module_default()).title,
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodymove_map_module_default()).wrapper,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (bodymove_map_module_default()).map,
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_map_gl_default()), bodymove_map_objectSpread(bodymove_map_objectSpread({}, viewport), {}, {
          attributionControl: false,
          mapStyle: "mapbox://styles/aesimpson/ckrmovdwb2j2r17lqxf2p2lw5",
          mapboxApiAccessToken: "pk.eyJ1IjoiYWVzaW1wc29uIiwiYSI6ImNrcm1vdGM3eDd2ZTMycHBheTEwajhqcjMifQ.nHuWTNRfeQ83cdMK2qJnpw",
          onViewportChange: nextViewport => setViewport(nextViewport),
          children: data.map((office, i) => {
            const {
              labelPosition
            } = office.properties;
            return /*#__PURE__*/jsx_runtime_.jsx(external_react_map_gl_.Marker, {
              latitude: office.coordinates.latitude,
              longitude: office.coordinates.longitude,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (bodymove_map_module_default()).marker,
                onClick: goToOffice,
                "data-at": i,
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: `${(bodymove_map_module_default()).marker_label} ${labelPosition ? (bodymove_map_module_default())[labelPosition] : ''}`,
                  children: office.properties.city
                })
              })
            }, i);
          })
        }))
      })
    })]
  });
};

/* harmony default export */ const bodymove_map_bodymove_map = (bodymove_map);
// EXTERNAL MODULE: ./modules/bodymove_sfMap/bodymove-sfMap.module.scss
var bodymove_sfMap_module = __webpack_require__(9492);
var bodymove_sfMap_module_default = /*#__PURE__*/__webpack_require__.n(bodymove_sfMap_module);
;// CONCATENATED MODULE: ./modules/bodymove_sfMap/bodymove_sfMap.js
function bodymove_sfMap_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bodymove_sfMap_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bodymove_sfMap_ownKeys(Object(source), true).forEach(function (key) { bodymove_sfMap_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bodymove_sfMap_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bodymove_sfMap_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const bodymove_sfMap = props => {
  const {
    title,
    address
  } = props;
  const {
    0: viewport,
    1: setViewport
  } = (0,external_react_.useState)(null);
  const {
    0: showPopup,
    1: togglePopup
  } = (0,external_react_.useState)(false);
  const navControlStyle = {
    right: 15,
    top: 10
  };
  var data = [{
    coordinates: {
      longitude: -122.419532,
      latitude: 37.764734
    }
  }];
  (0,external_react_.useEffect)(() => {
    if (viewport == null) {
      setViewport({
        width: '100%',
        height: 470,
        latitude: 37.764734,
        longitude: -122.419532,
        zoom: 11.5
      });
    }
  });

  const goToOffice = e => {
    const index = parseInt(e.currentTarget.getAttribute('data-at'));
    const office = data[index];
    setViewport(bodymove_sfMap_objectSpread(bodymove_sfMap_objectSpread({}, viewport), {}, {
      longitude: office.coordinates.longitude,
      latitude: office.coordinates.latitude,
      zoom: 11.5,
      transitionDuration: 500,
      transitionInterpolator: new external_react_map_gl_.FlyToInterpolator()
    }));
  };

  const showWorld = () => {
    setViewport(bodymove_sfMap_objectSpread(bodymove_sfMap_objectSpread({}, viewport), {}, {
      longitude: -24.547817,
      latitude: 36.980944,
      zoom: 1,
      transitionDuration: 1000,
      transitionInterpolator: new external_react_map_gl_.FlyToInterpolator()
    }));
  };

  const handlePopUp = e => {
    goToOffice(e);
    togglePopup(!showPopup);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `bodymove-sfMap umoja-l-grid--12 ${(bodymove_sfMap_module_default()).panel}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (bodymove_sfMap_module_default()).address,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: (bodymove_sfMap_module_default()).title,
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(richText_field, {
        className: (bodymove_sfMap_module_default()).body,
        richText: address.richText
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodymove_sfMap_module_default()).map,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_map_gl_default()), bodymove_sfMap_objectSpread(bodymove_sfMap_objectSpread({}, viewport), {}, {
        attributionControl: false,
        mapStyle: "mapbox://styles/dwelcome/ckfxhibcm08vf1aoaxw0c2nj5",
        mapboxApiAccessToken: "pk.eyJ1IjoiZHdlbGNvbWUiLCJhIjoiY2p6MXNkdmZiMGF3OTNibzFoMm1ocG05cSJ9.xZ8njmOGIVM4sLRiit4xdg",
        onViewportChange: nextViewport => setViewport(nextViewport),
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_map_gl_.NavigationControl, {
          showCompass: false,
          style: navControlStyle
        }), showPopup && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_map_gl_.Popup, {
          latitude: 37.7816218704741,
          longitude: -122.414532,
          closeButton: true,
          closeOnClick: false,
          onClose: () => togglePopup(false),
          anchor: "top",
          className: (bodymove_sfMap_module_default()).marker_popup,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (bodymove_sfMap_module_default()).marker_popup_city,
            children: "Sama HQ"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "San Francisco, CA"
          })]
        }), data.map((office, i) => {
          return /*#__PURE__*/jsx_runtime_.jsx(external_react_map_gl_.Marker, {
            latitude: office.coordinates.latitude,
            longitude: office.coordinates.longitude,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (bodymove_sfMap_module_default()).marker,
              onClick: handlePopUp,
              "data-at": i,
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: (bodymove_sfMap_module_default()).marker_label
              })
            })
          }, i);
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (bodymove_sfMap_module_default()).globe,
          onClick: showWorld
        })]
      }))
    })]
  });
};

/* harmony default export */ const bodymove_sfMap_bodymove_sfMap = (bodymove_sfMap);
;// CONCATENATED MODULE: ./modules/index.js




































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
	"container-lg": "bodymove-featureWindow_container-lg__u-ofo",
	"container-med": "bodymove-featureWindow_container-med__RjI1d",
	"container-sm": "bodymove-featureWindow_container-sm__3L-Hy",
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

/***/ 9119:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodymove-map_umoja-u-pad-1__3xeGt",
	"umoja-u-pad-t--0": "bodymove-map_umoja-u-pad-t--0__2yC9v",
	"umoja-u-pad-b--0": "bodymove-map_umoja-u-pad-b--0__3abEx",
	"umoja-l-grid--12": "bodymove-map_umoja-l-grid--12__1EFqC",
	"umoja-l-grid--6": "bodymove-map_umoja-l-grid--6__1rJPY",
	"umoja-l-page-width": "bodymove-map_umoja-l-page-width__3hN4H",
	"umoja-l-grid-section": "bodymove-map_umoja-l-grid-section__6BgyD",
	"umoja-l-grid-gap--row-1": "bodymove-map_umoja-l-grid-gap--row-1__1EuDh",
	"umoja-l-grid-gap--row-2": "bodymove-map_umoja-l-grid-gap--row-2__bRSZo",
	"umoja-l-grid-gap--row-3": "bodymove-map_umoja-l-grid-gap--row-3__3cB7Q",
	"umoja-l-grid-align--center": "bodymove-map_umoja-l-grid-align--center__29cQC",
	"umoja-l-grid-align--base": "bodymove-map_umoja-l-grid-align--base__2GKwu",
	"title": "bodymove-map_title__1ZVGa",
	"wrapper": "bodymove-map_wrapper__zLd9u",
	"map": "bodymove-map_map__2zmji",
	"marker": "bodymove-map_marker__3IYs0",
	"marker_label": "bodymove-map_marker_label__2Np0v",
	"right": "bodymove-map_right__3mZB5",
	"top-left": "bodymove-map_top-left__2ES6z",
	"top-right": "bodymove-map_top-right__2NWfu"
};


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
	"umoja-l-grid-gap--row-1": "bodymove-panel_umoja-l-grid-gap--row-1__1sN8c",
	"umoja-l-grid-gap--row-2": "bodymove-panel_umoja-l-grid-gap--row-2__1iV2F",
	"umoja-l-grid-gap--row-3": "bodymove-panel_umoja-l-grid-gap--row-3__2Be-g",
	"umoja-l-grid-align--center": "bodymove-panel_umoja-l-grid-align--center__1sVv6",
	"umoja-l-grid-align--base": "bodymove-panel_umoja-l-grid-align--base__2lUl6",
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


/***/ }),

/***/ 9492:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodymove-sfMap_umoja-u-pad-1__2BDHU",
	"umoja-u-pad-t--0": "bodymove-sfMap_umoja-u-pad-t--0__35ctK",
	"umoja-u-pad-b--0": "bodymove-sfMap_umoja-u-pad-b--0__3hdut",
	"umoja-l-grid--12": "bodymove-sfMap_umoja-l-grid--12__VCp1w",
	"umoja-l-grid--6": "bodymove-sfMap_umoja-l-grid--6__2fuQd",
	"umoja-l-page-width": "bodymove-sfMap_umoja-l-page-width__2WklP",
	"umoja-l-grid-section": "bodymove-sfMap_umoja-l-grid-section__1P5oc",
	"umoja-l-grid-gap--row-1": "bodymove-sfMap_umoja-l-grid-gap--row-1__3Cx4D",
	"umoja-l-grid-gap--row-2": "bodymove-sfMap_umoja-l-grid-gap--row-2__O5vkq",
	"umoja-l-grid-gap--row-3": "bodymove-sfMap_umoja-l-grid-gap--row-3__14FgD",
	"umoja-l-grid-align--center": "bodymove-sfMap_umoja-l-grid-align--center__d1BB3",
	"umoja-l-grid-align--base": "bodymove-sfMap_umoja-l-grid-align--base__1pK3W",
	"panel": "bodymove-sfMap_panel__3op8F",
	"address": "bodymove-sfMap_address__1_ch7",
	"map": "bodymove-sfMap_map__2ZK_W",
	"marker": "bodymove-sfMap_marker__3g2LR",
	"marker_popup": "bodymove-sfMap_marker_popup__2-WQm",
	"marker_popup_city": "bodymove-sfMap_marker_popup_city__2VI4z",
	"globe": "bodymove-sfMap_globe__39jA6"
};


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
	"body": "bodystatic-cardImg_body__192kF",
	"_four": "bodystatic-cardImg__four__15uIz"
};


/***/ }),

/***/ 152:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-centerPanel_umoja-u-pad-1__3g0NJ",
	"umoja-u-pad-t--0": "bodystatic-centerPanel_umoja-u-pad-t--0__2gh_b",
	"umoja-u-pad-b--0": "bodystatic-centerPanel_umoja-u-pad-b--0__1VYKM",
	"umoja-l-grid--12": "bodystatic-centerPanel_umoja-l-grid--12__3lSZh",
	"umoja-l-grid--6": "bodystatic-centerPanel_umoja-l-grid--6__rtNVq",
	"umoja-l-page-width": "bodystatic-centerPanel_umoja-l-page-width__WNn1M",
	"umoja-l-grid-section": "bodystatic-centerPanel_umoja-l-grid-section__GEH1J",
	"umoja-l-grid-gap--row-1": "bodystatic-centerPanel_umoja-l-grid-gap--row-1__3mUkg",
	"umoja-l-grid-gap--row-2": "bodystatic-centerPanel_umoja-l-grid-gap--row-2__3ps8Q",
	"umoja-l-grid-gap--row-3": "bodystatic-centerPanel_umoja-l-grid-gap--row-3__10Zog",
	"umoja-l-grid-align--center": "bodystatic-centerPanel_umoja-l-grid-align--center__3otYF",
	"umoja-l-grid-align--base": "bodystatic-centerPanel_umoja-l-grid-align--base__6vD2j",
	"panel": "bodystatic-centerPanel_panel__3sv_H"
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

/***/ 3786:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-flowCompare_umoja-u-pad-1__4Z4-R",
	"umoja-u-pad-t--0": "bodystatic-flowCompare_umoja-u-pad-t--0__1bKdR",
	"umoja-u-pad-b--0": "bodystatic-flowCompare_umoja-u-pad-b--0__3SOXz",
	"umoja-l-grid--12": "bodystatic-flowCompare_umoja-l-grid--12__oVe7L",
	"umoja-l-grid--6": "bodystatic-flowCompare_umoja-l-grid--6__1qKIg",
	"umoja-l-page-width": "bodystatic-flowCompare_umoja-l-page-width__1bkx3",
	"umoja-l-grid-section": "bodystatic-flowCompare_umoja-l-grid-section__2SZ1v",
	"umoja-l-grid-gap--row-1": "bodystatic-flowCompare_umoja-l-grid-gap--row-1__1mTmM",
	"umoja-l-grid-gap--row-2": "bodystatic-flowCompare_umoja-l-grid-gap--row-2__1u6dl",
	"umoja-l-grid-gap--row-3": "bodystatic-flowCompare_umoja-l-grid-gap--row-3__w3nR_",
	"umoja-l-grid-align--center": "bodystatic-flowCompare_umoja-l-grid-align--center__2iGl4",
	"umoja-l-grid-align--base": "bodystatic-flowCompare_umoja-l-grid-align--base__Dhy6K",
	"row": "bodystatic-flowCompare_row__TDArN",
	"item": "bodystatic-flowCompare_item__aqk7_",
	"item__right": "bodystatic-flowCompare_item__right__mOLE3",
	"item-right": "bodystatic-flowCompare_item-right__2yQJ8",
	"gradient": "bodystatic-flowCompare_gradient__3NZ_9",
	"gradient__topRight": "bodystatic-flowCompare_gradient__topRight__2hQv2",
	"gradient__topLeft": "bodystatic-flowCompare_gradient__topLeft__ghdJq",
	"gradient__bottomLeft": "bodystatic-flowCompare_gradient__bottomLeft__dg5mz",
	"gradient__bottomRight": "bodystatic-flowCompare_gradient__bottomRight__21H8c",
	"vs": "bodystatic-flowCompare_vs__14OwI",
	"vs_circle": "bodystatic-flowCompare_vs_circle__xTfwO",
	"arrow": "bodystatic-flowCompare_arrow__1pfOx",
	"conclusion": "bodystatic-flowCompare_conclusion__1bM4B"
};


/***/ }),

/***/ 8025:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-flowRow_umoja-u-pad-1__2xeom",
	"umoja-u-pad-t--0": "bodystatic-flowRow_umoja-u-pad-t--0__2x06B",
	"umoja-u-pad-b--0": "bodystatic-flowRow_umoja-u-pad-b--0__2Cap3",
	"umoja-l-grid--12": "bodystatic-flowRow_umoja-l-grid--12__PX3z2",
	"umoja-l-grid--6": "bodystatic-flowRow_umoja-l-grid--6__3yItI",
	"umoja-l-page-width": "bodystatic-flowRow_umoja-l-page-width__2lqZV",
	"umoja-l-grid-section": "bodystatic-flowRow_umoja-l-grid-section__2D-oN",
	"umoja-l-grid-gap--row-1": "bodystatic-flowRow_umoja-l-grid-gap--row-1__1e1u5",
	"umoja-l-grid-gap--row-2": "bodystatic-flowRow_umoja-l-grid-gap--row-2__2lx4v",
	"umoja-l-grid-gap--row-3": "bodystatic-flowRow_umoja-l-grid-gap--row-3__2HOOB",
	"umoja-l-grid-align--center": "bodystatic-flowRow_umoja-l-grid-align--center__2vYiq",
	"umoja-l-grid-align--base": "bodystatic-flowRow_umoja-l-grid-align--base__3hoVN",
	"step": "bodystatic-flowRow_step__2nhT9",
	"image": "bodystatic-flowRow_image__2YV8P",
	"arrow": "bodystatic-flowRow_arrow__1MpII"
};


/***/ }),

/***/ 4463:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-galleryGrid_umoja-u-pad-1__rK05t",
	"umoja-u-pad-t--0": "bodystatic-galleryGrid_umoja-u-pad-t--0__XSDtk",
	"umoja-u-pad-b--0": "bodystatic-galleryGrid_umoja-u-pad-b--0__2h7kJ",
	"umoja-l-grid--12": "bodystatic-galleryGrid_umoja-l-grid--12__24nWF",
	"umoja-l-grid--6": "bodystatic-galleryGrid_umoja-l-grid--6__2KZ7s",
	"umoja-l-page-width": "bodystatic-galleryGrid_umoja-l-page-width__2mwUe",
	"umoja-l-grid-section": "bodystatic-galleryGrid_umoja-l-grid-section__1q1F5",
	"umoja-l-grid-gap--row-1": "bodystatic-galleryGrid_umoja-l-grid-gap--row-1__1675w",
	"umoja-l-grid-gap--row-2": "bodystatic-galleryGrid_umoja-l-grid-gap--row-2__g9S0G",
	"umoja-l-grid-gap--row-3": "bodystatic-galleryGrid_umoja-l-grid-gap--row-3__176RQ",
	"umoja-l-grid-align--center": "bodystatic-galleryGrid_umoja-l-grid-align--center__TslZ5",
	"umoja-l-grid-align--base": "bodystatic-galleryGrid_umoja-l-grid-align--base__1Ym5u",
	"item": "bodystatic-galleryGrid_item__25uSd",
	"imgWrap": "bodystatic-galleryGrid_imgWrap__1kr4Z",
	"item__link": "bodystatic-galleryGrid_item__link__2d6ow",
	"_four": "bodystatic-galleryGrid__four__3BUSH"
};


/***/ }),

/***/ 3635:
/***/ ((module) => {

// Exports
module.exports = {
	"preheadline": "bodystatic-headSubCta_preheadline__1vU_N",
	"headline": "bodystatic-headSubCta_headline__3tPhe",
	"subheadline": "bodystatic-headSubCta_subheadline__2tvb0",
	"cta": "bodystatic-headSubCta_cta__3EKCf"
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
	"body": "bodystatic-iconCopy_body__lxosP",
	"_center": "bodystatic-iconCopy__center__ZUlkU",
	"_responsive": "bodystatic-iconCopy__responsive__DqA13",
	"iconWrap": "bodystatic-iconCopy_iconWrap__2lArm",
	"_three": "bodystatic-iconCopy__three__x46IE"
};


/***/ }),

/***/ 5005:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-iconList_umoja-u-pad-1__wz52G",
	"umoja-u-pad-t--0": "bodystatic-iconList_umoja-u-pad-t--0__eotpn",
	"umoja-u-pad-b--0": "bodystatic-iconList_umoja-u-pad-b--0__1-KWR",
	"umoja-l-grid--12": "bodystatic-iconList_umoja-l-grid--12__1ea91",
	"umoja-l-grid--6": "bodystatic-iconList_umoja-l-grid--6__2EvXg",
	"umoja-l-page-width": "bodystatic-iconList_umoja-l-page-width__Vu7UY",
	"umoja-l-grid-section": "bodystatic-iconList_umoja-l-grid-section__ngA8V",
	"umoja-l-grid-gap--row-1": "bodystatic-iconList_umoja-l-grid-gap--row-1__3X0nf",
	"umoja-l-grid-gap--row-2": "bodystatic-iconList_umoja-l-grid-gap--row-2__utGfL",
	"umoja-l-grid-gap--row-3": "bodystatic-iconList_umoja-l-grid-gap--row-3__BKrOI",
	"umoja-l-grid-align--center": "bodystatic-iconList_umoja-l-grid-align--center__cU9_5",
	"umoja-l-grid-align--base": "bodystatic-iconList_umoja-l-grid-align--base__34N9s",
	"icon": "bodystatic-iconList_icon__1HhdM",
	"_three": "bodystatic-iconList__three__o8lHH"
};


/***/ }),

/***/ 9334:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "bodystatic-leadTeam_row__1TS4k",
	"row__top": "bodystatic-leadTeam_row__top__3NQkY",
	"avatar": "bodystatic-leadTeam_avatar__2edhP",
	"imageWrap": "bodystatic-leadTeam_imageWrap__1tGq4"
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

/***/ 4024:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-panelAvatarTxt_umoja-u-pad-1__dsFU0",
	"umoja-u-pad-t--0": "bodystatic-panelAvatarTxt_umoja-u-pad-t--0__3VjNW",
	"umoja-u-pad-b--0": "bodystatic-panelAvatarTxt_umoja-u-pad-b--0__3Ks2g",
	"umoja-l-grid--12": "bodystatic-panelAvatarTxt_umoja-l-grid--12__3Kr_Y",
	"umoja-l-grid--6": "bodystatic-panelAvatarTxt_umoja-l-grid--6__eVJW_",
	"umoja-l-page-width": "bodystatic-panelAvatarTxt_umoja-l-page-width__1PbMl",
	"umoja-l-grid-section": "bodystatic-panelAvatarTxt_umoja-l-grid-section__1yT4T",
	"umoja-l-grid-gap--row-1": "bodystatic-panelAvatarTxt_umoja-l-grid-gap--row-1__kNmFt",
	"umoja-l-grid-gap--row-2": "bodystatic-panelAvatarTxt_umoja-l-grid-gap--row-2__21hgn",
	"umoja-l-grid-gap--row-3": "bodystatic-panelAvatarTxt_umoja-l-grid-gap--row-3__1OivN",
	"umoja-l-grid-align--center": "bodystatic-panelAvatarTxt_umoja-l-grid-align--center__1HyoX",
	"umoja-l-grid-align--base": "bodystatic-panelAvatarTxt_umoja-l-grid-align--base__2bWQE",
	"dotPanel": "bodystatic-panelAvatarTxt_dotPanel__116BM",
	"bottomPanel": "bodystatic-panelAvatarTxt_bottomPanel__1uRmQ",
	"topPanel": "bodystatic-panelAvatarTxt_topPanel__2QVGi",
	"imageWrap": "bodystatic-panelAvatarTxt_imageWrap__2DYkE"
};


/***/ }),

/***/ 4724:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-panelColumns_umoja-u-pad-1__ifnDw",
	"umoja-u-pad-t--0": "bodystatic-panelColumns_umoja-u-pad-t--0__4844F",
	"umoja-u-pad-b--0": "bodystatic-panelColumns_umoja-u-pad-b--0__3Se1n",
	"umoja-l-grid--12": "bodystatic-panelColumns_umoja-l-grid--12__1kmiR",
	"umoja-l-grid--6": "bodystatic-panelColumns_umoja-l-grid--6__2RzIZ",
	"umoja-l-page-width": "bodystatic-panelColumns_umoja-l-page-width__1-lmB",
	"umoja-l-grid-section": "bodystatic-panelColumns_umoja-l-grid-section__seZR_",
	"umoja-l-grid-gap--row-1": "bodystatic-panelColumns_umoja-l-grid-gap--row-1__2OCRu",
	"umoja-l-grid-gap--row-2": "bodystatic-panelColumns_umoja-l-grid-gap--row-2__t4qiE",
	"umoja-l-grid-gap--row-3": "bodystatic-panelColumns_umoja-l-grid-gap--row-3__6-ttf",
	"umoja-l-grid-align--center": "bodystatic-panelColumns_umoja-l-grid-align--center__iuig1",
	"umoja-l-grid-align--base": "bodystatic-panelColumns_umoja-l-grid-align--base__G7PEm",
	"panel": "bodystatic-panelColumns_panel__16_vX",
	"panel_imgWrap": "bodystatic-panelColumns_panel_imgWrap__1lzlt",
	"panel_copy": "bodystatic-panelColumns_panel_copy__22vMr"
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

/***/ 9242:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-punchyTxt_umoja-u-pad-1__35lfl",
	"umoja-u-pad-t--0": "bodystatic-punchyTxt_umoja-u-pad-t--0__3L9oG",
	"umoja-u-pad-b--0": "bodystatic-punchyTxt_umoja-u-pad-b--0__2zlL0",
	"umoja-l-grid--12": "bodystatic-punchyTxt_umoja-l-grid--12__2uPs3",
	"umoja-l-grid--6": "bodystatic-punchyTxt_umoja-l-grid--6__smfVA",
	"umoja-l-page-width": "bodystatic-punchyTxt_umoja-l-page-width__3MQts",
	"umoja-l-grid-section": "bodystatic-punchyTxt_umoja-l-grid-section__3c2eu",
	"umoja-l-grid-gap--row-1": "bodystatic-punchyTxt_umoja-l-grid-gap--row-1__3_iBK",
	"umoja-l-grid-gap--row-2": "bodystatic-punchyTxt_umoja-l-grid-gap--row-2__2mTEX",
	"umoja-l-grid-gap--row-3": "bodystatic-punchyTxt_umoja-l-grid-gap--row-3__wC2cI",
	"umoja-l-grid-align--center": "bodystatic-punchyTxt_umoja-l-grid-align--center__3vg8Q",
	"umoja-l-grid-align--base": "bodystatic-punchyTxt_umoja-l-grid-align--base__2RApe",
	"header": "bodystatic-punchyTxt_header__Yf5fQ",
	"dividerLine": "bodystatic-punchyTxt_dividerLine__18r92",
	"subheader": "bodystatic-punchyTxt_subheader__XHlNk"
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
	"container-lg": "bodystatic-splitTxtImg_container-lg__1t2KJ",
	"image": "bodystatic-splitTxtImg_image__10Maa",
	"container-med": "bodystatic-splitTxtImg_container-med__X9DCL",
	"container-sm": "bodystatic-splitTxtImg_container-sm__RZ3G0",
	"copy": "bodystatic-splitTxtImg_copy__2mTza",
	"subheading": "bodystatic-splitTxtImg_subheading__2LASO",
	"body": "bodystatic-splitTxtImg_body__2xaPa",
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

/***/ 8386:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-splitTxtQuote_umoja-u-pad-1__2_QMG",
	"umoja-u-pad-t--0": "bodystatic-splitTxtQuote_umoja-u-pad-t--0__1unwV",
	"umoja-u-pad-b--0": "bodystatic-splitTxtQuote_umoja-u-pad-b--0__hyCiw",
	"umoja-l-grid--12": "bodystatic-splitTxtQuote_umoja-l-grid--12__LvAc2",
	"umoja-l-grid--6": "bodystatic-splitTxtQuote_umoja-l-grid--6__2q-wC",
	"umoja-l-page-width": "bodystatic-splitTxtQuote_umoja-l-page-width__GjwJ2",
	"umoja-l-grid-section": "bodystatic-splitTxtQuote_umoja-l-grid-section__3pcdE",
	"umoja-l-grid-gap--row-1": "bodystatic-splitTxtQuote_umoja-l-grid-gap--row-1__38ONR",
	"umoja-l-grid-gap--row-2": "bodystatic-splitTxtQuote_umoja-l-grid-gap--row-2__2qdrV",
	"umoja-l-grid-gap--row-3": "bodystatic-splitTxtQuote_umoja-l-grid-gap--row-3__3Lwbj",
	"umoja-l-grid-align--center": "bodystatic-splitTxtQuote_umoja-l-grid-align--center__oQ7zS",
	"umoja-l-grid-align--base": "bodystatic-splitTxtQuote_umoja-l-grid-align--base__30l6l",
	"copy": "bodystatic-splitTxtQuote_copy__2pDca",
	"preheading": "bodystatic-splitTxtQuote_preheading__zD2v4",
	"body": "bodystatic-splitTxtQuote_body__65HD8",
	"quote": "bodystatic-splitTxtQuote_quote__1DtLp",
	"quote_content": "bodystatic-splitTxtQuote_quote_content__ivgOt",
	"quote_icon": "bodystatic-splitTxtQuote_quote_icon__3G9ZF",
	"quote_text": "bodystatic-splitTxtQuote_quote_text__3eIZh",
	"quote_citation": "bodystatic-splitTxtQuote_quote_citation__32O_X",
	"imageWrap": "bodystatic-splitTxtQuote_imageWrap__2KjxU",
	"__imageFull": "bodystatic-splitTxtQuote___imageFull__11xDM",
	"_left": "bodystatic-splitTxtQuote__left__1WLCp",
	"_right": "bodystatic-splitTxtQuote__right__1QdRd",
	"_green-yellow": "bodystatic-splitTxtQuote__green-yellow__3fvnM",
	"_purple": "bodystatic-splitTxtQuote__purple__1HTPP",
	"_green": "bodystatic-splitTxtQuote__green__2G6nn",
	"_red_orange": "bodystatic-splitTxtQuote__red_orange__gGDCZ",
	"_blue": "bodystatic-splitTxtQuote__blue__36bfP",
	"_pink_red": "bodystatic-splitTxtQuote__pink_red__3rlW6",
	"_blue_purple": "bodystatic-splitTxtQuote__blue_purple__1PH6L"
};


/***/ }),

/***/ 1083:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-table_umoja-u-pad-1__12Icy",
	"umoja-u-pad-t--0": "bodystatic-table_umoja-u-pad-t--0__3TTcy",
	"umoja-u-pad-b--0": "bodystatic-table_umoja-u-pad-b--0__9I77w",
	"umoja-l-grid--12": "bodystatic-table_umoja-l-grid--12__3vwHy",
	"umoja-l-grid--6": "bodystatic-table_umoja-l-grid--6__1Oj1Z",
	"umoja-l-page-width": "bodystatic-table_umoja-l-page-width__1ED02",
	"umoja-l-grid-section": "bodystatic-table_umoja-l-grid-section__2KDXT",
	"umoja-l-grid-gap--row-1": "bodystatic-table_umoja-l-grid-gap--row-1__Zqfa4",
	"umoja-l-grid-gap--row-2": "bodystatic-table_umoja-l-grid-gap--row-2__1E8ly",
	"umoja-l-grid-gap--row-3": "bodystatic-table_umoja-l-grid-gap--row-3__HRoT8",
	"umoja-l-grid-align--center": "bodystatic-table_umoja-l-grid-align--center__FR7lz",
	"umoja-l-grid-align--base": "bodystatic-table_umoja-l-grid-align--base__M6UuH",
	"table": "bodystatic-table_table__3BT-E",
	"btn--secondary": "bodystatic-table_btn--secondary__3pi05",
	"btn__text": "bodystatic-table_btn__text__35iqd",
	"row_cell_list": "bodystatic-table_row_cell_list__2o50i",
	"row_cell_list_content": "bodystatic-table_row_cell_list_content__2-erg",
	"row_cell_list__large": "bodystatic-table_row_cell_list__large__2QnlC"
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
	"tabContent": "bodystatic-tabs_tabContent__38szV",
	"imgWrap": "bodystatic-tabs_imgWrap___3qu-"
};


/***/ }),

/***/ 3653:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-timeline_umoja-u-pad-1__16Mdw",
	"umoja-u-pad-t--0": "bodystatic-timeline_umoja-u-pad-t--0__3zn8U",
	"umoja-u-pad-b--0": "bodystatic-timeline_umoja-u-pad-b--0__1zVbI",
	"umoja-l-grid--12": "bodystatic-timeline_umoja-l-grid--12__2oCiI",
	"umoja-l-grid--6": "bodystatic-timeline_umoja-l-grid--6__3XNdw",
	"umoja-l-page-width": "bodystatic-timeline_umoja-l-page-width__1AKgb",
	"umoja-l-grid-section": "bodystatic-timeline_umoja-l-grid-section___uQoP",
	"umoja-l-grid-gap--row-1": "bodystatic-timeline_umoja-l-grid-gap--row-1__36gfF",
	"umoja-l-grid-gap--row-2": "bodystatic-timeline_umoja-l-grid-gap--row-2__BSIKP",
	"umoja-l-grid-gap--row-3": "bodystatic-timeline_umoja-l-grid-gap--row-3__1TkV-",
	"umoja-l-grid-align--center": "bodystatic-timeline_umoja-l-grid-align--center__2PkGH",
	"umoja-l-grid-align--base": "bodystatic-timeline_umoja-l-grid-align--base__UO3l9",
	"wrapper": "bodystatic-timeline_wrapper__9-bBj",
	"row": "bodystatic-timeline_row__1dGBW",
	"center": "bodystatic-timeline_center__2yNaL",
	"bookends": "bodystatic-timeline_bookends__yWgvI",
	"bookends_top": "bodystatic-timeline_bookends_top__Dk20F",
	"bookends_bottom": "bodystatic-timeline_bookends_bottom__BUxMy",
	"copy": "bodystatic-timeline_copy__1jPku",
	"ball": "bodystatic-timeline_ball__2iugA",
	"ball_wrapper": "bodystatic-timeline_ball_wrapper__2tJQh",
	"ball_wrapper__left": "bodystatic-timeline_ball_wrapper__left__3jd8N",
	"ball_wrapper__right": "bodystatic-timeline_ball_wrapper__right__1HXo_",
	"year": "bodystatic-timeline_year__22iKx"
};


/***/ }),

/***/ 932:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-vidCenter_umoja-u-pad-1__2fORc",
	"umoja-u-pad-t--0": "bodystatic-vidCenter_umoja-u-pad-t--0__n-0HV",
	"umoja-u-pad-b--0": "bodystatic-vidCenter_umoja-u-pad-b--0__2qql4",
	"umoja-l-grid--12": "bodystatic-vidCenter_umoja-l-grid--12__3w1xn",
	"umoja-l-grid--6": "bodystatic-vidCenter_umoja-l-grid--6__18aP4",
	"umoja-l-page-width": "bodystatic-vidCenter_umoja-l-page-width__2kQwc",
	"umoja-l-grid-section": "bodystatic-vidCenter_umoja-l-grid-section__QfVkz",
	"umoja-l-grid-gap--row-1": "bodystatic-vidCenter_umoja-l-grid-gap--row-1__1er4L",
	"umoja-l-grid-gap--row-2": "bodystatic-vidCenter_umoja-l-grid-gap--row-2__1kg0w",
	"umoja-l-grid-gap--row-3": "bodystatic-vidCenter_umoja-l-grid-gap--row-3__1FnG_",
	"umoja-l-grid-align--center": "bodystatic-vidCenter_umoja-l-grid-align--center__3gSB-",
	"umoja-l-grid-align--base": "bodystatic-vidCenter_umoja-l-grid-align--base__35FYC",
	"container-lg": "bodystatic-vidCenter_container-lg__1IA6b",
	"videoWrapper": "bodystatic-vidCenter_videoWrapper__3AzT4",
	"container-med": "bodystatic-vidCenter_container-med__2T-UY",
	"container-sm": "bodystatic-vidCenter_container-sm__2DAUr",
	"video": "bodystatic-vidCenter_video__24ohu"
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
	"body": "hero-centertxt_body__2J6HW",
	"tagline": "hero-centertxt_tagline__2kA_Y"
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
	"headline": "hero-home_headline__2r4c0",
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
	"preheadline": "hero-splittxtimg_preheadline__3Ikgm",
	"imgWrapper": "hero-splittxtimg_imgWrapper__XL8hm"
};


/***/ }),

/***/ 240:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "hero-splittxtimg-tall_umoja-u-pad-1__Nwtm8",
	"umoja-u-pad-t--0": "hero-splittxtimg-tall_umoja-u-pad-t--0__3cTuc",
	"umoja-u-pad-b--0": "hero-splittxtimg-tall_umoja-u-pad-b--0__WoW5X",
	"umoja-l-grid--12": "hero-splittxtimg-tall_umoja-l-grid--12__1Buha",
	"umoja-l-grid--6": "hero-splittxtimg-tall_umoja-l-grid--6__28iSN",
	"umoja-l-page-width": "hero-splittxtimg-tall_umoja-l-page-width__3vGZJ",
	"umoja-l-grid-section": "hero-splittxtimg-tall_umoja-l-grid-section__1yWgu",
	"umoja-l-grid-gap--row-1": "hero-splittxtimg-tall_umoja-l-grid-gap--row-1__1J5qD",
	"umoja-l-grid-gap--row-2": "hero-splittxtimg-tall_umoja-l-grid-gap--row-2__18dQI",
	"umoja-l-grid-gap--row-3": "hero-splittxtimg-tall_umoja-l-grid-gap--row-3__3iNcL",
	"umoja-l-grid-align--center": "hero-splittxtimg-tall_umoja-l-grid-align--center__zFD2r",
	"umoja-l-grid-align--base": "hero-splittxtimg-tall_umoja-l-grid-align--base__8h_p4",
	"copy": "hero-splittxtimg-tall_copy__AobDg",
	"copyWrapper": "hero-splittxtimg-tall_copyWrapper__2lq4W",
	"preheadline": "hero-splittxtimg-tall_preheadline__3F8XV",
	"buttonRow": "hero-splittxtimg-tall_buttonRow__3DjSU",
	"imageColumn": "hero-splittxtimg-tall_imageColumn__1xcXS",
	"imageWrapper": "hero-splittxtimg-tall_imageWrapper__2gTxY",
	"imageGradient": "hero-splittxtimg-tall_imageGradient__2engX"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;
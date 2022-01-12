exports.id = 7350;
exports.ids = [7350];
exports.modules = {

/***/ 7350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-inlinesvg"
var external_react_inlinesvg_ = __webpack_require__(7051);
var external_react_inlinesvg_default = /*#__PURE__*/__webpack_require__.n(external_react_inlinesvg_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/footer/footer.module.scss
var footer_module = __webpack_require__(1146);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./components/textfield/textfield.module.scss
var textfield_module = __webpack_require__(4461);
var textfield_module_default = /*#__PURE__*/__webpack_require__.n(textfield_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/textfield/textfield.js




class Textfield extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false
    };
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
    this.setState(prevState => ({
      filled: !prevState.filled
    }));
  }

  render() {
    const inputClass = `${(textfield_module_default()).input} ${this.state.filled ? 'foo' : null}`;
    console.log(this.state.filled);
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (textfield_module_default()).wrap,
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        className: inputClass,
        id: this.props.name,
        name: this.props.name,
        type: "text",
        onChange: this.handleBlur
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        className: (textfield_module_default()).label,
        htmlFor: this.props.name,
        children: [this.props.label, "  ", this.state.filled, "  "]
      })]
    });
  }

}
;// CONCATENATED MODULE: ./components/form/form.js




const Form = props => {
  const {
    id
  } = props;

  const handleSubmit = async event => {
    event.preventDefault();
    const formEl = document.querySelector('#myForm');
    const formData = new FormData(formEl);
    const formDataSerialized = Object.fromEntries(formData);
    const jsonObject = {
      "fields": [{
        "name": "email",
        "value": formDataSerialized.email
      }],
      "context": {
        "pageUri": "logic.com/page",
        "pageName": "Example page"
      },
      "legalConsentOptions": {
        "consent": {
          "consentToProcess": true,
          "text": "I agree to allow Example Company to store and process my personal data.",
          "communications": [{
            "value": true,
            "subscriptionTypeId": 999,
            "text": "I agree to receive marketing communications from Example Company."
          }]
        }
      }
    };
    console.log(jsonObject);
    let portal = '6398568';
    let formId = 'a3c90d1c-198e-403e-8cf2-cf670974d279';
    const url = 'https://api.hsforms.com/submissions/v3/integration/submit/' + portal + '/' + formId;
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(jsonObject),
      headers: {
        'Content-type': 'application/json'
      }
    });
    const result = await res.json();
    console.log(result);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("form", {
    id: id,
    onSubmit: handleSubmit,
    children: props.children
  });
};

/* harmony default export */ const form_form = (Form);
// EXTERNAL MODULE: ./components/button/button.js
var button_button = __webpack_require__(4151);
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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (footer_module_default()).wrapper,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "umoja-l-grid--12",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (footer_module_default()).upper,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (footer_module_default()).upper_left,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Newsletter"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Subscribe today and be the first to receive the latest from Sama."
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(form_form, {
              id: "myForm",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Textfield, {
                name: "email",
                label: "Email Address",
                children: " "
              }), /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, {
                title: "Sign Me Up",
                type: "submit",
                children: "Sign Me Up"
              })]
            })
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
                      rel: "noopener",
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
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "visually-hidden",
                children: "Sama"
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_inlinesvg_default()), {
                src: logo.asset.url
              })]
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
              rel: "noopener",
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
              rel: "noopener",
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
              rel: "noopener",
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
              rel: "noopener",
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
              rel: "noopener",
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
    }), /*#__PURE__*/jsx_runtime_.jsx("script", {
      type: "text/javascript",
      id: "hs-script-loader",
      async: true,
      defer: true,
      src: "//js.hs-scripts.com/6398568.js"
    })]
  });
};

/* harmony default export */ const footer = (Footer);

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
	"umoja-l-grid-section--flat-top": "footer_umoja-l-grid-section--flat-top__Ma1Ed",
	"umoja-l-grid-gap--row-1": "footer_umoja-l-grid-gap--row-1__36rEV",
	"umoja-l-grid-gap--row-2": "footer_umoja-l-grid-gap--row-2__20H7c",
	"umoja-l-grid-gap--row-3": "footer_umoja-l-grid-gap--row-3__2oLN2",
	"umoja-l-grid-align--center": "footer_umoja-l-grid-align--center__3elRt",
	"umoja-l-grid-align--base": "footer_umoja-l-grid-align--base__15bJZ",
	"umoja-l-grid-span--full": "footer_umoja-l-grid-span--full__yEtIQ",
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

/***/ 4461:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "textfield_umoja-u-pad-1__1IJAO",
	"umoja-u-pad-t--0": "textfield_umoja-u-pad-t--0__18UXh",
	"umoja-u-pad-b--0": "textfield_umoja-u-pad-b--0__26fSl",
	"umoja-l-grid--12": "textfield_umoja-l-grid--12__22ruH",
	"umoja-l-grid--6": "textfield_umoja-l-grid--6__20sGz",
	"umoja-l-page-width": "textfield_umoja-l-page-width__1KRz1",
	"umoja-l-grid-section": "textfield_umoja-l-grid-section__1VMHd",
	"umoja-l-grid-section--flat-top": "textfield_umoja-l-grid-section--flat-top__3k4mk",
	"umoja-l-grid-gap--row-1": "textfield_umoja-l-grid-gap--row-1__29g75",
	"umoja-l-grid-gap--row-2": "textfield_umoja-l-grid-gap--row-2__Qqjoz",
	"umoja-l-grid-gap--row-3": "textfield_umoja-l-grid-gap--row-3__1I65K",
	"umoja-l-grid-align--center": "textfield_umoja-l-grid-align--center__tsbPt",
	"umoja-l-grid-align--base": "textfield_umoja-l-grid-align--base__1mIiA",
	"umoja-l-grid-span--full": "textfield_umoja-l-grid-span--full__1sL_7",
	"wrap": "textfield_wrap__3WyMl",
	"label": "textfield_label__18AO4",
	"input": "textfield_input__3Wd8E",
	"hover": "textfield_hover__1fTR6",
	"filled": "textfield_filled__2KOYU"
};


/***/ })

};
;
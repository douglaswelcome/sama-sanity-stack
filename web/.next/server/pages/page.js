(() => {
var exports = {};
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
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
  "bodystatic_videoDivide": () => (bodystatic_videoDivide_bodystatic_videoDivide),
  "hero_centertxt": () => (hero_centertxt_hero_centertxt),
  "hero_home": () => (hero_home_hero_home),
  "hero_splittxtimg": () => (hero_splittxtimg_hero_splittxtimg)
});

;// CONCATENATED MODULE: external "groq"
const external_groq_namespaceObject = require("groq");
var external_groq_default = /*#__PURE__*/__webpack_require__.n(external_groq_namespaceObject);
// EXTERNAL MODULE: ./client.js
var client = __webpack_require__(267);
var client_default = /*#__PURE__*/__webpack_require__.n(client);
// EXTERNAL MODULE: ./components/Layout.js + 5 modules
var Layout = __webpack_require__(5964);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "next-sanity-image"
const external_next_sanity_image_namespaceObject = require("next-sanity-image");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
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
    sizes,
    className
  } = props;
  const imageProps = (0,external_next_sanity_image_namespaceObject.useNextSanityImage)((client_default()), src);
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
;// CONCATENATED MODULE: ./tools/useIntersection.js


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

/* harmony default export */ const tools_useIntersection = (useIntersection);
;// CONCATENATED MODULE: external "lottie-web"
const external_lottie_web_namespaceObject = require("lottie-web");
var external_lottie_web_default = /*#__PURE__*/__webpack_require__.n(external_lottie_web_namespaceObject);
;// CONCATENATED MODULE: external "@sanity/asset-utils"
const asset_utils_namespaceObject = require("@sanity/asset-utils");
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
  const jsonPath = (0,asset_utils_namespaceObject.getFile)(json, client_default().config());
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
  const inViewport = tools_useIntersection(ref, '-50%', false);

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
;// CONCATENATED MODULE: external "@sanity/block-content-to-react"
const block_content_to_react_namespaceObject = require("@sanity/block-content-to-react");
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_namespaceObject);
// EXTERNAL MODULE: ./modules/bodystatic_richTxt/bodystatic-richTxt.module.scss
var bodystatic_richTxt_module = __webpack_require__(9420);
var bodystatic_richTxt_module_default = /*#__PURE__*/__webpack_require__.n(bodystatic_richTxt_module);
;// CONCATENATED MODULE: ./modules/bodystatic_richTxt/bodystatic_richTxt.js
function bodystatic_richTxt_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bodystatic_richTxt_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bodystatic_richTxt_ownKeys(Object(source), true).forEach(function (key) { bodystatic_richTxt_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bodystatic_richTxt_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bodystatic_richTxt_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const bodystatic_richTxt = props => {
  const {
    align,
    text
  } = props;
  const {
    projectId,
    dataset
  } = client_default().config();
  const serializers = {
    marks: {
      button_link: ({
        mark,
        children
      }) => {
        const {
          style
        } = mark;
        const href = mark.internalLink ? `/${mark.internalLink.slug.current}` : mark.externalLink;

        if (style) {
          return /*#__PURE__*/jsx_runtime_.jsx(button_button/* default */.Z, {
            link: href,
            type: style,
            title: children[0]
          });
        } else {
          let linkProps = {
            href: href
          };

          if (mark.externalLink) {
            linkProps.target = "_blank";
            linkProps.rel = "noopener";
          }

          return /*#__PURE__*/jsx_runtime_.jsx("a", bodystatic_richTxt_objectSpread(bodystatic_richTxt_objectSpread({}, linkProps), {}, {
            href: href,
            children: children
          }));
        }
      }
    }
  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bodystatic_richTxt umoja-l-grid--12",
    children: /*#__PURE__*/jsx_runtime_.jsx((block_content_to_react_default()), {
      className: `${(bodystatic_richTxt_module_default()).inner} ${align ? (bodystatic_richTxt_module_default())[`_${align}`] : ''}`,
      blocks: text,
      projectId: projectId,
      serializers: serializers,
      dataset: dataset,
      renderContainerOnSingleChild: true
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
      class: (hero_centertxt_module_default()).body,
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
        const videoPath = (0,asset_utils_namespaceObject.getFile)(item.video, client_default().config());
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
  const videoPath = (0,asset_utils_namespaceObject.getFile)(video, client_default().config());
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bodystatic-videoDivide umoja-l-grid--12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (bodystatic_videoDivide_module_default()).videoWrapper,
      children: /*#__PURE__*/jsx_runtime_.jsx("video", {
        className: (bodystatic_videoDivide_module_default()).video,
        autoPlay: "autoplay",
        loop: "loop",
        playsInline: "playsinline",
        muted: "true",
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
      class: (bodystatic_display_module_default()).inner,
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: text
      })
    })
  });
};

/* harmony default export */ const bodystatic_display_bodystatic_display = (bodystatic_display);
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
;// CONCATENATED MODULE: ./pages/page/index.js
function page_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function page_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { page_ownKeys(Object(source), true).forEach(function (key) { page_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { page_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Page = props => {
  const {
    sections,
    config
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    config: config,
    children: sections && sections.map(section => {
      return /*#__PURE__*/(0,external_react_.createElement)(components_RenderSection, page_objectSpread(page_objectSpread({}, section), {}, {
        key: section._key
      }));
    })
  });
};

Page.getInitialProps = async function ({
  query
}) {
  const {
    slug
  } = query; // Frontpage

  if (slug == '/') {
    return await client_default().fetch((external_groq_default())`
      *[_id == "global-config"][0]{
        frontpage -> {
          title,
          slug,
          "sections": sections[]{
            _key,
            background_color,
            "modules": modules.modules
          }
        }
      }
    `).then(res => page_objectSpread(page_objectSpread({}, res.frontpage), {}, {
      slug
    }));
  }

  if (slug && slug !== '/') {
    return await client_default().fetch(`
      *[_type == "page" && slug.current == $slug]{
        title,
        slug,
        "sections": sections[]{
          _key,
          background_color,
          "modules": modules.modules[]{
            ...,
             text[]{
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
      }[0]
    `, {
      slug
    });
  }
};

/* harmony default export */ const page = (Page);

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

/***/ 9420:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-richTxt_umoja-u-pad-1__f5K0g",
	"umoja-u-pad-t--0": "bodystatic-richTxt_umoja-u-pad-t--0__kCh3e",
	"umoja-u-pad-b--0": "bodystatic-richTxt_umoja-u-pad-b--0__1TXuK",
	"umoja-l-grid--12": "bodystatic-richTxt_umoja-l-grid--12__2Sa0G",
	"umoja-l-grid--6": "bodystatic-richTxt_umoja-l-grid--6__34JsO",
	"umoja-l-page-width": "bodystatic-richTxt_umoja-l-page-width__1Hjzg",
	"umoja-l-grid-section": "bodystatic-richTxt_umoja-l-grid-section__UvuA_",
	"umoja-l-grid-gap--row-1": "bodystatic-richTxt_umoja-l-grid-gap--row-1__1ebbG",
	"umoja-l-grid-gap--row-2": "bodystatic-richTxt_umoja-l-grid-gap--row-2__3q0lu",
	"umoja-l-grid-gap--row-3": "bodystatic-richTxt_umoja-l-grid-gap--row-3__2DGNK",
	"umoja-l-grid-align--center": "bodystatic-richTxt_umoja-l-grid-align--center__ZeGI1",
	"umoja-l-grid-align--base": "bodystatic-richTxt_umoja-l-grid-align--base__IKOJt",
	"inner": "bodystatic-richTxt_inner__1b1u4",
	"_left": "bodystatic-richTxt__left__1eBwx",
	"_center": "bodystatic-richTxt__center__3-rC_",
	"_right": "bodystatic-richTxt__right__3UlUP"
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

/***/ 8809:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 2364:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7051:
/***/ ((module) => {

"use strict";
module.exports = require("react-inlinesvg");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,675,286], () => (__webpack_exec__(946)));
module.exports = __webpack_exports__;

})();
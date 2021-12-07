exports.id = 4031;
exports.ids = [4031];
exports.modules = {

/***/ 4031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ bodymove_featureWindow_bodymove_featureWindow)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
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
// EXTERNAL MODULE: ./client.js
var client = __webpack_require__(267);
var client_default = /*#__PURE__*/__webpack_require__.n(client);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
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
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
// EXTERNAL MODULE: ./modules/bodymove_featureWindow/bodymove-featureWindow.module.scss
var bodymove_featureWindow_module = __webpack_require__(6120);
var bodymove_featureWindow_module_default = /*#__PURE__*/__webpack_require__.n(bodymove_featureWindow_module);
;// CONCATENATED MODULE: ./modules/bodymove_featureWindow/bodymove_featureWindow.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









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
              children: [feature.animation && /*#__PURE__*/jsx_runtime_.jsx(lottie_animation, _objectSpread(_objectSpread({}, feature.animation), {}, {
                active: activeFeature == `feature${i}` ? true : false,
                inView: inViewport
              })), feature.image && /*#__PURE__*/jsx_runtime_.jsx(components_image/* default */.Z, {
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
	"umoja-l-grid-section--flat-top": "bodymove-featureWindow_umoja-l-grid-section--flat-top__3xziO",
	"umoja-l-grid-gap--row-1": "bodymove-featureWindow_umoja-l-grid-gap--row-1__39DBz",
	"umoja-l-grid-gap--row-2": "bodymove-featureWindow_umoja-l-grid-gap--row-2__1WomY",
	"umoja-l-grid-gap--row-3": "bodymove-featureWindow_umoja-l-grid-gap--row-3__15KJO",
	"umoja-l-grid-align--center": "bodymove-featureWindow_umoja-l-grid-align--center__3RpS2",
	"umoja-l-grid-align--base": "bodymove-featureWindow_umoja-l-grid-align--base__13C-Y",
	"umoja-l-grid-span--full": "bodymove-featureWindow_umoja-l-grid-span--full__2a1MR",
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


/***/ })

};
;
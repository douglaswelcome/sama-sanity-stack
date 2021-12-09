exports.id = 3718;
exports.ids = [3718];
exports.modules = {

/***/ 3718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5508);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4687);
/* harmony import */ var _bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9492);
/* harmony import */ var _bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const bodymove_sfMap = props => {
  const {
    title,
    address
  } = props;
  const {
    0: viewport,
    1: setViewport
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: showPopup,
    1: togglePopup
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
    setViewport(_objectSpread(_objectSpread({}, viewport), {}, {
      longitude: office.coordinates.longitude,
      latitude: office.coordinates.latitude,
      zoom: 11.5,
      transitionDuration: 500,
      transitionInterpolator: new react_map_gl__WEBPACK_IMPORTED_MODULE_1__.FlyToInterpolator()
    }));
  };

  const showWorld = () => {
    setViewport(_objectSpread(_objectSpread({}, viewport), {}, {
      longitude: -24.547817,
      latitude: 36.980944,
      zoom: 1,
      transitionDuration: 1000,
      transitionInterpolator: new react_map_gl__WEBPACK_IMPORTED_MODULE_1__.FlyToInterpolator()
    }));
  };

  const handlePopUp = e => {
    goToOffice(e);
    togglePopup(!showPopup);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `bodymove-sfMap umoja-l-grid--12 ${(_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().panel)}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().address),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
        className: (_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        className: (_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),
        richText: address.richText
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().map),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react_map_gl__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, viewport), {}, {
        attributionControl: false,
        mapStyle: "mapbox://styles/dwelcome/ckfxhibcm08vf1aoaxw0c2nj5",
        mapboxApiAccessToken: "pk.eyJ1IjoiZHdlbGNvbWUiLCJhIjoiY2p6MXNkdmZiMGF3OTNibzFoMm1ocG05cSJ9.xZ8njmOGIVM4sLRiit4xdg",
        onViewportChange: nextViewport => setViewport(nextViewport),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__.NavigationControl, {
          showCompass: false,
          style: navControlStyle
        }), showPopup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_map_gl__WEBPACK_IMPORTED_MODULE_1__.Popup, {
          latitude: 37.7816218704741,
          longitude: -122.414532,
          closeButton: true,
          closeOnClick: false,
          onClose: () => togglePopup(false),
          anchor: "top",
          className: (_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().marker_popup),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            className: (_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().marker_popup_city),
            children: "Sama HQ"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            children: "San Francisco, CA"
          })]
        }), data.map((office, i) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__.Marker, {
            latitude: office.coordinates.latitude,
            longitude: office.coordinates.longitude,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: (_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().marker),
              onClick: handlePopUp,
              "data-at": i,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                className: (_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().marker_label)
              })
            })
          }, i);
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
          className: (_bodymove_sfMap_module_scss__WEBPACK_IMPORTED_MODULE_4___default().globe),
          onClick: showWorld
        })]
      }))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodymove_sfMap);

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
	"umoja-l-grid-section--flat-top": "bodymove-sfMap_umoja-l-grid-section--flat-top__33lsn",
	"umoja-l-grid-gap--row-1": "bodymove-sfMap_umoja-l-grid-gap--row-1__3Cx4D",
	"umoja-l-grid-gap--row-2": "bodymove-sfMap_umoja-l-grid-gap--row-2__O5vkq",
	"umoja-l-grid-gap--row-3": "bodymove-sfMap_umoja-l-grid-gap--row-3__14FgD",
	"umoja-l-grid-align--center": "bodymove-sfMap_umoja-l-grid-align--center__d1BB3",
	"umoja-l-grid-align--base": "bodymove-sfMap_umoja-l-grid-align--base__1pK3W",
	"umoja-l-grid-span--full": "bodymove-sfMap_umoja-l-grid-span--full__3k5-G",
	"panel": "bodymove-sfMap_panel__3op8F",
	"address": "bodymove-sfMap_address__1_ch7",
	"map": "bodymove-sfMap_map__2ZK_W",
	"marker": "bodymove-sfMap_marker__3g2LR",
	"marker_popup": "bodymove-sfMap_marker_popup__2-WQm",
	"marker_popup_city": "bodymove-sfMap_marker_popup_city__2VI4z",
	"globe": "bodymove-sfMap_globe__39jA6"
};


/***/ })

};
;
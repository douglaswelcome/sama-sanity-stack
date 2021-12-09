exports.id = 3880;
exports.ids = [3880];
exports.modules = {

/***/ 3880:
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
/* harmony import */ var _bodymove_map_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9119);
/* harmony import */ var _bodymove_map_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bodymove_map_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const bodymove_map = props => {
  const {
    title
  } = props;
  const {
    0: viewport,
    1: setViewport
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
    setViewport(_objectSpread(_objectSpread({}, viewport), {}, {
      longitude: office.coordinates.longitude,
      latitude: office.coordinates.latitude,
      zoom: 14,
      transitionDuration: 500,
      transitionInterpolator: new react_map_gl__WEBPACK_IMPORTED_MODULE_1__.FlyToInterpolator()
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bodymove-map umoja-l-grid--12",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
      className: (_bodymove_map_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_bodymove_map_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_bodymove_map_module_scss__WEBPACK_IMPORTED_MODULE_3___default().map),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_map_gl__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, viewport), {}, {
          attributionControl: false,
          mapStyle: "mapbox://styles/aesimpson/ckrmovdwb2j2r17lqxf2p2lw5",
          mapboxApiAccessToken: "pk.eyJ1IjoiYWVzaW1wc29uIiwiYSI6ImNrcm1vdGM3eDd2ZTMycHBheTEwajhqcjMifQ.nHuWTNRfeQ83cdMK2qJnpw",
          onViewportChange: nextViewport => setViewport(nextViewport),
          children: data.map((office, i) => {
            const {
              labelPosition
            } = office.properties;
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__.Marker, {
              latitude: office.coordinates.latitude,
              longitude: office.coordinates.longitude,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: (_bodymove_map_module_scss__WEBPACK_IMPORTED_MODULE_3___default().marker),
                onClick: goToOffice,
                "data-at": i,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  className: `${(_bodymove_map_module_scss__WEBPACK_IMPORTED_MODULE_3___default().marker_label)} ${labelPosition ? (_bodymove_map_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[labelPosition] : ''}`,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodymove_map);

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
	"umoja-l-grid-section--flat-top": "bodymove-map_umoja-l-grid-section--flat-top__2Xero",
	"umoja-l-grid-gap--row-1": "bodymove-map_umoja-l-grid-gap--row-1__1EuDh",
	"umoja-l-grid-gap--row-2": "bodymove-map_umoja-l-grid-gap--row-2__bRSZo",
	"umoja-l-grid-gap--row-3": "bodymove-map_umoja-l-grid-gap--row-3__3cB7Q",
	"umoja-l-grid-align--center": "bodymove-map_umoja-l-grid-align--center__29cQC",
	"umoja-l-grid-align--base": "bodymove-map_umoja-l-grid-align--base__2GKwu",
	"umoja-l-grid-span--full": "bodymove-map_umoja-l-grid-span--full__17rcS",
	"title": "bodymove-map_title__1ZVGa",
	"wrapper": "bodymove-map_wrapper__zLd9u",
	"map": "bodymove-map_map__2zmji",
	"marker": "bodymove-map_marker__3IYs0",
	"marker_label": "bodymove-map_marker_label__2Np0v",
	"right": "bodymove-map_right__3mZB5",
	"top-left": "bodymove-map_top-left__2ES6z",
	"top-right": "bodymove-map_top-right__2NWfu"
};


/***/ })

};
;
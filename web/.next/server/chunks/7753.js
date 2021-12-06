"use strict";
exports.id = 7753;
exports.ids = [7753];
exports.modules = {

/***/ 7753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const DotCanvas = props => {
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("canvas", _objectSpread({
    ref: canvasRef
  }, props));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DotCanvas);

/***/ })

};
;
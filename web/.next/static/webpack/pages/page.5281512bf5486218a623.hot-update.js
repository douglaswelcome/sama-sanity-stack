"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page",{

/***/ "./components/header/navDropdown.js":
/*!******************************************!*\
  !*** ./components/header/navDropdown.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amysimpson_Desktop_sites_sama_sanity_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _navLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navLink */ \"./components/header/navLink.js\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.module.scss */ \"./components/header/header.module.scss\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/amysimpson/Desktop/sites/sama-sanity/web/components/header/navDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_amysimpson_Desktop_sites_sama_sanity_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar NavDropDown = function NavDropDown(props) {\n  _s();\n\n  var items = props.items,\n      title = props.title;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      activeDropDown = _useState[0],\n      setActiveDropDown = _useState[1];\n\n  var className = activeDropDown ? \"\".concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navItem_label), \" \").concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navItem_label__active)) : \"\".concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navItem_label));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      className: className,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dropDown),\n      children: items.map(function (item) {\n        if (item._type == 'navItem') {\n          return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_navLink__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, item), {}, {\n            key: item._key,\n            setActiveParent: setActiveDropDown,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 29\n            }\n          }));\n        }\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(NavDropDown, \"hq6jIcT9GsDOseHnep+EFgP0kVY=\");\n\n_c = NavDropDown;\nNavDropDown.propTypes = {\n  items: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  _type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropDown);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavDropDown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9uYXZEcm9wZG93bi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUEsSUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzNCLE1BQU9DLEtBQVAsR0FBdUJELEtBQXZCLENBQU9DLEtBQVA7QUFBQSxNQUFjQyxLQUFkLEdBQXVCRixLQUF2QixDQUFjRSxLQUFkOztBQUNBLGtCQUE0Q1AsK0NBQVEsQ0FBQyxLQUFELENBQXBEO0FBQUEsTUFBT1EsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixjQUFjLGFBQU1MLDBFQUFOLGNBQThCQSxrRkFBOUIsY0FBa0VBLDBFQUFsRSxDQUFoQztBQUVBLHNCQUNJO0FBQUEsNEJBQ0E7QUFBRyxlQUFTLEVBQUVPLFNBQWQ7QUFBQSxnQkFBMEJIO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVJO0FBQUssZUFBUyxFQUFFSixxRUFBaEI7QUFBQSxnQkFDS0csS0FBSyxDQUFDUSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pCLFlBQUdBLElBQUksQ0FBQ0MsS0FBTCxJQUFjLFNBQWpCLEVBQTJCO0FBQ3ZCLDhCQUNJLHFEQUFDLDZDQUFELGtDQUFjRCxJQUFkO0FBQW9CLGVBQUcsRUFBRUEsSUFBSSxDQUFDRSxJQUE5QjtBQUFvQywyQkFBZSxFQUFFUixpQkFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBR0g7QUFDSixPQU5BO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREo7QUFjSCxDQW5CRDs7R0FBTUw7O0tBQUFBO0FBc0JOQSxXQUFXLENBQUNjLFNBQVosR0FBd0I7QUFDcEJaLEVBQUFBLEtBQUssRUFBRUwseURBRGE7QUFFcEJNLEVBQUFBLEtBQUssRUFBRU4sMERBRmE7QUFHcEJlLEVBQUFBLEtBQUssRUFBRWYsMERBQWdCbUI7QUFISCxDQUF4QjtBQU1BLCtEQUFlaEIsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9uYXZEcm9wZG93bi5qcz8wMDY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4vbmF2TGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLnNjc3MnXG5cbmNvbnN0IE5hdkRyb3BEb3duID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge2l0ZW1zLCB0aXRsZX0gPSBwcm9wcztcbiAgICBjb25zdCBbYWN0aXZlRHJvcERvd24sIHNldEFjdGl2ZURyb3BEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBhY3RpdmVEcm9wRG93biA/IGAke3N0eWxlcy5uYXZJdGVtX2xhYmVsfSAke3N0eWxlcy5uYXZJdGVtX2xhYmVsX19hY3RpdmV9YCA6IGAke3N0eWxlcy5uYXZJdGVtX2xhYmVsfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcERvd259PlxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5fdHlwZSA9PSAnbmF2SXRlbScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayAgey4uLml0ZW19IGtleT17aXRlbS5fa2V5fSBzZXRBY3RpdmVQYXJlbnQ9e3NldEFjdGl2ZURyb3BEb3dufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5cbk5hdkRyb3BEb3duLnByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIF90eXBlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkRyb3BEb3duOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiTmF2TGluayIsInN0eWxlcyIsIk5hdkRyb3BEb3duIiwicHJvcHMiLCJpdGVtcyIsInRpdGxlIiwiYWN0aXZlRHJvcERvd24iLCJzZXRBY3RpdmVEcm9wRG93biIsImNsYXNzTmFtZSIsIm5hdkl0ZW1fbGFiZWwiLCJuYXZJdGVtX2xhYmVsX19hY3RpdmUiLCJkcm9wRG93biIsIm1hcCIsIml0ZW0iLCJfdHlwZSIsIl9rZXkiLCJwcm9wVHlwZXMiLCJhcnJheSIsInN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/navDropdown.js\n");

/***/ })

});
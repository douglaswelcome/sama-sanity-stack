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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amysimpson_Desktop_sites_sama_sanity_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _navLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navLink */ \"./components/header/navLink.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.module.scss */ \"./components/header/header.module.scss\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/amysimpson/Desktop/sites/sama-sanity/web/components/header/navDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_amysimpson_Desktop_sites_sama_sanity_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar NavDropDown = function NavDropDown(props) {\n  _s();\n\n  var items = props.items,\n      title = props.title,\n      setActiveNavItem = props.setActiveNavItem;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(),\n      asPath = _useRouter.asPath;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    items.filter(function (item) {\n      return \"/\".concat(item.url.internalLink.slug.current) == asPath;\n    });\n  });\n\n  var setActiveParent = function setActiveParent(active) {\n    if (active) {\n      setActiveNavItem(title);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),\n    children: items.map(function (item) {\n      if (item._type == 'navItem') {\n        return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_navLink__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, item), {}, {\n          key: item._key,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 25\n          }\n        }));\n      }\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(NavDropDown, \"b99VGb8vP7tsAzNeMcD2FIONfeM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = NavDropDown;\nNavDropDown.propTypes = {\n  items: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  _type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  setActiveNavItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropDown);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavDropDown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9uYXZEcm9wZG93bi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzNCLE1BQU9DLEtBQVAsR0FBeUNELEtBQXpDLENBQU9DLEtBQVA7QUFBQSxNQUFjQyxLQUFkLEdBQXlDRixLQUF6QyxDQUFjRSxLQUFkO0FBQUEsTUFBcUJDLGdCQUFyQixHQUF5Q0gsS0FBekMsQ0FBcUJHLGdCQUFyQjs7QUFDQSxtQkFBbUJOLHNEQUFTLEVBQTVCO0FBQUEsTUFBUU8sTUFBUixjQUFRQSxNQUFSOztBQUVBVixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWk8sSUFBQUEsS0FBSyxDQUFDSSxNQUFOLENBQWEsVUFBQUMsSUFBSSxFQUFJO0FBQ2pCLGFBQU8sV0FBSUEsSUFBSSxDQUFDQyxHQUFMLENBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLENBQTJCQyxPQUEvQixLQUE0Q04sTUFBbkQ7QUFDSCxLQUZEO0FBR0gsR0FKUSxDQUFUOztBQU1BLE1BQU1PLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQ2hDLFFBQUdBLE1BQUgsRUFBVTtBQUNOVCxNQUFBQSxnQkFBZ0IsQ0FBQ0QsS0FBRCxDQUFoQjtBQUNIO0FBQ0osR0FKRDs7QUFNQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUoscUVBQWhCO0FBQUEsY0FDS0csS0FBSyxDQUFDYSxHQUFOLENBQVUsVUFBQ1IsSUFBRCxFQUFVO0FBQ2pCLFVBQUdBLElBQUksQ0FBQ1MsS0FBTCxJQUFjLFNBQWpCLEVBQTJCO0FBQ3ZCLDRCQUNJLHFEQUFDLDZDQUFELGtDQUFjVCxJQUFkO0FBQW9CLGFBQUcsRUFBRUEsSUFBSSxDQUFDVSxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFHSDtBQUNKLEtBTkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFXSCxDQTNCRDs7R0FBTWpCO1VBRWlCRjs7O0tBRmpCRTtBQThCTkEsV0FBVyxDQUFDa0IsU0FBWixHQUF3QjtBQUNwQmhCLEVBQUFBLEtBQUssRUFBRU4seURBRGE7QUFFcEJPLEVBQUFBLEtBQUssRUFBRVAsMERBRmE7QUFHcEJvQixFQUFBQSxLQUFLLEVBQUVwQiwwREFIYTtBQUlwQlEsRUFBQUEsZ0JBQWdCLEVBQUVSLHdEQUFjeUI7QUFKWixDQUF4QjtBQU9BLCtEQUFlckIsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9uYXZEcm9wZG93bi5qcz8wMDY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBOYXZMaW5rIGZyb20gJy4vbmF2TGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2NzcydcblxuY29uc3QgTmF2RHJvcERvd24gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7aXRlbXMsIHRpdGxlLCBzZXRBY3RpdmVOYXZJdGVtfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgLyR7aXRlbS51cmwuaW50ZXJuYWxMaW5rLnNsdWcuY3VycmVudH1gID09IGFzUGF0aFxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2V0QWN0aXZlUGFyZW50ID0gKGFjdGl2ZSkgPT4ge1xuICAgICAgICBpZihhY3RpdmUpe1xuICAgICAgICAgICAgc2V0QWN0aXZlTmF2SXRlbSh0aXRsZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcERvd259PlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uX3R5cGUgPT0gJ25hdkl0ZW0nKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rICB7Li4uaXRlbX0ga2V5PXtpdGVtLl9rZXl9IC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbk5hdkRyb3BEb3duLnByb3BUeXBlcyA9IHtcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIF90eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNldEFjdGl2ZU5hdkl0ZW06IFByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkRyb3BEb3duOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlByb3BUeXBlcyIsIk5hdkxpbmsiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJOYXZEcm9wRG93biIsInByb3BzIiwiaXRlbXMiLCJ0aXRsZSIsInNldEFjdGl2ZU5hdkl0ZW0iLCJhc1BhdGgiLCJmaWx0ZXIiLCJpdGVtIiwidXJsIiwiaW50ZXJuYWxMaW5rIiwic2x1ZyIsImN1cnJlbnQiLCJzZXRBY3RpdmVQYXJlbnQiLCJhY3RpdmUiLCJkcm9wRG93biIsIm1hcCIsIl90eXBlIiwiX2tleSIsInByb3BUeXBlcyIsImFycmF5Iiwic3RyaW5nIiwiZnVuYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/navDropdown.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_amysimpson_Desktop_sites_sama_sanity_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _navLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navLink */ \"./components/header/navLink.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.module.scss */ \"./components/header/header.module.scss\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/amysimpson/Desktop/sites/sama-sanity/web/components/header/navDropdown.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_amysimpson_Desktop_sites_sama_sanity_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar NavDropDown = function NavDropDown(props) {\n  _s();\n\n  var items = props.items,\n      title = props.title;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(),\n      asPath = _useRouter.asPath;\n\n  var currentSlug = asPath.charAt(0) == '/' ? asPath.substring(1) : asPath;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  var className = active ? \"\".concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem_label), \" \").concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem_label__active)) : \"\".concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navItem_label));\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var isActive = items.find(function (item) {\n      if (item.url && item.url.internalLink.slug.current == currentSlug) {\n        return true;\n      }\n    });\n    console.log(isActive);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      className: className,\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().dropDown),\n      children: items.map(function (item) {\n        if (item._type == 'navItem') {\n          return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_navLink__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, item), {}, {\n            key: item._key,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 25\n            }\n          }));\n        }\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(NavDropDown, \"LFPnjzy/Dm9kJ7oqnKGCTUoNHwo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = NavDropDown;\nNavDropDown.propTypes = {\n  items: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  _type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  setActiveNavItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavDropDown);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavDropDown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9uYXZEcm9wZG93bi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMzQixNQUFPQyxLQUFQLEdBQXVCRCxLQUF2QixDQUFPQyxLQUFQO0FBQUEsTUFBY0MsS0FBZCxHQUF1QkYsS0FBdkIsQ0FBY0UsS0FBZDs7QUFDQSxtQkFBbUJMLHNEQUFTLEVBQTVCO0FBQUEsTUFBUU0sTUFBUixjQUFRQSxNQUFSOztBQUNBLE1BQU1DLFdBQVcsR0FBR0QsTUFBTSxDQUFDRSxNQUFQLENBQWMsQ0FBZCxLQUFvQixHQUFwQixHQUEwQkYsTUFBTSxDQUFDRyxTQUFQLENBQWlCLENBQWpCLENBQTFCLEdBQWdESCxNQUFwRTs7QUFDQSxrQkFBNEJULCtDQUFRLENBQUMsS0FBRCxDQUFwQztBQUFBLE1BQU9hLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLE1BQU1DLFNBQVMsR0FBR0YsTUFBTSxhQUFNVCwwRUFBTixjQUE4QkEsa0ZBQTlCLGNBQWtFQSwwRUFBbEUsQ0FBeEI7QUFHQUwsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTW1CLFFBQVEsR0FBR1gsS0FBSyxDQUFDWSxJQUFOLENBQVcsVUFBQUMsSUFBSSxFQUFJO0FBQ2hDLFVBQUdBLElBQUksQ0FBQ0MsR0FBTCxJQUFZRCxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsWUFBVCxDQUFzQkMsSUFBdEIsQ0FBMkJDLE9BQTNCLElBQXNDZCxXQUFyRCxFQUFpRTtBQUM3RCxlQUFRLElBQVI7QUFDSDtBQUNKLEtBSmdCLENBQWpCO0FBTUFlLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFaO0FBQ0gsR0FSUSxDQUFUO0FBVUEsc0JBQ0k7QUFBQSw0QkFDQTtBQUFHLGVBQVMsRUFBRUgsU0FBZDtBQUFBLGdCQUEwQlA7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUE7QUFBSyxlQUFTLEVBQUVKLHFFQUFoQjtBQUFBLGdCQUNLRyxLQUFLLENBQUNxQixHQUFOLENBQVUsVUFBQ1IsSUFBRCxFQUFVO0FBQ2pCLFlBQUdBLElBQUksQ0FBQ1MsS0FBTCxJQUFjLFNBQWpCLEVBQTJCO0FBQ3ZCLDhCQUNJLHFEQUFDLDZDQUFELGtDQUFjVCxJQUFkO0FBQW9CLGVBQUcsRUFBRUEsSUFBSSxDQUFDVSxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFHSDtBQUNKLE9BTkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkE7QUFBQSxrQkFESjtBQWNILENBaENEOztHQUFNekI7VUFFaUJGOzs7S0FGakJFO0FBbUNOQSxXQUFXLENBQUMwQixTQUFaLEdBQXdCO0FBQ3BCeEIsRUFBQUEsS0FBSyxFQUFFTix5REFEYTtBQUVwQk8sRUFBQUEsS0FBSyxFQUFFUCwwREFGYTtBQUdwQjRCLEVBQUFBLEtBQUssRUFBRTVCLDBEQUhhO0FBSXBCaUMsRUFBQUEsZ0JBQWdCLEVBQUVqQyx3REFBY2tDO0FBSlosQ0FBeEI7QUFPQSwrREFBZTlCLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvbmF2RHJvcGRvd24uanM/MDA2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IE5hdkxpbmsgZnJvbSAnLi9uYXZMaW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBOYXZEcm9wRG93biA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtpdGVtcywgdGl0bGV9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGN1cnJlbnRTbHVnID0gYXNQYXRoLmNoYXJBdCgwKSA9PSAnLycgPyBhc1BhdGguc3Vic3RyaW5nKDEpIDogYXNQYXRoO1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYWN0aXZlID8gYCR7c3R5bGVzLm5hdkl0ZW1fbGFiZWx9ICR7c3R5bGVzLm5hdkl0ZW1fbGFiZWxfX2FjdGl2ZX1gIDogYCR7c3R5bGVzLm5hdkl0ZW1fbGFiZWx9YDtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpdGVtcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS51cmwgJiYgaXRlbS51cmwuaW50ZXJuYWxMaW5rLnNsdWcuY3VycmVudCA9PSBjdXJyZW50U2x1Zyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhpc0FjdGl2ZSlcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57dGl0bGV9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3BEb3dufT5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZihpdGVtLl90eXBlID09ICduYXZJdGVtJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayAgey4uLml0ZW19IGtleT17aXRlbS5fa2V5fSAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cblxuTmF2RHJvcERvd24ucHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgX3R5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2V0QWN0aXZlTmF2SXRlbTogUHJvcFR5cGVzLmZ1bmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2RHJvcERvd247Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJOYXZMaW5rIiwidXNlUm91dGVyIiwic3R5bGVzIiwiTmF2RHJvcERvd24iLCJwcm9wcyIsIml0ZW1zIiwidGl0bGUiLCJhc1BhdGgiLCJjdXJyZW50U2x1ZyIsImNoYXJBdCIsInN1YnN0cmluZyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNsYXNzTmFtZSIsIm5hdkl0ZW1fbGFiZWwiLCJuYXZJdGVtX2xhYmVsX19hY3RpdmUiLCJpc0FjdGl2ZSIsImZpbmQiLCJpdGVtIiwidXJsIiwiaW50ZXJuYWxMaW5rIiwic2x1ZyIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwiZHJvcERvd24iLCJtYXAiLCJfdHlwZSIsIl9rZXkiLCJwcm9wVHlwZXMiLCJhcnJheSIsInN0cmluZyIsInNldEFjdGl2ZU5hdkl0ZW0iLCJmdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/navDropdown.js\n");

/***/ })

});
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

/***/ "./components/header/navLink.js":
/*!**************************************!*\
  !*** ./components/header/navLink.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.module.scss */ \"./components/header/header.module.scss\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/amysimpson/Desktop/sites/sama-sanity/web/components/header/navLink.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar NavLink = function NavLink(props) {\n  _s();\n\n  var url = props.url,\n      title = props.title,\n      setActiveParent = props.setActiveParent;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),\n      asPath = _useRouter.asPath;\n\n  console.log(setActiveParent);\n\n  if (url.internalLink) {\n    var slug = url.internalLink.slug.current;\n    var active = asPath === \"/\".concat(slug) ? true : false;\n    var className = active ? \"\".concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLink), \" \").concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLink__active)) : \"\".concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLink));\n\n    if (active) {\n      console.log('active');\n      setActiveParent(true);\n    }\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: {\n        pathname: '/page',\n        query: {\n          slug: slug\n        }\n      },\n      as: \"/\".concat(slug),\n      prefetch: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n        className: className,\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, _this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n    href: url.externalUrl,\n    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLink),\n    target: \"_blank\",\n    children: title\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(NavLink, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = NavLink;\nNavLink.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  setActiveParent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavLink);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9uYXZMaW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN2QixNQUFPQyxHQUFQLEdBQXNDRCxLQUF0QyxDQUFPQyxHQUFQO0FBQUEsTUFBWUMsS0FBWixHQUFzQ0YsS0FBdEMsQ0FBWUUsS0FBWjtBQUFBLE1BQW1CQyxlQUFuQixHQUFzQ0gsS0FBdEMsQ0FBbUJHLGVBQW5COztBQUNBLG1CQUFtQlAsc0RBQVMsRUFBNUI7QUFBQSxNQUFRUSxNQUFSLGNBQVFBLE1BQVI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxlQUFaOztBQUNBLE1BQUdGLEdBQUcsQ0FBQ00sWUFBUCxFQUFvQjtBQUNoQixRQUFNQyxJQUFJLEdBQUdQLEdBQUcsQ0FBQ00sWUFBSixDQUFpQkMsSUFBakIsQ0FBc0JDLE9BQW5DO0FBQ0EsUUFBTUMsTUFBTSxHQUFHTixNQUFNLGdCQUFTSSxJQUFULENBQU4sR0FBd0IsSUFBeEIsR0FBK0IsS0FBOUM7QUFDQSxRQUFNRyxTQUFTLEdBQUdELE1BQU0sYUFBTVosb0VBQU4sY0FBd0JBLDRFQUF4QixjQUFzREEsb0VBQXRELENBQXhCOztBQUVBLFFBQUdZLE1BQUgsRUFBVTtBQUNOTCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FILE1BQUFBLGVBQWUsQ0FBQyxJQUFELENBQWY7QUFDSDs7QUFFRCx3QkFDSSw4REFBQyxrREFBRDtBQUNJLFVBQUksRUFBRTtBQUNGVyxRQUFBQSxRQUFRLEVBQUUsT0FEUjtBQUVGQyxRQUFBQSxLQUFLLEVBQUU7QUFBQ1AsVUFBQUEsSUFBSSxFQUFFQTtBQUFQO0FBRkwsT0FEVjtBQUtJLFFBQUUsYUFBTUEsSUFBTixDQUxOO0FBTUksY0FBUSxNQU5aO0FBQUEsNkJBUUk7QUFBRyxpQkFBUyxFQUFFRyxTQUFkO0FBQUEsa0JBQTBCVDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBWUg7O0FBRUQsc0JBQ0k7QUFDSSxRQUFJLEVBQUVELEdBQUcsQ0FBQ2UsV0FEZDtBQUVJLGFBQVMsRUFBRWxCLG9FQUZmO0FBR0ksVUFBTSxFQUFDLFFBSFg7QUFBQSxjQUtLSTtBQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNILENBckNEOztHQUFNSDtVQUVpQkg7OztLQUZqQkc7QUF1Q05BLE9BQU8sQ0FBQ2tCLFNBQVIsR0FBb0I7QUFDaEJmLEVBQUFBLEtBQUssRUFBRVAsMERBRFM7QUFFaEJNLEVBQUFBLEdBQUcsRUFBRU4sMERBRlc7QUFHaEJRLEVBQUFBLGVBQWUsRUFBRVIsd0RBQWN5QjtBQUhmLENBQXBCO0FBTUEsK0RBQWVyQixPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyL25hdkxpbmsuanM/OTA4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLnNjc3MnXG5cbmNvbnN0IE5hdkxpbmsgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7dXJsLCB0aXRsZSwgc2V0QWN0aXZlUGFyZW50fSA9IHByb3BzO1xuICAgIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zb2xlLmxvZyhzZXRBY3RpdmVQYXJlbnQpXG4gICAgaWYodXJsLmludGVybmFsTGluayl7XG4gICAgICAgIGNvbnN0IHNsdWcgPSB1cmwuaW50ZXJuYWxMaW5rLnNsdWcuY3VycmVudDtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gYXNQYXRoID09PSBgLyR7c2x1Z31gID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBhY3RpdmUgPyBgJHtzdHlsZXMubmF2TGlua30gJHtzdHlsZXMubmF2TGlua19fYWN0aXZlfWAgOiBgJHtzdHlsZXMubmF2TGlua31gO1xuICAgICAgICBcbiAgICAgICAgaWYoYWN0aXZlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUnKVxuICAgICAgICAgICAgc2V0QWN0aXZlUGFyZW50KHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3BhZ2UnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge3NsdWc6IHNsdWd9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhcz17YC8ke3NsdWd9YH1cbiAgICAgICAgICAgICAgICBwcmVmZXRjaFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgXG4gICAgICAgICAgICBocmVmPXt1cmwuZXh0ZXJuYWxVcmx9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaW5rfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2E+XG4gICAgKVxufVxuXG5OYXZMaW5rLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB1cmw6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2V0QWN0aXZlUGFyZW50OiBQcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInVzZVJvdXRlciIsIkxpbmsiLCJzdHlsZXMiLCJOYXZMaW5rIiwicHJvcHMiLCJ1cmwiLCJ0aXRsZSIsInNldEFjdGl2ZVBhcmVudCIsImFzUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJpbnRlcm5hbExpbmsiLCJzbHVnIiwiY3VycmVudCIsImFjdGl2ZSIsImNsYXNzTmFtZSIsIm5hdkxpbmsiLCJuYXZMaW5rX19hY3RpdmUiLCJwYXRobmFtZSIsInF1ZXJ5IiwiZXh0ZXJuYWxVcmwiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJmdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/navLink.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.module.scss */ \"./components/header/header.module.scss\");\n/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/amysimpson/Desktop/sites/sama-sanity/web/components/header/navLink.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar NavLink = function NavLink(props) {\n  _s();\n\n  var url = props.url,\n      title = props.title;\n\n  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),\n      asPath = _useRouter.asPath;\n\n  if (url.internalLink) {\n    var slug = url.internalLink.slug.current;\n    var className = asPath === \"/\".concat(slug) ? \"\".concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLink), \" \").concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLink__active)) : \"\".concat((_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLink));\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: {\n        pathname: '/page',\n        query: {\n          slug: slug\n        }\n      },\n      as: \"/\".concat(slug),\n      prefetch: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n        className: className,\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, _this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"a\", {\n    href: url.externalUrl,\n    className: (_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLink),\n    target: \"_blank\",\n    children: title\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(NavLink, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = NavLink;\nNavLink.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavLink);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9uYXZMaW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN2QixNQUFPQyxHQUFQLEdBQXFCRCxLQUFyQixDQUFPQyxHQUFQO0FBQUEsTUFBWUMsS0FBWixHQUFxQkYsS0FBckIsQ0FBWUUsS0FBWjs7QUFDQSxtQkFBbUJOLHNEQUFTLEVBQTVCO0FBQUEsTUFBUU8sTUFBUixjQUFRQSxNQUFSOztBQUVBLE1BQUdGLEdBQUcsQ0FBQ0csWUFBUCxFQUFvQjtBQUNoQixRQUFNQyxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0csWUFBSixDQUFpQkMsSUFBakIsQ0FBc0JDLE9BQW5DO0FBQ0EsUUFBTUMsU0FBUyxHQUFHSixNQUFNLGdCQUFTRSxJQUFULENBQU4sYUFBMkJQLG9FQUEzQixjQUE2Q0EsNEVBQTdDLGNBQTJFQSxvRUFBM0UsQ0FBbEI7QUFFQSx3QkFDSSw4REFBQyxrREFBRDtBQUNJLFVBQUksRUFBRTtBQUNGWSxRQUFBQSxRQUFRLEVBQUUsT0FEUjtBQUVGQyxRQUFBQSxLQUFLLEVBQUU7QUFBQ04sVUFBQUEsSUFBSSxFQUFFQTtBQUFQO0FBRkwsT0FEVjtBQUtJLFFBQUUsYUFBTUEsSUFBTixDQUxOO0FBTUksY0FBUSxNQU5aO0FBQUEsNkJBUUk7QUFBRyxpQkFBUyxFQUFFRSxTQUFkO0FBQUEsa0JBQTBCTDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBWUg7O0FBRUQsc0JBQ0k7QUFDSSxRQUFJLEVBQUVELEdBQUcsQ0FBQ1csV0FEZDtBQUVJLGFBQVMsRUFBRWQsb0VBRmY7QUFHSSxVQUFNLEVBQUMsUUFIWDtBQUFBLGNBS0tJO0FBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBU0gsQ0EvQkQ7O0dBQU1IO1VBRWlCSDs7O0tBRmpCRztBQWlDTkEsT0FBTyxDQUFDYyxTQUFSLEdBQW9CO0FBQ2hCWCxFQUFBQSxLQUFLLEVBQUVQLDBEQURTO0FBRWhCTSxFQUFBQSxHQUFHLEVBQUVOLDBEQUFnQm9CO0FBRkwsQ0FBcEI7QUFLQSwrREFBZWhCLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvbmF2TGluay5qcz85MDhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2NzcydcblxuY29uc3QgTmF2TGluayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHt1cmwsIHRpdGxlfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcbiAgICBcbiAgICBpZih1cmwuaW50ZXJuYWxMaW5rKXtcbiAgICAgICAgY29uc3Qgc2x1ZyA9IHVybC5pbnRlcm5hbExpbmsuc2x1Zy5jdXJyZW50O1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBhc1BhdGggPT09IGAvJHtzbHVnfWAgPyBgJHtzdHlsZXMubmF2TGlua30gJHtzdHlsZXMubmF2TGlua19fYWN0aXZlfWAgOiBgJHtzdHlsZXMubmF2TGlua31gO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9wYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtzbHVnOiBzbHVnfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYXM9e2AvJHtzbHVnfWB9XG4gICAgICAgICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhIFxuICAgICAgICAgICAgaHJlZj17dXJsLmV4dGVybmFsVXJsfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua31cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9hPlxuICAgIClcbn1cblxuTmF2TGluay5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdXJsOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkxpbms7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwidXNlUm91dGVyIiwiTGluayIsInN0eWxlcyIsIk5hdkxpbmsiLCJwcm9wcyIsInVybCIsInRpdGxlIiwiYXNQYXRoIiwiaW50ZXJuYWxMaW5rIiwic2x1ZyIsImN1cnJlbnQiLCJjbGFzc05hbWUiLCJuYXZMaW5rIiwibmF2TGlua19fYWN0aXZlIiwicGF0aG5hbWUiLCJxdWVyeSIsImV4dGVybmFsVXJsIiwicHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/navLink.js\n");

/***/ })

});
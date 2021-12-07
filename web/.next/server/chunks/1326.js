exports.id = 1326;
exports.ids = [1326];
exports.modules = {

/***/ 1326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5030);
/* harmony import */ var _components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4687);
/* harmony import */ var _bodystatic_table_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1083);
/* harmony import */ var _bodystatic_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bodystatic_table_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);








const bodystatic_table = props => {
  const {
    columns,
    rows
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "bodystatic-table",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
      className: (_bodystatic_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().table),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tr", {
          children: columns.map(column => {
            if (column.empty_head) {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {}, column._key);
            } else {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                children: column.icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: `${(_bodystatic_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().row_cell_list)} ${(_bodystatic_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().row_cell_list__large)}`,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                    src: column.icon,
                    layout: "responsive",
                    objectFit: "contain"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
                    children: column.header
                  }), col.subheader && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
                    children: column.subheader
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
                    children: column.header
                  }), column.subheader && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
                    children: column.subheader
                  })]
                })
              }, column._key);
            }
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
        children: rows.map(row => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            className: (_bodystatic_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().row),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
                children: row.header
              })
            }), row.cells.map(cell => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                children: cell.bullets ? cell.bullets.map(bullet => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: (_bodystatic_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().row_cell_list),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_image__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                      src: bullet.icon,
                      layout: "fixed",
                      width: 28,
                      height: 28
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                      className: (_bodystatic_table_module_scss__WEBPACK_IMPORTED_MODULE_4___default().row_cell_list_content),
                      richText: bullet.body.richText,
                      align: bullet.body.align
                    })]
                  }, bullet._key);
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_richText_field_richText_field__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                  richText: cell.body.richText,
                  align: cell.body.align
                })
              }, cell._key);
            })]
          }, row._key);
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bodystatic_table);

/***/ }),

/***/ 1083:
/***/ ((module) => {

// Exports
module.exports = {
	"umoja-u-pad-1": "bodystatic-table_umoja-u-pad-1__12Icy",
	"umoja-u-pad-t--0": "bodystatic-table_umoja-u-pad-t--0__3TTcy",
	"umoja-u-pad-b--0": "bodystatic-table_umoja-u-pad-b--0__9I77w",
	"umoja-l-grid--12": "bodystatic-table_umoja-l-grid--12__3vwHy",
	"umoja-l-grid--6": "bodystatic-table_umoja-l-grid--6__1Oj1Z",
	"umoja-l-page-width": "bodystatic-table_umoja-l-page-width__1ED02",
	"umoja-l-grid-section": "bodystatic-table_umoja-l-grid-section__2KDXT",
	"umoja-l-grid-section--flat-top": "bodystatic-table_umoja-l-grid-section--flat-top__JPOZa",
	"umoja-l-grid-gap--row-1": "bodystatic-table_umoja-l-grid-gap--row-1__Zqfa4",
	"umoja-l-grid-gap--row-2": "bodystatic-table_umoja-l-grid-gap--row-2__1E8ly",
	"umoja-l-grid-gap--row-3": "bodystatic-table_umoja-l-grid-gap--row-3__HRoT8",
	"umoja-l-grid-align--center": "bodystatic-table_umoja-l-grid-align--center__FR7lz",
	"umoja-l-grid-align--base": "bodystatic-table_umoja-l-grid-align--base__M6UuH",
	"table": "bodystatic-table_table__3BT-E",
	"btn--secondary": "bodystatic-table_btn--secondary__3pi05",
	"btn__text": "bodystatic-table_btn__text__35iqd",
	"row_cell_list": "bodystatic-table_row_cell_list__2o50i",
	"row_cell_list_content": "bodystatic-table_row_cell_list_content__2-erg",
	"row_cell_list__large": "bodystatic-table_row_cell_list__large__2QnlC"
};


/***/ })

};
;
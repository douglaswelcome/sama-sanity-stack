exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const sanityClient = __webpack_require__(8809);

const client = sanityClient({
  projectId: '76e3r62u',
  // you can find this in sanity.json
  dataset: 'production',
  apiVersion: '2021-10-06',
  useCdn: true // `false` if you want to ensure fresh data

});
module.exports = client;

/***/ }),

/***/ 4645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zl": () => (/* binding */ indexQuery),
/* harmony export */   "JR": () => (/* binding */ pageQuery),
/* harmony export */   "A3": () => (/* binding */ pageSlugsQuery),
/* harmony export */   "oM": () => (/* binding */ eventsPastQuery),
/* harmony export */   "_D": () => (/* binding */ eventsUpcomingQuery),
/* harmony export */   "Dp": () => (/* binding */ eventsFeaturedQuery)
/* harmony export */ });
const homeID = `*[_id == "global-config"][0].frontpage->_id`;
const eventFields = `
    featured,
    datetime,
    time_zone,
    name,
    type,
    url,
    location
`;
const pageFields = `
title,
"slug": slug.current,
"sections": sections[]{
    _key,
    background_color,
    "modules": modules.modules[]{
        _type == "reusable_modules_module" => module_ref->.module{
            "ref_modules": modules[]{
                ...
            }
        },
        _type != "reusable_modules_module" => {
            ...
        }
    }
}
`;
const indexQuery = `
*[_type == "page" && _id == ${homeID}][0] {
  ${pageFields}
}`;
const pageQuery = `{
    "page": *[_type == "page" && slug.current == $slug && _id != ${homeID}][0] {
        ${pageFields}
    }
}`;
const pageSlugsQuery = `
*[_type == "page" && defined(slug.current)][].slug.current
`;
const eventsPastQuery = `
*[_type == "event" && datetime < now()]| order(datetime desc){
    ${eventFields}
}
`;
const eventsUpcomingQuery = `
*[_type == "event" && datetime > now()]| order(datetime asc){
    ${eventFields}
}
`;
const eventsFeaturedQuery = `
*[_type == "event" && datetime > now() && featured == true][0..2]| order(datetime asc){
    ${eventFields}
}
`;

/***/ })

};
;
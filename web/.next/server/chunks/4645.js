exports.id = 4645;
exports.ids = [4645];
exports.modules = {

/***/ 267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const sanityClient = __webpack_require__(8809);

const client = sanityClient({
  projectId: "76e3r62u",
  // you can find this in sanity.json
  dataset: "production",
  apiVersion: '2021-03-25',
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
/* harmony export */   "Dp": () => (/* binding */ eventsFeaturedQuery),
/* harmony export */   "X6": () => (/* binding */ pressNewsQuery),
/* harmony export */   "d9": () => (/* binding */ pressQuery),
/* harmony export */   "ad": () => (/* binding */ pressFeaturedQuery),
/* harmony export */   "Vs": () => (/* binding */ postsQuery),
/* harmony export */   "HF": () => (/* binding */ postQuery),
/* harmony export */   "Pk": () => (/* binding */ postSlugsQuery)
/* harmony export */ });
/* unused harmony exports authorQuery, authorPostsQuery, postsByTagQuery, getAllPostSlugs, getPostsByTagSlug */
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_0__);


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
const pressFields = `
    article_url,
    background,
    date,
    featured,
    featured_order,
    headline,
    publication_icon,
    publication_source,
    type
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
const authorFields = `
_id,
avatar,
bio,
name,
slug
`;
const postsFields = `
_createdAt, 
slug,
author->{
${authorFields}
},
"plaintextBody": pt::text(body),
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
featured_image, 
tags, 
title
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
const pressNewsQuery = `
*[_type == "press" && type == 'News']| order(date desc){
    ${pressFields}
}
`;
const pressQuery = `
*[_type == "press" && type != 'News']| order(date desc){
    ${pressFields}
}
`;
const pressFeaturedQuery = `
*[_type == "press" && featured == true][0..2]| order(featured_order asc){
    ${pressFields}
}
`;
const postsQuery = `
*[_type == "post"]| order(_createdAt desc){
    ${postsFields}
}
`;
const postQuery = `{
    "post": *[_type == "post" && slug.current == $slug][0] {
        ${postsFields}, body
    }
}`;
const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;
const authorQuery = `{
    "author": *[_type == "author" && slug.current == $slug][0]{
        ${authorFields},
        "posts": *[_type=='post' && references(^._id)]{
            ${postsFields}
        }
    }
}`;
const authorPostsQuery = (/* unused pure expression or super */ null && (`
    *[_type == "author" && defined(slug.current)][].slug.current
`));
const postsByTagQuery = `{
    "posts": *[_type == "post" && $tag in tags[].value]{
        ${postsFields}
    }
}`;
async function getAllPostSlugs() {
  let data = await client.fetch(`*[_type == "post" && defined(tags)][].tags[].value`);
  data = [...new Set(data)];
  const paths = data.map(tag => {
    return slugify(tag);
  });
  return paths;
}
async function getPostsByTagSlug(slug) {
  let data = await client.fetch(`*[_type == "post" && defined(tags)][].tags[].value`);
  data = [...new Set(data)];
  const tags = data.map(tag => {
    let tagObj = {
      slug: slugify(tag),
      tag: tag
    };
    return tagObj;
  });
  const tag = tags.find(tag => tag.slug === slug);
  return tag;
}

/***/ })

};
;
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
/* harmony export */   "Pk": () => (/* binding */ postSlugsQuery),
/* harmony export */   "by": () => (/* binding */ authorQuery),
/* harmony export */   "I9": () => (/* binding */ authorPostsQuery),
/* harmony export */   "Ki": () => (/* binding */ postsByTagQuery),
/* harmony export */   "bz": () => (/* binding */ getAllPostSlugs),
/* harmony export */   "x8": () => (/* binding */ getPostsByTagSlug)
/* harmony export */ });
/* harmony import */ var _libs_slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7570);
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
},
"config": {
    title,
    description,
    openGraphImage
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
title,
"config": {
    "title": seo_title,
    "description": meta_description,
    openGraphImage
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
const postsQuery = `{
    "topPost": *[_type == "post"]|order(_createdAt desc)[0]{
        ${postsFields},
    },
    "firstLoad": *[_type == "post"]| order(_createdAt desc)[1..12]{
        ${postsFields},
    },
    "featuredPosts": *[_type=='post' && "Featured" in tags[].value]| order(_createdAt desc)[0..2]{
        _id,
        title,
        slug,
        tags,
        featured_image
    },
    "morePosts": *[_type == "post"]| order(_createdAt desc)[13..100]{
        ${postsFields},
    }
}
`;
const postQuery = `{
    "post": *[_type == "post" && slug.current == $slug][0] {
        ${postsFields}, 
        body,
        "relatedPosts": *[_type=='post' && tags[0].value in tags[].value && references(^._id) != _id]| order(_createdAt desc)[0..2]{
            _id,
            title,
            slug,
            tags,
            featured_image
        }
    }
}`;
const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;
const authorQuery = `{
    "author": *[_type == "author" && slug.current == $slug][0]{
        ${authorFields},
        "firstLoad": *[_type=='post' && references(^._id)]| order(_createdAt desc)[0..11]{
            ${postsFields},
        },
        "morePosts": *[_type=='post' && references(^._id)]| order(_createdAt desc)[12..100]{
            ${postsFields},
        }
    }
}`;
const authorPostsQuery = `
    *[_type == "author" && defined(slug.current)][].slug.current
`;
const postsByTagQuery = `{
    "firstLoad": *[_type == "post" && $tag in tags[].value]| order(_createdAt desc)[0..11]{
        ${postsFields},
    },
    "morePosts": *[_type == "post" && $tag in tags[].value]| order(_createdAt desc)[12..100]{
        ${postsFields},
    }
}`;
async function getAllPostSlugs() {
  let data = await _client__WEBPACK_IMPORTED_MODULE_0___default().fetch(`*[_type == "post" && defined(tags)][].tags[].value`);
  data = [...new Set(data)];
  const paths = data.map(tag => {
    return (0,_libs_slugify__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(tag);
  });
  return paths;
}
async function getPostsByTagSlug(slug) {
  let data = await _client__WEBPACK_IMPORTED_MODULE_0___default().fetch(`*[_type == "post" && defined(tags)][].tags[].value`);
  data = [...new Set(data)];
  const tags = data.map(tag => {
    let tagObj = {
      slug: (0,_libs_slugify__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(tag),
      tag: tag
    };
    return tagObj;
  });
  const tag = tags.find(tag => tag.slug === slug);
  return tag;
}

/***/ }),

/***/ 7570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slugify = str => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim

  str = str.toLowerCase(); // remove accents, swap ñ for n, etc

  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaeeeeiiiioooouuuunc------";

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  .replace(/\s+/g, '-') // collapse whitespace and replace by -
  .replace(/-+/g, '-'); // collapse dashes

  return str;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slugify);

/***/ })

};
;
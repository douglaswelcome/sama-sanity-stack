import slugify from '../libs/slugify';
import client from '../client';

const homeID = `*[_id == "global-config"][0].frontpage->_id`;
const eventFields = `
    featured,
    datetime,
    time_zone,
    name,
    type,
    url,
    location
`

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
`

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
`

const authorFields = `
_id,
avatar,
bio,
name,
slug
`

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
`

export const indexQuery = `
*[_type == "page" && _id == ${homeID}][0] {
  ${pageFields}
}`

export const pageQuery = `{
    "page": *[_type == "page" && slug.current == $slug && _id != ${homeID}][0] {
        ${pageFields}
    }
}`

export const pageSlugsQuery = `
*[_type == "page" && defined(slug.current)][].slug.current
`

export const eventsPastQuery = `
*[_type == "event" && datetime < now()]| order(datetime desc){
    ${eventFields}
}
`
export const eventsUpcomingQuery = `
*[_type == "event" && datetime > now()]| order(datetime asc){
    ${eventFields}
}
`
export const eventsFeaturedQuery = `
*[_type == "event" && datetime > now() && featured == true][0..2]| order(datetime asc){
    ${eventFields}
}
`
export const pressNewsQuery = `
*[_type == "press" && type == 'News']| order(date desc){
    ${pressFields}
}
`

export const pressQuery = `
*[_type == "press" && type != 'News']| order(date desc){
    ${pressFields}
}
`

export const pressFeaturedQuery = `
*[_type == "press" && featured == true][0..2]| order(featured_order asc){
    ${pressFields}
}
`

export const postsQuery = `
*[_type == "post"]| order(_createdAt desc){
    ${postsFields}
}
`
export const postQuery = `{
    "post": *[_type == "post" && slug.current == $slug][0] {
        ${postsFields}, body
    }
}`

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`

export const authorQuery = `{
    "author": *[_type == "author" && slug.current == $slug][0]{
        ${authorFields},
        "posts": *[_type=='post' && references(^._id)]{
            ${postsFields}
        }
    }
}`

export const authorPostsQuery = `
    *[_type == "author" && defined(slug.current)][].slug.current
`

export const postsByTagQuery = `{
    "posts": *[_type == "post" && $tag in tags[].value]{
        ${postsFields}
    }
}`

export async function getAllPostSlugs() {
    let data = await client.fetch(`*[_type == "post" && defined(tags)][].tags[].value`);
    data = [...new Set(data)];
    const paths = data.map((tag) => {
        return slugify(tag)
    })
    return paths
}

export async function getPostsByTagSlug(slug){
    let data = await client.fetch(`*[_type == "post" && defined(tags)][].tags[].value`);
    data = [...new Set(data)];
    const tags = data.map((tag) => {
        let tagObj ={
            slug: slugify(tag),
            tag: tag
        }
        return tagObj
    })
    const tag = tags.find(tag => tag.slug === slug);

    return tag
}
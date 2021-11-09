const homeID = `*[_id == "global-config"][0].frontpage->_id`;

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
*[_type == "event" && datetime < now()]| order(datetime desc)
`
export const eventsUpcomingQuery = `
*[_type == "event" && datetime > now()]| order(datetime asc)
`
export const eventsFeaturedQuery = `
*[_type == "event" && datetime > now() && featured == true][0..2]| order(datetime asc)
`
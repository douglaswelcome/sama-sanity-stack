const homeID = `*[_id == "global-config"][0].frontpage->_id`;

const pageFields = `
title,
"slug": slug.current,
"sections": sections[]{
    _key,
    background_color,
    "modules": modules.modules[]{
        ...,
        "align": richText.align,
        "richText": 
           richText.richText[]{
            ...,
            markDefs[]{
                ...,
                internalLink->{
                    slug
                }
            }
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
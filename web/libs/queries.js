const homeID = `*[_id == "global-config"][0].frontpage->_id`;
const moduleFields = `
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
                ${moduleFields}
            }
        },
        _type != "reusable_modules_module" => {
            ${moduleFields}
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
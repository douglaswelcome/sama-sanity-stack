// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import navigation from './documents/navigation'
import siteConfig from './documents/siteConfig'

//Array types
import page_sections from './arrays/sections'

//Object types
import button from './objects/button'
import icon_copy from './objects/icon_copy'
import lottie from './objects/lottie'
import quote from './objects/quote'
import navDropdownMenu from './objects/navDropdownMenu'
import navItem from './objects/navItem'
import navCat from './objects/navCat'
import link from './objects/link'
import page_modules from './objects/page_modules'
import hero_home from './modules/hero_home'
import bodystaticBragBar from './modules/bodystatic_bragBar'
import bodystatic_iconCopy from './modules/bodystatic_iconCopy'
import bodystatic_panelAvatarQuote from './modules/bodystatic_panelAvatarQuote'
import bodystatic_panelFeature from './modules/bodystatic_panelFeature'
import bodystatic_panelQuote from './modules/bodystatic_panelQuote'
import bodystatic_splitTxtBtn from './modules/bodystatic_splitTxtBtn'
import bodymove_featureWindow from './modules/bodymove_featureWindow'

export default createSchema({
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    page,
    navigation,
    siteConfig,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    page_sections,
    page_modules,
    button,
    icon_copy,
    lottie,
    quote,
    navDropdownMenu,
    navItem,
    navCat,
    link,
    hero_home,
    bodystaticBragBar,
    bodystatic_iconCopy,
    bodystatic_panelAvatarQuote,
    bodystatic_panelFeature,
    bodystatic_panelQuote,
    bodystatic_splitTxtBtn,
    bodymove_featureWindow
  ]),
})

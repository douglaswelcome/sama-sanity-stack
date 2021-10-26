// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import navigation from './documents/navigation'
import siteConfig from './documents/siteConfig'
import reusable_module from './documents/reusableModule'

//Object types
import button from './objects/button'
import icon_copy from './objects/icon_copy'
import lottie from './objects/lottie'
import quote from './objects/quote'
import navDropdownMenu from './objects/navDropdownMenu'
import navItem from './objects/navItem'
import navCat from './objects/navCat'
import link from './objects/link'
import sticky_sideItem from './objects/sticky_sideItem'
import page_modules from './objects/page_modules'
import page_sections from './objects/page_sections'
import hero_home from './modules/hero_home'
import hero_splittxtimg from './modules/hero_splittxtimg'
import hero_centertxt from './modules/hero_centertxt'
import bodystaticBragBar from './modules/bodystatic_bragBar'
import bodystatic_iconCopy from './modules/bodystatic_iconCopy'
import bodystatic_richTxt from './modules/bodystatic_richTxt'
import bodystatic_panelAvatarQuote from './modules/bodystatic_panelAvatarQuote'
import bodystatic_panelFeature from './modules/bodystatic_panelFeature'
import bodystatic_panelQuote from './modules/bodystatic_panelQuote'
import bodystatic_splitTxtBtn from './modules/bodystatic_splitTxtBtn'
import bodymove_featureWindow from './modules/bodymove_featureWindow'
import bodymove_stickySideScroll from './modules/bodymove_stickySideScroll'
import bodystatic_videoDivide from './modules/bodystatic_videoDivide'
import bodystatic_display from './modules/bodystatic_display'
import bodystatic_cardImg from './modules/bodystatic_cardImg'
import bodystatic_splitTxtImg from './modules/bodystatic_splitTxtImg'
import bodystatic_tabs from './modules/bodystatic_tabs'
import tab from './objects/tab'
import richTxt_field from './objects/richTxt_field'
import reusable_module_module from './modules/reusable_modules_module'
import bodystatic_iconList from './modules/bodystatic_iconList'
import bodystatic_centerPanel from './modules/bodystatic_centerPanel'
import bodystatic_headSubCta from './modules/bodystatic_headSubCta'

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
    reusable_module,
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
    tab,
    richTxt_field,
    sticky_sideItem,
    hero_home,
    hero_splittxtimg,
    hero_centertxt,
    bodystaticBragBar,
    bodystatic_iconCopy,
    bodystatic_richTxt,
    bodystatic_panelAvatarQuote,
    bodystatic_panelFeature,
    bodystatic_panelQuote,
    bodystatic_splitTxtBtn,
    bodystatic_videoDivide,
    bodystatic_cardImg,
    bodystatic_display,
    bodystatic_splitTxtImg,
    bodystatic_tabs,
    bodymove_featureWindow,
    bodymove_stickySideScroll,
    reusable_module_module,
    bodystatic_iconList,
    bodystatic_centerPanel,
    bodystatic_headSubCta
  ]),
})

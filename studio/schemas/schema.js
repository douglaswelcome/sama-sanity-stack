// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import navigation from './documents/navigation'
import siteConfig from './documents/siteConfig'
import reusable_module from './documents/reusableModule'
import event from './documents/event'
import press from './documents/press'

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
import bodystatic_vidCenter from './modules/bodystatic_vidCenter'
import bodystatic_display from './modules/bodystatic_display'
import bodystatic_cardImg from './modules/bodystatic_cardImg'
import bodystatic_splitTxtImg from './modules/bodystatic_splitTxtImg'
import bodystatic_tabs from './modules/bodystatic_tabs'
import tab from './objects/tab'
import richTxt_field from './objects/richTxt_field'
import richText_field_simple from './objects/richTxt_field_simple'
import reusable_module_module from './modules/reusable_modules_module'
import bodystatic_iconList from './modules/bodystatic_iconList'
import bodystatic_centerPanel from './modules/bodystatic_centerPanel'
import bodystatic_headSubCta from './modules/bodystatic_headSubCta'
import bodystatic_headline from './modules/bodystatic_headline'
import bodystatic_galleryGrid from './modules/bodystatic_galleryGrid'
import grid_image from './objects/grid_image'
import embed from './objects/embed'
import video_embed from './objects/video_embed'
import video from './objects/video'
import bodystatic_flowCompare from './modules/bodystatic_flowCompare'
import bodymove_splitTxtImg_slide from './objects/bodymove_splitTxtImg_slide'
import bullet_icon from './objects/bullet_icon'
import bodymove_splitTxtImg from './modules/bodymove_splitTxtImg'
import bodystatic_table from './modules/bodystatic_table'
import table_col from './objects/table_col'
import table_row from './objects/table_row'
import table_rowCell from './objects/table_rowCell'
import bodystatic_panelColumns from './modules/bodystatic_panelColumns'
import bodystatic_timeline from './modules/bodystatic_timeline'
import bodystatic_panelAvatarTxt from './modules/bodystatic_panelAvatarTxt'
import avatar from './objects/avatar'
import bodystatic_leadTeam from './modules/bodystatic_leadTeam'
import hero_splittxtimg_tall from './modules/hero_splittxtimg_tall'
import bodystatic_flowRow from './modules/bodystatic_flowRow'
import bodystatic_splitTxtQuote from './modules/bodystatic_splitTxtQuote'
import bodymove_panel from './modules/bodymove_panel'
import bodystatic_punchyTxt from './modules/bodystatic_punchyTxt'
import bodymove_map from './modules/bodymove_map'
import bodymove_sfMap from './modules/bodymove_sfMap'
import post from './documents/post'
import author from './documents/author'
import bodymove_accordion from './modules/bodymove_accordion'


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
    event,
    press,
    post,
    author,
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
    richText_field_simple,
    sticky_sideItem,
    grid_image,
    video_embed,
    video,
    bullet_icon,
    table_col,
    table_row,
    table_rowCell,
    avatar,
    embed,
    hero_splittxtimg,
    hero_splittxtimg_tall,
    hero_centertxt,
    hero_home,
    bodystaticBragBar,
    bodystatic_iconCopy,
    bodystatic_richTxt,
    bodystatic_panelAvatarQuote,
    bodystatic_panelFeature,
    bodystatic_panelQuote,
    bodystatic_splitTxtBtn,
    bodystatic_vidCenter,
    bodystatic_cardImg,
    bodystatic_display,
    bodystatic_splitTxtImg,
    bodystatic_tabs,
    bodymove_featureWindow,
    bodymove_stickySideScroll,
    bodymove_splitTxtImg,
    reusable_module_module,
    bodystatic_iconList,
    bodystatic_centerPanel,
    bodystatic_headSubCta,
    bodystatic_headline,
    bodystatic_galleryGrid,
    bodystatic_flowCompare,
    bodymove_splitTxtImg_slide,
    bodystatic_table,
    bodystatic_panelColumns,
    bodystatic_timeline,
    bodystatic_panelAvatarTxt,
    bodystatic_leadTeam,
    bodystatic_flowRow,
    bodystatic_splitTxtQuote,
    bodymove_panel,
    bodystatic_punchyTxt,
    bodymove_map,
    bodymove_sfMap,
    bodymove_accordion
  ]),
})

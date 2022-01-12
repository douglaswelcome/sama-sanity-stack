import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings, MdOutlineCalendarToday, MdPostAdd } from "react-icons/md"
import {ImNewspaper} from "react-icons/im"
import {BsPersonCircle} from "react-icons/bs"

const hiddenDocTypes = listItem =>
  !['page', 'navigation', 'siteConfig', 'reusable_module', 'event', 'press', 'post', 'author'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('siteConfig')
            .documentId('global-config')
        ),
      S.listItem()
        .title('Pages')
        .icon(MdDashboard)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Posts')
        .icon(MdPostAdd)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Authors')
        .icon(BsPersonCircle)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
      .title('Events')
      .icon(MdOutlineCalendarToday)
      .schemaType('event')
      .child(S.documentTypeList('event').title('Event')),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
      .title('Press')
      .icon(ImNewspaper)
      .schemaType('press')
      .child(S.documentTypeList('press').title('Press')),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Reusable Content Modules')
        .schemaType('reusable_module')
        .child(S.documentTypeList('reusable_module').title('Reusable Content Modules')),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Navigation')
        .schemaType('navigation')
        .child(S.documentTypeList('navigation').title('Navigation')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
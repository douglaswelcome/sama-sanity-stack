import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings, MdOutlineCalendarToday } from "react-icons/md"

const hiddenDocTypes = listItem =>
  !['page', 'navigation', 'siteConfig', 'reusable_module', 'event'].includes(listItem.getId())

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
        .title('Reusable Content Modules')
        .schemaType('reusable_module')
        .child(S.documentTypeList('reusable_module').title('Reusable Content Modules')),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
      .title('Events')
      .icon(MdOutlineCalendarToday)
      .schemaType('event')
      .child(S.documentTypeList('event').title('Event')),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Navigation')
        .schemaType('navigation')
        .child(S.documentTypeList('navigation').title('Navigation')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
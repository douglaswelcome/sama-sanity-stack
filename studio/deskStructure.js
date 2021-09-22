import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings } from "react-icons/md"

const hiddenDocTypes = listItem =>
  !['page', 'navigation', 'siteConfig'].includes(listItem.getId())

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
        .title('Navigation')
        .schemaType('navigation')
        .child(S.documentTypeList('navigation').title('Navigation')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
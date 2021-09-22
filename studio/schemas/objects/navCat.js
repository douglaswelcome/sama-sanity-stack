import { GrTag } from "react-icons/gr";

export default {
    name: 'navCat',
    type: 'object',
    title: 'Navigation category group',
    icon: GrTag,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Category Title"
        },
        {
            name: "items",
            type: "array",
            title: "Navigation items",
            of: [   
                { type: "navItem" }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare ({title}) {
          return {
            title: `Category: ${title}`
          }
        }
    }
};
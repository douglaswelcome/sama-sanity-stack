import { GrLink } from "react-icons/gr";

export default {
    name: 'navItem',
    title: 'Navigation Item',
    type: 'object',
    icon: GrLink,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "url",
            type: "link", 
            title: "Navigation Link",
        }
    ]
}
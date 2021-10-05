import { GrNavigate } from "react-icons/gr";

export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: GrNavigate,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "items",
            type: "array",
            title: "Top navigation items",
            of: [
                { type: "navItem" },
                { type: "navDropdownMenu" }
            ]
        },
        {
            name: "nav_cta",
            type: "button",
            title: "Navigation CTA"
        }
    ]
}
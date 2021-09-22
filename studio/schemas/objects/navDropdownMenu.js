import { IoIosArrowDropdownCircle } from "react-icons/io";

export default {
    name: 'navDropdownMenu',
    title: 'Navigation Dropdown',
    type: 'object',
    icon: IoIosArrowDropdownCircle,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "items",
            type: "array",
            title: "Dropdown items",
            of: [   
                { type: "navItem" },
                { type: "navCat" }
            ]
        }
    ]
}
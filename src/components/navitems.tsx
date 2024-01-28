import { render } from "react-dom";

interface navItems {
    text : String 
}

const navItems: navItems[] =  [
    { text: "Case Studies" }, 
    { text : "Work Experience" },
    { text : "Personal Projects" }, 
    { text : "Contacts" },
]

const RenderNavItems = () => {
    return (
       
        <div className="flex items-stretch items-center justify-center gap-4 w-full text-center font-bold segoe">
            {
                navItems.map((items, i) => (
                    <a className="flex-2 flex items-center justify-center ">
                        { items.text }
                        { i === (navItems.length-1 ) ? "" : <span className="px-6 lg:text-base text-sm"> / </span> }
                    </a>
                    
                ))
            }
        </div>
    )
}

export default RenderNavItems;
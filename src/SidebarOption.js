import React from 'react'
import "./SidebarOption.css"

function SidebarOption({ active,text,Icon }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>{/*hapa nimefanya first icon home inyeshe iko active mtu akiingia to*/}

            <Icon />
            <h1>{text}</h1>
        </div>
    )
}

export default SidebarOption

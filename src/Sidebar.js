import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core'
function Sidebar() {
    return (
        <div className="sidebar">
            <OutdoorGrillIcon  className="sidebar__outdoorIcon"/>
            <SidebarOption active Icon={HomeIcon} text='Home' />
            <SidebarOption Icon={SearchIcon} text='Explore' />
            <SidebarOption Icon={NotificationsNoneIcon}text='Notifications' />
            <SidebarOption Icon={MailOutlineOutlinedIcon} text='Messages' />
            <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
            <SidebarOption Icon={ListAltIcon} text='Lists' />
            <SidebarOption Icon={PermIdentityIcon} text='Profile' />
            <SidebarOption Icon={MoreHorizIcon} text='More' />
            
            <Button variant="outlined" className="sidebar__peep" fullWidth>Peep</Button>
        </div>
    )
}

export default Sidebar

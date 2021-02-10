import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fdel2-1.fna.fbcdn.net/v/t1.0-1/p200x200/102554868_1143928059316551_5050881372592275456_o.jpg?_nc_cat=107&ccb=2&_nc_sid=7206a8&_nc_ohc=SgpJp1fI7V8AX9DLB6B&_nc_ht=scontent.fdel2-1.fna&tp=6&oh=4af7a7c4c5451699883405e889d000bd&oe=6048E284" title="Dinesh Soni" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"
            />
           <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
           <SidebarRow Icon={PeopleIcon} title="Friends"/>
           <SidebarRow Icon={ChatIcon} title="Messenger"/>
           <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
           <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
           <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
        </div>
    )
}

export default Sidebar;

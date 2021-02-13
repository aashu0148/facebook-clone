import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

import { connect } from "react-redux";

function Sidebar(props) {
  return (
    <div className="sidebar_container">
      <div className="sidebar">
        <SidebarRow src={props.photo} title={props.user} />
        <SidebarRow
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
          title="COVID-19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
          title="Friends"
        />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
          title="Marketplace"
        />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    photo: state.userPhoto,
  };
};

export default connect(mapStateToProps)(Sidebar);

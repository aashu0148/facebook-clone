import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import StoreRoundedIcon from "@material-ui/icons/StorefrontRounded";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_start">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"></img>
        <IconButton className="navbar_search-icon-btn">
          <SearchIcon />
        </IconButton>
        <input type="text"></input>
      </div>
      <div className="navbar_middle">
        <HomeIcon />
        <SubscriptionsIcon />
        <GroupRoundedIcon />
        <StoreRoundedIcon />
        <SportsEsportsIcon />
      </div>
      <div className="navbar_end">
        <div className="navbar_profile">
          <Avatar />
        </div>
        <IconButton className="navbar_icon-btn">
          <AddIcon />
        </IconButton>
        <IconButton className="navbar_icon-btn">
          <ForumIcon />
        </IconButton>
        <IconButton className="navbar_icon-btn">
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton className="navbar_icon-btn">
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;

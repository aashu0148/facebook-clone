import React, { Component } from "react";
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

class Navbar extends Component {
  componentDidMount() {
    document
      .querySelector(`.navbar_${this.props.optionActive}`)
      .classList.add("navbar_option-active");
  }

  render() {
    return (
      <div className="navbar_container">
        <div className="navbar">
          <div className="navbar_start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"></img>
            <div className="navbar_search">
              <IconButton className="navbar_search-icon-btn">
                <SearchIcon />
              </IconButton>
              <input type="text" placeholder="Search Facebook"></input>
            </div>
          </div>
          <div className="navbar_middle">
            <div className="navbar_option navbar_home">
              <HomeIcon />
            </div>
            <div className="navbar_option navbar_video">
              <SubscriptionsIcon />
            </div>
            <div className="navbar_option navbar_store">
              <StoreRoundedIcon />
            </div>
            <div className="navbar_option navbar_group">
              <GroupRoundedIcon />
            </div>
            <div className="navbar_option navbar_gaming">
              <SportsEsportsIcon />
            </div>
          </div>

          <div className="navbar_end">
            <div className="navbar_profile">
              <Avatar src={this.props.photo} />
              <p>
                {this.props.user
                  ? this.props.user.substr(0, this.props.user.indexOf(" "))
                  : ""}
              </p>
            </div>
            <IconButton>
              <AddIcon />
            </IconButton>
            <IconButton>
              <ForumIcon />
            </IconButton>
            <IconButton>
              <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

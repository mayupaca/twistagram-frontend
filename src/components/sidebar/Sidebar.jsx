import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import React from "react";
import SidebarFriend from "../sidebarFriend/SidebarFriend";
import "./Sidebar.css";
import { Users } from "../../dummyData";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebatListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebatListItemText">Search</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebatListItemText">Notifications</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon" />
            <span className="sidebatListItemText">Messages</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebatListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebatListItemText">Profile</span>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebatListItemText">Setting</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <SidebarFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

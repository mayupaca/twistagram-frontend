import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import React, { useContext } from "react";
import SidebarFriend from "../sidebarFriend/SidebarFriend";
import "./Sidebar.css";
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";


export default function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon"  />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebatListItemText">Home</span>
            </Link>
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
            <Link to={`/profile/${user.username}`} style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebatListItemText">Profile</span>
            </Link>
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

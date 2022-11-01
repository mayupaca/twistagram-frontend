import React, { useEffect, useState } from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";
import Topbar from "../../components/topbar/Topbar";
import "./Profile.css";
import axios from "axios";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  // apiをたたく
  useEffect(() => {
    const fetchUser = async () => {
      // axiosの.getメソッドを使ってデータベースからデータを取ってくる
      const response = await axios.get(`/users?username=mayumura`);
      console.log(response);
      setUser(response.data);
    };
    fetchUser();
    // 一回だけapiをたたきたいから最後に[]をつける
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline username="mayumura" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

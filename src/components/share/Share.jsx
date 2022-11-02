import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../../state/AuthContext";
// import { useParams } from "react-router-dom";
import "./Share.css";
import axios from "axios";

export default function Share() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  // create postのapiたたく
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      // loginしているuserのid
      userId: user._id,
      // 投稿したpost内容
      desc: desc.current.value,
    };
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  // const [user, setUser] = useState({});
  // const username = useParams().username;
  // // apiをたたく
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     // axiosの.getメソッドを使ってデータベースからデータを取ってくる
  //     const response = await axios.get(`/users?username=${username}`);
  //     console.log(response);
  //     setUser(response.data);
  //   };
  //   fetchUser();
  //   // 一回だけapiをたたきたいから最後に[]をつける
  // }, [username]);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PUBLIC_FOLDER + user.profilePicture
                : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="Whats happening?"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <div className="shareOption">
              <Image className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">Picture</span>
            </div>
            <div className="shareOption">
              <Gif className="shareIcon" htmlColor="hotpink" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <Face className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <div className="shareOption">
              <Analytics className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">Pole</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

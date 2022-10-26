import { MoreVert } from "@mui/icons-material";
import React from "react";
import "./Post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="./assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">James Code</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">I code everyday!!</span>
          <img src="./assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">5 Likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">4 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

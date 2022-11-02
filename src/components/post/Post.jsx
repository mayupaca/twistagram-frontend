import { MoreVert } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import "./Post.css";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

// import { Users } from "../../dummyData";

export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  // const user = Users.filter(user => user.id === 1)
  const [like, setLike] = useState(post.likes.length);
  // Likeが押されているかどうか確認
  // false押されてない
  const [isLiked, setIsLiked] = useState(false);
  //このuserは投稿したuser
  const [user, setUser] = useState({});
  // likeしたuser
  const { user: likedUser } = useContext(AuthContext);

  // apiをたたく
  useEffect(() => {
    const fetchUser = async () => {
      // axiosの.getメソッドを使ってデータベースからデータを取ってくる
      const response = await axios.get(
        // 投稿したuserのuserid
        `/users?userId=${post.userId}`
      );
      // console.log(response);
      setUser(response.data);
    };
    fetchUser();
    // 一回だけapiをたたきたいから最後に[]をつける
    // post.userIdが変わるたびにapiが呼び出される
    // postが投稿されるたびに更新される
  }, [post.userId]);

  const handleLike = async() => {
    try {
      // likeのapiをたたく
      await axios.put(`/posts/${post._id}/like`, {userId: likedUser._id})
    } catch (err) {
      console.log(err)
    }
    // likedだったらlikeを一つ減らす
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture ?
                  PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">{like} Likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

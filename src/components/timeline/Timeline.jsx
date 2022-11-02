import React, { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Timeline.css";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";
// import { Posts } from "../../dummyData";
// usernameをpropsとしてProfile.jsxにわたす
// usernameがあるかないかでprofileに表示させる内容を分岐させる
export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);

  const {user} = useContext(AuthContext)
  // apiをたたく
  useEffect(() => {
    const fetchPosts = async () => {
      // axiosの.getメソッドを使ってデータベースからデータを取ってくる
      const response = username
      // usernameがあったらprofileのtimelineに自分の投稿だけ見れるようにしたい
        ? await axios.get(`/posts/profile/${username}`)
      // usernameがなかったら...
        : await axios.get(`/posts/timeline/${user._id}`);
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
    // 一回だけapiをたたきたいから最後に[]をつける
    // usernameが変わるたびにapi(axios.get(`/posts/profile/${username}`))がたたかれる
  }, [username, user._id]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

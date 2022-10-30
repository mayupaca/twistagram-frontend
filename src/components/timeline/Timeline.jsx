import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Timeline.css";
import axios from "axios";
// import { Posts } from "../../dummyData";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  // apiをたたく
  useEffect(() => {
    const fetchPosts = async () => {
      // axiosの.getメソッドを使ってデータベースからデータを取ってくる
      const response = await axios.get(
        "/posts/timeline/635697b796721dc5c65e122a"
      );
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
    // 一回だけapiをたたきたいから最後に[]をつける
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

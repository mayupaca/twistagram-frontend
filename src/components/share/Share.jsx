import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import React from "react";
import "./Share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
          <input
            type="text"
            className="shareInput"
            placeholder="Whats happening?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButtons">
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
          <button className="shareButton">Post</button>
        </div>
      </div>
    </div>
  );
}

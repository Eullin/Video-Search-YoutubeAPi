import './VideoItem.css';
import React from "react";

const videoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className=" video-intem item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="img"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default videoItem;

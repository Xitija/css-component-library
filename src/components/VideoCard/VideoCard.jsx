import { NavLink } from "react-router-dom";

import { useWatchList } from "../../contexts/WatchListContext";

import { AiFillClockCircle } from "react-icons/ai";

import "./VideoCard.css";

export const VideoCard = ({ video }) => {
  const { watchList, addToWatchList, removeFromWatchList } = useWatchList();

  const inWatchlist = watchList?.some(({ _id }) => _id === video?._id);

  return (
    <NavLink className="video-card" to={`/video/${video?._id}`}>
      <div>
        <img src={video?.thumbnail} alt={video?.title} />
      </div>
      <div className="video-info">
        {/* <div> */}
        <img className="creator-image" src={"https://picsum.photos/200"} />
        {/* </div> */}
        <div className="video-details">
          <p className="video-title">{video?.title}</p>
          <p className="video-category">{video?.category}</p>
          <p className="video-category">
            {video?.views} views | {video?.creator}
          </p>
        </div>
      </div>
      <div
        className="watch-later"
        onClick={(e) => {
          e.preventDefault();
          inWatchlist ? removeFromWatchList(video) : addToWatchList(video);
        }}
        style={{ color: inWatchlist ? "#749BC2" : "black" }}
      >
        <AiFillClockCircle size={20} />
      </div>
    </NavLink>
  );
};

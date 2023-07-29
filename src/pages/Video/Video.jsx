import { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillClockCircle } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

import { useData } from "../../contexts/DataContext";
import { useWatchList } from "../../contexts/WatchListContext";
import { usePlaylists } from "../../contexts/PlayListContext";

import "./Video.css";
import { MoreVideos } from "./MoreVideos";

export const Video = () => {
  const { videoId } = useParams();
  const { getVideo } = useData();
  const { watchList, addToWatchList, removeFromWatchList } = useWatchList();
  const { playlists, playlistsDispatcher } = usePlaylists();

  const initialState = {
    title: "",
    description: "",
  };
  const [newPlaylist, setNewPlaylist] = useState();
  const [visible, setVisible] = useState(true);
  const video = getVideo(videoId);

  const inWatchlist = watchList?.some(({ _id }) => _id === video?._id);

  return (
    <div className="video-detail-page">
      <div className="video-player">
        <iframe width="650" height="400" src={video?.src}></iframe>
        <div className="video-details">
          {/* <div className="image-container"> */}
          <img className="creator-image" src={"https://picsum.photos/200"} />
          {/* </div> */}
          <div>
            <p>{video?.title}</p>
          </div>
          <div className="video-actions">
            <div
              className="video-action"
              onClick={(e) => {
                e.preventDefault();
                inWatchlist
                  ? removeFromWatchList(video)
                  : addToWatchList(video);
              }}
              style={{ color: inWatchlist ? "#749BC2" : "black" }}
            >
              <AiFillClockCircle size={20} />
            </div>
            <div
              className="video-action"
              onClick={(e) => {
                e.preventDefault();
                setVisible(!visible);
              }}
            >
              <MdPlaylistAdd size={20} />
            </div>
            {/* <div
              className="watch-later"
              //   onClick={(e) => {
              //     e.preventDefault();
              //     inWatchlist
              //       ? removeFromWatchList(video)
              //       : addToWatchList(video);
              //   }}
              //   style={{ color: inWatchlist ? "#749BC2" : "black" }}
            >
              <AiFillClockCircle size={20} />
            </div> */}
          </div>
          <div className="video-playlist" hidden={visible}>
            <div>
              <input
                type="text"
                placeholder="Enter Playlist Title"
                value={newPlaylist?.title}
                onChange={(e) =>
                  setNewPlaylist({ ...newPlaylist, title: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Playlist Description"
                value={newPlaylist?.description}
                onChange={(e) =>
                  setNewPlaylist({
                    ...newPlaylist,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  playlistsDispatcher({
                    type: "ADD_NEW_PLAYLIST",
                    payload: newPlaylist,
                  });
                  setNewPlaylist(initialState);
                }}
              >
                CREATE PLAYLIST
              </button>
            </div>
            <div className="playlist-item">
              {playlists?.map((playList) => (
                <li>{playList?.title}</li>
              ))}
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="more-videos">
        <MoreVideos />
      </div>
    </div>
  );
};

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { usePlaylists } from "../../contexts/PlayListContext";

import "./Playlist.css";

export const Playlist = () => {
  const { playlists, playlistsDispatcher } = usePlaylists();
  const [newPlaylist, setNewPlaylist] = useState({
    title: "songs",
    description: "new",
  });

  return (
    <div>
      <h2>Playlists</h2>
      <div className="play-lists">
        {playlists?.map((playlist) => (
          <NavLink
            key={playlist._id}
            className="playlist-card"
            to={`/playlist/${playlist?._id}`}
          >
            <div>
              <img src={playlist?.image} alt={playlist?.title} />
            </div>
            <p>{playlist?.title}</p>
            <>{playlist?.description}</>
            <div
              className="delete"
              onClick={(e) => {
                e.preventDefault();
                playlistsDispatcher({
                  type: "DELETE_PLAYLIST",
                  payload: playlist._id,
                });
              }}
            >
              <AiOutlineCloseCircle size={20} />
            </div>
          </NavLink>
        ))}
        <div
          className="new-playlist"
          onClick={(e) => {
            e.preventDefault();
            playlistsDispatcher({
              type: "ADD_NEW_PLAYLIST",
              payload: newPlaylist,
            });
          }}
        >
          <AiOutlinePlusCircle size={30} />
        </div>
      </div>
    </div>
  );
};

import { useContext, createContext, useEffect, useReducer } from "react";

import { initialPlayList, playListReducer } from "../reducers/PlayListReducer";

export const PlayList = createContext();

export const PlayListProvider = ({ children }) => {
  const [playlists, playlistsDispatcher] = useReducer(
    playListReducer,
    initialPlayList
  );

  const getPlaylist = (playlistId) =>
    playlists.find((playlist) => playlist._id == playlistId);

  const value = {
    playlists,
    getPlaylist,
    playlistsDispatcher,
  };

  return <PlayList.Provider value={value}>{children}</PlayList.Provider>;
};

export const usePlaylists = () => useContext(PlayList);

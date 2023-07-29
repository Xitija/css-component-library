import { useContext, createContext, useEffect, useState } from "react";

export const WatchList = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (video) => {
    setWatchList((prev) => [...prev, video]);
  };

  const removeFromWatchList = ({ _id }) => {
    setWatchList((prev) => prev.filter((video) => video._id !== _id));
  };

  const value = {
    watchList,
    addToWatchList,
    removeFromWatchList,
  };

  return <WatchList.Provider value={value}>{children}</WatchList.Provider>;
};

export const useWatchList = () => useContext(WatchList);

import { useContext, createContext, useEffect, useState } from "react";

import { categories } from "../data/categories";
import { videos } from "../data/videos";

export const Data = createContext();

export const DataProvider = ({ children }) => {
  const [categoryList, setCategories] = useState(categories);
  const [videoList, setVideos] = useState(videos);

  const value = {
    categoryList,
    videoList,
  };

  return <Data.Provider value={value}>{children}</Data.Provider>;
};

export const useData = () => useContext(Data);

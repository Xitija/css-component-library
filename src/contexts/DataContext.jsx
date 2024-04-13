import { useContext, createContext, useState } from "react";
import { componentList } from "../data/components";

export const Data = createContext();

export const DataProvider = ({ children }) => {
  const components = componentList.map((component) => ({
    ...component,
    route: component.title.toLowerCase(),
  }));

  const [componentsList, setComponentList] = useState(components);

  const isValidComponent = (route) => {
    return componentsList.some((component) => component.route === route);
  };

  const value = {
    componentsList,
    isValidComponent,
    setComponentList,
  };

  return <Data.Provider value={value}>{children}</Data.Provider>;
};

export const useData = () => useContext(Data);

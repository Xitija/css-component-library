import { NavLink } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import "./Explore.css";

const ComponentTile = ({ component }) => {
  return (
    <NavLink
      className="component-tile"
      to={`/${component.title.toLowerCase()}`}
    >
      <div>
        <h3>{component.title}</h3>
      </div>
    </NavLink>
  );
};

export const Explore = () => {
  const { componentsList } = useData();

  return (
    <div style={{ width: "100%" }}>
      <h2>All Components</h2>
      <div className="tiles-container">
        {componentsList.map((component) => (
          <ComponentTile
            key={component.id}
            component={component}
          ></ComponentTile>
        ))}
      </div>
    </div>
  );
};

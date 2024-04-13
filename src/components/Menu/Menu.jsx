import { NavLink } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import "./Menu.css";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "#378CE7" : "#999999",
});

export const Menu = () => {
  const { componentsList } = useData();

  return (
    <nav className="navigation-menu">
      {componentsList.map((component) => (
        <NavLink
          key={component.id}
          className="link"
          to={`/${component.route}`}
          style={getActiveStyle}
        >
          {component.title}
        </NavLink>
      ))}
    </nav>
  );
};

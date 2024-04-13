import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { Input } from "../Input/Input";
import "./Header.css";

export const Header = () => {
  let navigate = useNavigate();
  const { isValidComponent } = useData();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const goto = event.target.value;
      if (!isValidComponent(goto)) {
        alert("Component not found");
      } else navigate(goto);
    }
  };
  return (
    <div className="header">
      {/* <div className="header-container"> */}
      <div className="header-logo">CSS Ocean Component Library</div>
      <div className="search-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#378CE7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <Input
          variant="clear"
          size="sm"
          placeholder="Search"
          callBack={handleKeyDown}
        />
      </div>
      <div className="header-links">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/explore">
          Explore
        </NavLink>
      </div>
      {/* </div> */}
    </div>
  );
};

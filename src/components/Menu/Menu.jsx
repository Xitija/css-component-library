import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import { AiFillHome, AiFillCompass, AiFillClockCircle } from "react-icons/ai";
import { RiPlayList2Fill } from "react-icons/ri";

import "./Menu.css";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "#4682A9" : "black",
});

export const Menu = () => {
  return (
    <nav className="navigation-menu">
      <div>
        <img className="logo" src={logo} />
      </div>
      <NavLink className="link" to="/" style={getActiveStyle}>
        <AiFillHome className="icon" />
        Home
      </NavLink>
      <NavLink className="link" to="/explore" style={getActiveStyle}>
        <AiFillCompass className="icon" />
        Explore
      </NavLink>
      <NavLink className="link" to="/playlist" style={getActiveStyle}>
        <RiPlayList2Fill className="icon" />
        Playlist
      </NavLink>
      <NavLink className="link" to="/watchlater" style={getActiveStyle}>
        <AiFillClockCircle className="icon" />
        Watch Later
      </NavLink>
    </nav>
  );
};

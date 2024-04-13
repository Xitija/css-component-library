import { Routes, Route, useLocation } from "react-router-dom";

import { Menu } from "./components/Menu/Menu";
import { Explore } from "./pages/Explore/Explore";
import { Landing } from "./pages/Landing/Landing";
import { Header } from "./components/Header/Header";
import { InputDoc } from "./documentation/InputDoc";
import { ButtonDoc } from "./documentation/ButtonDoc";
import { AvatarDoc } from "./documentation/AvatarDoc";
import { AlertDoc } from "./documentation/AlertDoc";
import { ImageDoc } from "./documentation/ImageDoc";
import { BadgeDoc } from "./documentation/BadgeDoc";
import { CardDoc } from "./documentation/CardDoc";
import { TextDoc } from "./documentation/TextDoc.";
import { ListDoc } from "./documentation/ListDoc";
import "./App.css";

function App() {
  const location = useLocation();
  const showMenu = !(location.pathname === "/" || location.pathname === "/explore");
  return (
    <div className="App">

      <Header />
      <div className="content-container">
        {showMenu && <Menu />}
        <div className="page">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/input" element={<InputDoc />} />
            <Route path="/button" element={<ButtonDoc />} />
            <Route path="/avatar" element={<AvatarDoc />} />
            <Route path="/alert" element={<AlertDoc />} />
            <Route path="/image" element={<ImageDoc />} />
            <Route path="/badge" element={<BadgeDoc />} />
            <Route path="/card" element={<CardDoc />} />
            <Route path="/text" element={<TextDoc />} />
            <Route path="/List" element={<ListDoc />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

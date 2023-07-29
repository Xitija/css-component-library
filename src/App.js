import { Routes, Route } from "react-router-dom";

import { Menu } from "./components/Menu/Menu";
import { Home } from "./pages/Home/Home";
import { Explore } from "./pages/Explore/Explore";
import { Playlist } from "./pages/Playlist/Playlist";
import { WatchLater } from "./pages/WatchLater/WatchLater";
import { Category } from "./pages/Category/Category";
import { PlayListVideos } from "./pages/PlayListVideos/PlayListVideos";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="menu-container">
        <Menu />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/playlist/:playlistId" element={<PlayListVideos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

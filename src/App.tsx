// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Creative from "./pages/Creative";
import Evangelism from "./pages/Evangelism";
import Music from "./pages/Music";
import Events from "./pages/Events";
import Bible from "./pages/Bible";
import Chairman from "./pages/Chairman";
import Contact from "./pages/Contact";
//import Committees from "./pages/Committees";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="creative" element={<Creative />} />
          <Route path="evangelism" element={<Evangelism />} />
          <Route path="music" element={<Music />} />
          <Route path="events" element={<Events />} />
          <Route path="bible" element={<Bible />} />
          <Route path="chairman" element={<Chairman />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="committees" element={<Committees />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

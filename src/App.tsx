import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
//import Committees from "./pages/Committees";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/committees" element={<Committees />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import type { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">MUTCU</h1>

        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/ministries" className="hover:text-blue-500">Ministries</Link></li>
          <li><Link to="/events" className="hover:text-blue-500">Events</Link></li>
          <li><Link to="/committees" className="hover:text-blue-500">Committees</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

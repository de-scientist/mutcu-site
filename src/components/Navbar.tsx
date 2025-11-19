import React from "react";

// Optional: Define props type if you want to customize active links or logo later
interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
  links?: { name: string; href: string; active?: boolean }[];
}

const Navbar: React.FC<NavbarProps> = ({
  logoSrc = "assets/images/best logo.png",
  logoAlt = "MUTCU Logo",
  links = [
    { name: "Home", href: "index.html" },
    { name: "About", href: "about.html", active: true },
    { name: "Ministries", href: "ministries.html" },
    { name: "Events", href: "events.html" },
    { name: "Resources", href: "resources.html" },
    { name: "Gallery", href: "gallery.html" },
    { name: "Contact", href: "contact.html" },
  ],
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src={logoSrc} alt={logoAlt} height={60} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((link, idx) => (
              <li className="nav-item" key={idx}>
                <a
                  className={`nav-link${link.active ? " active" : ""}`}
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About MUTCU</h5>
            <p>
              Murang’a University of Technology Christian Union inspires love,
              hope, and godliness.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled footer-links">
              {["Home", "About", "Ministries", "Events", "Resources", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase()}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <p><i className="fas fa-map-marker-alt me-2"></i> Murang’a University, Kenya</p>
            <p><i className="fas fa-phone me-2"></i> +254 712 345 678</p>
            <p><i className="fas fa-envelope me-2"></i> info@mutcu.ac.ke</p>
            <div className="social-icons mt-3">
              <i className="fab fa-facebook-f me-3"></i>
              <i className="fab fa-instagram me-3"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 border-top pt-4">
          <p>&copy; 2025 MUTCU Christian Union. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

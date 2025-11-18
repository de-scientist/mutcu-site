import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/index.css"; // adjust path as needed

const Home: React.FC = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Main navigation">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="assets/images/Full Logo.png" alt="MUTCU Logo" height={60} />
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
              <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/ministries">Ministries</a></li>
              <li className="nav-item"><a className="nav-link" href="/events">Events</a></li>
              <li className="nav-item"><a className="nav-link" href="/resources">Resources</a></li>
              <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div
                className="hero-bg"
                style={{ backgroundImage: "url('assets/images/Lumii_20241023_192938507.jpg')" }}
              />
              <div className="hero-overlay"></div>

              <div className="hero-content text-center text-white">
                <h1 className="display-3 mb-4">Inspire Love, Hope & Godliness</h1>
                <p className="lead mb-5">
                  Join MUTCU to grow in faith, fellowship, and service at Murang’a University
                  of Technology.
                </p>
                <div>
                  <a href="/contact" className="btn btn-primary btn-lg me-3">
                    Join Us
                  </a>
                  <a href="/resources" className="btn btn-secondary btn-lg">
                    Watch Live
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div
                className="hero-bg"
                style={{ backgroundImage: "url('assets/images/church2.jpg')" }}
              />
              <div className="hero-overlay"></div>

              <div className="hero-content text-center text-white">
                <h1 className="display-3 mb-4">We Are One, We Are MUTCU</h1>
                <p className="lead mb-5">
                  A family united in Christ, reaching out to transform lives within and beyond.
                </p>

                <div>
                  <a href="/ministries" className="btn btn-primary btn-lg me-3">
                    Explore Ministries
                  </a>
                  <a href="/events" className="btn btn-secondary btn-lg">
                    Join an Event
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div
                className="hero-bg"
                style={{ backgroundImage: "url('assets/images/church3.jpg')" }}
              />
              <div className="hero-overlay"></div>

              <div className="hero-content text-center text-white">
                <h1 className="display-3 mb-4">Cultivating Christ-Centeredness</h1>
                <p className="lead mb-5">
                  Our vision is to be a model Christian Union impacting society.
                </p>

                <div>
                  <a href="/about" className="btn btn-primary btn-lg me-3">Our Vision</a>
                  <a href="/gallery" className="btn btn-secondary btn-lg">View Gallery</a>
                </div>
              </div>
            </div>

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
            title="Previous"
            aria-label="Previous slide"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
            title="Next"
            aria-label="Next slide"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <h2 className="section-title text-center">About MUTCU</h2>
          <p className="text-center lead mb-5">
            Murang’a University of Technology Christian Union (MUTCU) is a student-led society…
          </p>

          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h3 className="section-subtitle">Our Mission</h3>
              <p>
                To raise a family well-equipped in all aspects of life, exemplary to Jesus Christ…
              </p>

              <h3 className="section-subtitle mt-4">Our Vision</h3>
              <p>
                To be a model Christian Union cultivating Christ-centeredness among members…
              </p>

              <a href="/about" className="btn btn-primary mt-3">
                Learn More About Us
              </a>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="assets/images/prayer1.jpg"
                alt="MUTCU Community"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The remaining sections (Core Values, Ministries, Events...) can be added the same way */}
    </>
  );
};

export default Home;

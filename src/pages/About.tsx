import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css"; // your custom styles

const AboutPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="assets/images/best logo.png" alt="MUTCU Logo" height={60} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-label="Toggle navigation"
            title="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link active" href="/about">About</a></li>
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
      <section
        className="page-hero-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: "url('assets/images/church2.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="container position-relative" data-aos="fade-up">
          <h1 className="display-3 mb-3">About MUTCU</h1>
          <p className="lead">Inspiring Love, Hope & Godliness</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-5 introduction-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7 mb-4" data-aos="fade-right">
              <h2 className="section-title">Who We Are</h2>
              <p className="lead">
                The Murang'a University of Technology Christian Union (MUTCU) is a lively,
                student-led religious organization operating within the university...
              </p>

              <p>
                As a proud member of{" "}
                <a
                  href="https://focuskenya.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mutcu-link-orange text-decoration-none"
                >
                  Fellowship of Christian Unions - Kenya (FOCUS-KENYA)
                </a>
                , MUTCU benefits from a national network...
              </p>
            </div>

            <div className="col-lg-5 text-center" data-aos="fade-left">
              <img
                src="assets/images/Full Logo.png"
                alt="MUTCU Community"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-5 bg-light principles-section">
        <div className="container">
          <h2 className="section-title text-center">Our Guiding Principles</h2>
          <p className="text-center lead mb-5">
            Our motto, vision, and mission are interconnected.
          </p>

          <div className="row text-center">
            {/* Motto */}
            <div className="col-md-4 mb-4" data-aos="zoom-in">
              <div className="principle-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-bullhorn feature-icon mb-3"></i>
                <h3 className="card-title">Our Motto</h3>
                <p className="lead-sm">"To Inspire Love, Hope, and Godliness."</p>
                <p>This motto serves as our daily call to action...</p>
              </div>
            </div>

            {/* Vision */}
            <div className="col-md-4 mb-4" data-aos="zoom-in">
              <div className="principle-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-eye feature-icon mb-3"></i>
                <h3 className="card-title">Our Vision</h3>
                <p className="lead-sm">
                  "To be a model Christian Union cultivating Christ-centeredness..."
                </p>
                <p>Our long-term aspiration...</p>
              </div>
            </div>

            {/* Mission */}
            <div className="col-md-4 mb-4" data-aos="zoom-in">
              <div className="principle-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-hands-helping feature-icon mb-3"></i>
                <h3 className="card-title">Our Mission</h3>
                <p className="lead-sm">
                  "To raise a family well-equipped in all aspects of life..."
                </p>
                <p>Our mission focuses on equipping members...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aims */}
      <section className="py-5 aims-section">
        <div className="container">
          <h2 className="section-title text-center">Aims of The Union</h2>
          <p className="text-center lead mb-5">MUTCU operates with clear objectives...</p>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">

                {/* Each aim card */}
                {[
                  { icon: "fa-book-bible", title: "Biblical Discipleship" },
                  { icon: "fa-user-plus", title: "Evangelism & Outreach" },
                  { icon: "fa-users-line", title: "Fellowship & Unity" },
                  { icon: "fa-handshake", title: "Leadership Development" },
                  { icon: "fa-graduation-cap", title: "Academic Excellence" },
                  { icon: "fa-hands-holding-circle", title: "Social Responsibility" }
                ].map((item, idx) => (
                  <div
                    className="col-md-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={(idx + 1) * 100}
                    key={idx}
                  >
                    <div className="aim-item d-flex align-items-start p-3 rounded-3 shadow-sm h-100">
                      <i className={`fas ${item.icon} aim-icon me-3`} />
                      <div>
                        <h4>{item.title}</h4>
                        <p>Lorem ipsum content for description...</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctrinal Basis */}
      <section className="py-5 doctrinal-section text-white">
        <div className="container">
          <h2 className="section-title text-center text-white">Our Doctrinal Basis</h2>
          <p className="text-center lead mb-5 text-white-50">
            Our beliefs are founded on the fundamental truths of Scripture.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="doctrinal-content p-4 rounded-3 shadow-lg"
                data-aos="fade-up"
              >
                <p>The Murang'a University of Technology Christian Union believes in:</p>

                <ul className="list-unstyled doctrinal-list">
                  {[
                    "The unity of the Father, Son, and Holy Spirit.",
                    "The sovereignty of God in creation and redemption.",
                    "The divine inspiration of Scripture...",
                    "The universal sinfulness of humanity...",
                    "Redemption solely through Christ...",
                    "The resurrection and ascension of Christ...",
                    "The presence and power of the Holy Spirit...",
                    "Justification by grace through faith...",
                    "The indwelling of the Holy Spirit...",
                    "The one Holy Universal Church...",
                    "The expectation of Christ's return..."
                  ].map((val, i) => (
                    <li key={i} data-aos="fade-right" data-aos-delay={(i + 2) * 100}>
                      <i className="fas fa-check-circle me-2"></i>
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-5 structure-section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Organizational Structure & Leadership</h2>
          <p className="text-center lead mb-5">
            MUTCU is a student-led organization with a robust structure...
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="structure-overview p-4 rounded-3 shadow-lg mb-4">
                <h3 className="section-subtitle text-center mb-4">Executive Council</h3>
                <p>The Executive Council is the highest governing body...</p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {/* Committees */}
            <div className="col-md-6 mb-4" data-aos="fade-right">
              <div className="structure-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-sitemap feature-icon mb-3"></i>
                <h4 className="card-title">Committees</h4>
                <p>The Executive Council delegates responsibilities...</p>
              </div>
            </div>
            {/* Policies */}
            <div className="col-md-6 mb-4" data-aos="fade-left">
              <div className="structure-card p-4 rounded-3 shadow-sm h-100">
                <i className="fas fa-users-gear feature-icon mb-3"></i>
                <h4 className="card-title">Operational Policies</h4>
                <p>All Union functions are guided by detailed policies...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-5 executive-committee-section">
        <div className="container">
          <h2 className="section-title text-center">Meet Our Executive Committee</h2>
          <p className="text-center lead mb-5">
            Leading MUTCU with dedication for 2024/2025.
          </p>

          <div className="row justify-content-center">

            {/* Example Member */}
            <div className="col-6 col-md-4 col-lg-3 mb-4" data-aos="zoom-in">
              <a
                href="/committees/chairman"
                className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100"
              >
                <img
                  src="assets/images/EZEKIEL.jpg"
                  alt="Ezekiel Thaara"
                  className="img-fluid rounded-circle mb-3 border border-3 border-orange"
                />
                <h4 className="member-name">Ezekiel Thaara</h4>
                <p className="member-role">Chairman</p>
              </a>
            </div>

            {/* add the others similarly... */}

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

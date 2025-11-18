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

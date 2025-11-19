import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./HeroCarousel.css"; // custom CSS for hero section

const slides = [
  {
    title: "Inspire Love, Hope & Godliness",
    subtitle: "Join MUTCU to grow in faith, fellowship, and service at Murang’a University of Technology.",
    image: "/assets/images/Lumii_20241023_192938507.jpg",
    primaryBtn: { text: "Join Us", link: "/contact" },
    secondaryBtn: { text: "Watch Live", link: "/resources" },
  },
  {
    title: "We Are One, We Are MUTCU",
    subtitle: "A family united in Christ, reaching out to transform lives within and beyond.",
    image: "/assets/images/church2.jpg",
    primaryBtn: { text: "Explore Ministries", link: "/ministries" },
    secondaryBtn: { text: "Join an Event", link: "/events" },
  },
  {
    title: "Cultivating Christ-Centeredness",
    subtitle: "Our vision is to be a model Christian Union impacting society.",
    image: "/assets/images/church3.jpg",
    primaryBtn: { text: "Our Vision", link: "/about" },
    secondaryBtn: { text: "View Gallery", link: "/gallery" },
  },
];

const HeroCarousel: React.FC = () => {
  return (
    <section className="hero-section">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={5000}>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="hero-bg" style={{ backgroundImage: `url(${slide.image})` }} />
              <div className="hero-overlay" />
              <div className="hero-content text-center text-white" data-aos="fade-up" data-aos-duration={1000}>
                <h1 className="display-3 mb-4" data-aos="zoom-in" data-aos-delay={200}>{slide.title}</h1>
                <p className="lead mb-5" data-aos="zoom-in" data-aos-delay={400}>{slide.subtitle}</p>
                <div data-aos="zoom-in" data-aos-delay={600}>
                  <a href={slide.primaryBtn.link} className="btn btn-primary btn-lg me-3">{slide.primaryBtn.text}</a>
                  <a href={slide.secondaryBtn.link} className="btn btn-secondary btn-lg">{slide.secondaryBtn.text}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;

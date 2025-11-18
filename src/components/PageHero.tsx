import React from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image }) => {
  return (
    <section
      className="page-hero-section d-flex align-items-center text-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay"></div>

      <div className="container position-relative">
        <h1 className="display-3 mb-3">{title}</h1>
        <p className="lead">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;

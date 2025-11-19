import React from "react";

const CTASection: React.FC = () => (
  <section className="py-5 cta-section text-white">
    <div className="container text-center" data-aos="zoom-in">
      <h2 className="section-title">Be a Part of Our Outreach!</h2>
      <p className="section-title">
        Join the Missions & Evangelism team and help us transform lives.
      </p>
      <a href="/ministries.html" className="btn btn-primary btn-lg me-3">
        Explore All Ministries <i className="fas fa-users-cog ms-2"></i>
      </a>
      <a href="/contact.html" className="btn btn-secondary btn-lg">
        Partner With Us <i className="fas fa-handshake ms-2"></i>
      </a>
    </div>
  </section>
);

export default CTASection;

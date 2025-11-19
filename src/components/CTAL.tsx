import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-5 cta-section text-white">
      <div className="container text-center" data-aos="zoom-in">
        <h2 className="section-title">Join Us in Our Mission!</h2>
        <p className="section-subtitle">Inspired by the leadership of our Chairman, we invite you to be part of MUTCU's journey.</p>
        <a href="/contact" className="btn btn-primary btn-lg me-3">Connect with Leadership <i className="fas fa-envelope ms-2"></i></a>
        <a href="/ministries" className="btn btn-secondary btn-lg">Explore Ministries <i className="fas fa-users-cog ms-2"></i></a>
      </div>
    </section>
  );
};

export default CTA;

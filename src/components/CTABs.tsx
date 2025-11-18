import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-5 cta-section text-white">
      <div className="container text-center" data-aos="zoom-in">
        <h2 className="section-title text">Grow in Your Faith!</h2>
        <p className="section-subtitle">Join our Bible Study and Discipleship programs to deepen your walk with Christ.</p>
        <a href="/ministries" className="btn btn-primary btn-lg me-3">Explore All Ministries <i className="fas fa-users-cog ms-2"></i></a>
        <a href="/contact" className="btn btn-secondary btn-lg">Contact Us <i className="fas fa-envelope ms-2"></i></a>
      </div>
    </section>
  );
};

export default CTA;

import React from "react";

interface LeaderProfileProps {
  name: string;
  role: string;
  imageSrc: string;
  description: string[];
}

const LeaderProfile: React.FC<LeaderProfileProps> = ({ name, role, imageSrc, description }) => (
  <section className="py-5 leader-profile-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 col-md-4 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={900}>
          <div className="executive-member-card d-block text-center rounded-3 shadow-sm h-100">
            <img
              src={imageSrc}
              alt={name}
              className="img-fluid rounded-circle mb-3 border border-3 border-orange"
            />
            <h4 className="member-name">{name}</h4>
            <p className="member-role">{role}</p>
          </div>
        </div>
        <div className="col-lg-8" data-aos="fade-left" data-aos-delay={200}>
          <h3 className="section-title text-start">About the {role}</h3>
          {description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LeaderProfile;

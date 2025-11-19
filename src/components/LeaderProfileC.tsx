import React from "react";

interface LeaderProfileProps {
  name: string;
  role: string;
  image: string;
}

const LeaderProfile: React.FC<LeaderProfileProps> = ({ name, role, image }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4" data-aos="zoom-in" data-aos-delay={100}>
      <a href="#" className="executive-member-card d-block text-center text-decoration-none rounded-3 shadow-sm h-100">
        <img src={image} alt={name} className="img-fluid rounded-circle mb-3 border border-3 border-orange" />
        <h4 className="member-name">{name}</h4>
        <p className="member-role">{role}</p>
      </a>
    </div>
  );
};

export default LeaderProfile;

// LeaderProfile.tsx
import React from "react";

interface LeaderProfileProps {
  name: string;
  role: string;
  imageSrc: string;
  about: string[];
}

const LeaderProfile: React.FC<LeaderProfileProps> = ({ name, role, imageSrc, about }) => (
  <section className="ministry-details py-5">
    <div className="container">
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={imageSrc}
            alt={name}
            className="img-fluid rounded-circle"
            style={{ width: 200, height: 200, objectFit: "cover" }}
          />
          <h3 className="mt-3">{name}</h3>
          <p className="text-muted">{role}</p>
        </div>
        <div className="col-md-8">
          <h2 className="section-title">About the Creative Ministry</h2>
          {about.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LeaderProfile;

import React from "react";

interface LeaderProfileProps {
  name: string;
  role: string;
  imageSrc: string;
}

const LeaderProfile: React.FC<LeaderProfileProps> = ({ name, role, imageSrc }) => (
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
);

export default LeaderProfile;

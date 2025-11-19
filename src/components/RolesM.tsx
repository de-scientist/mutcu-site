import React from "react";

interface Role {
  text: string;
}

interface RolesSectionProps {
  roles: Role[];
}

const RolesSection: React.FC<RolesSectionProps> = ({ roles }) => (
  <div className="col-12">
    <h2 className="section-title">Key Roles & Activities</h2>
    <p>The Music Ministry leads MUTCU in worship and praise through various ensembles and events.</p>
    <ul className="list-unstyled">
      {roles.map((role, idx) => (
        <li className="mb-3" key={idx}>
          <i className="fas fa-music me-2 text-primary-light"></i> {role.text}
        </li>
      ))}
    </ul>
  </div>
);

export default RolesSection;

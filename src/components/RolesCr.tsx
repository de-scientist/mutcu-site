// RolesSection.tsx
import React from "react";

interface Role {
  icon: string;
  text: string;
}

interface RolesSectionProps {
  roles: Role[];
}

const RolesSection: React.FC<RolesSectionProps> = ({ roles }) => (
  <section className="py-5">
    <div className="container">
      <h2 className="section-title">Key Roles & Activities</h2>
      <ul className="list-unstyled">
        {roles.map((role, idx) => (
          <li className="mb-3" key={idx}>
            <i className={`${role.icon} me-2 text-primary-light`}></i> {role.text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default RolesSection;

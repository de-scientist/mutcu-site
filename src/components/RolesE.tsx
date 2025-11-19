import React from "react";

interface Role {
  text: string;
  delay?: number;
}

interface RolesSectionProps {
  roles: Role[];
}

const RolesSection: React.FC<RolesSectionProps> = ({ roles }) => (
  <section className="py-5 bg-light roles-responsibilities-section">
    <div className="container">
      <h2 className="section-title text-center">Key Roles & Activities</h2>
      <p className="text-center lead mb-5">
        This ministry is dedicated to spreading the Gospel and serving others.
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <ul className="list-unstyled roles-list">
            {roles.map((role, idx) => (
              <li key={idx} data-aos="fade-up" data-aos-delay={role.delay || 100}>
                <i className="fas fa-check-circle me-3"></i>
                {role.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default RolesSection;

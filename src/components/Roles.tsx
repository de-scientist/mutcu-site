import React from "react";

const roles = [
  "Organizing and facilitating regular small group Bible studies for members.",
  "Conducting nurturing classes specifically designed for new believers to establish their faith.",
  "Coordinating the Bible Exposition Self-Training Program (BEST-P) for in-depth biblical understanding.",
  "Developing and providing resources for personal and group discipleship.",
  "Encouraging practical application of biblical teachings in members' daily lives and academic pursuits."
];

const Roles: React.FC = () => {
  return (
    <section className="py-5 bg-light roles-responsibilities-section">
      <div className="container">
        <h2 className="section-title text-center">Key Roles & Activities</h2>
        <p className="text-center lead mb-5">This ministry focuses on spiritual nourishment and growth.</p>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="list-unstyled roles-list">
              {roles.map((role, i) => (
                <li key={i} data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                  <i className="fas fa-check-circle me-3"></i> {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roles;

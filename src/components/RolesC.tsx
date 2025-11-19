import React from "react";

const roles = [
  "Overall leadership and strategic direction of the Union.",
  "Ensuring adherence to the MUTCU Constitution and operational policies.",
  "Presiding over all Executive Council meetings and general Union meetings.",
  "Representing MUTCU in external engagements and partnerships.",
  "Fostering unity, spiritual growth, and accountability among all executive members and ministries.",
  "Overseeing the implementation of the Union's vision, mission, and aims.",
  "Facilitating smooth transitions of leadership during annual elections and handovers."
];

const Roles: React.FC = () => {
  return (
    <section className="py-5 bg-light roles-responsibilities-section">
      <div className="container">
        <h2 className="section-title text-center">Key Roles & Responsibilities</h2>
        <p className="text-center lead mb-5">The Chairman's office is central to MUTCU's governance and spiritual guidance.</p>
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

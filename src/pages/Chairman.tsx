import React from "react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import LeaderProfile from "../components/LeaderProfile";
import Roles from "../components/Roles";
import CTA from "../components/CTAL";
import Footer from "../components/Footer";

const Chairman: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageHero 
        title="The Chairman's Office"
        subtitle="Leading MUTCU with Vision and Dedication"
        image="/assets/images/EZEKIEL.jpg"
      />

      <section className="py-5 leader-profile-section">
        <div className="container">
          <div className="row justify-content-center">
            <LeaderProfile 
              name="Ezekiel Thaara" 
              role="Chairman" 
              image="/assets/images/EZEKIEL.jpg"
            />
            <div className="col-lg-8" data-aos="fade-left" data-aos-delay={200}>
              <h3 className="section-title text-start">About the Chairman's Office</h3>
              <p>The Chairman's office is the highest executive position within the Murang'a University of Technology Christian Union. It is responsible for the overall leadership, strategic direction, and spiritual oversight of the Union. The Chairman ensures that all activities align with MUTCU's motto, vision, and mission, fostering a Christ-centered environment for all members.</p>
              <p>Ezekiel Thaara, as Chairman, embodies the Union's commitment to inspiring love, hope, and godliness. He presides over Executive Council meetings, represents MUTCU in various forums like FOCUS Regional and National Meetings, and works closely with all dockets and ministries to ensure the smooth and effective operation of the Union.</p>
            </div>
          </div>
        </div>
      </section>

      <Roles />
      <CTA />
      <Footer />
    </>
  );
};

export default Chairman;

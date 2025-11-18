import React from "react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import LeaderProfile from "../components/LeaderProfile";
import Roles from "../components/Roles";
import CTA from "../components/CTABs";
import Footer from "../components/Footer";

const Bible: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageHero 
        title="Bible Study, Discipleship & BEST"
        subtitle="Deepening Faith Through God's Word"
        image="/assets/images/PURITY.jpg"
      />

      <section className="py-5 leader-profile-section">
        <div className="container">
          <div className="row justify-content-center">
            <LeaderProfile 
              name="Purity Njeri" 
              role="Bible Study & Discipleship Coordinator" 
              image="/assets/images/PURITY.jpg"
            />
            <div className="col-lg-8" data-aos="fade-left" data-aos-delay={200}>
              <h3 className="section-title text-start">About the Bible Study, Discipleship & BEST Ministry</h3>
              <p>The Bible Study, Discipleship & BEST-P (Bible Exposition Self-Training Program) Ministry is dedicated to equipping MUTCU members with a deeper understanding of the Holy Scripture and empowering spiritual maturity. This ministry runs various programs, including small group Bible studies, nurturing classes for new believers, and intensive training programs.</p>
              <p>Purity Njeri, as the coordinator, leads the efforts to ensure members are grounded in biblical truths and encouraged to apply these teachings in their daily lives. The ministry aims to raise a family well-equipped in all aspects of life, exemplary to Jesus Christ.</p>
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

export default Bible;

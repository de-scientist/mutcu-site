import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MinistriesGrid: React.FC = () => {
  return (
    <section className="ministries-grid">
      <div className="container">
        <h2>Our Ministries</h2>
        <div className="grid">
          <div className="card">Ministry 1</div>
          <div className="card">Ministry 2</div>
          <div className="card">Ministry 3</div>
          <div className="card">Ministry 4</div>
        </div>
      </div>
    </section>
  );
};

const MinistriesPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      <PageHero
        title="Our Ministries"
        subtitle="Where Faith Becomes Action: Serve, Grow, Impact"
        image="/assets/images/mbbc1.jpg"
      />

      <MinistriesGrid />

      <CTASection />

      <Footer />
    </>
  );
};

export default MinistriesPage;

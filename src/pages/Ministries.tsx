import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import MinistriesGrid from "../components/MinistriesGrid";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

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

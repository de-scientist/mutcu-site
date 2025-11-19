import React from "react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import LeaderProfile from "../components/LeaderProfileM";
import RolesSection from "../components/RolesM";
import CTASection from "../components/CTAM";
import Footer from "../components/Footer";

const roles = [
  { text: "Leading praise and worship during weekly fellowships and Sunday services." },
  { text: "Weekly rehearsals for choir, band, instrumentalists, and praise teams." },
  { text: "Performing during major Union events like MULEWO, Praise Fests, and Christmas Cantata." },
  { text: "Training and mentoring aspiring musicians in the Union." },
  { text: "Collaborating with other ministries for creative worship experiences." },
];

const Music: React.FC = () => (
  <>
    <Navbar />
    <Hero
      title="MUTCU Music Ministry"
      subtitle="Leading Worship and Glorifying God Through Song"
      backgroundImage="/assets/images/music-hero.jpg"
    />
    <section className="ministry-details py-5">
      <div className="container">
        <div className="row align-items-center mb-5">
          <LeaderProfile
            name="Jabez Ayugu"
            role="Music Coordinator"
            imageSrc="/assets/images/JABEZ.jpg"
          />
          <div className="col-md-8">
            <h2 className="section-title">About the Music Ministry</h2>
            <p>The Music Ministry of MUTCU is dedicated to leading the Union in vibrant and spiritually uplifting worship experiences. Comprising various teams including the choir, band, instrumentalists, and praise and worship leaders, this ministry plays a crucial role in creating an atmosphere where members can connect with God through music and song.</p>
            <p>Our goal is to foster a heart of worship and praise among the MUTCU family, ensuring that all musical presentations are excellent and align with the Union's spiritual goals. We believe that music is a powerful tool for evangelism, edification, and glorifying God.</p>
          </div>
        </div>
        <div className="row mb-5">
          <RolesSection roles={roles} />
        </div>
        <div className="row">
          <CTASection />
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Music;

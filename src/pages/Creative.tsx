// App.tsx
import React from "react";
import Navbar from "./Navbar";
import PageHero from "../components/PageHero";
import LeaderProfile from "../components/LeaderProfileCr";
import RolesSection from "../components/RolesCr";
import Footer from "../components/Footer";

const roles = [
  { icon: "fas fa-theater-masks", text: "Developing and performing drama skits that convey biblical truths during services and events." },
  { icon: "fas fa-person-dancing", text: "Choreographing and presenting dance performances for worship and special occasions." },
  { icon: "fas fa-pen", text: "Creating and delivering poetry and spoken word pieces through the SPARCS ministry." },
  { icon: "fas fa-palette", text: "Organizing creative events like Treasure Hunt, Creative Night, and Creative Experiences." },
  { icon: "fas fa-book-open", text: "Reviewing all scripts and performances to ensure alignment with biblical doctrine." },
  { icon: "fas fa-users", text: "Collaborating with the Music Ministry for events like the Christmas Cantata." },
];

const App: React.FC = () => (
  <>
    <Navbar />
    <PageHero
      title="MUTCU Creative Ministry"
      subtitle="Inspiring Faith Through Artistic Expression"
      backgroundImage="/assets/images/creative-hero.jpg"
    />
    <LeaderProfile
      name="Brian Ingwee"
      role="Creative Ministry Coordinator"
      imageSrc="/assets/images/Ingwee.JPG"
      about={[
        "The Creative Ministry of MUTCU is dedicated to using artistic expressions to communicate biblical messages and enhance worship experiences.",
        "Comprising sub-ministries such as Drama, Dance, SPARCS (Poetry/Spoken Word), and Models, this ministry ensures all performances and presentations align with MUTCU's doctrinal basis and spiritual goals.",
        "Our mission is to engage the university community and beyond through creative arts, fostering spiritual growth and glorifying God through innovative and impactful performances."
      ]}
    />
    <RolesSection roles={roles} />
    <Footer />
  </>
);

export default App;

import React from "react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import LeaderProfile from "../components/LeaderProfileE";
import RolesSection from "../components/RolesE";
import CTASection from "../components/CTAE";
import Footer from "../components/Footer";

const roles = [
  { text: "Organizing and leading campus outreach programs to share the Gospel with students.", delay: 100 },
  { text: "Planning and executing annual missions to various communities, including pre-visits and follow-ups.", delay: 200 },
  { text: "Coordinating the Hope Ministry for visits to prisons and hospitals, providing spiritual and material support.", delay: 300 },
  { text: "Developing and implementing a detailed Mission checklist for effective mission planning.", delay: 400 },
  { text: "Facilitating the Kairos Course annually to deepen members' understanding of God's global mission.", delay: 500 },
  { text: "Partnering with relevant organizations for financial and material support for mission work.", delay: 600 },
];

const Evangelism: React.FC = () => (
  <>
    <Navbar />
    <PageHero
      title="Missions & Evangelism Ministry"
      subtitle="Sharing the Gospel and Impacting Communities"
      image="/assets/images/YUSUF.jpg"
    />
    <LeaderProfile
      name="Yusuf Muchiri"
      role="Missions & Evangelism Coordinator"
      imageSrc="/assets/images/YUSUF.jpg"
      description={[
        "The Missions and Evangelism Ministry is at the forefront of MUTCU's outreach efforts, dedicated to sharing the Gospel of Jesus Christ both within the university and in wider communities.",
        "This ministry organizes campus outreach programs, annual missions, and extends its reach through the Hope Ministry, visiting prisons and hospitals to bring spiritual and material support.",
        "Yusuf Muchiri, as the coordinator, leads the strategic planning and execution of these initiatives, ensuring that MUTCU actively fulfills its mission of reaching out to non-believers.",
        "The ministry is also responsible for the Kairos Course, enhancing global understanding of God's mission."
      ]}
    />
    <RolesSection roles={roles} />
    <CTASection />
    <Footer />
  </>
);

export default Evangelism;

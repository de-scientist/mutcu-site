import React from "react";
import MinistryCard, { MinistryCardProps } from "./MinistryCard";

const ministries: MinistryCardProps[] = [
  {
    title: "Music Ministry",
    description:
      "Leading and ministering worship through Choir, Band, Instrumentalism and Praise & Worship.",
    icon: "fas fa-music",
    image: "/assets/images/music1.jpg",
    link: "/ministries/music-ministry",
    delay: 100,
  },
  {
    title: "Bible Study & Discipleship",
    description:
      "Deepening faith through small groups, nurturing classes, and discipleship programs.",
    icon: "fas fa-book-open",
    image: "/assets/images/bs1.jpg",
    link: "/ministries/bible-study",
    delay: 200,
  },
  {
    title: "Missions & Evangelism",
    description:
      "Sharing the Gospel through campus outreach, missions, and hope ministry visits.",
    icon: "fas fa-globe",
    image: "/assets/images/mission1.jpg",
    link: "/ministries/missions",
    delay: 300,
  },
  {
    title: "Creative Arts (CREAM)",
    description: "Expressing faith through drama, dance, spoken word and arts.",
    icon: "fas fa-paint-brush",
    image: "/assets/images/dance3.jpg",
    link: "/ministries/creative-arts",
    delay: 400,
  },
  {
    title: "Prayer Ministry",
    description: "A culture of deep prayer and intercession for the Union and community.",
    icon: "fas fa-pray",
    image: "/assets/images/church2.jpg",
    link: "/ministries/prayer",
    delay: 500,
  },
  {
    title: "Welfare Committee",
    description: "Raising funds and supporting members facing difficulties.",
    icon: "fas fa-hand-holding-heart",
    image: "/assets/images/prayer1.jpg",
    link: "/ministries/welfare",
    delay: 600,
  },
  {
    title: "Hospitality Ministry",
    description: "Creating a welcoming environment for all members and visitors.",
    icon: "fas fa-handshake-angle",
    image: "/assets/images/tlp.jpg",
    link: "/ministries/hospitality",
    delay: 700,
  },
  {
    title: "Technical Department",
    description:
      "Sound, publicity, ushering and live streaming for all Union activities.",
    icon: "fas fa-laptop-code",
    image: "/assets/images/mbbc1.jpg",
    link: "/ministries/technical",
    delay: 800,
  },
  {
    title: "Resource Mobilisation (RMC)",
    description:
      "Enhancing ministry impact through creative and innovative resource strategies.",
    icon: "fas fa-lightbulb",
    image: "/assets/images/prayer1.jpg",
    link: "/ministries/rmc",
    delay: 900,
  },
];

const MinistriesGrid: React.FC = () => {
  return (
    <section className="py-5 ministries-overview-section">
      <div className="container">
        <h2 className="section-title text-center">Explore Our Diverse Ministries</h2>

        <p className="text-center lead mb-5">
          MUTCU's ministries are the heartbeat of our Union…
        </p>

        <div className="row justify-content-center">
          {ministries.map((ministry, idx) => (
            <MinistryCard key={idx} {...ministry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesGrid;

import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Introduction from "../components/Introduction";
import GuidingPrinciples from "../components/GuidingPrinciples";
import Aims from "../components/Aims";
import DoctrinalBasis from "../components/DoctrinalBasis";
import Structure from "../components/Structure";
import ExecutiveCommittee from "../components/ExecutiveCommittee";

export default function About() {
  return (
    <>
      <Navbar />
      <PageHero 
      title="Our Ministries"
        subtitle="Where Faith Becomes Action: Serve, Grow, Impact"
        image="/assets/images/mbbc1.jpg"/>
      <Introduction />
      <GuidingPrinciples />
      <Aims />
      <DoctrinalBasis />
      <Structure />
      <ExecutiveCommittee />
    </>
  );
}

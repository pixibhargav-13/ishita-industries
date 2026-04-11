import Navbar from "../../components/Navbar/NavbarRouter";
import AboutHeroSection from "./AboutHeroSection";
import ManufacturingInfrastructureSection from "./ManufacturingInfrastructureSection";
import MeetOurTeamSection from "./MeetOurTeamSection";
import CertificationSection from "./CertificationSection";
import FastenerStandardsSection from "./FastenerStandardsSection";
import PerformanceResultsSection from "./PerformanceResultsSection";
import GlobalReachSection from "./GlobalReachSection";
import ArchitecturalLedgerSection from "./ArchitecturalLedgerSection";
import QualityAssuranceSection from "./QualityAssuranceSection";
import UniqueSellingPropositionSection from '../HomePage/UniqueSellingPropositionSection'

function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <MeetOurTeamSection />
      <ManufacturingInfrastructureSection />
      <CertificationSection />
      <QualityAssuranceSection />
      <FastenerStandardsSection />
      <PerformanceResultsSection />
      <GlobalReachSection />
      <ArchitecturalLedgerSection />
      <UniqueSellingPropositionSection/>
    </>
  );
}

export default AboutPage;

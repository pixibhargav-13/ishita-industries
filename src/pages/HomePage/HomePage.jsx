import Navbar from '../../components/Navbar/Navbar'
import AboutSection from './AboutSection'
import CapabilitiesSectionNew from './CapabilitiesSectionNew'
import HeroSection from './HeroSection'
import PrecisionExpertiseSection from './PrecisionExpertiseSection'
import PrecisionComponentsSection from './PrecisionComponentsSection'
import IndustrialComponentsSection from './IndustrialComponentsSection'
import FactsSection from './FactsSection'
import InternationalReachSection from './InternationalReachSection'
import UniqueSellingPropositionSection from './UniqueSellingPropositionSection'
import Footer from '../../components/Footer/Footer'

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSectionNew />
      <PrecisionExpertiseSection />
      <PrecisionComponentsSection />
      <IndustrialComponentsSection />
      <UniqueSellingPropositionSection />
      <FactsSection />
      <InternationalReachSection />
      <Footer />
    </>
  )
}

export default Homepage

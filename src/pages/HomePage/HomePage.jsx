import Navbar from '../../components/Navbar/Navbar'
import AboutSection from './AboutSection'
import CapabilitiesSectionNew from './CapabilitiesSectionNew'
import HeroSection from './HeroSection'
import PrecisionExpertiseSection from './PrecisionExpertiseSection'
import PrecisionComponentsSection from './PrecisionComponentsSection'

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSectionNew />
      <PrecisionExpertiseSection />
      <PrecisionComponentsSection />
    </>
  )
}

export default Homepage

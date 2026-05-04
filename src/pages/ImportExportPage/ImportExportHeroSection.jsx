import { useRef, useEffect } from 'react'
import './ImportExportHeroSection.css'
import heroImage from '../../Images/import-export-hero-section.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function ImportExportHeroSection() {
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  // Fallback to ensure hero is visible even if observer is slow/misses top-of-page
  useEffect(() => {
    const timer = setTimeout(() => {
      if (animRefs.current[0] && !animRefs.current[0].classList.contains('is-visible')) {
        animRefs.current[0].classList.add('is-visible')
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      className="import-export-hero-section"
      ref={(el) => (animRefs.current[0] = el)}
    >
      <img src={heroImage} alt="Import and Export Hero" className="import-export-hero-image" />
    </section>
  )
}

export default ImportExportHeroSection

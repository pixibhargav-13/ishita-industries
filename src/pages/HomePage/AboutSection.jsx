import './AboutSection.css'

const aboutHighlights = [
  'ISO Certified Manufacturing SET-UP',
  '34+ Years Engineering Exp.',
  'Exporting to Europe, USA, Canada & Saudi Arabia',
  'Custom OEM Manufacturing',
  'Upload Drawing - Get Quote in 24 Hours',
]

function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-shell">
        <div className="about-header">
          <div className="about-header-main">
            <p className="about-kicker mb-0">OUR STORY BEGINS HERE</p>
            <h2 className="about-title mb-0">ABOUT ISHITA.</h2>
          </div>
          <p className="about-intro mb-0">
            Driven by vision and precision, we deliver high-quality manufacturing solutions built
            on trust, innovation, and years of industry expertise.
          </p>
        </div>

        <p className="about-body mb-0">
          Founded in Jamnagar the Brass City of India' Ishita Industries has evolved from a local
          workshop into a global leader in custom brass component manufacturing. We don&apos;t just
          machine parts; we engineer reliability. Built on a foundation of strict quality control,
          we now serve international markets across Electrical, Automotive, and Industrial sectors.
          We bridge the gap between Indian manufacturing cost-efficiency and German-standard
          precision.
        </p>

        <div className="about-highlights" aria-label="Company highlights">
          {aboutHighlights.map((highlight) => (
            <div key={highlight} className="about-highlight-card">
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection

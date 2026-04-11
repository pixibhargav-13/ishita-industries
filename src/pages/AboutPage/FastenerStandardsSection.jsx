import './FastenerStandardsSection.css'

const standardsData = [
  {
    id: 'din',
    title: 'DIN',
    subtitle: 'Deutsches Institut für Normung',
    description: 'Known for strict mechanical engineering tolerances. The DIN standard remains the global benchmark for high-performance German automotive and industrial hardware.',
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 10v10m-10-5l10 5 10-5" />
      </svg>
    )
  },
  {
    id: 'astm',
    title: 'ASTM',
    subtitle: 'International Testing',
    description: 'The global leader in material testing and classification. ASTM provides the foundational science for tensile strength and carbon composition across aerospace alloys.',
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8m-4-4v8" />
      </svg>
    )
  },
  {
    id: 'bs',
    title: 'BS',
    subtitle: 'British Standards',
    description: 'Legacy of precision in aerospace and automotive fastening. British Standards maintain rigorous oversight on thread pitch accuracy and corrosive resistance.',
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6m-6 6h6" />
      </svg>
    )
  },
  {
    id: 'jis',
    title: 'JIS',
    subtitle: 'Japanese Industrial',
    description: 'High-performance standards for electronics and machinery. JIS is focused on extreme miniaturization and reliability in consumer technology and robotics.',
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20" />
      </svg>
    )
  },
  {
    id: 'ansi',
    title: 'ANSI',
    subtitle: 'American National',
    description: 'Foundation of North American structural integrity. ANSI regulates the safety and dimensional standards for heavy infrastructure and construction sectors.',
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v16H4zM20 12H4M12 4v16" />
      </svg>
    )
  },
  {
    id: 'gb',
    title: 'GB',
    subtitle: 'Guobiao Standard',
    description: "The primary standard for the world's largest manufacturing hub. GB facilitates massive scalability while maintaining compliance with international logistics.",
    buttonText: 'VIEW DOCUMENTATION',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 5h14v14H5zM5 12h14M12 5v14" />
      </svg>
    )
  }
]

function FastenerStandardsSection() {
  return (
    <section className="fastener-standards-section">
      <div className="container fastener-shell">
        <div className="fastener-header">
          <div>
            <p className="fastener-kicker mb-0">ENGINEERED FOR PRECISION</p>
            <h2 className="fastener-title mb-0">
              FASTENER
              <span className="d-block">STANDARDS.</span>
            </h2>
          </div>
          <p className="fastener-intro mb-0">
            Built to meet global specifications with unmatched<br />accuracy and reliability.
          </p>
        </div>

        <div className="fastener-table-container">
          <div className="fastener-grid">
            {standardsData.map((item) => (
              <article key={item.id} className="fastener-card">
                <div className="fastener-card-header">
                  <h3 className="fastener-card-title mb-0">{item.title}</h3>
                  <span className="fastener-card-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                </div>
                
                <h4 className="fastener-card-subtitle">{item.subtitle}</h4>
                <p className="fastener-card-desc">{item.description}</p>
                
                <a href="#" className="fastener-card-link">
                  {item.buttonText} <span className="fastener-card-arrow">&#8599;</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FastenerStandardsSection

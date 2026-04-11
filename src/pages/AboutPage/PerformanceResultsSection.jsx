import './PerformanceResultsSection.css'

const resultsData = [
  {
    value: '10+',
    label: 'Material Supported',
  },
  {
    value: '100%',
    label: 'In-House Quality Inspection',
  },
  {
    value: '10+',
    label: 'Country Reach',
  },
]

function PerformanceResultsSection() {
  return (
    <section className="performance-results-section">
      <div className="container results-shell">
        <div className="results-header">
          <div>
            <p className="results-kicker mb-0">PERFORMANCE THAT DELIVERS</p>
            <h2 className="results-title mb-0">
              RESULTS THAT
              <span className="d-block">MATTER.</span>
            </h2>
          </div>
          <p className="results-intro mb-0">
            Driven by precision, quality, and consistency our outcomes reflect measurable growth, trusted partnerships, and long-term value for our clients.
          </p>
        </div>

        <div className="results-grid">
          {resultsData.map((result, index) => (
            <article key={index} className="results-card">
              <h3 className="results-card-value mb-0">{result.value}</h3>
              <p className="results-card-label mb-0">{result.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerformanceResultsSection

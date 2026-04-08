import './PrecisionExpertiseSection.css'

function PrecisionExpertiseSection() {
  return (
    <section className="precision-section">
      <div className="container precision-shell">
        <div className="precision-header">
          <div>
            <p className="precision-kicker mb-0">ALL KINDS OF PRECISION</p>
            <h2 className="precision-title mb-0">
              PRECISION MACHINING
              <span className="d-block">EXPERTISE.</span>
            </h2>
          </div>
          <p className="precision-intro mb-0">
            Delivering accuracy, consistency, and high-performance machining solutions.
          </p>
        </div>

        <div className="precision-grid">
          <article className="precision-card">
            <div className="precision-visual precision-visual-brass" aria-hidden="true">
              <span className="brass-piece brass-piece-long brass-piece-copper" />
              <span className="brass-piece brass-piece-long brass-piece-gold" />
              <span className="brass-piece brass-piece-mid brass-piece-copper-alt" />
              <span className="brass-piece brass-piece-mid brass-piece-gold-dark" />
              <span className="brass-piece brass-piece-square brass-piece-gold" />
              <span className="brass-piece brass-piece-rod brass-piece-copper" />
              <span className="brass-piece brass-piece-rod brass-piece-gold" />
              <span className="brass-piece brass-piece-block brass-piece-gold-dark" />
              <span className="brass-piece brass-piece-block brass-piece-copper-alt" />
            </div>
            <p className="precision-caption mb-0">
              Copper &amp; Brass Extruded Rods, Profiles &amp; Sections
            </p>
          </article>

          <article className="precision-card">
            <div className="precision-visual precision-visual-alloy" aria-hidden="true">
              <span className="alloy-piece alloy-piece-beam alloy-piece-silver" />
              <span className="alloy-piece alloy-piece-beam alloy-piece-dark" />
              <span className="alloy-piece alloy-piece-beam alloy-piece-light" />
              <span className="alloy-piece alloy-piece-frame alloy-piece-silver" />
              <span className="alloy-piece alloy-piece-frame alloy-piece-dark" />
              <span className="alloy-piece alloy-piece-stack" />
              <span className="alloy-piece alloy-piece-bar alloy-piece-light" />
              <span className="alloy-piece alloy-piece-bar alloy-piece-silver" />
              <span className="alloy-piece alloy-piece-block alloy-piece-dark" />
              <span className="alloy-piece alloy-piece-plate alloy-piece-light" />
            </div>
            <p className="precision-caption mb-0">Aluminum Alloy Extrusion Products</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default PrecisionExpertiseSection

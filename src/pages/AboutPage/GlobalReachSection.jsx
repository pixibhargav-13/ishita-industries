import './GlobalReachSection.css'
import dummyImage from '../../assets/hero.png'

const shipStats = [
  { 
    id: 1, 
    value: '10%', 
    title: 'First National Employement', 
    desc: 'Decades of industry knowledge enabling efficient production planning, material optimization, and reliable execution.' 
  },
  { 
    id: 2, 
    value: '26+', 
    title: 'Client Nationally', 
    desc: 'A proven portfolio of precision-engineered components delivered across electrical, automotive, industrial, and infrastructure sectors.' 
  },
  { 
    id: 3, 
    value: '100k+', 
    title: 'Tonnes of material Transported Yearly', 
    desc: 'A modern production space equipped to support scalable machining, second operations, inspection, and export-ready packaging.' 
  }
]

// Generating 11 placeholder flags as per the screenshot requirement
const flagsData = Array.from({ length: 11 }).map((_, i) => ({ id: i, image: dummyImage, alt: `Flag ${i + 1}` }));

function GlobalReachSection() {
  return (
    <section className="global-reach-section">
      <div className="container global-reach-shell">
        <div className="global-reach-header">
          <div>
            <p className="global-reach-kicker mb-0">CONNECTING MARKETS WORLDWIDE</p>
            <h2 className="global-reach-title mb-0">
              INTERNATIONAL
              <span className="d-block">REACH.</span>
            </h2>
          </div>
          <p className="global-reach-intro mb-0">
            Expanding across global markets with trusted partnerships, delivering quality products that meet international standards and diverse industry needs.
          </p>
        </div>

        <div className="global-reach-banner-container">
          <div className="global-reach-banner-image-wrapper">
             <img src={dummyImage} alt="Cargo Ship" className="global-reach-banner-image" />
             <div className="global-reach-banner-overlay"></div>
          </div>
          <div className="global-reach-banner-stats">
            {shipStats.map((stat) => (
              <article key={stat.id} className="global-reach-stat-card">
                <h3 className="global-reach-stat-value mb-0">{stat.value}</h3>
                <h4 className="global-reach-stat-title mb-0">{stat.title}</h4>
                <p className="global-reach-stat-desc mb-0">{stat.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="global-reach-world-container">
          <div className="global-reach-map">
            <img src={dummyImage} alt="World Map" className="global-reach-map-image" />
          </div>
          
          <div className="global-reach-world-content">
            <h3 className="global-reach-world-title mb-0">
              We Spread Around<br />
              <strong>The World</strong>
            </h3>
            <div className="global-reach-flags-grid">
              {flagsData.map((flag) => (
                <div key={flag.id} className="global-reach-flag-item">
                  <img src={flag.image} alt={flag.alt} className="global-reach-flag-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalReachSection

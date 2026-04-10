import './CertificationSection.css'
import dummyImage from '../../assets/hero.png'

const certificationsData = [
  { id: 1, name: 'GPCB CERTIFICATE', image: dummyImage },
  { id: 2, name: 'FACTORY ACT', image: dummyImage },
  { id: 3, name: 'QMS CERTIFICATION', image: dummyImage },
  { id: 4, name: 'OHS CERTIFICATION', image: dummyImage },
  { id: 5, name: 'ZED CERTIFICATION', image: dummyImage },
  { id: 6, name: 'EMS CERTIFICATION', image: dummyImage },
]

function CertificationSection() {
  return (
    <section className="certification-section">
      <div className="container cert-shell">
        <div className="cert-header">
          <div>
            <p className="cert-kicker mb-0">CERTIFIED FOR EXCELLENCE</p>
            <h2 className="cert-title mb-0">CERTIFICATION.</h2>
          </div>
          <p className="cert-intro mb-0">
            Recognized by global standards, ensuring quality, reliability, and compliance across every product.
          </p>
        </div>

        <div className="cert-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card-wrapper">
              <figure className="cert-card">
                <img src={cert.image} alt={cert.name} className="cert-image" />
              </figure>
              <h3 className="cert-name mb-0">{cert.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationSection

import './ProductIndustrialSection.css'
import electricImage from '../../Images/ProductIndustrial-electrical.png'
import automotiveImage from '../../Images/ProductIndustrial-automotive.png'
import fastenerImage from '../../Images/ProductIndustrial-fastner.png'
import engineeringImage from '../../Images/ProductIndustrial-engineering.png'
import cpvcImage from '../../Images/ProductIndustrial-CPVC PPR Inserts.png'
import arrowVector from '../../Images/arrow-vector.png'

const componentCards = [
  {
    title: 'Electric',
    image: electricImage,
  },
  {
    title: 'Automotive',
    image: automotiveImage,
  },
  {
    title: 'Fastner',
    image: fastenerImage,
  },
  {
    title: 'Engineering',
    image: engineeringImage,
  },
  {
    title: 'CPVC PPR Inserts',
    image: cpvcImage,
  },
]

function ProductIndustrialSection() {
  return (
    <section className="product-industrial-section">
      <div className="product-industrial-shell">
        <div className="product-industrial-header-container">
          <p className="product-industrial-kicker mb-0">All kind of Precision</p>
          <h2 className="product-industrial-title mb-0">
            Industrial Components
          </h2>
        </div>

        <div className="product-industrial-grid">
          {componentCards.map((card) => (
            <article key={card.title} className="product-industrial-card">
              <div className="product-industrial-visual">
                <img src={card.image} alt={card.title} className="product-industrial-image" />
              </div>

              <div className="product-industrial-caption-row">
                <p className="product-industrial-caption mb-0">{card.title}</p>
                <img src={arrowVector} alt="" className="product-industrial-arrow" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductIndustrialSection

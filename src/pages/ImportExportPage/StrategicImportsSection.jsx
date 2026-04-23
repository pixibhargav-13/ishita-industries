import './StrategicImportsSection.css'
import mapImage from '../../Images/about-us-international-map.png' 
import flagUSA from '../../Images/us-flag.png'
import flagSaudi from '../../Images/saudi-arabia-flag.png'
import flagUK from '../../Images/uk-flag.png'
import flagFrance from '../../Images/france-flag.png'
import flagAus from '../../Images/aus-flag.png'
import flagSA from '../../Images/south-africa-flag.png'
import flagUAE from '../../Images/uae-flag.png'
import flagEU from '../../Images/star-flag.png'
import flagThai from '../../Images/thailand-flag.png'
import flagCanada from '../../Images/canada-flag.png'

function StrategicImportsSection() {
  const flags = [flagUSA, flagSaudi, flagUK, flagFrance, flagAus, flagSA, flagUAE, flagEU, flagThai, flagCanada];

  return (
    <section className="strategic-imports-section">
      <div className="container strategic-shell">
        <h2 className="strategic-title">Strategic Imports</h2>
        <p className="strategic-subtitle">Securing quality materials worldwide</p>
        
        <div className="strategic-map-container">
          <img src={mapImage} alt="World Map" className="strategic-map" />
        </div>

        <p className="strategic-text">
          We are among the select manufacturers in Jamnagar with a dedicated in-house raw material sourcing system. Our facility directly imports premium grade, E-con (European compliant) brass scrap &amp; other non-ferrous materials from the USA, Europe, and the UK, ensuring consistent quality and reliable production standards.
        </p>
      </div>

      <div className="container spread-shell">
        <h2 className="spread-title">We Spread Around <strong>The World</strong></h2>
        
        <div className="flags-container">
          {flags.map((flag, idx) => (
            <img key={idx} src={flag} alt="Country Flag" className="country-flag" />
          ))}
        </div>

        <p className="spread-text">
          We have successfully carved for ourselves a solid place in the global marketplace and have explored various markets for our products. Backed by an in-depth understanding of the industry and its dynamics, we aim to be a supply chain partner to businesses worldwide across a wide cross-section of domains, buyers across the globe. We are ranked as a supporting Manufacturer, Exporter and Supplier in the international market delivering premium quality brass Precision Turned Components &amp; Accessories. We export Extrusion Brass Alloys, Rods, Hollow Rods &amp; Sections, Profile &amp; Sections as per International Standards like IS, BS, DIN, JIS, ASTM, GOST &amp; Other International Standards. Our targeted prospects are from the root levels, becoming synonymous with Precision globally &amp; Accessories. We export to the developed markets of the Middle East, South East Asia, Australia, U.K., U.S.A., South Africa, Europe etc.
        </p>
      </div>
    </section>
  )
}

export default StrategicImportsSection

import "./InternationalReachSection.css";
import worldMap from '../../Images/world-map.png'

function InternationalReachSection() {
  return (
    <section className="international-reach-section">
      <div className="container reach-shell">
        <div className="reach-header">
          <div>
            <p className="reach-kicker mb-0">CONNECTING GLOBAL MARKETS</p>
            <h2 className="reach-title mb-0">
              INTERNATIONAL REACH.
            </h2>
          </div>
        </div>

        <div className="reach-map-container">
          <img
            src={worldMap}
            alt="International Reach Map"
            className="reach-map-image"
          />
        </div>
      </div>
    </section>
  );
}

export default InternationalReachSection;

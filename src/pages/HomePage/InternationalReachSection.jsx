import "./InternationalReachSection.css";
import dummyMapImage from "../../assets/hero.png";

function InternationalReachSection() {
  return (
    <section className="international-reach-section">
      <div className="container reach-shell">
        <div className="reach-header">
          <div>
            <p className="reach-kicker mb-0">CONNECTING GLOBAL MARKETS</p>
            <h2 className="reach-title mb-0">
              INTERNATIONAL
              <span className="d-block">REACH.</span>
            </h2>
          </div>
          <p className="reach-intro mb-0">
            Delivering quality products worldwide, expanding our presence across
            international markets with reliable service, consistent performance,
            and long-term partnerships.
          </p>
        </div>

        <div className="reach-map-container">
          <img
            src={dummyMapImage}
            alt="International Reach Map"
            className="reach-map-image"
          />
        </div>
      </div>
    </section>
  );
}

export default InternationalReachSection;

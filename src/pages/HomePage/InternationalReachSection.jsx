import "./InternationalReachSection.css";
import dummyMapImage from "../../assets/hero.png";

const reachLinksData = [
  { text: "Get Company Brochure", href: "#" },
  { text: "info@ishitabrass.com", href: "mailto:info@ishitabrass.com" },
  { text: "Explore Material Grades", href: "#" },
];

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

        <div className="reach-cta-block">
          <div className="reach-contact-card">
            <div className="reach-contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L3 6v6.2c0 5.5 3.8 10.7 9 11.8 5.2-1.1 9-6.3 9-11.8V6l-9-4zm0 2.2l7 3.1v4.9c0 4.3-2.9 8.4-7 9.4-4.1-1-7-5.1-7-9.4V7.3l7-3.1zm-1 4.8h2v8h-2v-8zM9 9h2v8H9V9zm4 0h2v8h-2V9z"
                  fill="#fca311"
                />
              </svg>
            </div>

            <div className="reach-contact-content">
              <h3 className="reach-contact-title mb-0">
                We respect your privacy feel
                <br />
                free to contact us
              </h3>
              <p className="reach-contact-text mb-0">
                If you require any product developed exclusively, not found in
                our selection, or if you want any product to be modified as per
                your Specifications &amp; Finish, we have a team of work force
                capable to fulfill your requirement.
              </p>
              <div>
                <button className="reach-btn">
                  Contact now <span>&#8594;</span>
                </button>
              </div>
            </div>
          </div>

          <div className="reach-links-grid">
            {reachLinksData.map((link, index) => (
              <a key={index} href={link.href} className="reach-link-card">
                <span className="reach-link-text">{link.text}</span>
                <span className="reach-link-arrow">&#8599;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternationalReachSection;

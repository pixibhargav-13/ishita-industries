import './Navbar.css'

const navLinks = ['Home', 'About', 'Product', 'Quality']

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container nav-shell">
          <a className="navbar-brand brand-wrap d-flex align-items-center" href="#">
            <img
              src="https://via.placeholder.com/34x44/F0A928/FFFFFF?text=I"
              alt="Ishita logo"
              className="brand-mark"
            />
            <div className="brand-copy">
              <span className="brand-title">ISHITA</span>
              <span className="brand-subtitle">INDUSTRIES</span>
              <p className="brand-tagline mb-0">Precision Customise Components & Fasteners.</p>
            </div>
          </a>

          <button
            className="navbar-toggler border-0 shadow-none nav-toggle-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon nav-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-lg-between" id="mainNavbar">
            <ul className="navbar-nav mx-auto nav-links-list">
              {navLinks.map((link) => (
                <li className="nav-item" key={link}>
                  <a className="nav-link" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions d-flex align-items-center">
              <button type="button" className="icon-button" aria-label="Change language">
                <span className="icon-globe" aria-hidden="true">
                  ◎
                </span>
              </button>
              <button type="button" className="brochure-btn">
                Brochure
                <span className="brochure-icon" aria-hidden="true">
                  ↓
                </span>
              </button>
              <button type="button" className="menu-btn">
                Menu
                <span className="menu-icon" aria-hidden="true">
                  ≡
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

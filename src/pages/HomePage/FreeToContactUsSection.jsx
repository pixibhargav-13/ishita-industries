import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './FreeToContactUsSection.css'
import contactlogo from '../../Images/homepage-contact-us-logo.png'
import arrow from '../../Images/arrow-vector.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function FreeToContactUsSection() {
  const { t } = useTranslation()
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  const contactLinksData = [
    { text: t('contact_cta.btn_brochure'), href: '#' },
    { text: t('contact_cta.email'),        href: 'mailto:info@ishitabrass.com' },
    { text: t('contact_cta.btn_materials'), href: '#' },
  ]

  return (
    <section className="free-to-contact-us-section">
      <div className="container contactus-shell">
        <div className="contactus-cta-block">
          <div className="contactus-card" ref={(el) => (animRefs.current[0] = el)}>
            <div className="contactus-icon">
              <img src={contactlogo} alt="Contact Logo" />
            </div>
            <div className="contactus-content">
              <h3 className="contactus-title mb-0">
                {t('contact_cta.line1')}
                <br />
                {t('contact_cta.line2')}
              </h3>
              <p className="contactus-text mb-0">{t('contact_cta.desc')}</p>
              <div>
                <Link to="/contact#contact-form-section" className="contactus-btn">
                  {t('contact_cta.btn_contact')}
                  <span className="contactus-btn-arrow">
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6H14M14 6L9 1M14 6L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="contactus-links-grid">
            {contactLinksData.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="contactus-link-card"
                ref={(el) => (animRefs.current[index + 1] = el)}
              >
                <span className="contactus-link-text">{link.text}</span>
                <img src={arrow} alt="" className="contact-arrow-img-rotate" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeToContactUsSection

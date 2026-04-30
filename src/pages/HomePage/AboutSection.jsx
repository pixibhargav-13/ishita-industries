import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './AboutSection.css'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal from '../../hooks/useCurtainReveal'

function AboutSection() {
  const { t } = useTranslation()
  const titleRef = useCurtainReveal({ stagger: 0.06, duration: 0.95 })
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  const highlights = [
    t('home_about.badge1'),
    t('home_about.badge2'),
    t('home_about.badge3'),
    t('home_about.badge4'),
    t('home_about.cta'),
  ]

  return (
    <section className="about-section">
      <div className="container about-shell">
        <div className="about-header" ref={(el) => (animRefs.current[0] = el)}>
          <div className="about-header-main">
            <p className="about-kicker mb-0">{t('home_about.kicker')}</p>
            <h2 className="about-title mb-0" ref={titleRef}>{t('home_about.title')}</h2>
          </div>
        </div>

        <p className="about-body mb-0" ref={(el) => (animRefs.current[1] = el)}>
          {t('home_about.desc')}
        </p>

        <div className="about-highlights" aria-label="Company highlights">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="about-highlight-card"
              ref={(el) => (animRefs.current[2 + index] = el)}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection

import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './AboutHeroSection.css'
import factoryImage  from '../../Images/about-us-hero-section.png'
import chairmanImage from '../../Images/bhavesh.png'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import useCurtainReveal   from '../../hooks/useCurtainReveal'

function AboutHeroSection() {
  const { t } = useTranslation()
  const titleRef = useCurtainReveal({ stagger: 0.065 })
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="about-hero-section">
      <div className="container about-hero-shell">

        <header className="about-hero-top">
          <h1 className="about-hero-title mb-0" ref={titleRef}>
            {t('about_hero.title1')}
            <span className="d-block">{t('about_hero.title2')}</span>
            <span className="about-hero-title-light d-block">{t('about_hero.title3')}</span>
          </h1>
        </header>

        <div className="about-hero-meta" ref={(el) => (animRefs.current[0] = el)}>
          <p className="about-hero-copy mb-0">{t('about_hero.desc')}</p>
          <div className="about-hero-line-block" aria-hidden="true">
            <span className="about-hero-line" />
            <span className="about-hero-est">{t('about_hero.badge')}</span>
          </div>
        </div>

        <div className="about-hero-factory-frame" ref={(el) => (animRefs.current[1] = el)}>
          <img src={factoryImage} alt="Factory interior" className="about-hero-factory-image" />
        </div>

        <div className="about-chairman-intro" ref={(el) => (animRefs.current[2] = el)}>
          <div>
            <p className="about-chairman-kicker mb-0">{t('about_hero.chairman_kicker')}</p>
            <h2 className="about-chairman-title mb-0">{t('about_hero.chairman_title')}</h2>
          </div>
        </div>

        <section className="about-chairman-card" ref={(el) => (animRefs.current[3] = el)}>
          <div className="about-chairman-copy-block">
            <h3 className="about-chairman-card-title mb-0">{t('about_hero.chairman_title')}</h3>
            <p className="about-chairman-card-text mb-0">{t('about_hero.chairman_quote')}</p>
            <p className="about-chairman-card-text about-chairman-card-text-quote mb-0">
              {t('about_hero.chairman_pull')}
            </p>
            <div className="about-chairman-signoff">
              <p className="about-chairman-name mb-0">{t('about_hero.chairman_name')}</p>
              <p className="about-chairman-role mb-0">{t('about_hero.chairman_title_role')}</p>
            </div>
          </div>
          <div className="about-chairman-photo-wrap">
            <img src={chairmanImage} alt="Chairman portrait" className="about-chairman-photo" />
          </div>
        </section>

      </div>
    </section>
  )
}

export default AboutHeroSection

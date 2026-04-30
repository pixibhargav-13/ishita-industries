import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import heroMainImage from '../../Images/homepage-herosection-image.png'
import heroMobileImage from '../../Images/homepage-hero-section-mobile.png'
import videoImage from '../../Images/hero-section-video-image.png'

function HeroSection() {
  const { t } = useTranslation()

  return (
    <div className="hero-scroll-wrapper">
      <section className="hero-section">
        <div className="container hero-shell">
          <div className="row align-items-center g-4 hero-row">
            <div className="col-12 col-xl-6 hero-copy-col">
              <div className="hero-content">
                <p className="hero-kicker mb-0">{t('hero.kicker')}</p>
                <h1 className="hero-title mb-0">
                  {t('hero.title1')}
                  <span className="hero-title-thin d-block">{t('hero.title2')}</span>
                </h1>

                <Link to="/about" className="hero-cta-btn">
                  {t('hero.cta')}
                  <span className="hero-cta-icon" aria-hidden="true">&rarr;</span>
                </Link>

                <div className="hero-story d-flex">
                  <div className="hero-story-thumb-wrap">
                    <img src={videoImage} alt="Manufacturing preview" className="hero-story-thumb" />
                    <span className="hero-play-btn" aria-hidden="true">&#9654;</span>
                  </div>
                  <p className="hero-story-text mb-0">
                    {t('hero.story_title')} {t('hero.story_desc')}
                  </p>
                </div>

                <p className="hero-footnote mb-0">{t('hero.footnote')}</p>
              </div>
            </div>

            <div className="col-12 col-xl-6 hero-media-col">
              <div className="hero-media-wrap">
                <picture>
                  <source srcSet={heroMainImage} media="(min-width: 1200px)" />
                  <img src={heroMobileImage} alt="Precision brass components" className="hero-media" />
                </picture>
              </div>
              <p className="hero-caption mb-0">{t('hero.caption')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection

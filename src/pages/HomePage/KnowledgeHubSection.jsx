import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './KnowledgeHubSection.css'
import blogImg from '../../Images/blog_image.png'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const latestPosts = [
  {
    id: 1,
    title: "Top Countries Importing Brass Components: India's Role in the Global Supply Chain",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  },
  {
    id: 2,
    title: "The Best Brass Anchors for Construction and Marine Use in Algeria",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  },
  {
    id: 3,
    title: "The Real Impact of U.S. Tariffs on the Brass Industry in 2025",
    author: "Ishita Industries",
    date: "27 April 2026",
    image: blogImg
  }
]

function KnowledgeHubSection() {
  const { t } = useTranslation()
  const animRefs = useRef([])
  useScrollAnimation(animRefs)

  return (
    <section className="knowledge-hub-section">
      <div className="container hub-shell">
        <div className="hub-header text-center" ref={(el) => (animRefs.current[0] = el)}>
          <div>
            <p className="hub-kicker mb-0">{t('knowledge_hub.kicker')}</p>
            <h2 className="hub-title mb-0">{t('knowledge_hub.title')}</h2>
          </div>
        </div>

        <div className="hub-grid">
          {latestPosts.map((post, index) => (
            <div
              key={post.id}
              className="hub-card"
              ref={(el) => (animRefs.current[1 + index] = el)}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="hub-card-image-wrap">
                <img src={post.image} alt={post.title} className="hub-card-img" />
              </div>
              <div className="hub-card-content">
                <div className="hub-card-meta">
                  <span className="hub-author">{t('knowledge_hub.by')} {post.author}</span>
                  <span className="hub-date">{post.date}</span>
                </div>
                <h3 className="hub-card-title">{post.title}</h3>
                <Link to="/blog" className="hub-read-more">{t('knowledge_hub.read_more')}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KnowledgeHubSection

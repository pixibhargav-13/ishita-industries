import './BlogGridSection.css'
import blogImg from '../../Images/blog_image.png'

const blogPosts = [
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

function BlogGridSection() {
  return (
    <section className="blog-grid-section">
      <div className="container blog-grid-shell">
        <div className="blog-posts-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-card-image-wrap">
                <img src={post.image} alt={post.title} className="blog-card-img" />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-author">By {post.author}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <a href="#" className="blog-read-more">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogGridSection

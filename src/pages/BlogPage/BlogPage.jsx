import NavbarRouter from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import BlogHeroSection from './BlogHeroSection'
import BlogGridSection from './BlogGridSection'

function BlogPage() {
  return (
    <div className="blog-page">
      <NavbarRouter />
      <BlogHeroSection />
      <BlogGridSection />
      <Footer />
    </div>
  )
}

export default BlogPage

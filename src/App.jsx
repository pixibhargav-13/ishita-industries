import { Route, Routes } from 'react-router-dom'
import About       from './pages/AboutPage/About'
import Homepage    from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage'
import QualityPage from './pages/QualityPage/QualityPage'
import ImportExportPage from './pages/ImportExportPage/ImportExportPage'
import ContactPage from './pages/ContactPage/ContactPage'
import EnvironmentPage from './pages/EnvironmentPage/EnvironmentPage'
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar'

function App() {
  return (
    <>
      {/* Thin progress bar fixed at top — visible on all pages */}
      <ScrollProgressBar />

      <Routes>
        <Route path="/"      element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/electric-pin" element={<ProductDetailsPage />} />
        <Route path="/quality" element={<QualityPage />} />
        <Route path="/environment" element={<EnvironmentPage />} />
        <Route path="/import-export" element={<ImportExportPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App

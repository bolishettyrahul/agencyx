import VideoBackground from './components/VideoBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Specs from './components/Specs'
import Access from './components/Access'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <>
      <svg className="noise-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <div className="struct-grid"></div>

      {/* Fixed video background  persists across entire page */}
      <VideoBackground />

      {/* Cursor glow effect (desktop only) */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Page content  stacked above the video */}
      <main>
        <Hero />
        <Overview />
        <Features />
        <Pricing />
        <Specs />
        <Access />
      </main>

      <Footer />
    </>
  )
}

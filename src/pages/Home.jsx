import { useEffect } from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import FeaturedLawFirms from '../components/FeaturedLawFirms'
import ToolsPreview from '../components/ToolsPreview'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

function Home() {
  useEffect(() => {
    document.title = 'AreYouFiler - Tech Dashboard for Law Firms in Pakistan'
  }, [])

  return (
    <div>
      <Hero />
      <Features />
      <ToolsPreview />
      <FeaturedLawFirms />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home